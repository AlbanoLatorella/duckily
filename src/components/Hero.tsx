
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat leading-tight animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              {t('soluzioniSenzaConfini')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              {t('descrizioneHero')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <Button className="bg-primary1 hover:bg-primary1-dark text-white px-8 py-6 text-lg font-semibold">
                {t('diventaSocioOggi')}
              </Button>
              
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <img src="/lovable-uploads/8e91d731-0200-43dc-8b1e-9d63f6d01607.png" alt="Duckily Logo" className="w-3/4 md:w-4/5 max-w-md" />
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
