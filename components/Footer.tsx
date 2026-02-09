import React from 'react';

export const Footer: React.FC = () => {
  const links = [
    { name: 'Discord', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'TikTok', href: '#' },
    { name: 'Instagram', href: '#' },
  ];

  const subLinks = ['Games', 'Our Story', 'Collection', 'Events', 'Creators', 'News', 'Contact', 'Careers'];
  const legalLinks = ['Terms of Service', 'Privacy Policy', 'Cookie Policy'];

  return (
    <footer id="contact" className="w-full bg-anti-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="px-6 md:px-20 flex flex-col gap-20">
        
        {/* Main CTA */}
        <div className="flex flex-col items-start">
          <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter hover:text-outline transition-all cursor-pointer">
            JOIN THE
          </h2>
          <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-outline hover:text-white transition-all cursor-pointer ml-10 md:ml-20">
            CULT.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-gray-800 pt-10">
           
           <div className="col-span-1">
             <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Socials</h4>
             <ul className="space-y-2">
               {links.map(l => (
                 <li key={l.name}><a href={l.href} className="text-lg font-display font-bold hover:text-accent transition-colors">{l.name}</a></li>
               ))}
             </ul>
           </div>

           <div className="col-span-1">
             <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Sitemap</h4>
             <ul className="space-y-2">
               {subLinks.map(l => (
                 <li key={l}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a></li>
               ))}
             </ul>
           </div>

           <div className="col-span-2 md:col-span-2 flex flex-col justify-end">
              <div className="flex flex-wrap gap-6 mb-4">
                {legalLinks.map(l => (
                  <a key={l} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">{l}</a>
                ))}
              </div>
              <p className="text-xs text-gray-700 font-mono">
                © {new Date().getFullYear()} ANTIHERO STUDIOS. ALL RIGHTS RESERVED.
              </p>
           </div>
        </div>
      </div>
      
      <style>{`
        .text-outline {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
        .hover\\:text-outline:hover {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      `}</style>
    </footer>
  );
};