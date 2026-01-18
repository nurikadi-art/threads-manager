import { Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';
import './SplineScene.css';

// Lazy load Spline to improve initial load time
const Spline = lazy(() => import('@splinetool/react-spline'));

export const SplineScene = ({
  scene,
  className = '',
  fallback = null
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`spline-scene spline-scene--error ${className}`}>
        <div className="spline-scene__fallback">
          {fallback || <SplineFallback />}
        </div>
      </div>
    );
  }

  return (
    <div className={`spline-scene ${className}`}>
      {/* Loading state */}
      {!isLoaded && (
        <div className="spline-scene__loader">
          <motion.div
            className="spline-scene__loader-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
          <span>Loading 3D...</span>
        </div>
      )}

      {/* Spline component */}
      <Suspense fallback={null}>
        <Spline
          scene={scene}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        />
      </Suspense>
    </div>
  );
};

// Fallback component with animated shapes
const SplineFallback = () => (
  <div className="spline-fallback">
    <motion.div
      className="spline-fallback__shape spline-fallback__shape--1"
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 180, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="spline-fallback__shape spline-fallback__shape--2"
      animate={{
        rotateY: [360, 0],
        rotateZ: [0, 180, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="spline-fallback__glow"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

export default SplineScene;
