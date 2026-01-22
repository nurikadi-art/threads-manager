import { motion } from 'framer-motion';
import { User, Camera, Edit3, Palette, BarChart3, MessageSquare, Clock, DollarSign, Mic, Lightbulb } from 'lucide-react';

export default function Slide7() {
  const hats = [
    { icon: Camera, label: 'Videographer', color: '#667eea' },
    { icon: Edit3, label: 'Editor', color: '#764ba2' },
    { icon: Palette, label: 'Designer', color: '#f093fb' },
    { icon: BarChart3, label: 'Analyst', color: '#4facfe' },
    { icon: MessageSquare, label: 'Community Mgr', color: '#00f2fe' },
    { icon: Clock, label: 'Scheduler', color: '#38ef7d' },
    { icon: DollarSign, label: 'Accountant', color: '#f5af19' },
    { icon: Mic, label: 'Host', color: '#f5576c' },
    { icon: Lightbulb, label: 'Strategist', color: '#fa709a' },
    { icon: User, label: 'Talent', color: '#fee140' },
  ];

  return (
    <div className="slide slide-army">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            The One-Person Army <span className="highlight">Fallacy</span>
          </h2>
          <p className="slide-subtitle">
            Modern content creation demands an impossible breadth of skills
          </p>
        </motion.div>

        {/* Visual: One person holding 10 hats */}
        <motion.div
          className="hats-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Central Figure */}
          <motion.div
            className="central-person"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="person-glow" />
            <div className="person-body">
              <div className="person-head">
                <motion.div
                  className="stress-indicator"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  !
                </motion.div>
              </div>
              <div className="person-torso">
                <div className="arm arm-left" />
                <div className="arm arm-right" />
              </div>
            </div>
          </motion.div>

          {/* Orbiting Hats */}
          {hats.map((hat, idx) => {
            const angle = (idx * 360) / hats.length - 90;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={idx}
                className="hat-item"
                style={{ '--hat-color': hat.color }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x,
                  y,
                }}
                transition={{
                  delay: 0.6 + idx * 0.08,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{ scale: 1.15 }}
              >
                <motion.div
                  className="hat-icon"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2 + idx * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.15,
                  }}
                >
                  <hat.icon size={20} />
                </motion.div>
                <span className="hat-label">{hat.label}</span>
              </motion.div>
            );
          })}

          {/* Connection lines */}
          <svg className="connection-lines" viewBox="-250 -250 500 500">
            {hats.map((_, idx) => {
              const angle = (idx * 360) / hats.length - 90;
              const radius = 180;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.line
                  key={idx}
                  x1="0"
                  y1="0"
                  x2={x}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8 + idx * 0.05, duration: 0.5 }}
                />
              );
            })}
          </svg>
        </motion.div>

        <motion.div
          className="insight-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="count">10</span> distinct roles, one exhausted creator
        </motion.div>
      </div>

      <style jsx>{`
        .slide-army {
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
          font-size: clamp(2rem, 6vw, 3.5rem);
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
        }

        .hats-visual {
          position: relative;
          width: 450px;
          height: 450px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connection-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .central-person {
          position: relative;
          z-index: 10;
        }

        .person-glow {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(245, 87, 108, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .person-body {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .person-head {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stress-indicator {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f5576c;
        }

        .person-torso {
          width: 35px;
          height: 50px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px 15px 10px 10px;
          margin-top: -5px;
          position: relative;
        }

        .arm {
          position: absolute;
          width: 8px;
          height: 40px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          border-radius: 4px;
          top: 5px;
        }

        .arm-left {
          left: -15px;
          transform: rotate(45deg);
        }

        .arm-right {
          right: -15px;
          transform: rotate(-45deg);
        }

        .hat-item {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .hat-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--hat-color);
          cursor: pointer;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .hat-item:hover .hat-icon {
          box-shadow: 0 0 25px var(--hat-color);
          border-color: var(--hat-color);
        }

        .hat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.6);
          white-space: nowrap;
        }

        .insight-text {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .count {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #f5576c;
        }

        @media (max-width: 600px) {
          .hats-visual {
            transform: scale(0.7);
          }
        }
      `}</style>
    </div>
  );
}
