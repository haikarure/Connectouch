import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../constants';
import { Testimonial } from '../types';
import ClientsSection from './ClientsSection';

const StackedCard: React.FC<{ testimonial: Testimonial; active: boolean; index: number }> = ({ testimonial, active, index }) => {
  const offset = 16 * index;
  const scale = 1 - index * 0.05;

  return (
    <motion.div
      className="absolute w-full h-full p-8 bg-accent-bg border border-white/10 rounded-2xl flex flex-col justify-center"
      initial={{ y: offset, scale: scale, opacity: 0 }}
      animate={{
        y: active ? 0 : offset,
        scale: active ? 1 : scale,
        zIndex: testimonials.length - index,
        opacity: 1,
      }}
      exit={{
          y: -50,
          opacity: 0,
          transition: { duration: 0.3 }
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <p className="text-text-secondary text-lg mb-4">"{testimonial.quote}"</p>
      <div>
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-sm text-primary-accent">{testimonial.title}</p>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const displayedTestimonials = [...testimonials.slice(activeIndex), ...testimonials.slice(0, activeIndex)].slice(0, 3).reverse();


  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real stories from businesses transformed by our partnership and solutions.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto h-64 mb-20">
          <AnimatePresence>
            {displayedTestimonials.map((testimonial, index) => (
                <StackedCard 
                    key={testimonial.id} 
                    testimonial={testimonial} 
                    active={index === displayedTestimonials.length - 1}
                    index={displayedTestimonials.length - 1 - index}
                />
            ))}
          </AnimatePresence>
        </div>

        <ClientsSection />
      </div>
    </section>
  );
};

export default TestimonialsSection;