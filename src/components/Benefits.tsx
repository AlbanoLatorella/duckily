
import React from 'react';
import { Check, Globe, Users, Briefcase, Calendar } from 'lucide-react';

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
  const benefits = [
    {
      icon: <Users size={24} />,
      title: "Networking Strategico",
      description: "Crea connessioni significative con imprenditori e professionisti che condividono i tuoi obiettivi."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Supporto Personalizzato",
      description: "Ricevi assistenza organizzativa su misura per le specifiche esigenze della tua attività."
    },
    {
      icon: <Globe size={24} />,
      title: "Rappresentanza Istituzionale",
      description: "Beneficia della nostra presenza presso istituzioni pubbliche e private per far sentire la tua voce."
    },
    {
      icon: <Calendar size={24} />,
      title: "Iniziative Culturali e Sociali",
      description: "Partecipa a eventi esclusivi che combinano networking, cultura e responsabilità sociale."
    }
  ];

  return (
    <section id="benefici" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">I Nostri Benefici</h2>
          <p className="section-subtitle">
            Entra nel network Duckily e scopri tutti i vantaggi dedicati ai nostri soci
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
