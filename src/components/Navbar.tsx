
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Flag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

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
          <a href="#chi-siamo" className="text-gray-800 hover:text-[#ee7161] font-medium transition-colors">{t('chiSiamo')}</a>
          <a href="#benefici" className="text-gray-800 hover:text-[#ee7161] font-medium transition-colors">{t('benefici')}</a>
          <a href="#membership" className="text-gray-800 hover:text-[#ee7161] font-medium transition-colors">{t('membership')}</a>
          <a 
            href="mailto:info@duckily.it?subject=Informazioni%20network%20duckily" 
            className="bg-[#ee7161] hover:bg-[#d65e4f] text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            {t('diventaSocio')}
          </a>
          <button 
            onClick={toggleLanguage} 
            className="flex items-center text-gray-800 hover:text-[#ee7161] transition-colors ml-2"
            aria-label={`Switch to ${language === 'it' ? 'English' : 'Italian'}`}
          >
            <Flag size={20} className="mr-1" />
            <span className="uppercase font-medium">{language === 'it' ? 'EN' : 'IT'}</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleLanguage} 
            className="flex items-center text-gray-800 hover:text-[#ee7161] transition-colors mr-4"
            aria-label={`Switch to ${language === 'it' ? 'English' : 'Italian'}`}
          >
            <Flag size={20} />
          </button>
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
              className="text-gray-800 hover:text-[#ee7161] font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('chiSiamo')}
            </a>
            <a 
              href="#benefici" 
              className="text-gray-800 hover:text-[#ee7161] font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('benefici')}
            </a>
            <a 
              href="#membership" 
              className="text-gray-800 hover:text-[#ee7161] font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('membership')}
            </a>
            <a 
              href="mailto:info@duckily.it?subject=Informazioni%20network%20duckily" 
              className="bg-[#ee7161] hover:bg-[#d65e4f] text-white font-semibold py-2 px-4 rounded transition-colors text-center"
            >
              {t('diventaSocio')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
