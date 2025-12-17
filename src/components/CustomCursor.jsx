import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { GlassCard } from '@developer-hub/liquid-glass';

// Liquid-glass style cursor that follows the pointer
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointerTarget, setIsPointerTarget] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handlePointerState = (e) => {
      const target = e.target;
      const hasPointer =
        target.closest('a, button, [role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointerTarget(Boolean(hasPointer));
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handlePointerState);
    document.addEventListener('mouseout', handlePointerState);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handlePointerState);
      document.removeEventListener('mouseout', handlePointerState);
    };
  }, []);

  const cursorElement = (
    <div
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <GlassCard
        displacementScale={90}
        blurAmount={0.02}
        cornerRadius={999}
        padding="0"
        style={{
          width: isPointerTarget ? 34 : 26,
          height: isPointerTarget ? 34 : 26,
          borderRadius: '999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(15,23,42,0.25)',
        }}
      >
        {/* inner dot for better visibility */}
        <div
          style={{
            width: isPointerTarget ? 7 : 5,
            height: isPointerTarget ? 7 : 5,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.9)',
          }}
        />
      </GlassCard>
    </div>
  );

  return createPortal(cursorElement, document.body);
};

export default CustomCursor;

