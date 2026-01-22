import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  Layers,
  Zap,
  Brain,
  Trophy,
  Target
} from 'lucide-react';
import './index.css';

// Import all slides
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';
import Slide17 from './slides/Slide17';
import Slide18 from './slides/Slide18';
import Slide19 from './slides/Slide19';
import Slide20 from './slides/Slide20';

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5,
  Slide6, Slide7, Slide8, Slide9, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18, Slide19, Slide20
];

const sections = [
  { name: 'The Why', icon: Zap, slides: [0, 1, 2, 3], color: '#667eea' },
  { name: 'The Pain', icon: Target, slides: [4, 5, 6, 7], color: '#f5576c' },
  { name: 'The Solution', icon: Brain, slides: [8, 9, 10, 11], color: '#38ef7d' },
  { name: 'The Showcase', icon: Trophy, slides: [12, 13, 14, 15], color: '#4facfe' },
  { name: 'Conclusion', icon: Layers, slides: [16, 17, 18, 19], color: '#f5af19' },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const containerRef = useRef(null);

  const getCurrentSection = () => {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].slides.includes(currentSlide)) {
        return i;
      }
    }
    return 0;
  };

  const goToSlide = (index) => {
    if (index === currentSlide || isNavigating) return;
    setDirection(index > currentSlide ? 1 : -1);
    setIsNavigating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsNavigating(false), 600);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isNavigating) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isNavigating) {
      goToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isNavigating]);

  // Touch/swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const CurrentSlideComponent = slides[currentSlide];
  const currentSection = getCurrentSection();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div
      className="presentation-container"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated Background */}
      <div className="background-effects">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        <div className="noise-overlay" />
      </div>

      {/* Section Indicator */}
      <motion.div
        className="section-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <motion.button
              key={idx}
              className={`section-tab ${currentSection === idx ? 'active' : ''}`}
              onClick={() => goToSlide(section.slides[0])}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                '--section-color': section.color,
              }}
            >
              <Icon size={16} />
              <span>{section.name}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Main Slide Area */}
      <div className="slide-viewport">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            className="slide-wrapper"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="navigation-controls">
        <motion.button
          className="nav-button prev"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <div className="slide-dots">
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              whileHover={{ scale: 1.3 }}
              style={{
                backgroundColor: sections[getCurrentSection()]?.color || '#667eea',
              }}
            />
          ))}
        </div>

        <motion.button
          className="nav-button next"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          background: `linear-gradient(90deg, ${sections[currentSection]?.color || '#667eea'} 0%, transparent 100%)`,
        }}
      >
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Slide Counter */}
      <div className="slide-counter">
        <span className="current">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="separator">/</span>
        <span className="total">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default App;
