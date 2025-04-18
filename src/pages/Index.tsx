
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Partners from '@/components/Partners';
import Membership from '@/components/Membership';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Partners />
      <Membership />
      <Footer />
    </div>
  );
};

export default Index;
