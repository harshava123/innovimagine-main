import React from 'react';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';
import webdevWebp from '../../assets/webdev.webp';
import webdevImage from '../../assets/webdev.png';
import aiWebp from '../../assets/ai-7977960.webp';
import aiImage from '../../assets/ai-7977960.jpg';

const services = [
  {
    key: 'web-app-development',
    icon: (
      <svg className="w-8 h-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    image: { webp: webdevWebp, fallback: webdevImage },
    title: 'Web Application',
    desc: 'Custom, scalable web solutions that drive business growth and user engagement.',
    size: 'large',
    route: '/services/web-app-development',
  },
  {
    key: 'mobile-app-development',
    icon: (
      <svg className="w-8 h-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile Application',
    desc: 'Cross-platform mobile apps for iOS and Android with seamless user experiences.',
    size: 'small',
    route: '/services/mobile-app-development',
  },
  {
    key: 'full-stack-development',
    icon: (
      <svg className="w-8 h-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Full Stack Development',
    desc: 'End-to-end web applications with robust front-end and back-end technologies.',
    size: 'small',
    route: '/services/full-stack-development',
  },
  {
    key: 'ai-tool-applications',
    icon: (
      <svg className="w-8 h-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
    image: { webp: aiWebp, fallback: aiImage },
    title: 'AI Tool Applications',
    desc: 'Innovative AI solutions tailored to transform your business processes.',
    size: 'large',
    route: '/services/ai-tool-applications',
  },
  {
    key: 'ui-ux-design',
    icon: (
      <svg className="w-8 h-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'User-centered design creating intuitive and engaging digital interfaces.',
    size: 'small',
    route: '/services/ui-ux-design',
  },
  {
    key: 'digital-marketing',
    icon: (
      <svg className="w-8 h-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'Promotion of products or services through digital channels and social media.',
    size: 'small',
    route: '/services/digital-marketing',
  },
  {
    key: 'software-support',
    icon: (
      <svg className="w-8 h-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Software Support',
    desc: 'Continuous support and maintenance to ensure optimal software performance.',
    size: 'small',
    route: '/services/software-support',
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
  <section className="bg-white py-12 sm:py-24">
    <div className="container mx-auto px-2 sm:px-8 md:px-16 lg:px-22">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans text-center text-gray-900 mb-8 sm:mb-14">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, idx) => (
          <motion.div
              key={service.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`group relative bg-white rounded-2xl shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 p-6 md:p-8 cursor-pointer overflow-hidden
              ${service.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''}`}
            whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(0,0,0,0.10), 0 6px 20px rgba(0,0,0,0.08)' }}
              onClick={() => navigate(service.route)}
          >
            {service.image ? (
              <div className="flex items-start space-x-4 sm:space-x-8 w-full">
                <div className="hidden sm:block flex-shrink-0 w-32 h-32 sm:w-56 sm:h-56 rounded-xl overflow-hidden bg-white mr-0 sm:mr-8">
                  <picture>
                    <source srcSet={service.image.webp} type="image/webp" />
                    <img 
                      src={service.image.fallback} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-300"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-black via-gray-800 to-white text-white flex items-center justify-center shadow-lg border border-white/20 hover:border-white/40 flex-shrink-0">
                    {service.icon}
                </div>
                <div className="flex-1 flex flex-col justify-center sm:block">
                  <div className="sm:hidden">
                    <h3 className="text-base font-sans text-black font-semibold mb-1 text-left">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-left">{service.desc}</p>
                  </div>
                  <div className="hidden sm:block">
                  <h3 className="text-xl md:text-2xl font-sans text-black mb-3">
                    {service.title}
                    <span className="ml-2 text-lg text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200 inline-block">→</span>
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-start space-x-4 sm:space-x-8 w-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-black via-gray-800 to-white text-white flex items-center justify-center shadow-lg border border-white/20 hover:border-white/40 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1 flex flex-col justify-center sm:block">
                  <div className="sm:hidden">
                    <h3 className="text-base font-sans text-black font-semibold mb-1 text-left">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-left">{service.desc}</p>
                  </div>
                  <div className="hidden sm:block">
                  <h3 className="text-xl md:text-2xl font-sans text-black mb-3">
                    {service.title}
                    <span className="ml-2 text-lg text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200 inline-block">→</span>
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{service.desc}</p>
                  </div>
                </div>
          </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8 sm:mt-12">
        <button
          className="px-6 sm:px-10 py-2 sm:py-3 bg-white text-black rounded-md font-sans text-base sm:text-lg hover:opacity-90 transition-all duration-200 group"
          style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 6px 20px rgba(0,0,0,0.2)' }}
          onClick={() => navigate('/services')}
        >
          <span className="flex items-center gap-2">
            Our Services
            <svg 
              className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>
);
};

export default ServicesSection;