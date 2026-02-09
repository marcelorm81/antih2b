import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a future date (e.g., 2 weeks from now) for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-8 mt-12 mb-8">
      {timeBlocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-display font-bold text-white">
            {block.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs font-mono text-gray-500 mt-2 tracking-widest">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from([textRef1.current, textRef2.current], {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.5
    })
    .from(textRef3.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6");

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100, 
      opacity: 0.2
    });

  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 pt-20 text-center"
    >
      <div className="overflow-hidden">
        <h1 ref={textRef1} className="text-[10vw] md:text-[8vw] leading-[0.9] font-display font-bold text-white tracking-tighter">
          GAMES WORTH
        </h1>
      </div>
      <div className="overflow-hidden">
        <h1 ref={textRef2} className="text-[10vw] md:text-[8vw] leading-[0.9] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 tracking-tighter">
          SHARING.
        </h1>
      </div>
      
      <div className="overflow-hidden mt-8 max-w-2xl mx-auto">
         <p ref={textRef3} className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
           To us, that means crafting high-quality games you'll want to play with friends every day.
         </p>
      </div>

      <div ref={ctaRef} className="flex flex-col items-center mt-8">
        <div className="mb-4">
           <h3 className="text-accent font-mono text-sm tracking-[0.2em] uppercase">Become a Playtester</h3>
        </div>
        
        <Countdown />
        
        <button className="group relative px-8 py-4 bg-white text-black font-display font-bold text-lg uppercase tracking-wider overflow-hidden">
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Join Playtest Now</span>
          <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
        </button>

        <p className="mt-4 text-xs text-gray-600 font-mono">
           Don't have a code yet? Join our <a href="#" className="underline hover:text-white">Discord</a>.
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-gray-600" size={24} />
      </div>
    </section>
  );
};