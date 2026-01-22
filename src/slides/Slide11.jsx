import { motion } from 'framer-motion';
import { Moon, Clock, Zap, Building2 } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="slide slide-reliability">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            <span className="highlight">24/7</span> Reliability
          </h2>
          <p className="slide-subtitle">
            Your AI avatar never sleeps, never calls in sick, never needs a break
          </p>
        </motion.div>

        {/* Visual: Avatar working while city sleeps */}
        <motion.div
          className="city-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {/* Night sky with stars */}
          <div className="night-sky">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            <motion.div
              className="moon"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Moon size={40} />
            </motion.div>
          </div>

          {/* City skyline */}
          <div className="skyline">
            {[120, 180, 100, 220, 140, 190, 110, 160, 200, 130].map((height, i) => (
              <div
                key={i}
                className="building"
                style={{ height: `${height}px` }}
              >
                {/* Dark windows (sleeping) */}
                <div className="windows">
                  {[...Array(Math.floor(height / 30))].map((_, j) => (
                    <div
                      key={j}
                      className="window-row"
                    >
                      <div className="window dark" />
                      <div className="window dark" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AI Avatar working - glowing screen */}
          <motion.div
            className="avatar-workstation"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <motion.div
              className="glow-effect"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="workstation-content">
              <div className="avatar-icon">
                <motion.div
                  className="pulse-ring"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Zap size={24} />
              </div>
              <div className="status-text">
                <span className="status-main">CREATING</span>
                <motion.span
                  className="status-dots"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Time indicator */}
          <motion.div
            className="time-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Clock size={14} />
            <span>3:47 AM</span>
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="benefits-grid"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          {[
            { label: 'Zero Downtime', value: '0%' },
            { label: 'Always Available', value: '24/7' },
            { label: 'Response Time', value: '<1hr' },
            { label: 'Reliability', value: '99.9%' },
          ].map((item, idx) => (
            <div key={idx} className="benefit-item">
              <span className="benefit-value">{item.value}</span>
              <span className="benefit-label">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .slide-reliability {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2rem;
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

        .city-visual {
          position: relative;
          height: 300px;
          margin-bottom: 2rem;
          overflow: hidden;
          border-radius: 24px;
          background: linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 100%);
        }

        .night-sky {
          position: absolute;
          inset: 0;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
        }

        .moon {
          position: absolute;
          top: 30px;
          right: 50px;
          color: #ffeaa7;
          opacity: 0.8;
        }

        .skyline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 8px;
          padding: 0 20px;
        }

        .building {
          width: 60px;
          background: linear-gradient(180deg, #2d3436 0%, #1a1a2e 100%);
          border-radius: 4px 4px 0 0;
          padding: 8px;
        }

        .windows {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .window-row {
          display: flex;
          justify-content: space-around;
        }

        .window {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .window.dark {
          background: rgba(255, 255, 255, 0.05);
        }

        .window.lit {
          background: #ffeaa7;
          box-shadow: 0 0 10px rgba(255, 234, 167, 0.5);
        }

        .avatar-workstation {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .glow-effect {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(56, 239, 125, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .workstation-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(56, 239, 125, 0.3);
          border-radius: 20px;
        }

        .avatar-icon {
          position: relative;
          width: 50px;
          height: 50px;
          background: rgba(56, 239, 125, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38ef7d;
        }

        .pulse-ring {
          position: absolute;
          inset: 0;
          border: 2px solid #38ef7d;
          border-radius: 50%;
        }

        .status-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #38ef7d;
          letter-spacing: 0.1em;
        }

        .time-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .benefits-grid {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          min-width: 140px;
        }

        .benefit-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #38ef7d;
        }

        .benefit-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.25rem;
        }

        @media (max-width: 600px) {
          .benefits-grid {
            gap: 1rem;
          }

          .benefit-item {
            min-width: 120px;
            padding: 0.75rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
