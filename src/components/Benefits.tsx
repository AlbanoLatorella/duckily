
import React from 'react';
import { Check, Globe, Users, Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="benefit-card">
      <div className="flex items-start">
        <div className="mr-4 text-primary1">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: <Users size={24} />,
      title: t('networkingStrategico'),
      description: t('networkingDesc')
    },
    {
      icon: <Briefcase size={24} />,
      title: t('supportoPersonalizzato'),
      description: t('supportoDesc')
    },
    {
      icon: <Globe size={24} />,
      title: t('rappresentanzaIstituzionale'),
      description: t('rappresentanzaDesc')
    },
    {
      icon: <Calendar size={24} />,
      title: t('iniziativeCulturali'),
      description: t('iniziativeDesc')
    }
  ];

  return (
    <section id="benefici" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">{t('beneficiTitle')}</h2>
          <p className="section-subtitle">
            {t('beneficiDesc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
