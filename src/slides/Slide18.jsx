import { motion } from 'framer-motion';
import { Eye, Fingerprint, Zap, Globe, Sparkles } from 'lucide-react';

export default function Slide18() {
  const futureFeatures = [
    {
      icon: Eye,
      title: 'Emotion Recognition',
      desc: 'Avatars that read and respond to viewer emotions in real-time',
    },
    {
      icon: Fingerprint,
      title: 'Hyper-Personalization',
      desc: 'Unique video for every viewer, tailored to their preferences',
    },
    {
      icon: Zap,
      title: 'Real-time Interaction',
      desc: 'Live conversations with AI avatars that feel natural',
    },
    {
      icon: Globe,
      title: 'Universal Translation',
      desc: 'Perfect lip-sync in any language, instantly',
    },
  ];

  return (
    <div className="slide slide-future">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="year-badge">
            <Sparkles size={14} />
            2026 & Beyond
          </span>
          <h2 className="slide-title">
            Future <span className="highlight">Outlook</span>
          </h2>
          <p className="slide-subtitle">
            The next frontier of AI-powered content creation
          </p>
        </motion.div>

        {/* Visual: Hyper-personalization */}
        <div className="future-grid">
          {futureFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className="future-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="card-glow"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: idx * 0.5,
                }}
              />
              <motion.div
                className="feature-icon"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: idx * 0.3,
                }}
              >
                <feature.icon size={28} />
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          className="timeline-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="timeline-track">
            <motion.div
              className="timeline-progress"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
            />
          </div>
          <div className="timeline-markers">
            <div className="marker">
              <span className="marker-year">2024</span>
              <span className="marker-label">Current State</span>
            </div>
            <div className="marker">
              <span className="marker-year">2025</span>
              <span className="marker-label">Enhanced Realism</span>
            </div>
            <div className="marker active">
              <span className="marker-year">2026</span>
              <span className="marker-label">Hyper-Personalization</span>
            </div>
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          className="insight-box"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Sparkles size={16} />
          <span>Early adopters will have a <strong>2-year advantage</strong> over competitors</span>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-future {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .year-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.2), rgba(245, 175, 25, 0.05));
          border: 1px solid rgba(245, 175, 25, 0.3);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #f5af19;
          margin-bottom: 1rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5af19 0%, #f12711 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .future-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .future-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .future-card:hover {
          border-color: rgba(245, 175, 25, 0.4);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(245, 175, 25, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.2), rgba(245, 175, 25, 0.05));
          border: 1px solid rgba(245, 175, 25, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f5af19;
          position: relative;
          z-index: 2;
        }

        .feature-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .feature-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.5;
          position: relative;
          z-index: 2;
        }

        .timeline-bar {
          margin-bottom: 2rem;
          padding: 0 2rem;
        }

        .timeline-track {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .timeline-progress {
          height: 100%;
          background: linear-gradient(90deg, #f5af19, #f12711);
          border-radius: 2px;
        }

        .timeline-markers {
          display: flex;
          justify-content: space-between;
        }

        .marker {
          text-align: center;
        }

        .marker-year {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 0.25rem;
        }

        .marker.active .marker-year {
          color: #f5af19;
        }

        .marker-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .marker.active .marker-label {
          color: rgba(255, 255, 255, 0.7);
        }

        .insight-box {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: rgba(245, 175, 25, 0.1);
          border: 1px solid rgba(245, 175, 25, 0.2);
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .insight-box svg {
          color: #f5af19;
        }

        .insight-box strong {
          color: #f5af19;
        }

        @media (max-width: 800px) {
          .future-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .future-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
