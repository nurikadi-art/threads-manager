import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressIndicator from './ProgressIndicator';
import {
  HeroSlide,
  GiftSlide,
  ParadoxSlide,
  ChecklistSlide,
  FormulaSlide,
  MetaphorSlide,
  AgendaSlide,
  InsightSlide,
  SectionSlide,
  ToolSlide,
  WorkflowIntroSlide,
  ProblemSlide,
  SolutionStepSlide,
  PromptSlide,
  ResultSlide,
  SummarySlide,
  TransitionSlide,
  QuestionSlide,
  CaseStudySlide,
  HeadlineSlide,
  PrincipleSlide,
  WarningSlide,
  SolutionSlide,
  IntroductionSlide,
  ComparisonSlide,
  StatSlide,
  FeatureSlide,
  UseCaseSlide,
  ROISlide,
  OfferSlide,
  PricingSlide,
  BenefitsSlide,
  SavingsSlide,
  PackageSlide,
  TestimonialSlide,
  ProcessSlide,
  FinalSlide,
} from '../slides/SlideTemplates';
import slidesData from '../data/slidesData';
import './Presentation.css';

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

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
            setCurrentSlide(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  // Navigate to specific slide
  const scrollToSlide = useCallback((index) => {
    const slide = document.querySelector(`[data-slide-index="${index}"]`);
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  // Keyboard navigation
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
  const renderSlide = (slideData, index) => {
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
        />
      );
    }

    const SlideComponent = slideComponents[slideData.type];
    if (!SlideComponent) {
      console.warn(`Unknown slide type: ${slideData.type}`);
      return null;
    }
    return <SlideComponent key={slideData.id} data={slideData} index={index} />;
  };

  return (
    <>
      {/* Subtle Pattern Background - Light theme with yellow accents */}
      <div className="subtle-pattern">
        <div className="subtle-pattern__layer subtle-pattern__layer--dots" />
        <div className="subtle-pattern__layer subtle-pattern__layer--glow" />
        <div className="subtle-pattern__accent" />
      </div>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="loading-logo"
              animate={{
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
      <main className="presentation">
        {slidesData.map((slide, index) => renderSlide(slide, index))}
      </main>

      {/* Floating Navigation Hint */}
      <motion.div
        className="nav-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="nav-hint__keys">
          <span className="nav-hint__key">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </span>
          <span className="nav-hint__key">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </span>
        </div>
        <span className="nav-hint__text">Navigate</span>
      </motion.div>

      {/* Background Effects */}
      <div className="background-effects">
        <div className="background-gradient" />
        <div className="background-particles" />
      </div>
    </>
  );
};

export default Presentation;
