import React from 'react';
import { motion } from 'framer-motion';
import webdevImage from '../../assets/saas-concept-collage.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const FullStackDevelopment = () => (
  <motion.section
    className="bg-white min-h-screen pt-16 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 px-2 sm:px-4 md:px-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-12 items-start">
      {/* LEFT COLUMN: Image + Technologies + Benefits */}
      <motion.div
        className="w-full md:w-2/5 flex flex-col gap-8 items-start"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={webdevImage}
          alt="Full Stack Development"
          className="rounded-2xl max-w-full sm:max-w-[420px] w-full object-cover shadow-lg"
        />
        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-semibold mt-4 mb-2 font-sans">Technologies</h2>
          <p className="text-gray-700 font-sans">
            React, Angular, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, and more.
          </p>
        </div>
        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold mt-4 mb-2 font-sans">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 font-sans">
            <li>Unified development process</li>
            <li>Faster time to market</li>
            <li>Cost-effective solutions</li>
            <li>Comprehensive support</li>
          </ul>
        </div>
      </motion.div>
      {/* RIGHT COLUMN: Main Content */}
      <motion.div
        className="w-full md:w-3/5"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-semibold mb-6 text-black font-sans"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Full Stack Development
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8 font-sans"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          We deliver end-to-end web applications with robust front-end and back-end technologies, ensuring seamless integration and performance.
        </motion.p>
        {/* Features */}
        <motion.h2
          className="text-2xl font-semibold mt-8 mb-4 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Key Features
        </motion.h2>
        <motion.ul
          className="list-disc list-inside text-gray-700 mb-6 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <li>Front-end & back-end expertise</li>
          <li>API development & integration</li>
          <li>Database design & management</li>
          <li>Cloud deployment</li>
          <li>Security & scalability</li>
        </motion.ul>
        {/* Process */}
        <motion.h2
          className="text-2xl font-semibold mt-8 mb-4 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Process
        </motion.h2>
        <motion.ol
          className="list-decimal list-inside text-gray-700 mb-6 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <li>Requirement Gathering</li>
          <li>System Architecture</li>
          <li>Development</li>
          <li>Testing & QA</li>
          <li>Deployment</li>
          <li>Maintenance</li>
        </motion.ol>
      </motion.div>
    </div>
    {/* CTA centered for the whole page */}
    <div className="w-full flex justify-center mt-8 sm:mt-12 md:mt-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <a
          href="/contact"
          className="inline-block bg-black text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 transition font-sans shadow-lg group text-base sm:text-lg"
        >
          <span className="flex items-center gap-2">
            Get Full Stack Expertise
            <svg 
              className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </span>
        </a>
      </motion.div>
    </div>
  </motion.section>
);

export default FullStackDevelopment; 