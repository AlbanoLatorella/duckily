
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
