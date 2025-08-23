import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {  useAnimation } from 'framer-motion';

const features = [
  {
    icon: (
      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-white shadow-neumorphic mb-6">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-600 hover:text-blue-500 transition-all duration-300 hover:drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </motion.svg>
      </div>
    ),
    title: 'Data-Driven Insights',
    desc: 'Transform raw data into actionable strategies that drive real business growth.',
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-white shadow-neumorphic mb-6">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-600 hover:text-yellow-500 transition-all duration-300 hover:drop-shadow-lg hover:animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </motion.svg>
      </div>
    ),
    title: 'AI-Powered Strategy',
    desc: 'Leverage cutting-edge AI to decode your audience and craft winning campaigns.',
  },
  {
    icon: (
      <div className="relative flex items-center justify-center w-28 h-28 rounded-3xl bg-white shadow-neumorphic mb-6">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-gray-600 hover:text-purple-500 transition-all duration-300 hover:drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </motion.svg>
      </div>
    ),
    title: 'End-to-End Delivery',
    desc: 'From strategy to launch, we build, implement, and deliver results that matter.',
  },
];

const technologies = [
  'React', 'Next.js', 'Node.js', 'Python', 'AI/ML', 'Web Development', 
  'Mobile Apps', 'Real-time', 'Faster', 'Scalable', 'Cloud', 'API',
  'Database', 'UI/UX', 'DevOps', 'Analytics', 'Automation', 'Blockchain'
];

const comparisonData = [
  {
    feature: 'Team Experience',
    Grahmind: 'Team with 3+ years experience',
    others: 'Generic teams, unknown background',
    advantage: 'Personal connection, shared vision'
  },
  {
    feature: 'Ethical Approach',
    Grahmind: 'Ethics-first development',
    others: 'Profit-driven, questionable practices',
    advantage: 'Trustworthy, sustainable solutions'
  },
  {
    feature: 'Innovation Focus',
    Grahmind: 'AI-powered, cutting-edge solutions',
    others: 'Traditional, outdated methods',
    advantage: 'Future-ready technology'
  },
  {
    feature: 'Client Relationship',
    Grahmind: 'Direct founder communication',
    others: 'Multiple layers, delayed responses',
    advantage: 'Faster decision-making, personal touch'
  },
  {
    feature: 'Pricing',
    Grahmind: 'Startup-friendly, transparent pricing',
    others: 'Hidden costs, enterprise pricing',
    advantage: 'Better value for money'
  },
  {
    feature: 'Support',
    Grahmind: '24/7 direct support',
    others: 'Limited hours, ticket system',
    advantage: 'Immediate assistance when needed'
  }
];

const Features = () => {
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth);
    }
  }, []);

  useEffect(() => {
    if (!carouselWidth) return;
    const animate = async () => {
      while (true) {
        await controls.start({
          x: -carouselWidth / 2,
          transition: {
            duration: carouselWidth / 80, // 80px/sec for slower, smoother
            ease: 'linear',
          },
        });
        controls.set({ x: 0 });
      }
    };
    animate();
    // eslint-disable-next-line
  }, [carouselWidth]);

  return (
    <section className="bg-gray-100 py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans text-center text-gray-900 mb-4">Why Choose Grahmind</h2>
        <p className="text-base sm:text-lg text-center text-gray-500 mb-8 sm:mb-14">
          We don't just analyze data — we turn it into direction that drives your business forward.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-4 sm:p-8 flex flex-col items-center text-center shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 hover:scale-105"
            >
              {/* Small screens: icon and title side by side, small icon */}
              <div className="flex flex-row items-center justify-center gap-3 mb-2 w-full sm:hidden">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-neumorphic">
                  {React.cloneElement(feature.icon.props.children, { className: 'w-8 h-8 text-gray-600 hover:text-blue-500 transition-all duration-300 hover:drop-shadow-lg' })}
                </span>
                <h3 className="text-base font-semibold text-gray-900 text-left mb-0">{feature.title}</h3>
              </div>
              {/* sm+ screens: icon above title, larger icon */}
              <div className="hidden sm:flex flex-col items-center mb-2">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              </div>
              <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Comparison Section */}
        <motion.div
          className="mb-10 sm:mb-16 overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Why Choose Us Over Others?</h3>
          <div className="bg-white rounded-2xl shadow-neumorphic overflow-x-auto">
            {/* Header */}
            <div className="bg-gray-900 text-white p-3 lg:p-4">
              <h4 className="text-lg font-semibold">What Sets Us Apart</h4>
              <p className="text-gray-300 text-xs">Transparent comparison of our approach vs traditional agencies</p>
            </div>
            
            {/* Comparison Rows */}
            {comparisonData.map((item, idx) => (
              <motion.div
                key={idx}
                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-3 lg:p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">{item.feature}</h5>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-2 rounded">
                          <h6 className="font-medium text-gray-900 text-xs">Grahmind</h6>
                          <p className="text-gray-700 text-xs mt-1">{item.Grahmind}</p>
                        </div>
                        <div className="bg-gray-100 p-2 rounded">
                          <h6 className="font-medium text-gray-900 text-xs">Others</h6>
                          <p className="text-gray-600 text-xs mt-1">{item.others}</p>
                        </div>
                      </div>
                      <div className="mt-2 p-2 bg-green-50 border-l-2 border-green-500 rounded-r">
                        <p className="text-green-800 font-medium text-xs">
                          <span className="font-bold">✓</span> {item.advantage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <div className="mt-16 relative">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Our Technologies</h3>
          <div className="relative overflow-x-auto min-w-0 scrollbar-hide lg:overflow-x-hidden">
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 z-10" style={{background: 'linear-gradient(to right, #f3f4f6 80%, transparent)'}} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 z-10" style={{background: 'linear-gradient(to left, #f3f4f6 80%, transparent)'}} />
            {/* Scrolling carousel */}
            <div className="w-full min-w-0">
              <motion.div
                ref={carouselRef}
                className="flex gap-2 sm:gap-4"
                animate={controls}
                style={{ width: 'max-content' }}
              >
                {[...technologies, ...technologies].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 bg-white rounded-full px-3 py-2 sm:px-6 sm:py-3 shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <span className="text-gray-700 font-medium whitespace-nowrap text-sm sm:text-base">{tech}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
