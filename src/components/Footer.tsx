
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/8e91d731-0200-43dc-8b1e-9d63f6d01607.png" 
              alt="Duckily Logo" 
              className="h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Duckily: Seamless Solutions</h3>
            <p className="text-gray-400 max-w-md">
              Duckily unisce il dinamismo dell'innovazione alla solidità dell'esperienza, creando un ecosistema dove idee e opportunità fluiscono naturalmente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contatti</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2 text-primary1" />
                  <span>Roma, Italia</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-primary1" />
                  <span>info@duckily.com</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-primary1" />
                  <span>+39 06 12345678</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rapidi</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#chi-siamo" className="hover:text-primary1 transition-colors">Chi Siamo</a>
                </li>
                <li>
                  <a href="#benefici" className="hover:text-primary1 transition-colors">Benefici</a>
                </li>
                <li>
                  <a href="#membership" className="hover:text-primary1 transition-colors">Membership</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary1 transition-colors">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Duckily. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
