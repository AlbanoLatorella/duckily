
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">{t('chiSiamoTitle')}</h2>
          <p className="section-subtitle mb-8">
            {t('descrizioneChiSiamo')}
          </p>
          <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl font-light italic text-gray-700">
              {t('citazioneDuckily')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
