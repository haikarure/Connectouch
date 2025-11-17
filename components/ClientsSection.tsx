import React from 'react';
import { motion } from 'framer-motion';
import { clients } from '../constants';

const InfiniteScrollCards: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse = false }) => {
  const allItems = [...items, ...items];
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] group">
      <ul 
        className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none group-hover:[animation-play-state:paused] ${reverse ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'}`}
        >
        {allItems.map((item, index) => (
          <li key={index} className="text-2xl font-semibold text-text-secondary/50 whitespace-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ClientsSection: React.FC = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-text-secondary">Trusted by Industry Leaders</h3>
      <InfiniteScrollCards items={clients} />
      <InfiniteScrollCards items={clients.slice().reverse()} reverse />
    </motion.div>
  );
};

export default ClientsSection;