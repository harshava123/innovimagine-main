import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const maskRef = useRef(null);
  const rootRef = useRef(null);
  const pageWrapperRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    rootRef.current = document.getElementById('root');
    pageWrapperRef.current = rootRef.current?.querySelector('.page-wrapper') || rootRef.current;
    
    const updateCursor = (e) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        // Scale only the page content, not the entire root
        if (pageWrapperRef.current && maskRef.current && isHovering) {
          const scale = 2;
          const scrollX = window.scrollX || window.pageXOffset;
          const scrollY = window.scrollY || window.pageYOffset;
          
          const cursorX = e.clientX + scrollX;
          const cursorY = e.clientY + scrollY;
          
          // Scale the page wrapper
          pageWrapperRef.current.style.transform = `scale(${scale})`;
          pageWrapperRef.current.style.transformOrigin = `${cursorX}px ${cursorY}px`;
          pageWrapperRef.current.style.transition = 'transform 0.1s linear';
          
          // Update mask position
          maskRef.current.style.setProperty('--cursor-x', `${e.clientX}px`);
          maskRef.current.style.setProperty('--cursor-y', `${e.clientY}px`);
        } else if (pageWrapperRef.current) {
          pageWrapperRef.current.style.transform = 'scale(1)';
          pageWrapperRef.current.style.transformOrigin = 'center center';
        }
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      if (pageWrapperRef.current) {
        pageWrapperRef.current.style.transform = 'scale(1)';
        pageWrapperRef.current.style.transformOrigin = 'center center';
      }
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (pageWrapperRef.current) {
        pageWrapperRef.current.style.transform = '';
        pageWrapperRef.current.style.transformOrigin = '';
        pageWrapperRef.current.style.transition = '';
      }
    };
  }, [isHovering]);

  const cursorElement = (
    <>
      {isHovering && (
        <div 
          ref={maskRef}
          className="cursor-mask-overlay"
          style={{
            '--cursor-x': `${position.x}px`,
            '--cursor-y': `${position.y}px`,
          }}
        />
      )}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );

  // Render cursor outside root to avoid scaling issues
  return createPortal(cursorElement, document.body);
};

export default CustomCursor;

