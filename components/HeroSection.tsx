import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingCard: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={`absolute bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + delay, duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 3 + delay * 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};


const HeroSection: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden" id="home">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-accent-bg to-primary-bg z-0"
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
            className="relative bg-gradient-to-br from-secondary-accent-start/10 to-secondary-accent-end/10 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
        >
            <motion.div
                className="absolute inset-0 border-2 border-primary-accent rounded-3xl animate-pulse opacity-50"
                style={{
                    clipPath: 'polygon(0 0, 10% 0, 15% 5%, 90% 5%, 95% 0, 100% 0, 100% 100%, 0 100%)'
                }}
            />

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Automate. Innovate. Accelerate.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Connectouch is your strategic partner in AI-powered automation and bespoke software solutions, designed to propel your business into the future.
            </p>
            <motion.button 
                className="bg-primary-accent text-primary-bg font-bold py-3 px-8 rounded-lg text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_theme(colors.primary-accent)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              Discover Our Solutions
            </motion.button>
        </motion.div>
        
        <FloatingCard className="top-[15%] left-[5%] md:left-[10%] hidden lg:block" delay={0.1}>
            <p className="font-bold text-2xl text-success-accent">98%</p>
            <p className="text-text-secondary text-sm">Client Satisfaction</p>
        </FloatingCard>
        <FloatingCard className="bottom-[10%] right-[5%] md:right-[12%] hidden lg:block" delay={0.3}>
            <p className="font-bold text-2xl text-primary-accent">10x</p>
            <p className="text-text-secondary text-sm">Process Efficiency</p>
        </FloatingCard>
        <FloatingCard className="top-[20%] right-[8%] md:right-[15%] hidden xl:block" delay={0.5}>
            <p className="font-bold text-2xl text-secondary-accent-end">200+</p>
            <p className="text-text-secondary text-sm">Projects Delivered</p>
        </FloatingCard>

      </div>
    </section>
  );
};

export default HeroSection;