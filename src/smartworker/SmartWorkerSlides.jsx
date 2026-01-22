import { motion } from 'framer-motion';
import { smartworkerSlides } from '../data/smartworkerSlidesData';
import '../styles/smartworker.css';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// Slide wrapper component
const Slide = ({ children, id }) => (
  <section className="sw-slide" id={`slide-${id}`}>
    <div className="sw-slide__inner">
      {children}
    </div>
  </section>
);

// Title Slide
const TitleSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      style={{ textAlign: 'center', padding: '80px 40px' }}
    >
      <div className="sw-orb sw-orb--1" />
      <div className="sw-orb sw-orb--2" />
      <motion.div className="sw-badge sw-badge--gold" variants={fadeIn}>
        {data.badge}
      </motion.div>
      <motion.h1 className="sw-title" variants={fadeIn}>
        {data.title}
      </motion.h1>
      <motion.p className="sw-subtitle" variants={fadeIn}>
        {data.subtitle}
      </motion.p>
    </motion.div>
  </Slide>
);

// Section Slide
const SectionSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-section-header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <h2 className="sw-title sw-title--gradient">{data.title}</h2>
      {data.subtitle && <p className="sw-subtitle">{data.subtitle}</p>}
    </motion.div>
  </Slide>
);

// Quote Slide
const QuoteSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <p className="sw-quote">{data.text}</p>
    </motion.div>
  </Slide>
);

// Benefits/About Slide
const BenefitsSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      {data.subtitle && <motion.p className="sw-subtitle" variants={fadeIn}>{data.subtitle}</motion.p>}
      <div className="sw-grid sw-grid--3">
        {data.items?.map((item, i) => (
          <motion.div key={i} className="sw-feature-card" variants={fadeIn}>
            <div className="sw-feature-card__icon">
              {i === 0 ? '🎯' : i === 1 ? '✨' : '💰'}
            </div>
            <h3 className="sw-feature-card__title">{item.title || item.name}</h3>
            <p className="sw-feature-card__text">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Slide>
);

// Problem/Warning Slide
const ProblemSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      {data.subtitle && <motion.p className="sw-subtitle" variants={fadeIn}>{data.subtitle}</motion.p>}
      {data.content && <motion.p className="sw-text sw-text--large" variants={fadeIn}>{data.content}</motion.p>}
      {(data.points || data.items) && (
        <ul className="sw-list">
          {(data.points || data.items).map((item, i) => (
            <motion.li key={i} className="sw-list__item" variants={fadeIn}>
              <span className="sw-list__icon">!</span>
              <span>{typeof item === 'string' ? item : item}</span>
            </motion.li>
          ))}
        </ul>
      )}
      {data.highlight && (
        <motion.p className="sw-highlight" variants={fadeIn} style={{ marginTop: '24px', fontSize: '1.25rem' }}>
          {data.highlight}
        </motion.p>
      )}
      {data.footer && <p className="sw-footer-text">{data.footer}</p>}
    </motion.div>
  </Slide>
);

// Comparison Slide
const ComparisonSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      <div className="sw-comparison">
        <motion.div className="sw-comparison__side sw-comparison__side--negative" variants={fadeIn}>
          <h3 className="sw-comparison__title">{data.left?.title || data.wrong?.title}</h3>
          <ul className="sw-list">
            {(data.left?.items || data.wrong?.items)?.map((item, i) => (
              <li key={i} className="sw-list__item">
                <span className="sw-list__icon" style={{ background: '#ef4444' }}>✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="sw-comparison__side sw-comparison__side--positive" variants={fadeIn}>
          <h3 className="sw-comparison__title">{data.right?.title}</h3>
          <ul className="sw-list">
            {data.right?.items?.map((item, i) => (
              <li key={i} className="sw-list__item">
                <span className="sw-list__icon" style={{ background: '#22c55e' }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      {data.footer && <p className="sw-footer-text">{data.footer}</p>}
    </motion.div>
  </Slide>
);

// Agenda Slide
const AgendaSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
        {data.items?.map((item, i) => (
          <motion.div key={i} className="sw-star-item" variants={fadeIn}>
            <div className="sw-star-item__letter">{item.number}</div>
            <div className="sw-star-item__content">
              <p className="sw-star-item__text" style={{ fontSize: '1.125rem' }}>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Slide>
);

// Solution Slide
const SolutionSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      style={{ textAlign: 'center' }}
    >
      {data.badge && <motion.div className="sw-badge" variants={fadeIn}>{data.badge}</motion.div>}
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      {data.subtitle && <motion.p className="sw-subtitle" variants={fadeIn}>{data.subtitle}</motion.p>}
      {data.highlight && (
        <motion.div className="sw-price" variants={fadeIn}>{data.highlight}</motion.div>
      )}
      {data.stats && (
        <motion.div variants={fadeIn} style={{ marginTop: '24px' }}>
          {data.stats.map((stat, i) => (
            <p key={i} className="sw-text sw-text--large">{stat}</p>
          ))}
        </motion.div>
      )}
    </motion.div>
  </Slide>
);

// Chart Slide
const ChartSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      <div style={{ marginTop: '40px' }}>
        {data.data?.map((item, i) => (
          <motion.div key={i} className="sw-chart-bar" variants={fadeIn}>
            <div className="sw-chart-bar__label">{item.label}</div>
            <div className="sw-chart-bar__track">
              <motion.div
                className="sw-chart-bar__fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.value / 2000) * 100}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
              >
                ${item.value}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      {data.source && <p className="sw-footer-text">{data.source}</p>}
    </motion.div>
  </Slide>
);

// Roles Slide
const RolesSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      {data.subtitle && <motion.p className="sw-subtitle" variants={fadeIn}>{data.subtitle}</motion.p>}
      <div className="sw-grid sw-grid--3">
        {data.items?.map((item, i) => (
          <motion.div key={i} className="sw-feature-card" variants={fadeIn}>
            <div className="sw-feature-card__icon">
              {i === 0 ? '📋' : i === 1 ? '📱' : '💬'}
            </div>
            <h3 className="sw-feature-card__title">{item.title}</h3>
            <p className="sw-feature-card__text">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Slide>
);

// Template/Script Slide
const TemplateSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {data.badge && <motion.div className="sw-badge" variants={fadeIn}>{data.badge}</motion.div>}
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      {data.subtitle && <motion.p className="sw-subtitle" variants={fadeIn}>{data.subtitle}</motion.p>}
      <motion.div className="sw-code-block" variants={fadeIn}>
        {data.script}
      </motion.div>
    </motion.div>
  </Slide>
);

// STAR Method Slide
const StarSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      {data.subtitle && <motion.div className="sw-badge" variants={fadeIn}>{data.subtitle}</motion.div>}
      <div style={{ marginTop: '32px' }}>
        {data.items?.map((item, i) => (
          <motion.div key={i} className="sw-star-item" variants={fadeIn}>
            <div className="sw-star-item__letter">{item.letter}</div>
            <div className="sw-star-item__content">
              <p className="sw-star-item__title">{item.title}</p>
              <p className="sw-star-item__text">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {data.footer && <p className="sw-footer-text">{data.footer}</p>}
    </motion.div>
  </Slide>
);

// Do/Don't Slide
const DoDontSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      <div className="sw-comparison">
        <motion.div className="sw-comparison__side sw-comparison__side--positive" variants={fadeIn}>
          <h3 className="sw-comparison__title">Do</h3>
          <ul className="sw-list">
            {data.doItems?.map((item, i) => (
              <li key={i} className="sw-list__item">
                <span className="sw-list__icon" style={{ background: '#22c55e' }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="sw-comparison__side sw-comparison__side--negative" variants={fadeIn}>
          <h3 className="sw-comparison__title">Don&apos;t</h3>
          <ul className="sw-list">
            {data.dontItems?.map((item, i) => (
              <li key={i} className="sw-list__item">
                <span className="sw-list__icon" style={{ background: '#ef4444' }}>✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  </Slide>
);

// Bonus Item Slide
const BonusSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      style={{ textAlign: 'center' }}
    >
      <motion.div className="sw-badge sw-badge--gold" variants={fadeIn}>{data.badge}</motion.div>
      <motion.h2 className="sw-title sw-title--gradient" variants={fadeIn}>{data.title}</motion.h2>
      {data.subtitle && <motion.p className="sw-subtitle" variants={fadeIn}>{data.subtitle}</motion.p>}
      <motion.p className="sw-text sw-text--large" variants={fadeIn}>{data.content}</motion.p>
      {data.highlight && (
        <motion.p className="sw-highlight" variants={fadeIn} style={{ marginTop: '24px' }}>
          {data.highlight}
        </motion.p>
      )}
      {data.cta && (
        <motion.button className="sw-button sw-button--large sw-button--gradient" variants={fadeIn} style={{ marginTop: '32px' }}>
          {data.cta}
        </motion.button>
      )}
      {data.footer && <p className="sw-footer-text">{data.footer}</p>}
    </motion.div>
  </Slide>
);

// Pricing Breakdown Slide
const PricingSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      <div style={{ marginTop: '32px' }}>
        {data.items?.map((item, i) => (
          <motion.div key={i} className="sw-pricing-item" variants={fadeIn}>
            <div>
              <span className="sw-pricing-item__name">{item.name}</span>
              <span className="sw-pricing-item__note"> {item.note}</span>
            </div>
            <span className="sw-pricing-item__price">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Slide>
);

// Final Offer Slide
const FinalOfferSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      style={{ textAlign: 'center' }}
    >
      <motion.h2 className="sw-title sw-title--gradient" variants={fadeIn}>{data.title}</motion.h2>
      <motion.p className="sw-text sw-text--large" variants={fadeIn}>{data.content}</motion.p>
      <motion.div variants={fadeIn} style={{ margin: '40px 0' }}>
        <p className="sw-subtitle">{data.priceLabel}</p>
        <div className="sw-price">{data.price}</div>
      </motion.div>
      <motion.p className="sw-text" variants={fadeIn}>{data.testimonial}</motion.p>
      {data.contacts && (
        <motion.div variants={fadeIn} style={{ marginTop: '32px' }}>
          {data.contacts.map((contact, i) => (
            <p key={i} className="sw-text" style={{ margin: '8px 0' }}>
              👉 {contact.type}: <strong>{contact.value}</strong>
            </p>
          ))}
        </motion.div>
      )}
      <motion.div className="sw-highlight" variants={fadeIn} style={{ marginTop: '24px', padding: '16px 24px' }}>
        {data.cta}
      </motion.div>
    </motion.div>
  </Slide>
);

// Generic Slide (fallback)
const GenericSlide = ({ data }) => (
  <Slide id={data.id}>
    <motion.div
      className="sw-glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {data.badge && <motion.div className="sw-badge" variants={fadeIn}>{data.badge}</motion.div>}
      <motion.h2 className="sw-title" variants={fadeIn}>{data.title}</motion.h2>
      {data.subtitle && <motion.p className="sw-subtitle" variants={fadeIn}>{data.subtitle}</motion.p>}
      {data.content && <motion.p className="sw-text sw-text--large" variants={fadeIn}>{data.content}</motion.p>}
      {data.items && (
        <ul className="sw-list">
          {data.items.map((item, i) => (
            <motion.li key={i} className="sw-list__item" variants={fadeIn}>
              <span className="sw-list__icon">•</span>
              <span>{typeof item === 'string' ? item : item.title || item.text || item.name}</span>
            </motion.li>
          ))}
        </ul>
      )}
      {data.footer && <p className="sw-footer-text">{data.footer}</p>}
    </motion.div>
  </Slide>
);

// Slide type mapper
const slideComponents = {
  'title': TitleSlide,
  'section': SectionSlide,
  'quote': QuoteSlide,
  'benefits': BenefitsSlide,
  'about': BenefitsSlide,
  'reputation': BenefitsSlide,
  'problem': ProblemSlide,
  'warning': ProblemSlide,
  'audience': ProblemSlide,
  'problems': ProblemSlide,
  'checklist': ProblemSlide,
  'targets': ProblemSlide,
  'connections': ProblemSlide,
  'comparison': ComparisonSlide,
  'myth': ComparisonSlide,
  'agenda': AgendaSlide,
  'solution': SolutionSlide,
  'scaling': SolutionSlide,
  'growth': SolutionSlide,
  'chart': ChartSlide,
  'roles': RolesSlide,
  'template': TemplateSlide,
  'video-resume': TemplateSlide,
  'money': TemplateSlide,
  'star': StarSlide,
  'answer': StarSlide,
  'pillars': StarSlide,
  'do-dont': DoDontSlide,
  'bonus': BonusSlide,
  'bonus-item': BonusSlide,
  'module': BonusSlide,
  'pricing-breakdown': PricingSlide,
  'offer-summary': ProblemSlide,
  'final-offer': FinalOfferSlide,
  'package-intro': SectionSlide,
};

// Main SmartWorker Presentation Component
const SmartWorkerPresentation = () => {
  return (
    <div className="smartworker-app">
      <div className="sw-gradient-bg" />

      {/* Brand */}
      <div className="sw-brand">
        <span className="sw-brand__logo">smartworker</span>
      </div>

      {/* Slides */}
      {smartworkerSlides.map((slide) => {
        const SlideComponent = slideComponents[slide.type] || GenericSlide;
        return <SlideComponent key={slide.id} data={slide} />;
      })}

      {/* Slide counter */}
      <div className="sw-slide-counter">
        SmartWorker • {smartworkerSlides.length} slides
      </div>
    </div>
  );
};

export default SmartWorkerPresentation;
