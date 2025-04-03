
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

type Translations = {
  [key: string]: {
    it: string;
    en: string;
  };
};

// Define all translations used in the app
export const translations: Translations = {
  // Navbar
  chiSiamo: {
    it: 'Chi Siamo',
    en: 'About Us',
  },
  benefici: {
    it: 'Benefici',
    en: 'Benefits',
  },
  membership: {
    it: 'Membership',
    en: 'Membership',
  },
  diventaSocio: {
    it: 'Diventa Socio',
    en: 'Become a Member',
  },
  
  // Hero section
  soluzioniSenzaConfini: {
    it: 'Soluzioni senza confini per la tua crescita imprenditoriale',
    en: 'Borderless solutions for your business growth',
  },
  descrizioneHero: {
    it: 'Duckily trasforma le risorse umane e imprenditoriali in opportunità concrete di sviluppo attraverso networking, formazione e supporto proattivo.',
    en: 'Duckily transforms human and entrepreneurial resources into concrete development opportunities through networking, training, and proactive support.',
  },
  diventaSocioOggi: {
    it: 'Diventa Socio Oggi',
    en: 'Become a Member Today',
  },
  
  // Partners section
  nostriAssociati: {
    it: 'I Nostri Associati',
    en: 'Our Partners',
  },
  networkEccellenze: {
    it: 'Un network di eccellenze che collaborano per il successo comune',
    en: 'A network of excellence collaborating for mutual success',
  },
  
  // Membership section
  tipologiaMembri: {
    it: 'Tipologia di Membri',
    en: 'Member Types',
  },
  descrizioneImprenditori: {
    it: 'Imprenditori, professionisti, lavoratori autonomi e organizzazioni che condividono la visione di un futuro collaborativo e innovativo.',
    en: 'Entrepreneurs, professionals, freelancers, and organizations sharing a vision of a collaborative and innovative future.',
  },
  diventaMembroDuckily: {
    it: 'Diventa Membro Duckily',
    en: 'Become a Duckily Member',
  },
  accessoEventi: {
    it: 'Accesso a tutti gli eventi esclusivi di networking',
    en: 'Access to all exclusive networking events',
  },
  opportunitaCollaborazione: {
    it: 'Opportunità di collaborazione con altri membri',
    en: 'Collaboration opportunities with other members',
  },
  visibilitaBrand: {
    it: 'Visibilità del tuo brand attraverso i nostri canali',
    en: 'Visibility for your brand through our channels',
  },
  chiediEntrare: {
    it: 'Chiedi di Entrare nel nostro Network',
    en: 'Ask to Join our Network',
  },
  
  // Footer
  contatti: {
    it: 'Contatti',
    en: 'Contacts',
  },
  linksRapidi: {
    it: 'Links Rapidi',
    en: 'Quick Links',
  },
  tuttiDirittiRiservati: {
    it: 'Tutti i diritti riservati',
    en: 'All rights reserved',
  },
  
  // About section
  chiSiamoTitle: {
    it: 'Chi Siamo',
    en: 'About Us',
  },
  descrizioneChiSiamo: {
    it: 'Un\'associazione indipendente, apartitica e senza fini di lucro con sede a Roma, che crea connessioni significative tra imprenditori, professionisti e organizzazioni.',
    en: 'An independent, non-partisan, non-profit association based in Rome that creates meaningful connections between entrepreneurs, professionals, and organizations.',
  },
  citazioneDuckily: {
    it: '"Duckily unisce il dinamismo dell\'innovazione alla solidità dell\'esperienza, creando un ecosistema dove idee e opportunità fluiscono naturalmente."',
    en: '"Duckily combines the dynamism of innovation with the solidity of experience, creating an ecosystem where ideas and opportunities flow naturally."',
  },
  
  // Benefits section
  beneficiTitle: {
    it: 'I Nostri Benefici',
    en: 'Our Benefits',
  },
  beneficiDesc: {
    it: 'Entra nel network Duckily e scopri tutti i vantaggi dedicati ai nostri soci',
    en: 'Join the Duckily network and discover all the benefits dedicated to our members',
  },
  networkingStrategico: {
    it: 'Networking Strategico',
    en: 'Strategic Networking',
  },
  networkingDesc: {
    it: 'Crea connessioni significative con imprenditori e professionisti che condividono i tuoi obiettivi.',
    en: 'Create meaningful connections with entrepreneurs and professionals who share your goals.',
  },
  supportoPersonalizzato: {
    it: 'Supporto Personalizzato',
    en: 'Personalized Support',
  },
  supportoDesc: {
    it: 'Ricevi assistenza organizzativa su misura per le specifiche esigenze della tua attività.',
    en: 'Receive tailored organizational assistance for the specific needs of your business.',
  },
  rappresentanzaIstituzionale: {
    it: 'Rappresentanza Istituzionale',
    en: 'Institutional Representation',
  },
  rappresentanzaDesc: {
    it: 'Beneficia della nostra presenza presso istituzioni pubbliche e private per far sentire la tua voce.',
    en: 'Benefit from our presence at public and private institutions to make your voice heard.',
  },
  iniziativeCulturali: {
    it: 'Iniziative Culturali e Sociali',
    en: 'Cultural and Social Initiatives',
  },
  iniziativeDesc: {
    it: 'Partecipa a eventi esclusivi che combinano networking, cultura e responsabilità sociale.',
    en: 'Participate in exclusive events that combine networking, culture, and social responsibility.',
  },
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
