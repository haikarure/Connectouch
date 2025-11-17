import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../constants';
import { FaqItem as FaqItemType } from '../types';

const FaqItem: React.FC<{ item: FaqItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <motion.button
        className="w-full flex justify-between items-center text-left py-6"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-semibold">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-accent"><path d="M3.13522 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13522L7.5 9.56464L11.158 6.13522C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86478L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86478C2.95657 6.67591 2.94637 6.35949 3.13522 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Your questions, answered. Here's what you need to know about partnering with Connectouch.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FaqItem key={faq.id} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;