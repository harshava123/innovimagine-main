import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion, useScroll } from 'framer-motion';

// Hero inspired by the Lamosa-style layout: light, dotted backdrop, clear CTA.
const Main = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [showArrow, setShowArrow] = useState(false);
  const vantaEffectRef = useRef(null);
  const sectionRef = useRef(null);

  useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Scroll arrow visibility / direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setShowArrow(scrollY > 80);
      setScrollDirection(scrollY < windowHeight / 2 ? 'down' : 'up');

      if (scrollY > docHeight - windowHeight - 140) {
        setScrollDirection('up');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Vanta Birds background (using global VANTA from CDN)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.VANTA || !window.VANTA.BIRDS) return;
    if (!sectionRef.current) return;
    if (vantaEffectRef.current) return;

    const effect = window.VANTA.BIRDS({
      el: sectionRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff,
      color1: 0x80808,
      color2: 0x4e4e4e,
      speedLimit: 4.0,
      separation: 40.0,
      alignment: 36.0,
      cohesion: 12.0,
      quantity: 4.0,
    });

    vantaEffectRef.current = effect;

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  const scrollToDirection = () => {
    const windowHeight = window.innerHeight;
    if (scrollDirection === 'down') {
      window.scrollTo({ top: windowHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const headingWords = [
    'Grahmind',
    'Turns',
    'Your',
    'Vision',
    'Into',
    'a',
    'Thriving',
    'Digital',
    'Product',
  ];

  const wordVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.12 * i },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-white font-sans text-gray-900"
    >
      <Motion.div
        className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-5 pt-32 pb-14 text-center sm:px-8"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      >
        {/* Availability pill */}
        <Motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-gray-700 shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Your vision, our expertise
        </Motion.div>

        {/* Heading */}
        <Motion.h1
          className="text-[32px] font-bold leading-tight sm:text-[38px] md:text-[44px]"
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3">
            {headingWords.map((word, idx) => (
              <Motion.span
                key={`${word}-${idx}`}
                className="inline-block"
                variants={wordVariants}
                custom={idx}
              >
                {word}
              </Motion.span>
            ))}
          </div>
        </Motion.h1>

        <Motion.p
          className="mt-5 max-w-3xl text-base text-gray-600 md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.4 }}
        >
          Web, mobile, AI, design, and marketing services.
        </Motion.p>

        {/* CTA buttons */}
        <Motion.div
          className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.5 }}
        >
          <Link to="/services" className="group inline-flex items-center gap-2.5 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_36px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5">
            Explore Services
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-base transition group-hover:bg-white group-hover:text-black">
              →
            </span>
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            Book A Call
          </Link>
        </Motion.div>

        
      </Motion.div>

      {/* Scroll pointer */}
      <div
        className={`scroll-pointer ${showArrow ? 'visible' : ''}`}
        style={{
          top: '88%',
          background: '#0f172a',
          border: '2px solid rgba(0,0,0,0.1)',
          color: '#ffffff'
        }}
        onClick={scrollToDirection}
        title={scrollDirection === 'down' ? 'Scroll to next section' : 'Back to top'}
      >
        {scrollDirection === 'down' ? '↓' : '↑'}
      </div>
    </section>
  );
};

export default Main;




