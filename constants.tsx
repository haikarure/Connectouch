import React from 'react';
import { Service, UseCase, TechItem, Testimonial, FaqItem } from './types';

// Generic Icon Components
const N8nIcon = () => <div className="text-4xl font-extrabold text-purple-400">n8n</div>;
const AiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const DevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const ReactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" stroke="currentColor" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" strokeWidth="1.5"></circle><ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" strokeWidth="1.5"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" strokeWidth="1.5"></ellipse></svg>;
const PythonIcon = () => <div className="text-4xl font-bold text-yellow-400">Py</div>;
const TypeScriptIcon = () => <div className="text-4xl font-bold text-blue-500">TS</div>;
const NodeIcon = () => <div className="text-4xl font-bold text-green-500">JS</div>;
const DockerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12.352V6.262a2.25 2.25 0 00-2.25-2.25H6.002a2.25 2.25 0 00-2.25 2.25v6.09M20.25 12.352v5.436a2.25 2.25 0 01-2.25 2.25H6.002a2.25 2.25 0 01-2.25-2.25v-5.436m16.5 0h-2.25m-2.25 0h-2.25m-2.25 0h-2.25m-2.25 0H3.752" /></svg>;
const FramerMotionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const VercelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>;
const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const StripeIcon = () => <div className="text-4xl font-bold text-indigo-500">S</div>;
const LangChainIcon = () => <div className="text-4xl font-bold text-lime-400">LC</div>;


export const services: Service[] = [
  {
    title: "n8n Workflow Automation",
    description: "Streamline your business processes with powerful, custom-built n8n workflows that connect your apps and automate repetitive tasks.",
    icon: <N8nIcon />,
  },
  {
    title: "AI & LLM Integration",
    description: "Leverage the power of Large Language Models like Gemini to build intelligent applications, chatbots, and content generation tools.",
    icon: <AiIcon />,
  },
  {
    title: "Custom Software Development",
    description: "From concept to deployment, we build scalable, high-performance web and mobile applications tailored to your specific requirements.",
    icon: <DevIcon />,
  },
  {
    title: "API Development & Integration",
    description: "We create robust APIs and seamlessly integrate third-party services to enhance your application's functionality and connectivity.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Optimize your development lifecycle and ensure scalability with our cloud architecture and DevOps implementation services.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  },
  {
    title: "AI-Powered Data Analysis",
    description: "Unlock valuable insights from your data with our AI-driven analytics solutions, helping you make smarter, data-informed decisions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
  },
];

export const useCases: UseCase[] = [
    {
        title: "Intelligent Customer Support",
        description: "Deploy AI chatbots that provide instant, 24/7 support.",
        icon: <AiIcon />,
        className: "md:col-span-2",
    },
    {
        title: "Automated Sales Pipelines",
        description: "Integrate your CRM with lead sources and automate follow-ups.",
        icon: <DevIcon />,
        className: "md:col-span-1",
    },
    {
        title: "Content Generation",
        description: "Use LLMs to create marketing copy, articles, and social media posts.",
        icon: <N8nIcon />,
        className: "md:col-span-1",
    },
    {
        title: "E-commerce Automation",
        description: "Automate order processing, inventory management, and customer notifications.",
        icon: <DevIcon />,
        className: "md:col-span-2 lg:col-span-2",
    },
    {
        title: "Data Entry & Processing",
        description: "Eliminate manual data entry by automating data extraction from documents.",
        icon: <AiIcon />,
        className: "md:col-span-3 lg:col-span-2",
    }
];

export const techStack: TechItem[] = [
  { name: "React & Next.js", description: "For building fast, modern, and scalable web applications.", icon: <ReactIcon/> },
  { name: "Python", description: "The backbone of our AI and data science solutions.", icon: <PythonIcon/> },
  { name: "n8n.io", description: "Our go-to platform for powerful workflow automation.", icon: <N8nIcon /> },
  { name: "Gemini API", description: "Leveraging Google's state-of-the-art AI models.", icon: <AiIcon /> },
  { name: "Tailwind CSS", description: "For rapid, utility-first UI development and styling.", icon: <div className="text-4xl font-bold text-teal-400">T</div> },
  { name: "TypeScript", description: "Enhancing JavaScript with types for more robust code.", icon: <TypeScriptIcon /> },
  { name: "Node.js", description: "For building efficient and scalable server-side applications.", icon: <NodeIcon /> },
  { name: "Docker", description: "Containerizing applications for consistency across environments.", icon: <DockerIcon /> },
  { name: "PostgreSQL", description: "Our preferred database for robust and reliable data storage.", icon: <div className="text-4xl font-bold text-blue-600">Pg</div> },
  { name: "Google Cloud", description: "Utilizing powerful cloud infrastructure for scalable solutions.", icon: <div className="text-4xl font-bold text-sky-400">GCP</div> },
  { name: "Framer Motion", description: "Creating beautiful and fluid animations for the web.", icon: <FramerMotionIcon /> },
  { name: "Vercel", description: "Seamless deployment and hosting for modern web applications.", icon: <VercelIcon /> },
  { name: "GitHub", description: "For collaborative version control and CI/CD pipelines.", icon: <GitHubIcon /> },
  { name: "Stripe", description: "Integrating secure and reliable payment processing solutions.", icon: <StripeIcon /> },
  { name: "LangChain", description: "Framework for developing applications powered by LLMs.", icon: <LangChainIcon /> },
];

export const testimonials: Testimonial[] = [
  { id: 1, quote: "Connectouch completely revolutionized our workflow. We're saving 20+ hours a week on manual tasks.", name: "Jane Doe", title: "COO, InnovateCo" },
  { id: 2, quote: "The AI-powered chatbot they developed has improved our customer satisfaction rates by 40%. Incredible.", name: "John Smith", title: "Head of Support, TechCorp" },
  { id: 3, quote: "Their custom software solution was delivered on time, on budget, and exceeded all our expectations.", name: "Emily White", title: "Founder, StartupX" },
  { id: 4, quote: "A truly strategic partner. They understood our business needs deeply and delivered a perfect automation solution.", name: "Michael Brown", title: "CEO, DataStream" },
];

export const faqs: FaqItem[] = [
  { id: 1, question: "What is n8n and why do you use it?", answer: "n8n is a powerful, open-source workflow automation tool. We use it because it's highly flexible, extensible, and can connect with virtually any service that has an API, allowing us to build incredibly sophisticated and custom automations for our clients." },
  { id: 2, question: "How long does a typical project take?", answer: "Project timelines vary depending on complexity. A simple workflow automation might take 1-2 weeks, while a full custom software build could take 3-6 months. We provide a detailed timeline after our initial discovery phase." },
  { id: 3, question: "Can you integrate with our existing software?", answer: "Absolutely. Our expertise lies in creating seamless integrations. As long as your existing software has an API or other means of connectivity, we can integrate it into our automation workflows and custom applications." },
  { id: 4, question: "What kind of AI models do you work with?", answer: "We primarily work with state-of-the-art Large Language Models (LLMs) like Google's Gemini family. This allows us to build solutions for natural language understanding, content generation, complex reasoning, and much more." },
];

export const clients: string[] = [
  'LogoIpsum', 'TechCorp', 'InnovateCo', 'DataStream', 'CloudNine', 'QuantumLeap', 'Synergy Solutions', 'NextGen AI', 'Apex Industries'
];