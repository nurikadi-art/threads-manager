import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Spotlight.css';

export const Spotlight = ({ className = '', fill = '#c9a962' }) => {
  return (
    <motion.div
      className={`spotlight ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <svg
        className="spotlight__svg"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="spotlight-gradient"
            cx="50%"
            cy="0%"
            r="100%"
            fx="50%"
            fy="0%"
          >
            <stop offset="0%" stopColor={fill} stopOpacity="0.3" />
            <stop offset="40%" stopColor={fill} stopOpacity="0.1" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="512"
          cy="200"
          rx="600"
          ry="400"
          fill="url(#spotlight-gradient)"
        />
      </svg>
    </motion.div>
  );
};

export const SpotlightBeam = ({ className = '', fill = '#c9a962' }) => {
  return (
    <motion.div
      className={`spotlight-beam ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
    >
      <svg
        className="spotlight-beam__svg"
        viewBox="0 0 400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="beam-gradient"
            x1="200"
            y1="0"
            x2="200"
            y2="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={fill} stopOpacity="0.4" />
            <stop offset="50%" stopColor={fill} stopOpacity="0.1" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M200 0 L350 800 L50 800 Z"
          fill="url(#beam-gradient)"
        />
      </svg>
    </motion.div>
  );
};

export default Spotlight;
