import { motion } from 'framer-motion';
import { FileText, ArrowRight, Video, Sparkles } from 'lucide-react';

export default function Slide12() {
  const workflowSteps = [
    { icon: FileText, label: 'Write Script', desc: 'AI-assisted or manual' },
    { icon: Sparkles, label: 'Select Avatar', desc: 'Choose your digital twin' },
    { icon: Video, label: 'Generate Video', desc: 'Instant production' },
  ];

  return (
    <div className="slide slide-ideation-solve">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            Solving <span className="highlight">Ideation</span>
          </h2>
          <p className="slide-subtitle">
            From blank page to finished video in minutes, not days
          </p>
        </motion.div>

        {/* Visual: Script-to-Video workflow */}
        <div className="workflow-visual">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="workflow-step"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.2 }}
            >
              <motion.div
                className="step-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="step-number">{String(idx + 1).padStart(2, '0')}</div>
                <motion.div
                  className="step-icon"
                  animate={idx === 2 ? {
                    boxShadow: [
                      '0 0 20px rgba(56, 239, 125, 0.3)',
                      '0 0 40px rgba(56, 239, 125, 0.5)',
                      '0 0 20px rgba(56, 239, 125, 0.3)',
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <step.icon size={28} />
                </motion.div>
                <h3 className="step-label">{step.label}</h3>
                <p className="step-desc">{step.desc}</p>
              </motion.div>

              {idx < workflowSteps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.2 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Demo visualization */}
        <motion.div
          className="demo-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="demo-header">
            <div className="demo-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="demo-title">AI Video Generator</span>
          </div>
          <div className="demo-content">
            <div className="input-section">
              <div className="input-label">Your Script</div>
              <motion.div
                className="input-preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  "Welcome to our product launch..."
                </motion.span>
              </motion.div>
            </div>
            <motion.div
              className="processing-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
            />
            <div className="output-section">
              <div className="output-label">Generated Video</div>
              <motion.div
                className="video-preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <div className="video-placeholder">
                  <motion.div
                    className="play-indicator"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ▶
                  </motion.div>
                </div>
                <span className="video-duration">02:34</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Time comparison */}
        <motion.div
          className="time-comparison"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <div className="time-item">
            <span className="time-value old">48 hours</span>
            <span className="time-label">Traditional</span>
          </div>
          <div className="time-arrow">→</div>
          <div className="time-item">
            <span className="time-value new">15 minutes</span>
            <span className="time-label">With AI Avatar</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-ideation-solve {
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

        .workflow-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .workflow-step {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .step-card {
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          cursor: pointer;
          min-width: 160px;
        }

        .step-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 0.75rem;
        }

        .step-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          border: 1px solid rgba(56, 239, 125, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38ef7d;
        }

        .step-label {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.25rem;
        }

        .step-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .step-arrow {
          color: rgba(255, 255, 255, 0.3);
          padding: 0 0.5rem;
        }

        .demo-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .demo-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .demo-dots {
          display: flex;
          gap: 0.4rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #28ca42; }

        .demo-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .demo-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .input-section, .output-section {
          text-align: left;
        }

        .input-label, .output-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .input-preview {
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
        }

        .processing-bar {
          height: 4px;
          background: linear-gradient(90deg, #38ef7d, #11998e);
          border-radius: 2px;
          transform-origin: left;
        }

        .video-preview {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .video-placeholder {
          width: 120px;
          height: 70px;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          border: 1px solid rgba(56, 239, 125, 0.3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-indicator {
          color: #38ef7d;
          font-size: 1.25rem;
        }

        .video-duration {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .time-comparison {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
        }

        .time-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .time-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .time-value.old {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: line-through;
        }

        .time-value.new {
          color: #38ef7d;
        }

        .time-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .time-arrow {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 700px) {
          .workflow-visual {
            flex-direction: column;
          }

          .step-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </div>
  );
}
