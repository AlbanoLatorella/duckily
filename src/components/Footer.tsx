
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <img alt="Duckily Logo" className="h-16 mb-4" src="/lovable-uploads/51644131-b2ef-4a4d-abee-6d73f5b6364d.png" />
            <h3 className="text-xl font-semibold mb-2">Duckily: Seamless Solutions</h3>
            <p className="text-gray-400 max-w-md">
              Duckily unisce il dinamismo dell'innovazione alla solidità dell'esperienza, creando un ecosistema dove idee e opportunità fluiscono naturalmente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('contatti')}</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2 text-[#ee7161]" />
                  <span>Roma, Italia</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-[#ee7161]" />
                  <span>info@duckily.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('linksRapidi')}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#chi-siamo" className="hover:text-[#ee7161] transition-colors">{t('chiSiamo')}</a>
                </li>
                <li>
                  <a href="#benefici" className="hover:text-[#ee7161] transition-colors">{t('benefici')}</a>
                </li>
                <li>
                  <a href="#membership" className="hover:text-[#ee7161] transition-colors">{t('membership')}</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#ee7161] transition-colors">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Duckily. {t('tuttiDirittiRiservati')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
