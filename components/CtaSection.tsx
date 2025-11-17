import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MagneticCard: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        const xPos = (mouseX - width / 2);
        const yPos = (mouseY - height / 2);
        x.set(xPos);
        y.set(yPos);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const textX = useTransform(mouseXSpring, [-150, 150], [-20, 20]);
    const textY = useTransform(mouseYSpring, [-150, 150], [-10, 10]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseXSpring, y: mouseYSpring }}
            className="group relative w-full p-12 bg-gradient-to-br from-secondary-accent-start to-secondary-accent-end rounded-3xl text-center"
        >
            <div className="absolute inset-0 bg-black/20 rounded-3xl group-hover:opacity-0 transition-opacity duration-300"/>
            <motion.h3 style={{x: textX, y: textY}} className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</motion.h3>
            <motion.p style={{x: textX, y: textY}} className="text-text-secondary mb-8 max-w-xl mx-auto">
                Let's discuss how our AI and automation expertise can unlock your company's full potential.
            </motion.p>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-accent text-primary-bg font-bold py-3 px-8 rounded-lg text-lg shadow-[0_0_20px_theme(colors.primary-accent)]"
            >
                Schedule a Free Consultation
            </motion.button>
        </motion.div>
    );
};

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <MagneticCard />
      </div>
    </section>
  );
};

export default CtaSection;