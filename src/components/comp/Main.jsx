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
    <div className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden m-0 p-0">
      {/* Logo container - Full screen */}
      <div className="relative w-screen h-screen z-10 m-0 p-0">
        {/* Grahmind logo - Full screen coverage */}
        <img 
          src={grahmindImage} 
          alt="GRAHMIND - The Ultimate Tech Solutions" 
          className="w-screen h-screen object-cover m-0 p-0"
          style={{
            filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
            objectPosition: 'center center',
            minWidth: '100vw',
            minHeight: '100vh'
          }}
        />
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




