
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/8e91d731-0200-43dc-8b1e-9d63f6d01607.png" 
            alt="Duckily Logo" 
            className="h-12 md:h-16"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#chi-siamo" className="text-gray-800 hover:text-duck-feet font-medium transition-colors">Chi Siamo</a>
          <a href="#benefici" className="text-gray-800 hover:text-duck-feet font-medium transition-colors">Benefici</a>
          <a href="#membership" className="text-gray-800 hover:text-duck-feet font-medium transition-colors">Membership</a>
          <Button className="bg-duck-feet hover:bg-duck-feetDark text-white font-semibold">Diventa Socio</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#chi-siamo" 
              className="text-gray-800 hover:text-duck-feet font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </a>
            <a 
              href="#benefici" 
              className="text-gray-800 hover:text-duck-feet font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefici
            </a>
            <a 
              href="#membership" 
              className="text-gray-800 hover:text-duck-feet font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </a>
            <Button className="bg-duck-feet hover:bg-duck-feetDark text-white font-semibold w-full">
              Diventa Socio
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
