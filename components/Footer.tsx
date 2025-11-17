import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-bg border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary-accent">C</span>onnectouch
            </h3>
            <p className="text-text-secondary text-sm">Automate. Innovate. Accelerate.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-text-secondary hover:text-primary-accent">Services</a></li>
              <li><a href="#solutions" className="text-sm text-text-secondary hover:text-primary-accent">Solutions</a></li>
              <li><a href="#tech" className="text-sm text-text-secondary hover:text-primary-accent">Technology</a></li>
              <li><a href="#contact" className="text-sm text-text-secondary hover:text-primary-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-text-secondary hover:text-primary-accent">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-primary-accent">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary-accent">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.01-.06C3.8 19.8 6.28 20.5 8.98 20.5c7.17 0 11.08-5.93 11.08-11.08v-.5A7.9 7.9 0 0 0 22.46 6z" /></svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-primary-accent">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Connectouch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;