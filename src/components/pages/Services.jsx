import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WebAppDevelopment from './WebAppDevelopment';
import MobileAppDevelopment from './MobileAppDevelopment';
import FullStackDevelopment from './FullStackDevelopment';
import AIToolApplications from './AIToolApplications';
import UIDesign from './UIDesign';
import DigitalMarketing from './DigitalMarketing';
import SoftwareSupport from './SoftwareSupport';

const TABS = [
  {
    label: 'Web App',
    icon: (
      <motion.svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" whileHover={{ scale: 1.25, rotate: 8 }} transition={{ type: 'spring', stiffness: 300 }}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></motion.svg>
    ),
    component: WebAppDevelopment,
  },
  {
    label: 'Mobile',
    icon: (
      <motion.svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" whileHover={{ scale: 1.25, rotate: -8 }} transition={{ type: 'spring', stiffness: 300 }}><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></motion.svg>
    ),
    component: MobileAppDevelopment,
  },
  {
    label: 'Full Stack',
    icon: (
      <motion.svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" whileHover={{ scale: 1.25, y: -2 }} transition={{ type: 'spring', stiffness: 300 }}><rect x="3" y="4" width="18" height="4" rx="2"/><rect x="3" y="10" width="18" height="4" rx="2"/><rect x="3" y="16" width="18" height="4" rx="2"/></motion.svg>
    ),
    component: FullStackDevelopment,
  },
  {
    label: 'AI Tools',
    icon: (
      <motion.svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" whileHover={{ scale: 1.25, rotate: 12 }} transition={{ type: 'spring', stiffness: 300 }}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></motion.svg>
    ),
    component: AIToolApplications,
  },
  {
    label: 'UI/UX',
    icon: (
      <motion.svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" whileHover={{ scale: 1.25, y: -2 }} transition={{ type: 'spring', stiffness: 300 }}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10v10H7z"/></motion.svg>
    ),
    component: UIDesign,
  },
  {
    label: 'Marketing',
    icon: (
      <motion.svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" whileHover={{ scale: 1.25, rotate: -10 }} transition={{ type: 'spring', stiffness: 300 }}><path d="M3 12a9 9 0 0118 0M12 3v9l6 3"/></motion.svg>
    ),
    component: DigitalMarketing,
  },
  {
    label: 'Support',
    icon: (
      <motion.svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" whileHover={{ scale: 1.25, y: 2 }} transition={{ type: 'spring', stiffness: 300 }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></motion.svg>
    ),
    component: SoftwareSupport,
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: 'easeOut' } },
};

function Services() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    if (tabRefs.current[selected]) {
      const node = tabRefs.current[selected];
      setIndicator({ left: node.offsetLeft, width: node.offsetWidth });
    }
  }, [selected]);

  const SelectedComponent = TABS[selected].component;

  return (
    <div className="min-h-screen bg-gray-100 w-full max-w-full pt-16 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 px-3 sm:px-2 md:px-0 box-border">
      {/* Heading */}
      <div className="w-full max-w-full mx-auto px-3 sm:px-6 box-border">
        <motion.h1
          className="text-4xl md:text-5xl font-sans text-center text-gray-900 mb-4 font-semibold"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-500 mb-12"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Explore our comprehensive digital solutions, crafted to elevate your business with modern technology and design.
        </motion.p>
      </div>
      {/* Tab Bar */}
      <div className="w-full max-w-full mx-auto mb-6 sm:mb-10 px-0 sm:px-2 box-border">
        <div className="relative flex justify-center gap-0.5 sm:gap-1 md:gap-2 bg-transparent p-0 overflow-x-auto scrollbar-hide min-w-0 w-full max-w-full box-border">
          {/* Animated Underline Indicator */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2.5px] bg-gray-900 rounded-full z-0"
            style={{
              width: indicator.width ? indicator.width - 16 : 0,
              left: indicator.left ? indicator.left + 8 : 0,
            }}
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          {TABS.map((tab, idx) => (
            <button
              key={tab.label}
              ref={el => (tabRefs.current[idx] = el)}
              className={`relative z-10 flex flex-col items-center px-1 sm:px-2 md:px-4 py-2 bg-transparent rounded-none font-sans font-medium text-xs md:text-sm transition-colors duration-200 focus:outline-none min-w-[80px] whitespace-nowrap
                ${selected === idx ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'}`}
              onClick={() => setSelected(idx)}
              style={{ WebkitTapHighlightColor: 'transparent', minWidth: 60 }}
            >
              <span className="mb-1">{React.cloneElement(tab.icon, { whileHover: { scale: 1.25, y: -2 }, transition: { type: 'spring', stiffness: 300 } })}</span>
              <span className="leading-tight">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="w-full max-w-full mx-auto px-0 sm:px-2 md:px-0 min-w-0 box-border">
        <SelectedComponent />
      </div>
    </div>
  );
}

export default Services; 