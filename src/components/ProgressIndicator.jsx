import { motion } from 'framer-motion';
import './ProgressIndicator.css';

const ProgressIndicator = ({ currentSlide, totalSlides, onSlideClick }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  // Group slides into sections for the mini-nav
  const sections = [
    { name: 'Intro', start: 0, end: 8 },
    { name: 'Tools', start: 9, end: 12 },
    { name: 'Workflows', start: 13, end: 27 },
    { name: 'Risks', start: 28, end: 39 },
    { name: 'Solution', start: 40, end: 54 },
    { name: 'Offer', start: 55, end: 67 },
  ];

  const getCurrentSection = () => {
    for (const section of sections) {
      if (currentSlide >= section.start && currentSlide <= section.end) {
        return section.name;
      }
    }
    return sections[0].name;
  };

  return (
    <div className="progress-indicator">
      {/* Main Progress Bar */}
      <div className="progress-bar">
        <motion.div
          className="progress-bar__fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Slide Counter */}
      <div className="progress-counter">
        <span className="progress-counter__current">{currentSlide + 1}</span>
        <span className="progress-counter__divider">/</span>
        <span className="progress-counter__total">{totalSlides}</span>
      </div>

      {/* Section Name */}
      <div className="progress-section">
        {getCurrentSection()}
      </div>

      {/* Dot Navigation */}
      <div className="progress-dots">
        {sections.map((section, idx) => (
          <button
            key={section.name}
            className={`progress-dot ${
              currentSlide >= section.start && currentSlide <= section.end
                ? 'progress-dot--active'
                : ''
            } ${
              currentSlide > section.end ? 'progress-dot--completed' : ''
            }`}
            onClick={() => onSlideClick(section.start)}
            title={section.name}
          >
            <span className="progress-dot__tooltip">{section.name}</span>
          </button>
        ))}
      </div>

      {/* Scroll Hint (only on first slide) */}
      {currentSlide === 0 && (
        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span>Scroll to explore</span>
          <motion.div
            className="scroll-hint__arrow"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProgressIndicator;
