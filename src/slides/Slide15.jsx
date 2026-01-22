import { motion } from 'framer-motion';
import { Ship, Star, TrendingUp, Users } from 'lucide-react';

export default function Slide15() {
  return (
    <div className="slide slide-case-study">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="case-label">Case Study</span>
          <h2 className="slide-title">
            Virgin <span className="highlight">Voyages</span>
          </h2>
          <p className="slide-subtitle">
            How a luxury cruise line revolutionized guest communication with AI avatars
          </p>
        </motion.div>

        {/* Visual: JLo Avatar showcase */}
        <div className="case-visual">
          <motion.div
            className="avatar-showcase"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="avatar-frame">
              <div className="avatar-glow" />
              <div className="avatar-silhouette">
                <div className="avatar-face">
                  <motion.div
                    className="sparkle sparkle-1"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="sparkle sparkle-2"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </div>
              <div className="avatar-label">
                <Star size={14} />
                <span>Celebrity AI Avatar</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="results-panel"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="brand-header">
              <Ship size={24} />
              <span>Virgin Voyages</span>
            </div>

            <div className="results-grid">
              <motion.div
                className="result-card"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <TrendingUp size={20} />
                <span className="result-value">150%</span>
                <span className="result-label">Engagement Increase</span>
              </motion.div>

              <motion.div
                className="result-card"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
              >
                <Users size={20} />
                <span className="result-value">2.5M</span>
                <span className="result-label">Video Views</span>
              </motion.div>

              <motion.div
                className="result-card highlight-card"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <Star size={20} />
                <span className="result-value">Viral</span>
                <span className="result-label">Campaign Status</span>
              </motion.div>
            </div>

            <div className="testimonial">
              <p>"AI avatars allowed us to create personalized experiences at scale that would have been impossible with traditional production."</p>
              <span className="testimonial-author">— Marketing Director, Virgin Voyages</span>
            </div>
          </motion.div>
        </div>

        {/* Key takeaway */}
        <motion.div
          className="takeaway"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="takeaway-label">Key Insight</span>
          <p>Celebrity AI avatars deliver star power without the logistical complexity</p>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-case-study {
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

        .case-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4facfe;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
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

        .case-visual {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .avatar-showcase {
          display: flex;
          justify-content: center;
        }

        .avatar-frame {
          position: relative;
          width: 220px;
          height: 280px;
          background: linear-gradient(135deg, rgba(245, 87, 108, 0.1), rgba(240, 147, 251, 0.05));
          border: 1px solid rgba(245, 87, 108, 0.3);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .avatar-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(245, 87, 108, 0.4) 0%, transparent 70%);
          border-radius: 50%;
        }

        .avatar-silhouette {
          width: 120px;
          height: 160px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          border-radius: 60px 60px 30px 30px;
          position: relative;
          z-index: 2;
        }

        .avatar-face {
          width: 80px;
          height: 80px;
          margin: 20px auto 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          border-radius: 50%;
          position: relative;
        }

        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #f5576c;
          border-radius: 50%;
          box-shadow: 0 0 10px #f5576c;
        }

        .sparkle-1 { top: 10px; right: 10px; }
        .sparkle-2 { bottom: 15px; left: 15px; }

        .avatar-label {
          position: absolute;
          bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          color: #f5576c;
        }

        .results-panel {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          text-align: left;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #f5576c;
          font-family: 'Syne', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .result-card {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .result-card.highlight-card {
          background: rgba(79, 172, 254, 0.1);
          border-color: rgba(79, 172, 254, 0.3);
          color: #4facfe;
        }

        .result-value {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0.5rem 0 0.25rem;
        }

        .highlight-card .result-value {
          color: #4facfe;
        }

        .result-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .testimonial {
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
        }

        .testimonial p {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .testimonial-author {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .takeaway {
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(79, 172, 254, 0.02));
          border: 1px solid rgba(79, 172, 254, 0.2);
          border-radius: 16px;
          display: inline-block;
        }

        .takeaway-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: #4facfe;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .takeaway p {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 800px) {
          .case-visual {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
