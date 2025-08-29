import React, { useState, useEffect } from 'react';
import grahmindImage from '../../assets/grahmind.png';

const Main = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show arrow after scrolling a bit
      setShowArrow(scrollY > 50);
      
      // Determine scroll direction
      if (scrollY < 100) {
        setScrollDirection('down');
      } else if (scrollY > documentHeight - windowHeight - 100) {
        setScrollDirection('up');
      } else {
        // In middle - show direction based on recent scroll
        setScrollDirection(scrollY > (documentHeight - windowHeight) / 2 ? 'up' : 'down');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDirection = () => {
    if (scrollDirection === 'down') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden m-0 p-0">
      {/* Logo container - Full screen */}
      <div className="relative w-full h-full z-10 m-0 p-0">
        {/* Grahmind logo - Full screen coverage */}
        <img 
          src={grahmindImage} 
          alt="GRAHMIND - The Ultimate Tech Solutions" 
          className="w-full h-full object-cover m-0 p-0 sm:w-screen sm:h-screen"
          style={{
            filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
            objectPosition: 'center center',
            minWidth: '100%',
            minHeight: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh'
          }}
        />
      </div>

      {/* Enhanced signature */}
      <div className="absolute bottom-6 right-6 sm:bottom-2 sm:right-2 md:bottom-4 md:right-4 z-20">
        <div className="bg-gradient-to-r from-black via-gray-800 to-black rounded-2xl px-6 py-3 sm:px-4 sm:py-2 md:px-8 md:py-3 shadow-2xl backdrop-blur-sm border border-gray-600/30">
          <p className="text-base sm:text-xs md:text-sm text-white font-bold truncate text-right bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            --Grahmind--
          </p>
        </div>
      </div>

      {/* Dynamic Scroll Arrow - Bottom Right */}
      <div 
        className={`scroll-pointer ${showArrow ? 'visible' : ''}`}
        style={{ 
          top: '85%',
          background: '#000000',
          border: '2px solid #ffffff',
          color: '#ffffff'
        }}
        onClick={scrollToDirection}
        title={scrollDirection === 'down' ? 'Scroll to Bottom' : 'Scroll to Top'}
      >
        {scrollDirection === 'down' ? '↓' : '↑'}
      </div>
    </div>
  );
};

export default Main;




