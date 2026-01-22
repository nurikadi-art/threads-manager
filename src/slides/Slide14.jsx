import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function Slide14() {
  const languages = [
    { code: '🇺🇸', name: 'English' },
    { code: '🇪🇸', name: 'Spanish' },
    { code: '🇫🇷', name: 'French' },
    { code: '🇩🇪', name: 'German' },
    { code: '🇨🇳', name: 'Chinese' },
    { code: '🇯🇵', name: 'Japanese' },
    { code: '🇰🇷', name: 'Korean' },
    { code: '🇵🇹', name: 'Portuguese' },
    { code: '🇮🇹', name: 'Italian' },
    { code: '🇷🇺', name: 'Russian' },
    { code: '🇸🇦', name: 'Arabic' },
    { code: '🇮🇳', name: 'Hindi' },
  ];

  return (
    <div className="slide slide-multilingual">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            Multilingual <span className="highlight">Magic</span>
          </h2>
          <p className="slide-subtitle">
            One video, 140+ languages — instant global reach
          </p>
        </motion.div>

        {/* Visual: Flags of the world */}
        <motion.div
          className="globe-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Central globe */}
          <motion.div
            className="globe-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="globe-inner">
              <Globe size={80} />
            </div>
          </motion.div>

          {/* Orbiting flags */}
          {languages.map((lang, idx) => {
            const angle = (idx * 360) / languages.length;
            const radius = 180;
            return (
              <motion.div
                key={idx}
                className="flag-orbit"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.6 + idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                }}
              >
                <motion.div
                  className="flag-item"
                  style={{ transform: `rotate(-${angle}deg)` }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.2,
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="flag-emoji">{lang.code}</span>
                  <span className="flag-name">{lang.name}</span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Connection lines */}
          <svg className="connection-svg" viewBox="-250 -250 500 500">
            {languages.map((_, idx) => {
              const angle = (idx * 360) / languages.length;
              const radius = 180;
              const x = Math.sin((angle * Math.PI) / 180) * radius;
              const y = -Math.cos((angle * Math.PI) / 180) * radius;
              return (
                <motion.line
                  key={idx}
                  x1="0"
                  y1="0"
                  x2={x}
                  y2={y}
                  stroke="rgba(79, 172, 254, 0.15)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8 + idx * 0.05 }}
                />
              );
            })}
          </svg>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="stats-row"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="stat-item">
            <span className="stat-number">140+</span>
            <span className="stat-label">Languages</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Lip-sync Accuracy</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">1-Click</span>
            <span className="stat-label">Translation</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-multilingual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .content-wrapper {
          max-width: 900px;
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
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .globe-visual {
          position: relative;
          width: 450px;
          height: 450px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connection-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .globe-center {
          position: relative;
          z-index: 10;
        }

        .globe-inner {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.1));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(79, 172, 254, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4facfe;
          box-shadow: 0 0 60px rgba(79, 172, 254, 0.3);
        }

        .flag-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center center;
        }

        .flag-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.75rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .flag-item:hover {
          border-color: rgba(79, 172, 254, 0.5);
          box-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
        }

        .flag-emoji {
          font-size: 1.5rem;
        }

        .flag-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .stats-row {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding: 1.25rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #4facfe;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 600px) {
          .globe-visual {
            transform: scale(0.7);
          }

          .stats-row {
            flex-direction: column;
            border-radius: 24px;
            padding: 1.5rem;
            gap: 1rem;
          }

          .stat-divider {
            width: 100%;
            height: 1px;
          }
        }
      `}</style>
    </div>
  );
}
