import { useState, useEffect, useCallback, useMemo, lazy, Suspense, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressIndicator from './ProgressIndicator';
import slidesData from '../data/slidesData';
import './Presentation.css';

// Lazy load slide components for better code splitting
const HeroSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.HeroSlide })));
const GiftSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.GiftSlide })));
const ParadoxSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.ParadoxSlide })));
const ChecklistSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.ChecklistSlide })));
const FormulaSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.FormulaSlide })));
const MetaphorSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.MetaphorSlide })));
const AgendaSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.AgendaSlide })));
const InsightSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.InsightSlide })));
const SectionSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.SectionSlide })));
const ToolSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.ToolSlide })));
const WorkflowIntroSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.WorkflowIntroSlide })));
const ProblemSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.ProblemSlide })));
const SolutionStepSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.SolutionStepSlide })));
const PromptSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.PromptSlide })));
const ResultSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.ResultSlide })));
const SummarySlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.SummarySlide })));
const TransitionSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.TransitionSlide })));
const QuestionSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.QuestionSlide })));
const CaseStudySlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.CaseStudySlide })));
const HeadlineSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.HeadlineSlide })));
const PrincipleSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.PrincipleSlide })));
const WarningSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.WarningSlide })));
const SolutionSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.SolutionSlide })));
const IntroductionSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.IntroductionSlide })));
const ComparisonSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.ComparisonSlide })));
const StatSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.StatSlide })));
const FeatureSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.FeatureSlide })));
const UseCaseSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.UseCaseSlide })));
const ROISlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.ROISlide })));
const OfferSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.OfferSlide })));
const PricingSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.PricingSlide })));
const BenefitsSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.BenefitsSlide })));
const SavingsSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.SavingsSlide })));
const PackageSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.PackageSlide })));
const TestimonialSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.TestimonialSlide })));
const ProcessSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.ProcessSlide })));
const FinalSlide = lazy(() => import('../slides/SlideTemplates').then(m => ({ default: m.FinalSlide })));

// Number of slides to render before/after current slide (for smooth scrolling)
const RENDER_BUFFER = 4;

// Map slide types to components
const slideComponents = {
  hero: HeroSlide,
  gift: GiftSlide,
  paradox: ParadoxSlide,
  checklist: ChecklistSlide,
  formula: FormulaSlide,
  metaphor: MetaphorSlide,
  agenda: AgendaSlide,
  insight: InsightSlide,
  section: SectionSlide,
  tool: ToolSlide,
  'workflow-intro': WorkflowIntroSlide,
  problem: ProblemSlide,
  'solution-step': SolutionStepSlide,
  prompt: PromptSlide,
  result: ResultSlide,
  summary: SummarySlide,
  transition: TransitionSlide,
  question: QuestionSlide,
  'case-study': CaseStudySlide,
  headline: HeadlineSlide,
  principle: PrincipleSlide,
  warning: WarningSlide,
  solution: SolutionSlide,
  introduction: IntroductionSlide,
  comparison: ComparisonSlide,
  stat: StatSlide,
  feature: FeatureSlide,
  'use-case': UseCaseSlide,
  roi: ROISlide,
  offer: OfferSlide,
  pricing: PricingSlide,
  benefits: BenefitsSlide,
  savings: SavingsSlide,
  package: PackageSlide,
  testimonial: TestimonialSlide,
  process: ProcessSlide,
  final: FinalSlide,
};

// Memoized loading fallback component
const SlideFallback = memo(() => (
  <div
    className="slide-fallback"
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    role="progressbar"
    aria-label="Loading slide content"
  >
    <motion.div
      className="slide-fallback__spinner"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      style={{
        width: '40px',
        height: '40px',
        border: '2px solid rgba(201, 169, 98, 0.2)',
        borderTopColor: '#c9a962',
        borderRadius: '50%',
      }}
    />
  </div>
));

SlideFallback.displayName = 'SlideFallback';

// Custom hook for debounced scroll handling
const useDebounce = (callback, delay) => {
  const timeoutRef = useMemo(() => ({ current: null }), []);

  return useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay, timeoutRef]);
};

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Debounced scroll handler for better performance
  const debouncedSetSlide = useDebounce((index) => {
    setCurrentSlide(index);
  }, 50);

  // Handle scroll to detect current slide
  useEffect(() => {
    const handleScroll = () => {
      const slides = document.querySelectorAll('[data-slide-index]');
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const slideTop = rect.top + scrollY;
        const slideCenter = slideTop + rect.height / 2;

        if (Math.abs(scrollY + viewportHeight / 2 - slideCenter) < viewportHeight / 2) {
          const index = parseInt(slide.getAttribute('data-slide-index'), 10);
          if (index !== currentSlide) {
            debouncedSetSlide(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide, debouncedSetSlide]);

  // Preload next slides for smoother navigation
  useEffect(() => {
    const preloadNextSlides = () => {
      const nextSlides = [currentSlide + 1, currentSlide + 2].filter(
        i => i < slidesData.length
      );

      nextSlides.forEach(index => {
        const slideData = slidesData[index];
        if (slideData && slideData.image) {
          const img = new Image();
          img.src = slideData.image;
        }
      });
    };

    preloadNextSlides();
  }, [currentSlide]);

  // Navigate to specific slide
  const scrollToSlide = useCallback((index) => {
    const slide = document.querySelector(`[data-slide-index="${index}"]`);
    if (slide) {
      slide.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'center'
      });
    }
  }, []);

  // Keyboard navigation with ARIA live announcements
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSlide < slidesData.length - 1) {
          scrollToSlide(currentSlide + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlide > 0) {
          scrollToSlide(currentSlide - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSlide(slidesData.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, scrollToSlide]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Determine which slides should be rendered (virtualization)
  const visibleRange = useMemo(() => {
    const start = Math.max(0, currentSlide - RENDER_BUFFER);
    const end = Math.min(slidesData.length - 1, currentSlide + RENDER_BUFFER);
    return { start, end };
  }, [currentSlide]);

  // Render slide based on type (only if in visible range)
  const renderSlide = useCallback((slideData, index) => {
    // Check if slide is within render range
    const isInRange = index >= visibleRange.start && index <= visibleRange.end;

    if (!isInRange) {
      // Return a placeholder to maintain scroll position
      return (
        <div
          key={slideData.id}
          data-slide-index={index}
          className="slide-placeholder"
          style={{ minHeight: '100vh' }}
          aria-hidden="true"
        />
      );
    }

    const SlideComponent = slideComponents[slideData.type];
    if (!SlideComponent) {
      console.warn(`Unknown slide type: ${slideData.type}`);
      return null;
    }
    return (
      <Suspense key={slideData.id} fallback={<SlideFallback />}>
        <SlideComponent data={slideData} index={index} />
      </Suspense>
    );
  }, [visibleRange]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-presentation"
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '0',
          background: '#c9a962',
          color: '#0a0a0a',
          padding: '8px 16px',
          zIndex: 10000,
          transition: 'top 0.3s',
        }}
        onFocus={(e) => e.target.style.top = '0'}
        onBlur={(e) => e.target.style.top = '-40px'}
      >
        Skip to main content
      </a>

      {/* ARIA live region for slide announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        Slide {currentSlide + 1} of {slidesData.length}
      </div>

      {/* Starfield Background - CSS only, very lightweight */}
      <div className="starfield" aria-hidden="true">
        <div className="starfield__layer starfield__layer--1" />
        <div className="starfield__layer starfield__layer--2" />
        <div className="starfield__layer starfield__layer--3" />
        <div className="starfield__nebula" />
      </div>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            role="status"
            aria-label="Loading presentation"
          >
            <motion.div
              className="loading-logo"
              animate={prefersReducedMotion ? {} : {
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="loading-diamond" />
            </motion.div>
            <motion.p
              className="loading-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading Presentation
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <ProgressIndicator
        currentSlide={currentSlide}
        totalSlides={slidesData.length}
        onSlideClick={scrollToSlide}
      />

      {/* Main Presentation */}
      <main
        id="main-presentation"
        className="presentation"
        role="region"
        aria-label="Presentation slides"
      >
        {slidesData.map((slide, index) => renderSlide(slide, index))}
      </main>

      {/* Floating Navigation Hint */}
      <motion.div
        className="nav-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        role="navigation"
        aria-label="Keyboard navigation hint"
      >
        <div className="nav-hint__keys">
          <span className="nav-hint__key" aria-label="Arrow up key">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </span>
          <span className="nav-hint__key" aria-label="Arrow down key">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </span>
        </div>
        <span className="nav-hint__text">Navigate</span>
      </motion.div>

      {/* Background Effects */}
      <div className="background-effects" aria-hidden="true">
        <div className="background-gradient" />
        <div className="background-particles" />
      </div>
    </>
  );
};

export default memo(Presentation);
