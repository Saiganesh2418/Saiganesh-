import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import CoreValues from './components/CoreValues';
import Team from './components/Team';
import Forms from './components/Forms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Services />
        <Impact />
        <CoreValues />
        <Team />
        <Forms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;