import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <section id="story" ref={containerRef} className="relative w-full py-32 bg-black overflow-hidden px-6 md:px-20">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div ref={textRef}>
          <h2 className="text-accent font-mono uppercase tracking-[0.2em] text-sm mb-6">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
            The A24 of Gaming.
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Antihero Studios is a new kind of gaming studio, founded in 2024 by a small team of former Clash Royale, Brawl Stars, and Candy Crush developers, eager to create something different.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Our mission is to create games worth sharing. While most mobile gaming companies lure players in their games with scammy ads, Antihero Studios is focused on creating an inspiring, fresh gaming brand for today's players.
          </p>
          <p className="text-lg text-white font-medium leading-relaxed">
             Game studios could be some of the coolest brands out there — yet most of them suck. We're here to fix that.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-gray-800 rounded-lg overflow-hidden relative">
             <img 
               src="https://picsum.photos/800/1000?grayscale" 
               alt="Antihero Team" 
               className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
             <div className="absolute bottom-6 left-6">
               <p className="text-white font-mono text-sm">Antihero Studios Team</p>
               <p className="text-gray-500 font-mono text-xs">Casual Photoshoot, 2024</p>
             </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/50 hidden md:block"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/50 hidden md:block"></div>
        </div>
      </div>

    </section>
  );
};