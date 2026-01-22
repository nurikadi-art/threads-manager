import { motion } from 'framer-motion';
import { Sparkles, User, Bot } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="slide slide-avatar-intro">
      <motion.div
        className="section-badge"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles size={16} />
        <span>SECTION 03 — THE SOLUTION</span>
      </motion.div>

      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            Enter the <span className="highlight">Avatar</span>
          </h2>
          <p className="slide-subtitle">
            AI-powered digital twins that look, sound, and move like you
          </p>
        </motion.div>

        {/* Visual: Realistic Avatar vs. Cartoon */}
        <div className="comparison-visual">
          {/* Cartoon Side */}
          <motion.div
            className="avatar-card cartoon"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="card-header">
              <span className="card-label">Traditional</span>
              <span className="card-badge outdated">Outdated</span>
            </div>
            <div className="avatar-preview cartoon-preview">
              <div className="cartoon-face">
                <div className="cartoon-eyes">
                  <div className="eye" />
                  <div className="eye" />
                </div>
                <div className="cartoon-mouth" />
              </div>
              <div className="cartoon-body" />
            </div>
            <ul className="feature-list negative">
              <li>Obviously fake</li>
              <li>Limited expressions</li>
              <li>Breaks trust</li>
              <li>Low engagement</li>
            </ul>
          </motion.div>

          {/* VS Indicator */}
          <motion.div
            className="vs-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            VS
          </motion.div>

          {/* Realistic Side */}
          <motion.div
            className="avatar-card realistic"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="card-header">
              <span className="card-label">AI Avatar</span>
              <span className="card-badge modern">Cutting Edge</span>
            </div>
            <div className="avatar-preview realistic-preview">
              <motion.div
                className="realistic-glow"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="realistic-silhouette">
                <div className="face-detail">
                  <div className="eye-realistic left" />
                  <div className="eye-realistic right" />
                  <motion.div
                    className="mouth-realistic"
                    animate={{ scaleY: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
              <motion.div
                className="ai-particles"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      transform: `rotate(${i * 45}deg) translateY(-60px)`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
            <ul className="feature-list positive">
              <li>Photorealistic quality</li>
              <li>Natural expressions</li>
              <li>Builds connection</li>
              <li>High engagement</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slide-avatar-intro {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          border: 1px solid rgba(56, 239, 125, 0.3);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: #38ef7d;
        }

        .section-badge span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .comparison-visual {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 2rem;
        }

        .avatar-card {
          flex: 1;
          max-width: 320px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          text-align: left;
        }

        .avatar-card.realistic {
          border-color: rgba(56, 239, 125, 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .card-label {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .card-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-badge.outdated {
          background: rgba(245, 87, 108, 0.2);
          color: #f5576c;
        }

        .card-badge.modern {
          background: rgba(56, 239, 125, 0.2);
          color: #38ef7d;
        }

        .avatar-preview {
          height: 180px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .cartoon-preview {
          flex-direction: column;
        }

        .cartoon-face {
          width: 60px;
          height: 60px;
          background: #ffd93d;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .cartoon-eyes {
          display: flex;
          gap: 12px;
        }

        .eye {
          width: 8px;
          height: 8px;
          background: #333;
          border-radius: 50%;
        }

        .cartoon-mouth {
          width: 20px;
          height: 3px;
          background: #333;
          border-radius: 2px;
        }

        .cartoon-body {
          width: 50px;
          height: 40px;
          background: #74b9ff;
          border-radius: 10px 10px 0 0;
          margin-top: -5px;
        }

        .realistic-preview {
          position: relative;
        }

        .realistic-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(56, 239, 125, 0.3) 0%, transparent 70%);
          border-radius: 50%;
        }

        .realistic-silhouette {
          width: 80px;
          height: 100px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          border-radius: 40px 40px 20px 20px;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 20px;
        }

        .face-detail {
          width: 50px;
          height: 50px;
          position: relative;
        }

        .eye-realistic {
          position: absolute;
          width: 8px;
          height: 12px;
          background: rgba(56, 239, 125, 0.6);
          border-radius: 50%;
          top: 10px;
        }

        .eye-realistic.left { left: 8px; }
        .eye-realistic.right { right: 8px; }

        .mouth-realistic {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .ai-particles {
          position: absolute;
          width: 140px;
          height: 140px;
        }

        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: #38ef7d;
          border-radius: 50%;
          box-shadow: 0 0 10px #38ef7d;
        }

        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .feature-list li {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .feature-list.negative li {
          color: rgba(255, 255, 255, 0.4);
        }

        .feature-list.negative li::before {
          content: '✕';
          position: absolute;
          left: 0;
          color: #f5576c;
        }

        .feature-list.positive li {
          color: rgba(255, 255, 255, 0.8);
        }

        .feature-list.positive li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #38ef7d;
        }

        .vs-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          flex-shrink: 0;
          align-self: center;
        }

        @media (max-width: 800px) {
          .comparison-visual {
            flex-direction: column;
            align-items: center;
          }

          .vs-badge {
            margin: 1rem 0;
          }
        }
      `}</style>
    </div>
  );
}
