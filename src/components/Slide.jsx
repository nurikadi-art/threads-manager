import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Slide.css';

const Slide = ({
  children,
  className = '',
  variant = 'default',
  fullHeight = true,
  id,
  index
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "-10% 0px -10% 0px"
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`slide slide--${variant} ${fullHeight ? 'slide--full' : ''} ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      data-slide-index={index}
    >
      <div className="slide__inner">
        <div className="slide__content">
          {children}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="slide__glow" />
      <div className="slide__grid" />
    </motion.section>
  );
};

// Animated text component for staggered reveals
export const AnimatedText = ({
  children,
  as: Component = 'div',
  className = '',
  delay = 0
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div variants={variants} className={className}>
      <Component>{children}</Component>
    </motion.div>
  );
};

// Animated element for fade-in effects
export const FadeIn = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {}
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// Scale-in animation
export const ScaleIn = ({ children, delay = 0, className = '' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// Stagger container for multiple items
export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// Item for use inside StaggerContainer
export const StaggerItem = ({ children, className = '' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(5px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

export default Slide;
