import { motion } from 'framer-motion';
import { Search, Share2, TrendingUp, Users } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="slide slide-discovery">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="slide-label">Behavioral Shift</span>
          <h2 className="slide-title">
            The Discovery <span className="highlight">Shift</span>
          </h2>
          <p className="slide-subtitle">
            Social Media has surpassed Search as the primary discovery channel
          </p>
        </motion.div>

        {/* Visual Comparison */}
        <div className="comparison-container">
          {/* Social Media - Rising */}
          <motion.div
            className="platform-card social"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="card-header">
              <Share2 size={28} />
              <span>Social Media</span>
            </div>
            <motion.div
              className="trend-bar"
              initial={{ height: 0 }}
              animate={{ height: '80%' }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <span className="trend-value">54%</span>
            </motion.div>
            <div className="trend-label">
              <TrendingUp size={16} />
              Primary Discovery
            </div>
          </motion.div>

          {/* VS Indicator */}
          <motion.div
            className="vs-indicator"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <span>VS</span>
          </motion.div>

          {/* Search - Declining */}
          <motion.div
            className="platform-card search"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="card-header">
              <Search size={28} />
              <span>Traditional Search</span>
            </div>
            <motion.div
              className="trend-bar declining"
              initial={{ height: 0 }}
              animate={{ height: '45%' }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <span className="trend-value">46%</span>
            </motion.div>
            <div className="trend-label declining">
              <TrendingUp size={16} style={{ transform: 'rotate(180deg)' }} />
              Secondary Source
            </div>
          </motion.div>
        </div>

        {/* Gen Z Stat */}
        <motion.div
          className="genz-stat"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Users size={24} />
          <span><strong>67%</strong> of Gen Z start product research on TikTok</span>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-discovery {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
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
          max-width: 600px;
          margin: 0 auto;
        }

        .comparison-container {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 2rem;
          height: 350px;
          margin-bottom: 2rem;
        }

        .platform-card {
          flex: 1;
          max-width: 280px;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: auto;
        }

        .platform-card.social .card-header {
          color: #4facfe;
        }

        .platform-card.search .card-header {
          color: rgba(255, 255, 255, 0.5);
        }

        .trend-bar {
          width: 100%;
          background: linear-gradient(180deg, #4facfe 0%, #00f2fe 100%);
          border-radius: 16px 16px 0 0;
          margin-top: auto;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 1rem;
          position: relative;
        }

        .trend-bar.declining {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
        }

        .trend-value {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
        }

        .trend-label {
          position: absolute;
          bottom: -2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: #4facfe;
          white-space: nowrap;
        }

        .trend-label.declining {
          color: rgba(255, 255, 255, 0.4);
        }

        .vs-indicator {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 3rem;
          flex-shrink: 0;
        }

        .genz-stat {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 2rem;
        }

        .genz-stat strong {
          color: #00f2fe;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .comparison-container {
            flex-direction: column;
            height: auto;
            gap: 1rem;
          }

          .platform-card {
            max-width: 100%;
            height: 200px;
          }

          .vs-indicator {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}
