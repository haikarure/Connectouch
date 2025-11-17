import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Service } from '../types';
import { services } from '../constants';

const HoverLiftCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, restDelta: 0.001 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, restDelta: 0.001 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12.5deg', '-12.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12.5deg', '12.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={cardVariants}
      className="relative w-full h-full p-6 bg-accent-bg rounded-2xl border border-white/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary-accent/20"
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full">
        <div className="mb-4 text-primary-accent">{service.icon}</div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-text-secondary mb-4 text-sm flex-grow">{service.description}</p>
        <a href="#" className="font-semibold text-primary-accent hover:underline mt-auto">
          Learn More &rarr;
        </a>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We deliver cutting-edge solutions tailored to your unique business needs, driving efficiency and growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ perspective: "1000px" }}
        >
          {services.map((service, index) => (
            <HoverLiftCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;