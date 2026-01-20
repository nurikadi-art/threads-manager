import { Suspense, lazy, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Slide, { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../components/Slide';
import { Spotlight } from '../components/Spotlight';
import './SlideTemplates.css';

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

// =============================================
// FLOATING PARTICLES - Luxury ambient effect
// =============================================
const FloatingParticles = () => (
  <div className="floating-particles">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="floating-particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
        }}
        animate={{
          y: [0, -100, 0],
          x: [0, Math.random() * 50 - 25, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

// =============================================
// ANIMATED LINES - Decorative elements
// =============================================
const AnimatedLines = () => (
  <div className="animated-lines">
    <motion.div
      className="animated-line animated-line--1"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    <motion.div
      className="animated-line animated-line--2"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.7 }}
    />
    <motion.div
      className="animated-line animated-line--3"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.9 }}
    />
  </div>
);

// =============================================
// SPLINE 3D ROBOT SCENE - Full screen dramatic
// =============================================
const SplineRobot = ({ onLoaded }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoaded) onLoaded();
  };

  return (
    <div className="spline-robot-full">
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="spline-robot__loader">
          <motion.div
            className="spline-robot__loader-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Initializing AI...
          </motion.span>
        </div>
      )}

      {/* Spline 3D Scene */}
      <Suspense fallback={null}>
        <Spline
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          onLoad={handleLoad}
          style={{
            width: '100%',
            height: '100%',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease'
          }}
        />
      </Suspense>

      {/* Glow effect behind robot */}
      <motion.div
        className="robot-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
};

// =============================================
// HERO SLIDE - Cinematic opening with 3D Robot
// =============================================
export const HeroSlide = ({ data, index }) => {
  const [robotLoaded, setRobotLoaded] = useState(false);

  return (
    <Slide variant="hero" id={`slide-${data.id}`} index={index}>
      <div className="hero-cinematic">
        {/* Background Effects */}
        <div className="hero-cinematic__bg">
          <div className="hero-cinematic__gradient" />
          <div className="hero-cinematic__vignette" />
          <FloatingParticles />
          <AnimatedLines />
        </div>

        {/* Multiple Spotlights */}
        <motion.div
          className="hero-cinematic__spotlight hero-cinematic__spotlight--1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="hero-cinematic__spotlight hero-cinematic__spotlight--2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        />

        {/* 3D Robot - Center/Right positioned, large */}
        <div className="hero-cinematic__robot">
          <SplineRobot onLoaded={() => setRobotLoaded(true)} />
        </div>

        {/* Content Overlay */}
        <div className="hero-cinematic__content">
          {/* Eyebrow text */}
          <motion.div
            className="hero-cinematic__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="hero-cinematic__eyebrow-line" />
            <span>WEBINAR PRESENTATION</span>
            <span className="hero-cinematic__eyebrow-line" />
          </motion.div>

          {/* Main Title with letter animation */}
          <motion.h1
            className="hero-cinematic__title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="hero-cinematic__title-line">{data.title}</span>
          </motion.h1>

          {/* Subtitle with gradient */}
          <motion.h2
            className="hero-cinematic__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {data.subtitle}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="hero-cinematic__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {data.tagline}
          </motion.p>

          {/* Decorative diamond */}
          <motion.div
            className="hero-cinematic__diamond-container"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
          >
            <div className="hero-cinematic__diamond">
              <motion.div
                className="hero-cinematic__diamond-inner"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="hero-cinematic__diamond-glow" />
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="hero-cinematic__bottom-fade" />
      </div>
    </Slide>
  );
};

// =============================================
// GIFT SLIDE - Spectacular 3D Gift Experience
// =============================================
export const GiftSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="gift-slide-new">
      {/* Subtle background glow */}
      <div className="gift-slide-new__glow" />

      {/* Main content */}
      <div className="gift-slide-new__content">
        {/* Badge */}
        <motion.div
          className="gift-slide-new__badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="gift-slide-new__badge-dot"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span>FREE GIFT</span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          className="gift-slide-new__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stay Until Q&A
        </motion.h2>

        {/* Gift value card */}
        <motion.div
          className="gift-slide-new__card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="gift-slide-new__card-header">
            <span className="gift-slide-new__card-icon">🎁</span>
            <span className="gift-slide-new__card-label">You'll Receive</span>
          </div>

          <div className="gift-slide-new__card-value">
            <span className="gift-slide-new__number">5,000</span>
            <span className="gift-slide-new__label">AI Business Prompts</span>
          </div>

          <div className="gift-slide-new__card-details">
            <div className="gift-slide-new__detail">
              <span>Email Templates</span>
              <span>500+</span>
            </div>
            <div className="gift-slide-new__detail">
              <span>Marketing Scripts</span>
              <span>1,200+</span>
            </div>
            <div className="gift-slide-new__detail">
              <span>Sales Frameworks</span>
              <span>800+</span>
            </div>
            <div className="gift-slide-new__detail">
              <span>Business Strategy</span>
              <span>2,500+</span>
            </div>
          </div>

          <div className="gift-slide-new__card-footer">
            <span className="gift-slide-new__value-strike">$297 Value</span>
            <motion.span
              className="gift-slide-new__value-free"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              FREE
            </motion.span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.p
          className="gift-slide-new__cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Claim yours at the end of Q&A
        </motion.p>
      </div>
    </div>
  </Slide>
);

// =============================================
// PARADOX SLIDE - Interactive split-screen comparison
// =============================================
export const ParadoxSlide = ({ data, index }) => {
  const [activePanel, setActivePanel] = useState(null);
  const [bothExplored, setBothExplored] = useState({ left: false, right: false });

  const handlePanelClick = (panelIndex) => {
    setActivePanel(activePanel === panelIndex ? null : panelIndex);
    if (panelIndex === 0) setBothExplored(prev => ({ ...prev, left: true }));
    if (panelIndex === 1) setBothExplored(prev => ({ ...prev, right: true }));
  };

  const showInsight = bothExplored.left && bothExplored.right;

  return (
    <Slide variant="default" id={`slide-${data.id}`} index={index}>
      <div className="paradox-slide-wow">
        {/* Background elements */}
        <div className="paradox-bg-effects">
          <motion.div
            className="paradox-bg-orb paradox-bg-orb--1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="paradox-bg-orb paradox-bg-orb--2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Title with animated underline */}
        <motion.div
          className="paradox-slide-wow__header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.span
            className="paradox-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            THE ELEPHANT IN THE ROOM
          </motion.span>
          <h2 className="paradox-slide-wow__title">{data.title}</h2>
          <motion.div
            className="paradox-slide-wow__underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="paradox-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Every founder faces this disconnect. Let's explore both sides.
          </motion.p>
        </motion.div>

        {/* Split screen panels */}
        <div className="paradox-panels">
          {/* Left Panel - Marketing Promises */}
          <motion.div
            className={`paradox-panel paradox-panel--promise ${activePanel === 0 ? 'paradox-panel--active' : ''} ${activePanel === 1 ? 'paradox-panel--inactive' : ''}`}
            onClick={() => handlePanelClick(0)}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Sparkle effects */}
            <div className="paradox-panel__sparkles">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="panel-sparkle"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                />
              ))}
            </div>

            <div className="paradox-panel__icon paradox-panel__icon--sparkle">
              <motion.svg
                viewBox="0 0 24 24"
                fill="currentColor"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
              </motion.svg>
            </div>

            <h3 className="paradox-panel__label">{data.columns[0].label}</h3>
            <p className="paradox-panel__sublabel">The hype you've heard everywhere</p>

            {activePanel === 0 && (
              <motion.div
                className="paradox-panel__details"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="paradox-list">
                  <li>
                    <span className="list-icon">🚀</span>
                    <span>"10x your productivity overnight!"</span>
                  </li>
                  <li>
                    <span className="list-icon">👥</span>
                    <span>"Replace your entire team with AI"</span>
                  </li>
                  <li>
                    <span className="list-icon">⚡</span>
                    <span>"Just type and get instant results"</span>
                  </li>
                  <li>
                    <span className="list-icon">💰</span>
                    <span>"Make millions while you sleep"</span>
                  </li>
                  <li>
                    <span className="list-icon">🎯</span>
                    <span>"Anyone can do it, no skills needed"</span>
                  </li>
                </ul>
              </motion.div>
            )}

            {bothExplored.left && (
              <motion.div
                className="panel-check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                ✓
              </motion.div>
            )}
          </motion.div>

          {/* Center divider with VS */}
          <motion.div
            className="paradox-divider"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="paradox-divider__line" />
            <motion.div
              className="paradox-divider__vs"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 20px rgba(201, 169, 98, 0.3)',
                  '0 0 40px rgba(201, 169, 98, 0.6)',
                  '0 0 20px rgba(201, 169, 98, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              VS
            </motion.div>
            <div className="paradox-divider__line" />
          </motion.div>

          {/* Right Panel - Reality */}
          <motion.div
            className={`paradox-panel paradox-panel--reality ${activePanel === 1 ? 'paradox-panel--active' : ''} ${activePanel === 0 ? 'paradox-panel--inactive' : ''}`}
            onClick={() => handlePanelClick(1)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Confusion effects */}
            <div className="paradox-panel__confusion">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confusion-mark"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.6, 0.2],
                    rotate: [-10, 10, -10]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15
                  }}
                  style={{
                    left: `${15 + i * 14}%`,
                    top: `${20 + (i % 3) * 20}%`,
                  }}
                >
                  ?
                </motion.div>
              ))}
            </div>

            <div className="paradox-panel__icon paradox-panel__icon--confused">
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9 9h.01M15 9h.01M9 15c1 1 2.5 1.5 3 1.5s2-0.5 3-1.5" />
              </motion.svg>
            </div>

            <h3 className="paradox-panel__label">{data.columns[1].label}</h3>
            <p className="paradox-panel__sublabel">The reality you're experiencing</p>

            {activePanel === 1 && (
              <motion.div
                className="paradox-panel__details"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="paradox-list paradox-list--reality">
                  <li>
                    <span className="list-icon">😫</span>
                    <span>"Great, another tool to learn..."</span>
                  </li>
                  <li>
                    <span className="list-icon">🤦</span>
                    <span>"It keeps making obvious mistakes"</span>
                  </li>
                  <li>
                    <span className="list-icon">😵</span>
                    <span>"Where do I even start?"</span>
                  </li>
                  <li>
                    <span className="list-icon">⏰</span>
                    <span>"I spend more time fixing AI output"</span>
                  </li>
                  <li>
                    <span className="list-icon">💸</span>
                    <span>"Is this just another shiny object?"</span>
                  </li>
                </ul>
              </motion.div>
            )}

            {bothExplored.right && (
              <motion.div
                className="panel-check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                ✓
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom revelation/insight */}
        <motion.div
          className={`paradox-slide-wow__revelation ${showInsight ? 'paradox-slide-wow__revelation--highlighted' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {showInsight ? (
            <motion.div
              className="paradox-insight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="insight-icon">💡</span>
              <h4>Here's the truth:</h4>
              <p>{data.content}</p>
              <p className="insight-emphasis">This webinar will bridge that gap.</p>
            </motion.div>
          ) : (
            <p className="revelation-placeholder">
              {bothExplored.left || bothExplored.right
                ? `Explore ${!bothExplored.left ? 'the left' : 'the right'} panel to unlock the insight...`
                : 'Explore both sides to understand the full picture...'}
            </p>
          )}
        </motion.div>

        {/* Click instruction */}
        <motion.div
          className="paradox-instruction"
          initial={{ opacity: 0 }}
          animate={{ opacity: !showInsight ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          👆 Click each side to explore
        </motion.div>

        {/* Progress indicator */}
        <div className="paradox-progress">
          <div className={`progress-dot ${bothExplored.left ? 'progress-dot--complete' : ''}`} />
          <div className={`progress-dot ${bothExplored.right ? 'progress-dot--complete' : ''}`} />
        </div>
      </div>
    </Slide>
  );
};

// =============================================
// CHECKLIST SLIDE - List with checkmarks
// =============================================
export const ChecklistSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="checklist-slide">
      <FadeIn>
        <h2 className="section-title">{data.title}</h2>
      </FadeIn>
      <StaggerContainer className="checklist-slide__list">
        {data.items.map((item, i) => (
          <StaggerItem key={i}>
            <div className="checklist-slide__item">
              <span className="checklist-slide__number">{i + 1}</span>
              <span className="checklist-slide__text">{item}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      {data.footer && (
        <FadeIn delay={0.8}>
          <p className="checklist-slide__footer">{data.footer}</p>
        </FadeIn>
      )}
    </div>
  </Slide>
);

// =============================================
// FORMULA SLIDE - Interactive Equation Visualization
// =============================================
export const FormulaSlide = ({ data, index }) => {
  const [step, setStep] = useState(0); // 0: start, 1: AI, 2: +, 3: Human, 4: =, 5: Leverage

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const getStepInstruction = () => {
    switch(step) {
      case 0: return "Click to build the formula";
      case 1: return "Click to add the next element";
      case 2: return "Click to continue";
      case 3: return "Click to see the result";
      case 4: return "Click to reveal the power";
      case 5: return "The complete formula for success";
      default: return "";
    }
  };

  return (
    <Slide variant="hero" id={`slide-${data.id}`} index={index}>
      <div className="formula-spectacular" onClick={nextStep}>
        {/* Background effects */}
        <div className="formula-bg">
          <motion.div
            className="formula-bg__orb formula-bg__orb--1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="formula-bg__orb formula-bg__orb--2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Header */}
        <motion.div
          className="formula-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="formula-eyebrow">THE SECRET EQUATION</span>
          <h2 className="formula-title">{data.title}</h2>
        </motion.div>

        {/* Main Formula Visualization */}
        <div className="formula-equation-visual">
          {/* AI Element */}
          <motion.div
            className={`formula-element formula-element--ai ${step >= 1 ? 'formula-element--active' : ''}`}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{
              opacity: step >= 1 ? 1 : 0.3,
              scale: step >= 1 ? 1 : 0.8,
              y: step >= 1 ? 0 : 20
            }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="element-icon element-icon--ai">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="10" r="1.5" fill="currentColor" />
                <circle cx="15" cy="10" r="1.5" fill="currentColor" />
                <path d="M9 15h6" />
                <path d="M12 2v2" />
                <path d="M8 2l1 2" />
                <path d="M16 2l-1 2" />
              </svg>
              {step >= 1 && (
                <motion.div
                  className="element-glow element-glow--blue"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
            <span className="element-label">AI</span>
            <span className="element-desc">Speed & Scale</span>
            {step >= 1 && step < 5 && (
              <motion.div
                className="element-warning"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                ⚠️ Alone: Dangerous
              </motion.div>
            )}
          </motion.div>

          {/* Plus Sign */}
          <motion.div
            className={`formula-operator ${step >= 2 ? 'formula-operator--active' : ''}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: step >= 2 ? 1 : 0,
              scale: step >= 2 ? 1 : 0,
              rotate: step >= 2 ? 0 : -180
            }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <span>+</span>
          </motion.div>

          {/* Human Judgment Element */}
          <motion.div
            className={`formula-element formula-element--human ${step >= 3 ? 'formula-element--active' : ''}`}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{
              opacity: step >= 3 ? 1 : 0.3,
              scale: step >= 3 ? 1 : 0.8,
              y: step >= 3 ? 0 : 20
            }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="element-icon element-icon--human">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
                <circle cx="12" cy="8" r="1" fill="currentColor" />
              </svg>
              {step >= 3 && (
                <motion.div
                  className="element-glow element-glow--gold"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              )}
            </div>
            <span className="element-label">Human Judgment</span>
            <span className="element-desc">Wisdom & Context</span>
            {step >= 3 && step < 5 && (
              <motion.div
                className="element-warning element-warning--slow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                🐢 Alone: Slow
              </motion.div>
            )}
          </motion.div>

          {/* Equals Sign */}
          <motion.div
            className={`formula-operator formula-operator--equals ${step >= 4 ? 'formula-operator--active' : ''}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: step >= 4 ? 1 : 0,
              scale: step >= 4 ? 1 : 0
            }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <span>=</span>
          </motion.div>

          {/* Leverage Result */}
          <motion.div
            className={`formula-element formula-element--result ${step >= 5 ? 'formula-element--active formula-element--leverage' : ''}`}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{
              opacity: step >= 5 ? 1 : 0.3,
              scale: step >= 5 ? 1.1 : 0.8,
              y: step >= 5 ? 0 : 20
            }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="element-icon element-icon--leverage">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L4 7l8 5 8-5-8-5z" />
                <path d="M4 12l8 5 8-5" />
                <path d="M4 17l8 5 8-5" />
              </svg>
              {step >= 5 && (
                <motion.div
                  className="element-glow element-glow--rainbow"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
            <span className="element-label element-label--leverage">LEVERAGE</span>
            <span className="element-desc element-desc--leverage">Unstoppable Growth</span>
          </motion.div>
        </div>

        {/* Visual Representation Below */}
        {step >= 5 && (
          <motion.div
            className="formula-visual-explanation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="visual-card">
              <div className="visual-card__icon">🤖</div>
              <div className="visual-card__content">
                <h4>AI Power</h4>
                <p>Process 1000x faster</p>
                <p>Never gets tired</p>
                <p>Scales infinitely</p>
              </div>
            </div>
            <div className="visual-card visual-card--plus">
              <span>+</span>
            </div>
            <div className="visual-card">
              <div className="visual-card__icon">🧠</div>
              <div className="visual-card__content">
                <h4>Your Wisdom</h4>
                <p>Strategic decisions</p>
                <p>Creative direction</p>
                <p>Quality control</p>
              </div>
            </div>
            <div className="visual-card visual-card--equals">
              <span>=</span>
            </div>
            <div className="visual-card visual-card--result">
              <div className="visual-card__icon">🚀</div>
              <div className="visual-card__content">
                <h4>10x Output</h4>
                <p>Scale without burnout</p>
                <p>Quality at speed</p>
                <p>Competitive edge</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom Text */}
        <motion.div
          className="formula-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {step < 5 ? (
            <p className="formula-instruction">
              {getStepInstruction()}
              <motion.span
                className="click-indicator"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                👆
              </motion.span>
            </p>
          ) : (
            <motion.div
              className="formula-conclusion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="conclusion-text">
                <span className="highlight-danger">AI alone is dangerous.</span>
                <span className="highlight-slow">Humans alone are slow.</span>
              </p>
              <p className="conclusion-result">Together, they are <span className="highlight-leverage">LEVERAGE.</span></p>
            </motion.div>
          )}
        </motion.div>

        {/* Progress dots */}
        <div className="formula-progress">
          {[0, 1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`formula-progress__dot ${step >= s ? 'formula-progress__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
};

// =============================================
// METAPHOR SLIDE - Enhanced with CSS Illustrations
// =============================================
export const MetaphorSlide = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Slide variant="default" id={`slide-${data.id}`} index={index}>
      <div className="metaphor-slide-enhanced">
        {/* Background decorations */}
        <div className="slide-bg-pattern" />
        <div className="slide-corner-decoration slide-corner-decoration--tl" />
        <div className="slide-corner-decoration slide-corner-decoration--br" />

        {/* Use actual image if available */}
        {data.image ? (
          <motion.div
            className="metaphor-illustration metaphor-illustration--image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={data.image}
              alt={data.title}
              className="metaphor-slide__image"
            />
          </motion.div>
        ) : data.icon === 'plane' ? (
          <motion.div
            className="metaphor-illustration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* CSS Cockpit Illustration */}
            <div className="css-cockpit">
              <div className="css-cockpit__frame">
                <div className="css-cockpit__window">
                  <div className="css-cockpit__clouds">
                    <div className="css-cockpit__cloud" />
                    <div className="css-cockpit__cloud" />
                    <div className="css-cockpit__cloud" />
                    <div className="css-cockpit__cloud" />
                  </div>
                </div>
                <div className="css-cockpit__dashboard">
                  <div className="css-cockpit__gauge">
                    <div className="css-cockpit__gauge-needle" />
                    <div className="css-cockpit__gauge-center" />
                  </div>
                  <div className="css-cockpit__buttons">
                    <div className="css-cockpit__btn css-cockpit__btn--lit" />
                    <div className="css-cockpit__btn" />
                    <div className="css-cockpit__btn css-cockpit__btn--lit" />
                  </div>
                  <div className="css-cockpit__gauge">
                    <div className="css-cockpit__gauge-needle" />
                    <div className="css-cockpit__gauge-center" />
                  </div>
                  <div className="css-cockpit__buttons">
                    <div className="css-cockpit__btn" />
                    <div className="css-cockpit__btn css-cockpit__btn--lit" />
                    <div className="css-cockpit__btn" />
                  </div>
                  <div className="css-cockpit__gauge">
                    <div className="css-cockpit__gauge-needle" />
                    <div className="css-cockpit__gauge-center" />
                  </div>
                </div>
              </div>
            </div>

            <motion.p
              className="metaphor-illustration__caption"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              You set the destination. The pilot flies.
            </motion.p>
          </motion.div>
        ) : data.icon === 'compass' ? (
          <motion.div
            className="metaphor-illustration"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="css-compass">
              <motion.div
                className="css-compass__needle"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : null}

        <motion.div
          className="metaphor-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="metaphor-slide__title animated-gradient-text">{data.title}</h2>
          <p className="metaphor-slide__content">{data.content}</p>
        </motion.div>
      </div>
    </Slide>
  );
};

// =============================================
// AGENDA SLIDE - Numbered list with descriptions
// =============================================
export const AgendaSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="agenda-slide">
      <FadeIn>
        <h2 className="section-title">{data.title}</h2>
      </FadeIn>
      <StaggerContainer className="agenda-slide__items">
        {data.items.map((item, i) => (
          <StaggerItem key={i}>
            <div className="agenda-slide__item">
              <div className="agenda-slide__number">{item.number}</div>
              <div className="agenda-slide__content">
                <h3 className="agenda-slide__item-title">{item.title}</h3>
                <p className="agenda-slide__item-desc">{item.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </Slide>
);

// =============================================
// INSIGHT SLIDE - Enhanced with CSS Calculator
// =============================================
export const InsightSlide = ({ data, index }) => {
  const [displayValue, setDisplayValue] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Animate calculator display on mount
  useState(() => {
    if (data.icon === 'calculator') {
      const sequence = ['W', 'WO', 'WOR', 'WORD', 'WORDS'];
      let i = 0;
      setIsAnimating(true);
      const timer = setInterval(() => {
        if (i < sequence.length) {
          setDisplayValue(sequence[i]);
          i++;
        } else {
          clearInterval(timer);
          setIsAnimating(false);
        }
      }, 400);
    }
  });

  return (
    <Slide variant="default" id={`slide-${data.id}`} index={index}>
      <div className="insight-slide-enhanced">
        {/* Background */}
        <div className="slide-bg-grid" />

        {data.icon === 'calculator' && (
          <motion.div
            className="insight-illustration"
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* CSS Calculator */}
            <div className={`css-calculator ${isAnimating ? 'css-calculator--animating' : ''}`}>
              <div className="css-calculator__screen">
                <motion.span
                  key={displayValue}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {displayValue || 'WORDS'}
                </motion.span>
              </div>
              <div className="css-calculator__buttons">
                {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', 'C', '0', '=', '+'].map((btn, i) => (
                  <motion.div
                    key={i}
                    className={`css-calculator__btn ${
                      ['÷', '×', '-', '+', '='].includes(btn)
                        ? 'css-calculator__btn--op'
                        : btn === 'C'
                          ? 'css-calculator__btn--action'
                          : 'css-calculator__btn--number'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.03 }}
                  >
                    {btn}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.p
              className="insight-illustration__caption"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Just like calculators made accountants faster...
            </motion.p>
          </motion.div>
        )}

        {data.icon === 'mask' && (
          <motion.div
            className="insight-illustration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* CSS Robot that's a people pleaser */}
            <div className="css-robot">
              <div className="css-robot__antenna" />
              <div className="css-robot__head">
                <div className="css-robot__eyes">
                  <div className="css-robot__eye" />
                  <div className="css-robot__eye" />
                </div>
              </div>
              <div className="css-robot__body">
                <div className="css-robot__chest">
                  <div className="css-robot__light" />
                  <div className="css-robot__light" />
                  <div className="css-robot__light" />
                  <div className="css-robot__light" />
                </div>
              </div>
              <div className="css-robot__arm css-robot__arm--left" />
              <div className="css-robot__arm css-robot__arm--right" />
              <div className="css-robot__legs">
                <div className="css-robot__leg" />
                <div className="css-robot__leg" />
              </div>
            </div>
            <motion.div
              className="insight-robot-speech"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              "I'll say whatever makes you happy!" 😊
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="insight-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="insight-slide__title animated-gradient-text">{data.title}</h2>
          <p className="insight-slide__content">{data.content}</p>
        </motion.div>
      </div>
    </Slide>
  );
};

// =============================================
// SECTION SLIDE - Section divider
// =============================================
export const SectionSlide = ({ data, index }) => {
  const isToolStack = data.title && data.title.includes('Tool Stack');

  return (
    <Slide variant="section" id={`slide-${data.id}`} index={index}>
      <div className="section-slide-enhanced">
        {/* Background pattern */}
        <div className="slide-bg-pattern" />

        <motion.div
          className="section-slide__header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="section-slide__title animated-gradient-text">{data.title}</h2>
        </motion.div>

        {data.subtitle && (
          <motion.h3
            className="section-slide__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {data.subtitle}
          </motion.h3>
        )}

        {/* Show all 3 AI tool icons for Tool Stack slide */}
        {isToolStack && (
          <motion.div
            className="section-slide__tools"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { name: 'ChatGPT', color: '#10a37f', icon: '🎨', desc: 'Creative Intern' },
              { name: 'Claude', color: '#cc785c', icon: '📊', desc: 'Smart Analyst' },
              { name: 'Perplexity', color: '#20b8cd', icon: '🔍', desc: 'Researcher' }
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                className="section-tool-card"
                style={{ '--tool-color': tool.color }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="section-tool-card__icon">{tool.icon}</div>
                <div className="section-tool-card__name">{tool.name}</div>
                <div className="section-tool-card__desc">{tool.desc}</div>
                <div className="section-tool-card__glow" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {data.content && (
          <motion.p
            className="section-slide__content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {data.content}
          </motion.p>
        )}
      </div>
    </Slide>
  );
};

// =============================================
// TOOL SLIDE - Enhanced AI tool showcase with logos
// =============================================
export const ToolSlide = ({ data, index }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  // Get the appropriate logo class
  const getLogoClass = () => {
    const toolLower = data.tool.toLowerCase();
    if (toolLower === 'chatgpt') return 'css-ai-logo--chatgpt';
    if (toolLower === 'claude') return 'css-ai-logo--claude';
    if (toolLower === 'perplexity') return 'css-ai-logo--perplexity';
    return '';
  };

  return (
    <Slide variant="default" id={`slide-${data.id}`} index={index}>
      <div className="tool-slide-enhanced">
        {/* Ambient glow based on tool color */}
        <motion.div
          className="tool-slide__ambient-glow"
          style={{ background: `radial-gradient(circle, ${data.color}20 0%, transparent 70%)` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* AI Logo */}
        <motion.div
          className="tool-slide__logo-container"
          initial={{ opacity: 0, y: -30, rotateY: 90 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          onClick={() => setIsRevealed(!isRevealed)}
        >
          <div
            className={`css-ai-logo ${getLogoClass()} glow-pulse`}
            style={{ '--tool-color': data.color }}
          />
          <motion.div
            className="tool-slide__logo-ring"
            style={{ borderColor: data.color }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Tool info */}
        <motion.div
          className="tool-slide__info-enhanced"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="tool-slide__name-enhanced" style={{ color: data.color }}>
            {data.tool}
            {data.company && <span className="tool-slide__company">{data.company}</span>}
          </h2>

          <motion.p
            className="tool-slide__role-enhanced"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            "{data.role}"
          </motion.p>

          <motion.div
            className="tool-slide__details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="tool-slide__use-case-enhanced">
              <span className="tool-slide__label">Best For:</span>
              <span>{data.useCase}</span>
            </div>

            {data.warning && (
              <motion.div
                className="tool-slide__warning-enhanced"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="tool-slide__warning-icon">⚠️</span>
                <span>{data.warning}</span>
              </motion.div>
            )}

            {data.why && (
              <motion.div
                className="tool-slide__strength"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="tool-slide__strength-icon">✓</span>
                <span>{data.why}</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
};

// =============================================
// WORKFLOW INTRO SLIDE
// =============================================
export const WorkflowIntroSlide = ({ data, index }) => (
  <Slide variant="hero" id={`slide-${data.id}`} index={index}>
    <div className={`workflow-intro-slide-enhanced ${data.image ? 'workflow-intro-slide-enhanced--with-image' : ''}`}>
      {data.image && (
        <motion.div
          className="workflow-intro-slide__image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={data.image} alt={data.title} className="workflow-intro-slide__image" />
        </motion.div>
      )}
      <div className="workflow-intro-slide__content">
        <ScaleIn>
          <div className="workflow-intro-slide__number">
            <span>Workflow</span>
            <span className="workflow-intro-slide__number-value">#{data.number}</span>
          </div>
        </ScaleIn>
        <FadeIn delay={0.3}>
          <h2 className="workflow-intro-slide__title text-gradient">{data.title}</h2>
        </FadeIn>
        <FadeIn delay={0.5}>
          <p className="workflow-intro-slide__subtitle">{data.subtitle}</p>
        </FadeIn>
      </div>
    </div>
  </Slide>
);

// =============================================
// PROBLEM SLIDE
// =============================================
export const ProblemSlide = ({ data, index }) => {
  // Check if this is the Financial X-Ray problem slide (slide 14)
  const isFinancialSlide = data.heading && data.heading.includes('Data Blindness');

  return (
    <Slide variant="warning" id={`slide-${data.id}`} index={index}>
      <div className={`problem-slide-enhanced ${data.image ? 'problem-slide-enhanced--with-image' : ''}`}>
        <motion.div
          className="problem-slide__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="problem-slide__title">{data.title}</h2>
          {data.heading && (
            <motion.h3
              className="problem-slide__heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {data.heading}
            </motion.h3>
          )}
        </motion.div>

        {/* Show image if available */}
        {data.image && (
          <motion.div
            className="problem-slide__image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img src={data.image} alt={data.title} className="problem-slide__image" />
          </motion.div>
        )}

        {/* Spreadsheet visualization for Financial X-Ray slide (only if no image) */}
        {isFinancialSlide && !data.image && (
          <motion.div
            className="spreadsheet-visual"
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="spreadsheet-visual__frame">
              {/* Excel-like header bar */}
              <div className="spreadsheet-visual__toolbar">
                <div className="toolbar-dots">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <span className="toolbar-title">FINAL_REPORT_V37_OVERLOAD.xlsx</span>
              </div>

              {/* Spreadsheet content */}
              <div className="spreadsheet-visual__content">
                {/* Column headers */}
                <div className="spreadsheet-row spreadsheet-row--header">
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((col) => (
                    <div key={col} className="spreadsheet-cell spreadsheet-cell--header">{col}</div>
                  ))}
                </div>

                {/* Data rows with random-looking data */}
                {[...Array(8)].map((_, rowIdx) => (
                  <motion.div
                    key={rowIdx}
                    className="spreadsheet-row"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + rowIdx * 0.05 }}
                  >
                    <div className="spreadsheet-cell spreadsheet-cell--row-num">{rowIdx + 1}</div>
                    {[...Array(11)].map((_, colIdx) => (
                      <div
                        key={colIdx}
                        className={`spreadsheet-cell ${colIdx === 3 || colIdx === 7 ? 'spreadsheet-cell--highlight' : ''} ${Math.random() > 0.7 ? 'spreadsheet-cell--error' : ''}`}
                      >
                        {colIdx === 0 ? `Item ${rowIdx + 1}` :
                         colIdx === 3 || colIdx === 7 ? `$${(Math.random() * 10000).toFixed(0)}` :
                         Math.random() > 0.5 ? (Math.random() * 100).toFixed(1) : '#REF!'}
                      </div>
                    ))}
                  </motion.div>
                ))}

                {/* Charts overlay */}
                <div className="spreadsheet-visual__charts">
                  <div className="mini-chart mini-chart--bar">
                    {[60, 80, 45, 90, 70, 55].map((h, i) => (
                      <motion.div
                        key={i}
                        className="mini-chart__bar"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        style={{ background: i % 2 === 0 ? '#4a9eff' : '#22c55e' }}
                      />
                    ))}
                  </div>
                  <div className="mini-chart mini-chart--pie">
                    <div className="pie-segment pie-segment--1" />
                    <div className="pie-segment pie-segment--2" />
                    <div className="pie-segment pie-segment--3" />
                  </div>
                </div>
              </div>
            </div>

            <motion.p
              className="spreadsheet-visual__caption"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Sound familiar?
            </motion.p>
          </motion.div>
        )}

        <motion.p
          className="problem-slide__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isFinancialSlide ? 0.8 : 0.4 }}
        >
          {data.content}
        </motion.p>

        {data.items && (
          <StaggerContainer className="problem-slide__items">
            {data.items.map((item, i) => (
              <StaggerItem key={i}>
                <div className="problem-slide__item">{item}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </Slide>
  );
};

// =============================================
// SOLUTION STEP SLIDE
// =============================================
export const SolutionStepSlide = ({ data, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const isSlide15 = data.id === 15;

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Slide variant="success" id={`slide-${data.id}`} index={index}>
      <div className="solution-step-slide">
        {data.tool && (
          <FadeIn>
            <div className="solution-step-slide__tool">{data.tool}</div>
          </FadeIn>
        )}
        <FadeIn delay={0.2}>
          <h2 className="solution-step-slide__step">{data.step}</h2>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="solution-step-slide__content">{data.content}</p>
        </FadeIn>

        {/* Video for Slide 15 */}
        {isSlide15 && (
          <ScaleIn delay={0.6}>
            <div className="slide-video-container slide-video-container--centered">
              <motion.div
                className={`slide-video-wrapper ${isPlaying ? 'playing' : ''}`}
                whileHover={{ scale: 1.02 }}
                onClick={handleVideoToggle}
                style={{ cursor: 'pointer' }}
              >
                <video
                  ref={videoRef}
                  className="slide-video"
                  src="/videos/1230(1).mp4"
                  playsInline
                  loop
                />
                {!isPlaying && (
                  <motion.div
                    className="slide-video-play-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="slide-video-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                    <span className="slide-video-hint">Click to play</span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </ScaleIn>
        )}

        {data.animation === 'upload' && !isSlide15 && (
          <ScaleIn delay={0.6}>
            <div className="solution-step-slide__animation upload-animation">
              <div className="upload-animation__box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <span>Drop PDF here</span>
              </div>
            </div>
          </ScaleIn>
        )}
        {data.animation === 'voice' && !data.image && (
          <ScaleIn delay={0.6}>
            <div className="solution-step-slide__animation voice-animation">
              <div className="voice-animation__waves">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="voice-animation__bar"
                    animate={{ scaleY: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>
          </ScaleIn>
        )}
        {data.image && (
          <motion.div
            className="solution-step-slide__image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img src={data.image} alt={data.step || data.title} className="solution-step-slide__image" />
          </motion.div>
        )}
      </div>
    </Slide>
  );
};

// =============================================
// PROMPT SLIDE
// =============================================
export const PromptSlide = ({ data, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const isSlide16 = data.id === 16;

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Slide variant="default" id={`slide-${data.id}`} index={index}>
      <div className="prompt-slide">
        {data.tool && (
          <FadeIn>
            <div className="prompt-slide__tool">{data.tool}</div>
          </FadeIn>
        )}
        <FadeIn delay={0.2}>
          <h2 className="prompt-slide__title">{data.title}</h2>
        </FadeIn>
        {data.step && (
          <FadeIn delay={0.3}>
            <p className="prompt-slide__step">{data.step}</p>
          </FadeIn>
        )}
        {data.highlight && (
          <FadeIn delay={0.4}>
            <p className="prompt-slide__highlight">{data.highlight}</p>
          </FadeIn>
        )}

        {/* Video for Slide 16 */}
        {isSlide16 && (
          <ScaleIn delay={0.5}>
            <div className="slide-video-container slide-video-container--centered">
              <motion.div
                className={`slide-video-wrapper ${isPlaying ? 'playing' : ''}`}
                whileHover={{ scale: 1.02 }}
                onClick={handleVideoToggle}
                style={{ cursor: 'pointer' }}
              >
                <video
                  ref={videoRef}
                  className="slide-video"
                  src="/videos/1230(2).mp4"
                  playsInline
                  loop
                />
                {!isPlaying && (
                  <motion.div
                    className="slide-video-play-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="slide-video-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                    <span className="slide-video-hint">Click to play</span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </ScaleIn>
        )}

        {!isSlide16 && (
          <ScaleIn delay={0.5}>
            <div className="prompt-slide__box">
              <div className="prompt-slide__box-header">
                <span className="prompt-slide__box-dot" />
                <span className="prompt-slide__box-dot" />
                <span className="prompt-slide__box-dot" />
              </div>
              <p className="prompt-slide__text">{data.promptText}</p>
            </div>
          </ScaleIn>
        )}
      </div>
    </Slide>
  );
};

// =============================================
// RESULT SLIDE
// =============================================
export const ResultSlide = ({ data, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const isSlide17 = data.id === 17;

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Slide variant="success" id={`slide-${data.id}`} index={index}>
      <div className="result-slide">
        <FadeIn>
          <h2 className="result-slide__title">{data.title}</h2>
        </FadeIn>
        {data.heading && (
          <FadeIn delay={0.2}>
            <h3 className="result-slide__heading">{data.heading}</h3>
          </FadeIn>
        )}
        {data.step && (
          <FadeIn delay={0.2}>
            <p className="result-slide__step">{data.step}</p>
          </FadeIn>
        )}
        {data.highlight && (
          <ScaleIn delay={0.4}>
            <div className="result-slide__highlight text-gradient">{data.highlight}</div>
          </ScaleIn>
        )}
        {!isSlide17 && (
          <FadeIn delay={0.5}>
            <p className="result-slide__content">{data.content}</p>
          </FadeIn>
        )}

        {/* Video for Slide 17 */}
        {isSlide17 && (
          <ScaleIn delay={0.5}>
            <div className="slide-video-container slide-video-container--centered">
              <motion.div
                className={`slide-video-wrapper ${isPlaying ? 'playing' : ''}`}
                whileHover={{ scale: 1.02 }}
                onClick={handleVideoToggle}
                style={{ cursor: 'pointer' }}
              >
                <video
                  ref={videoRef}
                  className="slide-video"
                  src="/videos/1230(4) (1).mp4"
                  playsInline
                  loop
                />
                {!isPlaying && (
                  <motion.div
                    className="slide-video-play-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="slide-video-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                    <span className="slide-video-hint">Click to play</span>
                  </motion.div>
                )}
              </motion.div>
              <p className="slide-video-caption">{data.content}</p>
            </div>
          </ScaleIn>
        )}

        {data.animation === 'chart' && !isSlide17 && (
          <ScaleIn delay={0.6}>
            <div className="result-slide__chart">
              {[60, 85, 45, 90, 70].map((height, i) => (
                <motion.div
                  key={i}
                  className="result-slide__chart-bar"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                />
              ))}
            </div>
          </ScaleIn>
        )}
        {data.animation === 'transform' && !data.image && (
          <ScaleIn delay={0.6}>
            <div className="result-slide__transform">
              <div className="result-slide__transform-before">Chaos</div>
              <motion.div
                className="result-slide__transform-arrow"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.div>
              <div className="result-slide__transform-after">Clarity</div>
            </div>
          </ScaleIn>
        )}
        {data.image && (
          <motion.div
            className="result-slide__image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img src={data.image} alt={data.title} className="result-slide__image" />
          </motion.div>
        )}
      </div>
    </Slide>
  );
};

// =============================================
// SUMMARY SLIDE
// =============================================
export const SummarySlide = ({ data, index }) => (
  <Slide variant="success" id={`slide-${data.id}`} index={index}>
    <div className="summary-slide">
      <FadeIn>
        <h2 className="summary-slide__title">{data.title}</h2>
      </FadeIn>
      <StaggerContainer className="summary-slide__items">
        {data.items.map((item, i) => (
          <StaggerItem key={i}>
            <div className="summary-slide__item">
              <div className="summary-slide__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>{item.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeIn delay={0.6}>
        <div className="summary-slide__highlight text-gradient">{data.highlight}</div>
      </FadeIn>
      <FadeIn delay={0.8}>
        <p className="summary-slide__footer">{data.footer}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// TRANSITION SLIDE
// =============================================
export const TransitionSlide = ({ data, index }) => (
  <Slide
    variant={data.style === 'warning' ? 'warning' : data.style === 'solution' ? 'success' : 'dark'}
    id={`slide-${data.id}`}
    index={index}
  >
    <div className="transition-slide">
      {data.icon && (
        <ScaleIn>
          <div className="transition-slide__icon">
            {data.icon === 'pilot' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4"/>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              </svg>
            )}
          </div>
        </ScaleIn>
      )}
      <ScaleIn delay={0.2}>
        <h2 className={`transition-slide__title ${data.style === 'dramatic' ? 'text-gradient' : ''}`}>
          {data.title}
        </h2>
      </ScaleIn>
    </div>
  </Slide>
);

// =============================================
// QUESTION SLIDE
// =============================================
export const QuestionSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className={`question-slide ${data.image ? 'question-slide--with-image' : ''}`}>
      {data.image && (
        <motion.div
          className="question-slide__image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={data.image} alt={data.title} className="question-slide__image" />
        </motion.div>
      )}
      <div className="question-slide__content-wrapper">
        <ScaleIn>
          <h2 className="question-slide__title">{data.title}</h2>
        </ScaleIn>
        {data.content && (
          <FadeIn delay={0.3}>
            <p className="question-slide__content">{data.content}</p>
          </FadeIn>
        )}
        {data.answer && (
          <FadeIn delay={0.5}>
            <p className="question-slide__answer text-gradient">{data.answer}</p>
          </FadeIn>
        )}
      </div>
    </div>
  </Slide>
);

// =============================================
// CASE STUDY SLIDE
// =============================================
export const CaseStudySlide = ({ data, index }) => (
  <Slide variant="warning" id={`slide-${data.id}`} index={index}>
    <div className="case-study-slide">
      <FadeIn>
        <h2 className="case-study-slide__title">{data.title}</h2>
      </FadeIn>
      {data.subtitle && (
        <FadeIn delay={0.2}>
          <p className="case-study-slide__subtitle">{data.subtitle}</p>
        </FadeIn>
      )}
      {data.headline && (
        <FadeIn delay={0.3}>
          <p className="case-study-slide__headline">{data.headline}</p>
        </FadeIn>
      )}
      {data.steps && (
        <StaggerContainer className="case-study-slide__timeline">
          {data.steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="case-study-slide__step">
                <div className="case-study-slide__step-number">{i + 1}</div>
                <p className="case-study-slide__step-text">{step}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  </Slide>
);

// =============================================
// HEADLINE SLIDE
// =============================================
export const HeadlineSlide = ({ data, index }) => (
  <Slide variant="warning" id={`slide-${data.id}`} index={index}>
    <div className="headline-slide">
      <FadeIn>
        <h2 className="headline-slide__title">{data.title}</h2>
      </FadeIn>
      <ScaleIn delay={0.3}>
        <div className="headline-slide__headline">
          <p>{data.headline}</p>
        </div>
      </ScaleIn>
      <FadeIn delay={0.5}>
        <p className="headline-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// PRINCIPLE SLIDE
// =============================================
export const PrincipleSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="principle-slide">
      <ScaleIn>
        <div className="principle-slide__icon">
          {data.icon === 'gavel' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14.5 2L18 5.5M9 9l6-6M16 16l-6 6M2 22l4-4M22 12l-4 4"/>
            </svg>
          )}
        </div>
      </ScaleIn>
      <FadeIn delay={0.3}>
        <h2 className="principle-slide__title text-gradient">{data.title}</h2>
      </FadeIn>
      <FadeIn delay={0.5}>
        <p className="principle-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// WARNING SLIDE
// =============================================
export const WarningSlide = ({ data, index }) => (
  <Slide variant="warning" id={`slide-${data.id}`} index={index}>
    <div className="warning-slide">
      <ScaleIn>
        <div className="warning-slide__icon">
          {data.icon === 'shield-alert' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          )}
          {data.icon === 'lock' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          )}
        </div>
      </ScaleIn>
      <FadeIn delay={0.3}>
        <h2 className="warning-slide__title">{data.title}</h2>
      </FadeIn>
      <FadeIn delay={0.5}>
        <p className="warning-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// SOLUTION SLIDE
// =============================================
export const SolutionSlide = ({ data, index }) => {
  const [step, setStep] = useState(0);
  const isHITL = data.title && data.title.includes('Human-in-the-Loop');

  return (
    <Slide variant="success" id={`slide-${data.id}`} index={index}>
      <div className="solution-slide-enhanced">
        {data.highlight && (
          <motion.div
            className="solution-slide__badge glow-pulse"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {data.highlight}
          </motion.div>
        )}

        <motion.h2
          className="solution-slide__title animated-gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {data.title}
        </motion.h2>

        {/* HITL Flow Diagram - only show if no image */}
        {isHITL && !data.image && (
          <motion.div
            className="hitl-flow-diagram"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => setStep((step + 1) % 4)}
          >
            {/* AI Node */}
            <motion.div
              className={`hitl-node hitl-node--ai ${step >= 1 ? 'hitl-node--active' : ''}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="hitl-node__icon">🤖</div>
              <div className="hitl-node__label">AI</div>
              <div className="hitl-node__desc">Creates Draft</div>
              {step >= 1 && (
                <motion.div
                  className="hitl-node__output"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  Draft Ready →
                </motion.div>
              )}
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              className={`hitl-arrow ${step >= 1 ? 'hitl-arrow--active' : ''}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: step >= 1 ? 1 : 0.3 }}
            >
              <svg viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 10 L40 10 M35 5 L45 10 L35 15" />
              </svg>
            </motion.div>

            {/* Human Node */}
            <motion.div
              className={`hitl-node hitl-node--human ${step >= 2 ? 'hitl-node--active' : ''}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="hitl-node__icon">👤</div>
              <div className="hitl-node__label">Human</div>
              <div className="hitl-node__desc">Verifies & Edits</div>
              {step >= 2 && (
                <motion.div
                  className="hitl-node__output"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  Approved ✓
                </motion.div>
              )}
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              className={`hitl-arrow ${step >= 2 ? 'hitl-arrow--active' : ''}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: step >= 2 ? 1 : 0.3 }}
            >
              <svg viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 10 L40 10 M35 5 L45 10 L35 15" />
              </svg>
            </motion.div>

            {/* Output Node */}
            <motion.div
              className={`hitl-node hitl-node--output ${step >= 3 ? 'hitl-node--active' : ''}`}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="hitl-node__icon">✨</div>
              <div className="hitl-node__label">Output</div>
              <div className="hitl-node__desc">Safe & Fast</div>
              {step >= 3 && (
                <motion.div
                  className="hitl-node__success"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  🎯 Perfect Result
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {isHITL && !data.image && (
          <motion.p
            className="hitl-instruction"
            initial={{ opacity: 0 }}
            animate={{ opacity: step < 3 ? 1 : 0.5 }}
            transition={{ delay: 1 }}
          >
            {step < 3 ? '👆 Click to see the flow' : 'Speed + Safety = Success'}
          </motion.p>
        )}

        {data.image && (
          <motion.div
            className="solution-slide__image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img src={data.image} alt={data.title} className="solution-slide__image" />
          </motion.div>
        )}

        <motion.p
          className="solution-slide__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {data.content}
        </motion.p>
      </div>
    </Slide>
  );
};

// =============================================
// INTRODUCTION SLIDE
// =============================================
export const IntroductionSlide = ({ data, index }) => (
  <Slide variant="hero" id={`slide-${data.id}`} index={index}>
    <div className="introduction-slide">
      <ScaleIn>
        <h2 className="introduction-slide__title text-gradient">{data.title}</h2>
      </ScaleIn>
      <FadeIn delay={0.3}>
        <p className="introduction-slide__subtitle">{data.subtitle}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// COMPARISON SLIDE
// =============================================
export const ComparisonSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="comparison-slide">
      <FadeIn>
        <h2 className="comparison-slide__title">{data.title}</h2>
      </FadeIn>
      <div className="comparison-slide__columns">
        <FadeIn delay={0.2} direction="left">
          <div className="comparison-slide__column comparison-slide__column--old">
            <h3>Old VA</h3>
            <ul>
              {data.oldItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.4} direction="right">
          <div className="comparison-slide__column comparison-slide__column--new">
            <h3>New VA</h3>
            <ul>
              {data.newItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </Slide>
);

// =============================================
// STAT SLIDE
// =============================================
export const StatSlide = ({ data, index }) => (
  <Slide variant="hero" id={`slide-${data.id}`} index={index}>
    <div className="stat-slide">
      <FadeIn>
        <h2 className="stat-slide__title">{data.title}</h2>
      </FadeIn>
      <ScaleIn delay={0.3}>
        <div className="stat-slide__value text-gradient">{data.value}</div>
      </ScaleIn>
    </div>
  </Slide>
);

// =============================================
// FEATURE SLIDE
// =============================================
export const FeatureSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="feature-slide">
      {data.badge && (
        <FadeIn>
          <div className="slide-badge">{data.badge}</div>
        </FadeIn>
      )}
      {data.icon && (
        <ScaleIn>
          <div className="feature-slide__icon">
            {data.icon === 'tools' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            )}
            {data.icon === 'shield' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            )}
            {data.icon === 'phone' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            )}
          </div>
        </ScaleIn>
      )}
      <FadeIn delay={0.2}>
        <h2 className="feature-slide__title">{data.title}</h2>
      </FadeIn>
      {data.steps && (
        <StaggerContainer className="feature-slide__steps">
          {data.steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="feature-slide__step">{step}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
      {data.items && (
        <StaggerContainer className="feature-slide__items">
          {data.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="feature-slide__item">{item}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
      <FadeIn delay={0.5}>
        <p className="feature-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// USE CASE SLIDE
// =============================================
export const UseCaseSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className={`use-case-slide ${data.image ? 'use-case-slide--with-image' : ''}`}>
      {data.image && (
        <motion.div
          className="use-case-slide__image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={data.image} alt={data.title} className="use-case-slide__image" />
        </motion.div>
      )}
      <div className="use-case-slide__content-wrapper">
        <ScaleIn>
          <div className="use-case-slide__number">
            <span>Use Case</span>
            <span className="use-case-slide__number-value">#{data.number}</span>
          </div>
        </ScaleIn>
        <FadeIn delay={0.2}>
          <h2 className="use-case-slide__title">{data.title}</h2>
        </FadeIn>
        {data.subtitle && (
          <FadeIn delay={0.3}>
            <p className="use-case-slide__subtitle">{data.subtitle}</p>
          </FadeIn>
        )}
        <FadeIn delay={0.4}>
          <p className="use-case-slide__content">{data.content}</p>
        </FadeIn>
      </div>
    </div>
  </Slide>
);

// =============================================
// ROI SLIDE
// =============================================
export const ROISlide = ({ data, index }) => (
  <Slide variant="success" id={`slide-${data.id}`} index={index}>
    <div className="roi-slide">
      <FadeIn>
        <h2 className="roi-slide__title">{data.title}</h2>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="roi-slide__calculation">{data.calculation}</p>
      </FadeIn>
      <ScaleIn delay={0.5}>
        <div className="roi-slide__highlight text-gradient">{data.highlight}</div>
      </ScaleIn>
    </div>
  </Slide>
);

// =============================================
// OFFER SLIDE
// =============================================
export const OfferSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="offer-slide">
      <FadeIn>
        <div className="offer-slide__badge">{data.badge}</div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h2 className="offer-slide__title">{data.title}</h2>
      </FadeIn>
      <ScaleIn delay={0.4}>
        <div className="offer-slide__highlight text-gradient">{data.highlight}</div>
      </ScaleIn>
      <FadeIn delay={0.6}>
        <div className="offer-slide__cta">{data.cta}</div>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// PRICING SLIDE
// =============================================
export const PricingSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="pricing-slide">
      <FadeIn>
        <div className="pricing-slide__badge">{data.badge}</div>
      </FadeIn>
      <ScaleIn delay={0.3}>
        <div className="pricing-slide__highlight text-gradient">{data.highlight}</div>
      </ScaleIn>
      <FadeIn delay={0.5}>
        <p className="pricing-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// BENEFITS SLIDE
// =============================================
export const BenefitsSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="benefits-slide">
      <FadeIn>
        <div className="benefits-slide__badge">{data.badge}</div>
      </FadeIn>
      <StaggerContainer className="benefits-slide__items">
        {data.items.map((item, i) => (
          <StaggerItem key={i}>
            <div className="benefits-slide__item">
              <span className="benefits-slide__check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>{item}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </Slide>
);

// =============================================
// SAVINGS SLIDE
// =============================================
export const SavingsSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="savings-slide">
      <FadeIn>
        <h2 className="savings-slide__title">{data.title}</h2>
      </FadeIn>
      <StaggerContainer className="savings-slide__items">
        {data.items.map((item, i) => (
          <StaggerItem key={i}>
            <div className="savings-slide__item">
              <span className="savings-slide__x">X</span>
              <span>{item}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </Slide>
);

// =============================================
// PACKAGE SLIDE
// =============================================
export const PackageSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="package-slide">
      <FadeIn>
        <h2 className="package-slide__title text-gradient">{data.title}</h2>
      </FadeIn>
      <ScaleIn delay={0.2}>
        <div className="package-slide__main">
          <span className="package-slide__check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </span>
          <span>{data.mainItem}</span>
        </div>
      </ScaleIn>
      <StaggerContainer className="package-slide__bonuses">
        {data.bonuses.map((bonus, i) => (
          <StaggerItem key={i}>
            <div className="package-slide__bonus">
              <span className="package-slide__gift">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/>
                </svg>
              </span>
              <span>{bonus}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeIn delay={0.8}>
        <div className="package-slide__fast-action">{data.fastAction}</div>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// TESTIMONIAL SLIDE - Enhanced with premium styling
// =============================================
export const TestimonialSlide = ({ data, index }) => {
  const testimonialQuotes = {
    'Latte': '"The VA service transformed how I run my business. I finally have time to focus on what matters."',
    'Eddy P.': '"Game-changer for scaling operations. The AI-trained assistants understand exactly what I need."'
  };

  return (
    <Slide variant="default" id={`slide-${data.id}`} index={index}>
      <div className="testimonial-slide-enhanced">
        {/* Background effects */}
        <div className="slide-bg-pattern" />
        <motion.div
          className="testimonial-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="testimonial-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="testimonial-eyebrow">SUCCESS STORIES</span>
          <h2 className="testimonial-title">{data.title}</h2>
        </motion.div>

        <motion.div
          className="css-testimonial-card"
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
        >
          {/* Stars */}
          <div className="css-testimonial-card__stars">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="css-testimonial-card__star"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                ★
              </motion.span>
            ))}
          </div>

          {/* Avatar */}
          <motion.div
            className="css-testimonial-card__avatar"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            {data.name[0]}
          </motion.div>

          <div className="css-testimonial-card__content">
            {/* Quote */}
            <motion.p
              className="css-testimonial-card__quote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {testimonialQuotes[data.name] || '"An incredible experience that exceeded all expectations."'}
            </motion.p>

            {/* Name and details */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="css-testimonial-card__name">{data.name}</h3>
              <p className="css-testimonial-card__role">{data.role}</p>
              <p className="css-testimonial-card__company">{data.company}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="testimonial-decoration"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
        >
          <div className="testimonial-quote-mark testimonial-quote-mark--left">"</div>
          <div className="testimonial-quote-mark testimonial-quote-mark--right">"</div>
        </motion.div>
      </div>
    </Slide>
  );
};

// =============================================
// PROCESS SLIDE
// =============================================
export const ProcessSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="process-slide">
      <FadeIn>
        <h2 className="process-slide__title">{data.title}</h2>
      </FadeIn>
      <StaggerContainer className="process-slide__steps">
        {data.steps.map((step, i) => (
          <StaggerItem key={i}>
            <div className="process-slide__step">
              <div className="process-slide__step-number">{step.number}</div>
              <div className="process-slide__step-title">{step.title}</div>
              {i < data.steps.length - 1 && (
                <div className="process-slide__connector">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </Slide>
);

// =============================================
// FINAL SLIDE
// =============================================
export const FinalSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="final-slide">
      <FadeIn>
        <h2 className="final-slide__title text-gradient">{data.title}</h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="final-slide__subtitle">{data.subtitle}</p>
      </FadeIn>
      <StaggerContainer className="final-slide__items">
        {data.items.map((item, i) => (
          <StaggerItem key={i}>
            <div className="final-slide__item">
              <span className="final-slide__check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>{item.text}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </Slide>
);

// =============================================
// AIRLINE EXECUTIVE SLIDE - Key metaphor
// =============================================
export const AirlineExecutiveSlide = ({ data, index }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <Slide variant="hero" id={`slide-${data.id}`} index={index}>
      <div className="airline-slide">
        {/* Header */}
        <motion.div
          className="airline-slide__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="airline-slide__eyebrow">THE KEY MINDSET SHIFT</span>
          <h2 className="airline-slide__title">
            Be the <span className="text-gradient">Airline Executive</span>
          </h2>
          <p className="airline-slide__subtitle">Not the Pilot</p>
        </motion.div>

        {/* Visual comparison */}
        <div className="airline-slide__comparison">
          {/* Pilot side - stressed */}
          <motion.div
            className={`airline-card airline-card--pilot ${hovered === 'pilot' ? 'airline-card--active' : ''}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onMouseEnter={() => setHovered('pilot')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="airline-card__icon airline-card__icon--stressed">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="5"/>
                <path d="M3 21v-2a7 7 0 017-7h4a7 7 0 017 7v2"/>
                <path d="M8 8c0-1 .5-2 1.5-2.5M16 8c0-1-.5-2-1.5-2.5" strokeLinecap="round"/>
              </svg>
              <motion.div
                className="stress-lines"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                💦
              </motion.div>
            </div>
            <h3 className="airline-card__title">The Pilot</h3>
            <p className="airline-card__desc">Doing everything yourself</p>
            <ul className="airline-card__list airline-card__list--negative">
              <li>😰 Learning every AI tool</li>
              <li>😵 Writing all the prompts</li>
              <li>🔥 Checking every output</li>
              <li>⏰ No time for strategy</li>
            </ul>
            <div className="airline-card__badge airline-card__badge--warning">
              Burnout Zone
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="airline-slide__arrow"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="airline-slide__vs">VS</span>
          </motion.div>

          {/* Executive side - relaxed */}
          <motion.div
            className={`airline-card airline-card--executive ${hovered === 'executive' ? 'airline-card--active' : ''}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onMouseEnter={() => setHovered('executive')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="airline-card__icon airline-card__icon--relaxed">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="5"/>
                <path d="M3 21v-2a7 7 0 017-7h4a7 7 0 017 7v2"/>
                <path d="M9 7.5c.5.5 1.5 1 3 1s2.5-.5 3-1" strokeLinecap="round"/>
              </svg>
              <motion.div
                className="success-glow"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
            <h3 className="airline-card__title">The Executive</h3>
            <p className="airline-card__desc">Setting the destination</p>
            <ul className="airline-card__list airline-card__list--positive">
              <li>🎯 Focus on strategy</li>
              <li>👨‍✈️ Trained pilot operates AI</li>
              <li>📈 Review results only</li>
              <li>🏖️ Time for what matters</li>
            </ul>
            <div className="airline-card__badge airline-card__badge--success">
              Growth Zone
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          className="airline-slide__quote"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p>"You pick the destination. <span className="text-gradient">They fly the plane.</span>"</p>
        </motion.div>
      </div>
    </Slide>
  );
};

// =============================================
// AI TOOL STACK SLIDE - Three persona cards
// =============================================
export const AIToolStackSlide = ({ data, index }) => {
  const [activeCard, setActiveCard] = useState(null);

  const tools = [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      persona: 'The Creative Intern',
      icon: '🎨',
      color: '#10a37f',
      useCases: ['Brainstorming ideas', 'Drafting emails', 'Rephrasing text', 'Creative writing'],
      warning: '⚠️ Hallucinates - makes things up!',
      quote: '"Great for drafts, but verify everything"'
    },
    {
      id: 'claude',
      name: 'Claude',
      persona: 'The Smart Analyst',
      icon: '📊',
      color: '#cc785c',
      useCases: ['Reviewing contracts', 'Analyzing financials', 'Writing reports', 'Complex reasoning'],
      strength: '✓ Bigger brain, safer logic',
      quote: '"Best for numbers and analysis"'
    },
    {
      id: 'perplexity',
      name: 'Perplexity',
      persona: 'The Researcher',
      icon: '🔍',
      color: '#20b8cd',
      useCases: ['Fact-checking', 'Competitor research', 'Market trends', 'Current events'],
      strength: '✓ Always cites sources',
      quote: '"Never guesses - shows receipts"'
    }
  ];

  return (
    <Slide variant="default" id={`slide-${data.id}`} index={index}>
      <div className="toolstack-slide">
        <motion.div
          className="toolstack-slide__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="toolstack-slide__eyebrow">YOUR AI TOOLKIT</span>
          <h2 className="toolstack-slide__title">The Right Tool for Each Job</h2>
          <p className="toolstack-slide__subtitle">Each AI has a personality. Learn to use the right one.</p>
        </motion.div>

        <div className="toolstack-slide__cards">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.id}
              className={`tool-card ${activeCard === tool.id ? 'tool-card--active' : ''}`}
              style={{ '--tool-color': tool.color }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              onClick={() => setActiveCard(activeCard === tool.id ? null : tool.id)}
            >
              <div className="tool-card__header">
                <span className="tool-card__icon">{tool.icon}</span>
                <div className="tool-card__names">
                  <h3 className="tool-card__name">{tool.name}</h3>
                  <p className="tool-card__persona">{tool.persona}</p>
                </div>
              </div>

              <div className="tool-card__content">
                <div className="tool-card__uses">
                  <span className="tool-card__uses-label">Best for:</span>
                  <ul>
                    {tool.useCases.map((use, j) => (
                      <li key={j}>{use}</li>
                    ))}
                  </ul>
                </div>

                {tool.warning && (
                  <div className="tool-card__warning">{tool.warning}</div>
                )}
                {tool.strength && (
                  <div className="tool-card__strength">{tool.strength}</div>
                )}

                <div className="tool-card__quote">{tool.quote}</div>
              </div>

              <div className="tool-card__glow" />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="toolstack-slide__tip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          💡 Click each card to explore
        </motion.p>
      </div>
    </Slide>
  );
};

// =============================================
// WORKFLOW DEMO SLIDE - Interactive workflow visualization
// =============================================
export const WorkflowDemoSlide = ({ data, index }) => {
  const [step, setStep] = useState(0);

  const workflows = {
    financial: {
      title: 'Financial X-Ray',
      subtitle: 'From spreadsheet confusion to instant clarity',
      tool: 'Claude',
      toolColor: '#cc785c',
      steps: [
        { label: 'Before', icon: '📊', desc: 'Messy spreadsheet with hundreds of rows' },
        { label: 'Action', icon: '⬆️', desc: 'Drag PDF into Claude' },
        { label: 'Prompt', icon: '💬', desc: '"Give me top 3 expenses as bullets"' },
        { label: 'Result', icon: '✨', desc: 'Clean bulleted analysis in 30 seconds' }
      ],
      timeSaved: '30 seconds vs. several days',
      insight: 'CFO-level analysis before your coffee gets cold'
    },
    inbox: {
      title: 'Inbox Triage',
      subtitle: 'Save your emotional battery',
      tool: 'ChatGPT',
      toolColor: '#10a37f',
      steps: [
        { label: 'Before', icon: '😠', desc: 'Angry email ruins your mood' },
        { label: 'Action', icon: '📋', desc: 'Paste email into ChatGPT' },
        { label: 'Prompt', icon: '💬', desc: '"Give me 3 response options"' },
        { label: 'Result', icon: '✅', desc: 'Professional replies ready to send' }
      ],
      timeSaved: 'Emotional energy saved',
      insight: 'Delegate the emotion to AI, keep your sanity'
    },
    commute: {
      title: 'Commute Cure',
      subtitle: 'From chaos to clarity',
      tool: 'Any AI',
      toolColor: '#c9a962',
      steps: [
        { label: 'Before', icon: '💭', desc: 'Random idea while driving' },
        { label: 'Action', icon: '🎤', desc: 'Voice message to AI' },
        { label: 'Process', icon: '🔄', desc: 'AI structures your rambling' },
        { label: 'Result', icon: '📝', desc: 'Organized notes with key points' }
      ],
      timeSaved: 'Ideas captured, never lost',
      insight: 'From chaos to clarity in seconds'
    }
  };

  const workflow = workflows[data.workflow] || workflows.financial;
  const maxSteps = workflow.steps.length;

  const nextStep = () => {
    if (step < maxSteps - 1) setStep(step + 1);
  };

  return (
    <Slide variant="default" id={`slide-${data.id}`} index={index}>
      <div className="workflow-demo" onClick={nextStep}>
        {/* Header */}
        <motion.div
          className="workflow-demo__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="workflow-demo__tool" style={{ '--tool-color': workflow.toolColor }}>
            {workflow.tool}
          </div>
          <h2 className="workflow-demo__title">{workflow.title}</h2>
          <p className="workflow-demo__subtitle">{workflow.subtitle}</p>
        </motion.div>

        {/* Step visualization */}
        <div className="workflow-demo__steps">
          {workflow.steps.map((s, i) => (
            <motion.div
              key={i}
              className={`workflow-step ${step >= i ? 'workflow-step--active' : ''} ${step === i ? 'workflow-step--current' : ''}`}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{
                opacity: step >= i ? 1 : 0.3,
                scale: step >= i ? 1 : 0.9,
                y: step === i ? -5 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="workflow-step__icon">{s.icon}</div>
              <div className="workflow-step__label">{s.label}</div>
              <div className="workflow-step__desc">{s.desc}</div>
              {i < maxSteps - 1 && (
                <div className={`workflow-step__arrow ${step > i ? 'workflow-step__arrow--active' : ''}`}>
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Result highlight */}
        {step === maxSteps - 1 && (
          <motion.div
            className="workflow-demo__result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="workflow-demo__time-saved">
              ⏱️ {workflow.timeSaved}
            </div>
            <div className="workflow-demo__insight">
              💡 {workflow.insight}
            </div>
          </motion.div>
        )}

        {/* Progress indicator */}
        <div className="workflow-demo__progress">
          {workflow.steps.map((_, i) => (
            <div
              key={i}
              className={`workflow-demo__dot ${step >= i ? 'workflow-demo__dot--active' : ''}`}
            />
          ))}
        </div>

        {step < maxSteps - 1 && (
          <motion.p
            className="workflow-demo__cta"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Click to continue →
          </motion.p>
        )}
      </div>
    </Slide>
  );
};

// =============================================
// AI FAILURE CASES SLIDE - Warning stories
// =============================================
export const AIFailureCasesSlide = ({ data, index }) => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      company: 'Air Canada',
      icon: '✈️',
      headline: 'Chatbot promised refund that didn\'t exist',
      story: 'Customer asked about bereavement refund. AI made up a policy. Court ruled Air Canada had to honor it.',
      cost: 'Legal fees + forced refund',
      lesson: 'AI will confidently lie to please users'
    },
    {
      company: 'Chevrolet',
      icon: '🚗',
      headline: '$1 Tahoe offer via prompt injection',
      story: 'Hacker tricked AI chatbot into offering a $76,000 Tahoe for $1.',
      cost: 'Reputation damage',
      lesson: 'Unsupervised AI can be manipulated'
    },
    {
      company: 'DPD',
      icon: '📦',
      headline: 'AI swore at customers',
      story: 'Delivery company\'s AI started cursing at frustrated customers. System disabled.',
      cost: 'PR nightmare + shutdown',
      lesson: 'AI can go off-script spectacularly'
    }
  ];

  return (
    <Slide variant="warning" id={`slide-${data.id}`} index={index}>
      <div className="failure-cases-slide">
        <motion.div
          className="failure-cases-slide__header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="failure-cases-slide__eyebrow">⚠️ CAUTIONARY TALES</span>
          <h2 className="failure-cases-slide__title">When AI Goes Wrong</h2>
          <p className="failure-cases-slide__subtitle">Real companies. Real consequences.</p>
        </motion.div>

        <div className="failure-cases-slide__cases">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className={`failure-case ${activeCase === i ? 'failure-case--active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => setActiveCase(i)}
            >
              <div className="failure-case__header">
                <span className="failure-case__icon">{c.icon}</span>
                <span className="failure-case__company">{c.company}</span>
              </div>
              <h3 className="failure-case__headline">{c.headline}</h3>

              {activeCase === i && (
                <motion.div
                  className="failure-case__details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <p className="failure-case__story">{c.story}</p>
                  <div className="failure-case__cost">💸 {c.cost}</div>
                  <div className="failure-case__lesson">📚 {c.lesson}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="failure-cases-slide__warning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="failure-cases-slide__warning-box">
            ⚖️ The law requires <strong>reasonable care</strong>. Unsupervised AI is <strong>NOT</strong> reasonable care.
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

// =============================================
// HUMAN IN LOOP SLIDE - Visual diagram
// =============================================
export const HumanInLoopSlide = ({ data, index }) => (
  <Slide variant="success" id={`slide-${data.id}`} index={index}>
    <div className="human-loop-slide">
      <motion.div
        className="human-loop-slide__header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="human-loop-slide__eyebrow">THE SOLUTION</span>
        <h2 className="human-loop-slide__title">Human-in-the-Loop</h2>
        <p className="human-loop-slide__subtitle">Speed of AI + Safety of Human</p>
      </motion.div>

      {/* Visual flow */}
      <div className="human-loop-slide__flow">
        <motion.div
          className="loop-node loop-node--ai"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="loop-node__icon">🤖</div>
          <div className="loop-node__label">AI</div>
          <div className="loop-node__role">Creates Draft</div>
          <div className="loop-node__speed">⚡ 2 minutes</div>
        </motion.div>

        <motion.div
          className="loop-arrow"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5 }}
        >
          →
        </motion.div>

        <motion.div
          className="loop-node loop-node--human"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="loop-node__icon">👤</div>
          <div className="loop-node__label">Human</div>
          <div className="loop-node__role">Verifies</div>
          <div className="loop-node__speed">🔍 10 minutes</div>
        </motion.div>

        <motion.div
          className="loop-arrow"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8 }}
        >
          →
        </motion.div>

        <motion.div
          className="loop-node loop-node--output"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="loop-node__icon">✅</div>
          <div className="loop-node__label">Safe Output</div>
          <div className="loop-node__role">Fast & Verified</div>
          <div className="loop-node__speed">🎯 Quality</div>
        </motion.div>
      </div>

      {/* Example */}
      <motion.div
        className="human-loop-slide__example"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <div className="example-comparison">
          <div className="example-comparison__old">
            <span>5 articles yourself:</span>
            <span className="example-comparison__time">5-10 hours</span>
          </div>
          <div className="example-comparison__vs">→</div>
          <div className="example-comparison__new">
            <span>AI + Human review:</span>
            <span className="example-comparison__time--highlight">50 minutes</span>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="human-loop-slide__quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        "Is your hourly rate low enough to be a spell checker?"
      </motion.p>
    </div>
  </Slide>
);

// =============================================
// ROI CALCULATOR SLIDE - Visual ROI
// =============================================
export const ROICalculatorSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="roi-slide">
      <motion.div
        className="roi-slide__header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="roi-slide__eyebrow">THE MATH</span>
        <h2 className="roi-slide__title">Return on Investment</h2>
      </motion.div>

      <div className="roi-slide__calculation">
        <motion.div
          className="roi-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="roi-item__value">10</span>
          <span className="roi-item__label">hours/week saved</span>
        </motion.div>

        <motion.span className="roi-operator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>×</motion.span>

        <motion.div
          className="roi-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="roi-item__value">$200</span>
          <span className="roi-item__label">your hourly value</span>
        </motion.div>

        <motion.span className="roi-operator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>=</motion.span>

        <motion.div
          className="roi-item roi-item--result"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <span className="roi-item__value text-gradient">$8,000</span>
          <span className="roi-item__label">value per month</span>
        </motion.div>
      </div>

      <motion.div
        className="roi-slide__comparison"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="roi-comparison">
          <div className="roi-comparison__item">
            <span>VA Cost: ~$2,000/mo</span>
          </div>
          <div className="roi-comparison__arrow">→</div>
          <div className="roi-comparison__item roi-comparison__item--highlight">
            <span>Value: $8,000/mo</span>
          </div>
        </div>
        <div className="roi-comparison__multiplier">
          <span className="roi-comparison__multiplier-value">4x</span>
          <span>return on investment</span>
        </div>
      </motion.div>
    </div>
  </Slide>
);
