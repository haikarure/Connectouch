import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../constants';
import { TechItem } from '../types';

const FlipCard: React.FC<{ item: TechItem }> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-40 [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-accent-bg border border-white/10 rounded-xl flex flex-col items-center justify-center p-4 text-center">
          <div className="h-12 w-12 flex items-center justify-center">{item.icon}</div>
          <p className="mt-2 font-semibold">{item.name}</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden bg-gradient-to-br from-secondary-accent-start to-secondary-accent-end border border-white/10 rounded-xl flex items-center justify-center p-4 text-center">
          <p className="text-sm">{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We leverage powerful, modern technologies to build robust and scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((item) => (
            <FlipCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;