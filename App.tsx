import React, { useEffect, useRef } from 'react';
import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work'; // Games
import { About } from './components/About'; // Story
import { Collection } from './components/Collection'; // Collection
import { Timeline } from './components/Timeline'; // Events/Roadmap
import { Creators } from './components/Creators'; // Creators
import { Footer } from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Global fade in
    gsap.to(mainRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    });
  }, []);

  return (
    <div ref={mainRef} className="relative w-full min-h-screen opacity-0 bg-anti-black">
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Scene />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col w-full">
          <Hero />
          <Work />
          <About />
          <Collection />
          <Timeline />
          <Creators />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;