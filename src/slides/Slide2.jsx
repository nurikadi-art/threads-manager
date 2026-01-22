import { motion } from 'framer-motion';
import { Smartphone, Instagram, Youtube, Twitter, Music2, Linkedin, MessageCircle } from 'lucide-react';

export default function Slide2() {
  const apps = [
    { icon: Instagram, color: '#E1306C', name: 'Instagram' },
    { icon: Youtube, color: '#FF0000', name: 'YouTube' },
    { icon: Twitter, color: '#1DA1F2', name: 'X/Twitter' },
    { icon: Music2, color: '#00f2ea', name: 'TikTok' },
    { icon: Linkedin, color: '#0077B5', name: 'LinkedIn' },
    { icon: MessageCircle, color: '#25D366', name: 'WhatsApp' },
    { icon: Smartphone, color: '#667eea', name: 'Threads' },
  ];

  return (
    <div className="slide slide-platforms">
      <div className="content-grid">
        {/* Left: Statistics */}
        <motion.div
          className="stat-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="stat-label">Average user presence</span>
          <div className="mega-stat">
            <motion.span
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              6.84
            </motion.span>
            <span className="stat-unit">Platforms</span>
          </div>
          <p className="stat-description">
            The modern creator must maintain presence across nearly 7 different platforms simultaneously
          </p>
        </motion.div>

        {/* Right: Visual - User Juggling Apps */}
        <motion.div
          className="visual-section"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="juggling-container">
            {/* Central Figure */}
            <motion.div
              className="central-figure"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="figure-body">
                <div className="figure-head" />
                <div className="figure-torso" />
                <div className="figure-arms">
                  <motion.div
                    className="arm left"
                    animate={{ rotate: [-10, 10, -10] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="arm right"
                    animate={{ rotate: [10, -10, 10] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Orbiting Apps */}
            {apps.map((app, idx) => {
              const angle = (idx * 360) / apps.length;
              const radius = 140;
              return (
                <motion.div
                  key={idx}
                  className="app-orb"
                  style={{
                    '--app-color': app.color,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: Math.cos((angle * Math.PI) / 180) * radius,
                    y: Math.sin((angle * Math.PI) / 180) * radius,
                  }}
                  transition={{
                    delay: 0.5 + idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2 + idx * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.2,
                    }}
                  >
                    <app.icon size={24} />
                  </motion.div>
                  <span className="app-name">{app.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-platforms {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          width: 100%;
          align-items: center;
        }

        .stat-section {
          text-align: left;
        }

        .stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 1rem;
          display: block;
        }

        .mega-stat {
          margin-bottom: 1.5rem;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(5rem, 12vw, 8rem);
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          display: block;
        }

        .stat-unit {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          display: block;
          margin-top: 0.5rem;
        }

        .stat-description {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          max-width: 400px;
        }

        .visual-section {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .juggling-container {
          position: relative;
          width: 350px;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .central-figure {
          position: relative;
          z-index: 10;
        }

        .figure-body {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .figure-head {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 10px;
        }

        .figure-torso {
          width: 40px;
          height: 60px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.2));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px 20px 10px 10px;
        }

        .figure-arms {
          position: absolute;
          top: 60px;
          width: 120px;
          display: flex;
          justify-content: space-between;
        }

        .arm {
          width: 8px;
          height: 50px;
          background: linear-gradient(180deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.2));
          border-radius: 4px;
          transform-origin: top center;
        }

        .app-orb {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: var(--app-color);
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .app-orb:hover {
          box-shadow: 0 0 30px var(--app-color);
        }

        .app-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .stat-section {
            text-align: center;
          }

          .stat-description {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
