import React from 'react';
import { motion } from 'framer-motion';
import { useCases } from '../constants';
import { Icon } from '../types';

const BentoCard: React.FC<{
  className?: string;
  title: string;
  description: string;
  icon: Icon;
}> = ({ className, title, description, icon }) => {
  return (
    <motion.div
      className={`relative group p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm ${className}`}
      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary-accent-start/20 to-secondary-accent-end/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="text-primary-accent mb-2">{icon}</div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-text-secondary mt-1">{description}</p>
      </div>
    </motion.div>
  );
};

const BentoGridSection: React.FC = () => {
    return (
        <section id="solutions" className="py-20 bg-primary-bg">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Versatile AI Solutions</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        From automating complex workflows to developing intelligent applications, our expertise covers a wide spectrum of AI use cases.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
                    {useCases.map((useCase) => (
                        <BentoCard
                            key={useCase.title}
                            className={useCase.className}
                            {...useCase}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGridSection;