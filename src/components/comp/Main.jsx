import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useInView } from 'react-intersection-observer';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const onLoad = () => {
    setIsLoading(false);
  };

  const onError = (e) => {
    console.error("Spline scene failed to load:", e);
    setError(true);
    setIsLoading(false);
  };

  return (
    <div ref={ref} className="relative w-full h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-screen bg-gray-900">
      {isLoading && inView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-7 w-7 sm:h-10 sm:w-10 md:h-14 md:w-14 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      {inView && (
        <Suspense fallback={null}>
          <div className="w-full h-full">
          <Spline 
            scene="https://prod.spline.design/wc5lafivorXQYX7K/scene.splinecode" 
            onLoad={onLoad}
            onError={onError}
              style={{ width: '100%', height: '100%' }}
          />
          </div>
        </Suspense>
      )}

      {error && inView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 rounded-lg shadow-lg text-[10px] sm:text-xs md:text-base">
            Failed to load 3D scene. Please refresh the page.
          </div>
        </div>
      )}

      <div className="absolute bottom-6 right-6 sm:bottom-2 sm:right-2 md:bottom-4 md:right-4 bg-black rounded-lg px-4 py-2 sm:px-3 sm:py-1 md:px-6 md:py-2 shadow-lg z-10 max-w-[90vw] w-auto">
        <p className="text-base sm:text-xs md:text-sm text-white font-semibold truncate text-right">Grahmind</p>
      </div>
    </div>
  );
};

export default Main;




