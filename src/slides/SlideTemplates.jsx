import { Suspense, lazy, useState } from 'react';
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
// GIFT SLIDE - Free gift announcement
// =============================================
export const GiftSlide = ({ data, index }) => (
  <Slide variant="offer" id={`slide-${data.id}`} index={index}>
    <div className="gift-slide">
      <ScaleIn>
        <div className="gift-slide__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
          </svg>
        </div>
      </ScaleIn>
      <FadeIn delay={0.3}>
        <h2 className="gift-slide__title">{data.title}</h2>
      </FadeIn>
      <FadeIn delay={0.5}>
        <p className="gift-slide__content">{data.content}</p>
      </FadeIn>
      <FadeIn delay={0.7}>
        <div className="gift-slide__highlight">{data.highlight}</div>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// PARADOX SLIDE - Two-column comparison
// =============================================
export const ParadoxSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="paradox-slide">
      <FadeIn>
        <h2 className="section-title">{data.title}</h2>
      </FadeIn>
      <div className="paradox-slide__columns">
        {data.columns.map((col, i) => (
          <FadeIn key={i} delay={0.3 + i * 0.2} direction={i === 0 ? 'left' : 'right'}>
            <div className="paradox-slide__column">
              <div className="paradox-slide__column-label">{col.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.7}>
        <p className="paradox-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

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
// FORMULA SLIDE - Equation display
// =============================================
export const FormulaSlide = ({ data, index }) => (
  <Slide variant="hero" id={`slide-${data.id}`} index={index}>
    <div className="formula-slide">
      {data.badge && (
        <FadeIn>
          <div className="slide-badge">{data.badge}</div>
        </FadeIn>
      )}
      <FadeIn delay={0.2}>
        <h2 className="section-title">{data.title}</h2>
      </FadeIn>
      <ScaleIn delay={0.4}>
        <div className="formula-slide__equation text-gradient">{data.equation}</div>
      </ScaleIn>
      <FadeIn delay={0.6}>
        <p className="formula-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// METAPHOR SLIDE - Analogy with icon
// =============================================
export const MetaphorSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="metaphor-slide">
      <ScaleIn>
        <div className="metaphor-slide__icon">
          {data.icon === 'plane' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          )}
          {data.icon === 'compass' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
            </svg>
          )}
        </div>
      </ScaleIn>
      <FadeIn delay={0.3}>
        <h2 className="metaphor-slide__title">{data.title}</h2>
      </FadeIn>
      <FadeIn delay={0.5}>
        <p className="metaphor-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

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
// INSIGHT SLIDE - Key insight with icon
// =============================================
export const InsightSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="insight-slide">
      <ScaleIn>
        <div className="insight-slide__icon">
          {data.icon === 'calculator' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="2" width="16" height="20" rx="2"/>
              <line x1="8" y1="6" x2="16" y2="6"/>
              <line x1="8" y1="10" x2="8" y2="10"/>
              <line x1="12" y1="10" x2="12" y2="10"/>
              <line x1="16" y1="10" x2="16" y2="10"/>
              <line x1="8" y1="14" x2="8" y2="14"/>
              <line x1="12" y1="14" x2="12" y2="14"/>
              <line x1="16" y1="14" x2="16" y2="14"/>
              <line x1="8" y1="18" x2="8" y2="18"/>
              <line x1="12" y1="18" x2="16" y2="18"/>
            </svg>
          )}
          {data.icon === 'mask' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          )}
        </div>
      </ScaleIn>
      <FadeIn delay={0.3}>
        <h2 className="insight-slide__title">{data.title}</h2>
      </FadeIn>
      <FadeIn delay={0.5}>
        <p className="insight-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// SECTION SLIDE - Section divider
// =============================================
export const SectionSlide = ({ data, index }) => (
  <Slide variant="section" id={`slide-${data.id}`} index={index}>
    <div className="section-slide">
      <FadeIn>
        <h2 className="section-slide__title text-gradient">{data.title}</h2>
      </FadeIn>
      {data.subtitle && (
        <FadeIn delay={0.3}>
          <h3 className="section-slide__subtitle">{data.subtitle}</h3>
        </FadeIn>
      )}
      {data.content && (
        <FadeIn delay={0.5}>
          <p className="section-slide__content">{data.content}</p>
        </FadeIn>
      )}
    </div>
  </Slide>
);

// =============================================
// TOOL SLIDE - AI tool showcase
// =============================================
export const ToolSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="tool-slide">
      <ScaleIn>
        <div className="tool-slide__logo" style={{ '--tool-color': data.color }}>
          <span className="tool-slide__logo-text">{data.tool[0]}</span>
        </div>
      </ScaleIn>
      <FadeIn delay={0.2}>
        <h2 className="tool-slide__name">
          {data.tool}
          {data.company && <span className="tool-slide__company">{data.company}</span>}
        </h2>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="tool-slide__role">{data.role}</p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="tool-slide__info">
          <div className="tool-slide__use-case">
            <span className="tool-slide__label">Use Case:</span>
            <span>{data.useCase}</span>
          </div>
          {data.warning && (
            <div className="tool-slide__warning">
              <span className="tool-slide__warning-icon">!</span>
              <span>{data.warning}</span>
            </div>
          )}
          {data.why && (
            <div className="tool-slide__why">
              <span className="tool-slide__label">Why:</span>
              <span>"{data.why}"</span>
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  </Slide>
);

// =============================================
// WORKFLOW INTRO SLIDE
// =============================================
export const WorkflowIntroSlide = ({ data, index }) => (
  <Slide variant="hero" id={`slide-${data.id}`} index={index}>
    <div className="workflow-intro-slide">
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
  </Slide>
);

// =============================================
// PROBLEM SLIDE
// =============================================
export const ProblemSlide = ({ data, index }) => (
  <Slide variant="warning" id={`slide-${data.id}`} index={index}>
    <div className="problem-slide">
      <FadeIn>
        <h2 className="problem-slide__title">{data.title}</h2>
      </FadeIn>
      {data.heading && (
        <FadeIn delay={0.2}>
          <h3 className="problem-slide__heading">{data.heading}</h3>
        </FadeIn>
      )}
      <FadeIn delay={0.4}>
        <p className="problem-slide__content">{data.content}</p>
      </FadeIn>
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

// =============================================
// SOLUTION STEP SLIDE
// =============================================
export const SolutionStepSlide = ({ data, index }) => (
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
      {data.animation === 'upload' && (
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
      {data.animation === 'voice' && (
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
    </div>
  </Slide>
);

// =============================================
// PROMPT SLIDE
// =============================================
export const PromptSlide = ({ data, index }) => (
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
    </div>
  </Slide>
);

// =============================================
// RESULT SLIDE
// =============================================
export const ResultSlide = ({ data, index }) => (
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
      <FadeIn delay={0.5}>
        <p className="result-slide__content">{data.content}</p>
      </FadeIn>
      {data.animation === 'chart' && (
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
      {data.animation === 'transform' && (
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
    </div>
  </Slide>
);

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
    <div className="question-slide">
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
export const SolutionSlide = ({ data, index }) => (
  <Slide variant="success" id={`slide-${data.id}`} index={index}>
    <div className="solution-slide">
      {data.highlight && (
        <FadeIn>
          <div className="solution-slide__badge">{data.highlight}</div>
        </FadeIn>
      )}
      <FadeIn delay={0.2}>
        <h2 className="solution-slide__title text-gradient">{data.title}</h2>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p className="solution-slide__content">{data.content}</p>
      </FadeIn>
    </div>
  </Slide>
);

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
    <div className="use-case-slide">
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
// TESTIMONIAL SLIDE
// =============================================
export const TestimonialSlide = ({ data, index }) => (
  <Slide variant="default" id={`slide-${data.id}`} index={index}>
    <div className="testimonial-slide">
      <FadeIn>
        <h2 className="testimonial-slide__header">{data.title}</h2>
      </FadeIn>
      <ScaleIn delay={0.3}>
        <div className="testimonial-slide__card">
          <div className="testimonial-slide__avatar">
            <span>{data.name[0]}</span>
          </div>
          <div className="testimonial-slide__info">
            <h3 className="testimonial-slide__name">{data.name}</h3>
            <p className="testimonial-slide__role">{data.role}</p>
            <p className="testimonial-slide__company">{data.company}</p>
          </div>
        </div>
      </ScaleIn>
    </div>
  </Slide>
);

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
