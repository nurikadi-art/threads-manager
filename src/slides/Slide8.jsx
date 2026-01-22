import { motion } from 'framer-motion';
import { FileText, Frown, Lightbulb } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="slide slide-ideation">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            Ideation <span className="highlight">Fatigue</span>
          </h2>
          <p className="slide-subtitle">
            The constant pressure to create original, engaging content drains creative reserves
          </p>
        </motion.div>

        {/* Visual: Blank Page */}
        <motion.div
          className="blank-page-visual"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="page-container">
            <motion.div
              className="paper"
              animate={{
                boxShadow: [
                  '0 20px 60px rgba(0, 0, 0, 0.3)',
                  '0 25px 80px rgba(0, 0, 0, 0.4)',
                  '0 20px 60px rgba(0, 0, 0, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="paper-lines">
                {[...Array(12)].map((_, idx) => (
                  <div key={idx} className="line" />
                ))}
              </div>

              {/* Blinking cursor */}
              <motion.div
                className="cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />

              {/* Floating thought bubbles that fade */}
              <motion.div
                className="thought-bubble bubble-1"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Lightbulb size={16} />
              </motion.div>

              <motion.div
                className="thought-bubble bubble-2"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ?
              </motion.div>

              <motion.div
                className="thought-bubble bubble-3"
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              >
                ...
              </motion.div>
            </motion.div>

            {/* Frustrated face indicator */}
            <motion.div
              className="emotion-indicator"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <Frown size={32} />
            </motion.div>
          </div>

          {/* Stressor bubbles around */}
          <div className="stressors">
            {['What to post?', "Writer's block", 'No inspiration', 'Deadline pressure', 'Content gap'].map((text, idx) => (
              <motion.div
                key={idx}
                className="stressor-pill"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + idx * 0.15 }}
                style={{
                  '--delay': `${idx * 0.5}s`,
                }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="stats-container"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="stat-box">
            <span className="stat-number">4hrs</span>
            <span className="stat-text">average time stuck on ideation per week</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">52%</span>
            <span className="stat-text">creators cite ideation as biggest challenge</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-ideation {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-wrapper {
          max-width: 900px;
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
          background: linear-gradient(135deg, #f5576c 0%, #f5af19 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin: 0 auto;
        }

        .blank-page-visual {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .page-container {
          position: relative;
          display: inline-block;
        }

        .paper {
          width: 280px;
          height: 350px;
          background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 4px;
          padding: 2rem 1.5rem;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .paper-lines {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .line {
          height: 1px;
          background: rgba(0, 0, 0, 0.1);
          width: 100%;
        }

        .cursor {
          position: absolute;
          top: 2rem;
          left: 1.5rem;
          width: 2px;
          height: 20px;
          background: #333;
        }

        .thought-bubble {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(102, 126, 234, 0.5);
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
        }

        .bubble-1 {
          top: -20px;
          right: 20px;
        }

        .bubble-2 {
          top: 30px;
          right: -25px;
        }

        .bubble-3 {
          top: 80px;
          right: -15px;
        }

        .emotion-indicator {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(245, 87, 108, 0.2), rgba(245, 87, 108, 0.1));
          border: 1px solid rgba(245, 87, 108, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f5576c;
        }

        .stressors {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 3rem;
        }

        .stressor-pill {
          padding: 0.5rem 1rem;
          background: rgba(245, 87, 108, 0.1);
          border: 1px solid rgba(245, 87, 108, 0.2);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          animation: float 3s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .stats-container {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #f5576c;
        }

        .stat-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          max-width: 150px;
          margin-top: 0.25rem;
        }

        @media (max-width: 600px) {
          .stats-container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
