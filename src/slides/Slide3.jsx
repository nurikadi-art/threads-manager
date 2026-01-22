import { motion } from 'framer-motion';
import { Play, TrendingUp, DollarSign } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="slide slide-video">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="slide-label">The Dominant Medium</span>
          <h2 className="slide-title">
            Video is <span className="highlight">King</span>
          </h2>
        </motion.div>

        {/* Visual: $140B Video Ad Market */}
        <motion.div
          className="market-visual"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="glass-card main-stat">
            <motion.div
              className="stat-icon"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <DollarSign size={40} />
            </motion.div>
            <motion.div
              className="stat-value"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            >
              $140B
            </motion.div>
            <div className="stat-label">Video Ad Market</div>
            <div className="stat-year">2024 Global Value</div>
          </div>

          {/* Surrounding metrics */}
          <motion.div
            className="metric-card metric-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Play size={20} />
            <span>82% of internet traffic</span>
          </motion.div>

          <motion.div
            className="metric-card metric-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <TrendingUp size={20} />
            <span>15% YoY growth</span>
          </motion.div>

          <motion.div
            className="metric-card metric-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="big-number">2x</span>
            <span>engagement vs static</span>
          </motion.div>
        </motion.div>

        {/* Animated video frame decoration */}
        <div className="video-frame-deco">
          <motion.div
            className="play-button"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 0 0 rgba(102, 126, 234, 0.4)',
                '0 0 0 20px rgba(102, 126, 234, 0)',
                '0 0 0 0 rgba(102, 126, 234, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Play size={32} fill="white" />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slide-video {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          position: relative;
          overflow: hidden;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 3rem;
        }

        .slide-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          display: block;
          margin-bottom: 1rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          color: white;
        }

        .highlight {
          background: linear-gradient(135deg, #f5576c 0%, #f093fb 50%, #667eea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .market-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 350px;
        }

        .glass-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 30px;
          padding: 3rem;
          text-align: center;
        }

        .main-stat {
          position: relative;
          z-index: 2;
        }

        .stat-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 6rem);
          font-weight: 700;
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin-top: 0.5rem;
        }

        .stat-year {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
        }

        .metric-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .metric-1 {
          top: 20%;
          left: 0;
        }

        .metric-2 {
          top: 20%;
          right: 0;
        }

        .metric-3 {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .big-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #38ef7d;
        }

        .video-frame-deco {
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
          width: 200px;
          height: 120px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
        }

        .play-button {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .metric-card {
            position: relative;
            margin: 1rem auto;
          }

          .metric-1, .metric-2, .metric-3 {
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
            transform: none;
          }

          .market-visual {
            flex-direction: column;
          }

          .video-frame-deco {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
