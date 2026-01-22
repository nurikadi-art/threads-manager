import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, ShoppingCart } from 'lucide-react';

export default function Slide16() {
  const graphData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 25 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 50 },
    { month: 'May', value: 75 },
    { month: 'Jun', value: 120 },
  ];

  return (
    <div className="slide slide-small-business">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="case-label">Case Study</span>
          <h2 className="slide-title">
            Small Business <span className="highlight">Success</span>
          </h2>
          <p className="slide-subtitle">
            How a local e-commerce store 6x'd their sales with AI video content
          </p>
        </motion.div>

        <div className="case-content">
          {/* Visual: Sales graph up */}
          <motion.div
            className="graph-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="graph-container">
              <div className="graph-header">
                <span className="graph-title">Monthly Revenue</span>
                <span className="graph-trend">
                  <TrendingUp size={14} />
                  +487%
                </span>
              </div>
              <div className="graph-bars">
                {graphData.map((item, idx) => (
                  <div key={idx} className="bar-group">
                    <motion.div
                      className="bar"
                      initial={{ height: 0 }}
                      animate={{ height: `${item.value}%` }}
                      transition={{
                        delay: 0.8 + idx * 0.15,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      <span className="bar-value">${item.value}K</span>
                    </motion.div>
                    <span className="bar-label">{item.month}</span>
                  </div>
                ))}
              </div>
              <div className="graph-legend">
                <div className="legend-item before">
                  <span className="legend-dot" />
                  <span>Before AI Avatars</span>
                </div>
                <div className="legend-item after">
                  <span className="legend-dot" />
                  <span>After AI Avatars</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics panel */}
          <motion.div
            className="metrics-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="business-card">
              <div className="business-header">
                <ShoppingCart size={20} />
                <span>Local E-Commerce Store</span>
              </div>
              <p className="business-desc">
                A family-owned boutique struggling with content creation adopted AI avatars for product demonstrations and customer education.
              </p>
            </div>

            <div className="metrics-grid">
              <motion.div
                className="metric-card"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <DollarSign size={20} />
                <span className="metric-value">6x</span>
                <span className="metric-label">Revenue Growth</span>
              </motion.div>

              <motion.div
                className="metric-card"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, type: "spring" }}
              >
                <Users size={20} />
                <span className="metric-value">340%</span>
                <span className="metric-label">Follower Increase</span>
              </motion.div>

              <motion.div
                className="metric-card"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
              >
                <TrendingUp size={20} />
                <span className="metric-value">$89</span>
                <span className="metric-label">Cost Per Video</span>
              </motion.div>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-marker">1</span>
                <span className="timeline-text">Created AI avatar of founder</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-marker">2</span>
                <span className="timeline-text">Posted daily product videos</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-marker">3</span>
                <span className="timeline-text">Scaled to 3 platforms simultaneously</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slide-small-business {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2rem;
        }

        .case-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #38ef7d;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .highlight {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .case-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          text-align: left;
        }

        .graph-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          height: 100%;
        }

        .graph-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .graph-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .graph-trend {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #38ef7d;
        }

        .graph-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 200px;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
        }

        .bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .bar {
          width: 100%;
          max-width: 40px;
          background: linear-gradient(180deg, #38ef7d 0%, #11998e 100%);
          border-radius: 8px 8px 0 0;
          position: relative;
          min-height: 20px;
        }

        .bar-value {
          position: absolute;
          top: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: #38ef7d;
          white-space: nowrap;
        }

        .bar-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .graph-legend {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-item.before .legend-dot {
          background: rgba(255, 255, 255, 0.3);
        }

        .legend-item.after .legend-dot {
          background: #38ef7d;
        }

        .metrics-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .business-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.25rem;
        }

        .business-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #38ef7d;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .business-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .metric-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .metric-value {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #38ef7d;
          margin: 0.5rem 0 0.25rem;
        }

        .metric-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .timeline {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .timeline-marker {
          width: 24px;
          height: 24px;
          background: rgba(56, 239, 125, 0.2);
          border: 1px solid rgba(56, 239, 125, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: #38ef7d;
          flex-shrink: 0;
        }

        .timeline-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 800px) {
          .case-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
