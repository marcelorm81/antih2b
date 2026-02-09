import React from 'react';
import { ArrowUpRight, MessageSquare, Video, Gamepad2 } from 'lucide-react';

const CreatorCard: React.FC<{ title: string; icon: React.ReactNode; link: string }> = ({ title, icon, link }) => (
  <a href={link} className="flex items-center justify-between p-8 border border-gray-800 bg-gray-900/30 hover:bg-gray-800 transition-colors group">
    <div className="flex items-center gap-6">
      <div className="p-4 bg-black rounded-full text-white group-hover:text-accent transition-colors">
        {icon}
      </div>
      <span className="text-2xl font-display font-bold text-white">{title}</span>
    </div>
    <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
  </a>
);

export const Creators: React.FC = () => {
  return (
    <section id="creators" className="w-full py-32 px-6 md:px-20 bg-anti-black">
       <div className="flex flex-col md:flex-row gap-20 items-end mb-20">
         <div className="md:w-1/2">
            <h2 className="text-accent font-mono uppercase tracking-[0.2em] text-sm mb-4">Community</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold text-white leading-none">
              SHAPE<br />THE GAME
            </h3>
         </div>
         <div className="md:w-1/2">
            <p className="text-xl text-gray-400 font-light">
              We are building MISFITZ in public. Join our discord, create content, and get exclusive access to assets and developer updates.
            </p>
         </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <CreatorCard title="Join Discord" icon={<MessageSquare size={24} />} link="#" />
         <CreatorCard title="Watch Devlogs" icon={<Video size={24} />} link="#" />
         <CreatorCard title="Download Press Kit" icon={<Gamepad2 size={24} />} link="#" />
         <CreatorCard title="Creator Program" icon={<ArrowUpRight size={24} />} link="#" />
       </div>
    </section>
  );
};