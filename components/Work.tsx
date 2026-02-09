import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, Zap, Skull } from 'lucide-react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; index: number }> = ({ title, desc, icon, index }) => {
  return (
    <div className="border border-gray-800 bg-gray-900/50 p-8 flex flex-col items-start gap-4 hover:border-accent/50 transition-colors duration-300 group">
      <div className="p-3 bg-black rounded-lg text-gray-400 group-hover:text-accent transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold uppercase text-white leading-none">
        {title.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </h3>
      <p className="text-sm text-gray-400 font-mono leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export const Work: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    gsap.from(descRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section id="games" ref={sectionRef} className="relative w-full px-6 md:px-20 py-32 bg-anti-black border-t border-gray-900">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start mb-24">
        <div className="md:w-1/3">
           <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase mb-4 block">Our Games</span>
           <h2 ref={titleRef} className="text-6xl md:text-8xl font-display font-bold text-white mb-6">
             MISFITZ
           </h2>
           <div className="w-full h-[2px] bg-gradient-to-r from-accent to-transparent"></div>
        </div>
        <div className="md:w-2/3">
          <p ref={descRef} className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-8">
            Zero never shows its face. It doesn't need to. From the shadows, it over-optimizes the world, scrubbing humans out and locking culture away as Relics.
          </p>
          <p className="text-gray-500 font-mono leading-relaxed max-w-2xl">
            You, as a MISFITZ are the rebellion: a neon-stained outsider breaking into Zero's machine-run streets to steal culture back. Who can you trust when the stakes are high? Your best strategy might be to build friendships, or break them.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          index={0}
          icon={<Shield size={32} />}
          title={"Build Friendships,\nor Break Them."}
          desc="In MISFITZ, you control the matchmaking. Team up on the go with other players and keep each other safe until extraction, or leave the team at any moments to betray them."
        />
        <FeatureCard 
          index={1}
          icon={<Zap size={32} />}
          title={"Collect Gears\nand Relics"}
          desc="Decide how to gather your loot: dive into intense PvP battles or keep your distance and focus on PvE. Gears make you stronger, and Relics drive your progress."
        />
        <FeatureCard 
          index={2}
          icon={<Skull size={32} />}
          title={"Get the F*ck\nOut Alive!"}
          desc="It's simple: either you make it out alive or you don't - only those who extract get to keep their loot. So be careful who you trust out there."
        />
      </div>

      <div className="mt-20 w-full h-[50vh] bg-gray-900 rounded-xl overflow-hidden relative group">
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Misfitz Gameplay" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 scale-100 group-hover:scale-105 transition-transform"
        />
        <div className="absolute bottom-8 left-8">
           <span className="bg-accent text-black px-3 py-1 text-xs font-bold uppercase tracking-wider">Pre-Alpha</span>
        </div>
      </div>
    </section>
  );
};