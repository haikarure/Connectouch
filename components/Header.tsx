import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const navLinkVariants = {
  hover: {},
};

const underlineVariants = {
  initial: { scaleX: 0 },
  hover: { 
    scaleX: 1,
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
};

const navItems = [
  { label: 'Services', targetId: 'services', offset: 50 },
  { label: 'Solutions', targetId: 'solutions', offset: 50 },
  { label: 'Tech', targetId: 'tech', offset: 50 },
  { label: 'Testimonials', targetId: 'testimonials', offset: 20 },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string, additionalOffset: number = 0) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = headerRef.current ? headerRef.current.clientHeight : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset + additionalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-bg/80 backdrop-blur-sm border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-primary-accent">C</span>onnectouch
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            return (
              <motion.a
                key={item.label}
                href={`#${item.targetId}`}
                onClick={(e) => handleNavClick(e, item.targetId, item.offset)}
                className="relative text-text-secondary hover:text-text-primary transition-colors duration-300 py-1 cursor-pointer"
                variants={navLinkVariants}
                initial="initial"
                whileHover="hover"
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-accent"
                  style={{ transformOrigin: 'center' }}
                  variants={underlineVariants}
                />
              </motion.a>
            )
          })}
        </nav>
        <button 
          onClick={(e) => handleNavClick(e, 'contact', 50)}
          className="hidden md:block bg-gradient-to-r from-secondary-accent-start to-secondary-accent-end text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
          Get Started
        </button>
        <div className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;