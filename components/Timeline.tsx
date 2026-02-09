import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
  current?: boolean;
}

const events: TimelineEvent[] = [
  { date: 'Early 2024', title: 'Leaving our comfy jobs', desc: 'Our journey began when key team members decided to leave Supercell to pursue a new vision.' },
  { date: 'Early 2024', title: 'Founding of Antihero', desc: 'Antihero Studios was officially founded with a mission to create Games Worth Sharing.' },
  { date: 'Mid 2024', title: 'Assembling the team', desc: 'Brought together talent from Clash Royale, Brawl Stars, and Candy Crush.' },
  { date: 'Mid 2024', title: 'Prototyping Misfitz', desc: 'Rapid prototyping and internal playtesting to refine core gameplay.' },
  { date: 'End 2024', title: 'First pre-alpha', desc: 'Our first external playtest allowing select players to experience the game.' },
  { date: 'Mid 2025', title: 'Second pre-alpha', desc: 'Significant improvements and expanded testing to a larger group.' },
  { date: 'End 2025', title: 'Third pre-alpha', desc: 'Implementing and testing the first version of our meta.' },
  { date: 'We\'re here', title: 'Fourth pre-alpha', desc: 'Gathering community feedback and refining the gameplay experience.', current: true },
  { date: 'Mid 2026', title: 'Fifth pre-alpha', desc: 'Continued testing and iteration based on community feedback.' },
  { date: 'Mid 2026', title: 'Alpha Release', desc: 'Core features implemented and balanced, ready for extensive testing.' },
];

export const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Horizontal Scroll Animation
    const totalWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    gsap.to(scrollContainer, {
      x: () => -(totalWidth - viewportWidth + 100), // Scroll to end with some padding
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

  }, []);

  return (
    <section id="events" ref={sectionRef} className="relative w-full h-screen bg-anti-gray overflow-hidden flex flex-col justify-center">
      <div className="absolute top-10 left-6 md:left-20 z-10">
        <h2 className="text-accent font-mono uppercase tracking-[0.2em] text-sm">Roadmap & Events</h2>
      </div>

      <div ref={scrollContainerRef} className="flex px-6 md:px-20 gap-12 md:gap-24 items-center w-max">
        {events.map((event, i) => (
          <div 
            key={i} 
            className={`relative flex flex-col gap-4 w-[300px] md:w-[400px] p-8 border-l ${event.current ? 'border-accent bg-accent/5' : 'border-gray-700'} transition-colors`}
          >
            {event.current && (
              <span className="absolute -top-3 -left-[5px] w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></span>
            )}
            <span className={`font-mono text-sm tracking-widest ${event.current ? 'text-accent' : 'text-gray-500'}`}>
              {event.date}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              {event.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {event.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 right-6 md:right-20 flex gap-2 items-center text-gray-600">
         <span className="text-xs font-mono uppercase tracking-widest">Scroll to Navigate</span>
         <div className="w-12 h-[1px] bg-gray-600"></div>
      </div>
    </section>
  );
};