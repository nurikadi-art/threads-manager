import { motion } from 'framer-motion';
import { Users, Bot, ArrowRight, Sparkles, Layers } from 'lucide-react';

export default function Slide17() {
  return (
    <div className="slide slide-hybrid">
      <motion.div
        className="section-badge"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Layers size={16} />
        <span>SECTION 05 — CONCLUSION</span>
      </motion.div>

      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            The Hybrid <span className="highlight">Workflow</span>
          </h2>
          <p className="slide-subtitle">
            Human creativity directing AI execution — the best of both worlds
          </p>
        </motion.div>

        {/* Visual: Human Director + AI Actor */}
        <div className="workflow-visual">
          {/* Human Director Side */}
          <motion.div
            className="role-card human"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="role-icon">
              <Users size={32} />
            </div>
            <h3 className="role-title">Human Director</h3>
            <ul className="role-tasks">
              <li>
                <Sparkles size={14} />
                <span>Creative vision & strategy</span>
              </li>
              <li>
                <Sparkles size={14} />
                <span>Script & narrative development</span>
              </li>
              <li>
                <Sparkles size={14} />
                <span>Brand voice & tone</span>
              </li>
              <li>
                <Sparkles size={14} />
                <span>Quality oversight</span>
              </li>
            </ul>
          </motion.div>

          {/* Connection Arrow */}
          <motion.div
            className="connection"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <motion.div
              className="connection-line"
              animate={{
                background: [
                  'linear-gradient(90deg, #f5af19 0%, #667eea 50%, #f5af19 100%)',
                  'linear-gradient(90deg, #667eea 0%, #f5af19 50%, #667eea 100%)',
                  'linear-gradient(90deg, #f5af19 0%, #667eea 50%, #f5af19 100%)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="connection-arrow"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={24} />
            </motion.div>
            <span className="connection-label">Synergy</span>
          </motion.div>

          {/* AI Actor Side */}
          <motion.div
            className="role-card ai"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              className="role-icon"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(102, 126, 234, 0.3)',
                  '0 0 40px rgba(102, 126, 234, 0.5)',
                  '0 0 20px rgba(102, 126, 234, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Bot size={32} />
            </motion.div>
            <h3 className="role-title">AI Actor</h3>
            <ul className="role-tasks">
              <li>
                <Sparkles size={14} />
                <span>24/7 content production</span>
              </li>
              <li>
                <Sparkles size={14} />
                <span>Consistent on-camera presence</span>
              </li>
              <li>
                <Sparkles size={14} />
                <span>Multilingual delivery</span>
              </li>
              <li>
                <Sparkles size={14} />
                <span>Infinite scalability</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Result Banner */}
        <motion.div
          className="result-banner"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="result-glow"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <span className="result-text">
            <strong>10x</strong> output with <strong>human authenticity</strong>
          </span>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-hybrid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.2), rgba(245, 175, 25, 0.05));
          border: 1px solid rgba(245, 175, 25, 0.3);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: #f5af19;
        }

        .section-badge span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .content-wrapper {
          max-width: 1000px;
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

        .workflow-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .role-card {
          flex: 1;
          max-width: 300px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          text-align: left;
        }

        .role-card.human {
          border-color: rgba(245, 175, 25, 0.3);
        }

        .role-card.ai {
          border-color: rgba(102, 126, 234, 0.3);
        }

        .role-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .human .role-icon {
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.2), rgba(245, 175, 25, 0.05));
          color: #f5af19;
        }

        .ai .role-icon {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(102, 126, 234, 0.05));
          color: #667eea;
        }

        .role-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .role-tasks {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .role-tasks li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .human .role-tasks li svg {
          color: #f5af19;
        }

        .ai .role-tasks li svg {
          color: #667eea;
        }

        .connection {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .connection-line {
          width: 60px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #f5af19, #667eea);
        }

        .connection-arrow {
          color: rgba(255, 255, 255, 0.5);
        }

        .connection-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .result-banner {
          position: relative;
          display: inline-block;
          padding: 1.5rem 3rem;
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.1), rgba(102, 126, 234, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 100px;
          overflow: hidden;
        }

        .result-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(245, 175, 25, 0.2), rgba(102, 126, 234, 0.2));
          filter: blur(20px);
        }

        .result-text {
          position: relative;
          z-index: 2;
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .result-text strong {
          background: linear-gradient(135deg, #f5af19, #667eea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        @media (max-width: 800px) {
          .workflow-visual {
            flex-direction: column;
          }

          .connection {
            transform: rotate(90deg);
            margin: 1rem 0;
          }
        }
      `}</style>
    </div>
  );
}
