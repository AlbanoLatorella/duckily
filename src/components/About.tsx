
import React from 'react';

const About = () => {
  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Chi Siamo</h2>
          <p className="section-subtitle mb-8">
            Un'associazione indipendente, apartitica e senza fini di lucro con sede a Roma, che crea connessioni significative tra imprenditori, professionisti e organizzazioni.
          </p>
          <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl font-light italic text-gray-700">
              "Duckily unisce il dinamismo dell'innovazione alla solidità dell'esperienza, creando un ecosistema dove idee e opportunità fluiscono naturalmente."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
