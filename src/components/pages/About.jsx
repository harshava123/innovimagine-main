import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-16 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 px-1 sm:px-2 md:px-0">
      <div className="max-w-4xl mx-auto px-2 sm:px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-sans text-center text-gray-900 mb-4 font-semibold"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
              About Innovimagine
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-600 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          We're a passionate team of four B.Tech friends turned entrepreneurs, building innovative software solutions with ethics at our core.
        </motion.p>

        {/* Our Story */}
        <motion.div
          className="bg-white rounded-2xl shadow-neumorphic p-4 sm:p-6 md:p-8 mb-8 sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Story</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              What started as four friends sharing dreams during our B.Tech days has evolved into something extraordinary. We bonded over late-night coding sessions, endless discussions about technology's potential, and a shared vision of creating software that makes a real difference.
            </p>
            <p>
              After graduating, instead of taking the conventional path, we decided to chase our dreams together. We founded Innovimagine with a simple yet powerful mission: to deliver exceptional software solutions while maintaining the highest ethical standards.
            </p>
            <p>
              Today, we're proud to be a growing startup that combines technical excellence with human-centered design, always remembering where we started and the values that brought us together.
            </p>
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="bg-white rounded-2xl shadow-neumorphic p-4 sm:p-6 md:p-8 mb-8 sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              At Innovimagine, we believe that great software should not only solve problems but also respect users, protect privacy, and contribute positively to society. Our mission is to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Deliver innovative software solutions that exceed expectations</li>
              <li>Maintain the highest ethical standards in all our work</li>
              <li>Build technology that empowers businesses and individuals</li>
              <li>Create sustainable, scalable solutions for the future</li>
              <li>Foster long-term partnerships based on trust and transparency</li>
            </ul>
        </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="bg-white rounded-2xl shadow-neumorphic p-4 sm:p-6 md:p-8 mb-8 sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">🤝 Trust & Transparency</h3>
              <p className="text-gray-700 text-sm">We believe in open communication and building relationships based on mutual trust.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">💡 Innovation</h3>
              <p className="text-gray-700 text-sm">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">⚖️ Ethics First</h3>
              <p className="text-gray-700 text-sm">Every decision we make considers the ethical implications and impact on society.</p>
          </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">🚀 Excellence</h3>
              <p className="text-gray-700 text-sm">We strive for excellence in every line of code, every design decision, and every client interaction.</p>
              </div>
          </div>
        </motion.div>

        

        {/* Our Promise */}
        <motion.div
          className="bg-white rounded-2xl shadow-neumorphic p-4 sm:p-6 md:p-8 mb-8 sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Promise to You</h2>
          <div className="space-y-3">
            <p className="text-black">
              We promise to deliver solutions that not only meet your technical requirements but also align with your values and long-term goals. Every project we undertake is an opportunity to build something meaningful, something that makes a difference.
            </p>
            <p className="text-black">
              From four friends with big dreams to a growing team of innovators, we're committed to turning your vision into reality while maintaining the highest standards of quality and ethics.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 mt-4 sm:mt-6 border-l-4 border-blue-500">
              <blockquote className="text-lg font-medium italic text-gray-800 mb-2">
                "Quality is not an act, it is a habit."
              </blockquote>
              <p className="text-gray-600 text-sm">- Aristotle</p>
              </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-600 mb-6">
            Ready to build something amazing together?
          </p>
          <Link to="/contact">
            <button className="bg-black text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-200 shadow-lg group text-base sm:text-lg">
              <span className="flex items-center gap-2">
                Let's Start Your Project
                <svg 
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>
        </div>
    </div>
  );
};

export default About; 