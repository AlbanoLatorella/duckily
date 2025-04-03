
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Membership = () => {
  const { t } = useLanguage();
  
  return (
    <section id="membership" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">{t('tipologiaMembri')}</h2>
          <p className="section-subtitle">
            {t('descrizioneImprenditori')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="w-24 h-24 flex items-center justify-center bg-[#ee7161] rounded-full mb-6 md:mb-0 md:mr-8">
                <img alt="Duckily Logo" className="w-16 h-16 object-contain" src="/lovable-uploads/2064e6ee-c340-4534-9145-e804b4ca4235.png" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">{t('diventaMembroDuckily')}</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="text-[#ee7161] mr-3 mt-1 flex-shrink-0" />
                <p>{t('accessoEventi')}</p>
              </div>
              
              <div className="flex items-start">
                <Check className="text-[#ee7161] mr-3 mt-1 flex-shrink-0" />
                <p>{t('opportunitaCollaborazione')}</p>
              </div>
              
              <div className="flex items-start">
                <Check className="text-[#ee7161] mr-3 mt-1 flex-shrink-0" />
                <p>{t('visibilitaBrand')}</p>
              </div>
            </div>
            
            <a 
              href="mailto:info@duckily.it?subject=Informazioni%20network%20duckily" 
              className="block w-full bg-[#ee7161] hover:bg-[#d65e4f] text-white font-semibold py-4 rounded-lg transition-colors text-lg text-center"
            >
              {t('chiediEntrare')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
