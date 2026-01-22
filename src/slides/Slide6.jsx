import { motion } from 'framer-motion';
import { Battery, BatteryLow, AlertCircle } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="slide slide-burnout">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            <span className="highlight">70%</span> Burnout
          </h2>
          <p className="slide-subtitle">
            of content creators report experiencing burnout within their first year
          </p>
        </motion.div>

        {/* Visual: Battery Low Icon */}
        <motion.div
          className="battery-visual"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="battery-container">
            <motion.div
              className="battery-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="battery-cap" />
              <div className="battery-inner">
                <motion.div
                  className="battery-level"
                  initial={{ width: '100%' }}
                  animate={{ width: '15%' }}
                  transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                />
                <motion.div
                  className="battery-warning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 2.5, duration: 1, repeat: Infinity }}
                >
                  <AlertCircle size={32} />
                </motion.div>
              </div>
              <motion.span
                className="battery-percent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                15%
              </motion.span>
            </motion.div>

            {/* Energy drain indicators */}
            <div className="drain-indicators">
              {['Scripting', 'Filming', 'Editing', 'Posting', 'Engaging'].map((task, idx) => (
                <motion.div
                  key={idx}
                  className="drain-item"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.15 }}
                >
                  <span className="drain-label">{task}</span>
                  <motion.div
                    className="drain-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${80 - idx * 10}%` }}
                    transition={{ delay: 1 + idx * 0.15, duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="stats-row"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="stat-item">
            <span className="stat-value">61%</span>
            <span className="stat-label">Feel overwhelmed daily</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">42%</span>
            <span className="stat-label">Consider quitting</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">8hrs</span>
            <span className="stat-label">Avg. daily content work</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-burnout {
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
          margin-bottom: 3rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 10vw, 6rem);
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
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin: 0 auto;
        }

        .battery-visual {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .battery-container {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .battery-body {
          position: relative;
          width: 200px;
          height: 100px;
          background: rgba(255, 255, 255, 0.05);
          border: 3px solid rgba(245, 87, 108, 0.5);
          border-radius: 16px;
          display: flex;
          align-items: center;
          padding: 8px;
        }

        .battery-cap {
          position: absolute;
          right: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 40px;
          background: rgba(245, 87, 108, 0.5);
          border-radius: 0 4px 4px 0;
        }

        .battery-inner {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }

        .battery-level {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: linear-gradient(90deg, #f5576c 0%, #f5af19 100%);
          border-radius: 8px;
        }

        .battery-warning {
          position: absolute;
          right: 50%;
          top: 50%;
          transform: translate(50%, -50%);
          color: #f5576c;
        }

        .battery-percent {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #f5576c;
        }

        .drain-indicators {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 200px;
        }

        .drain-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .drain-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          text-align: left;
        }

        .drain-bar {
          height: 6px;
          background: linear-gradient(90deg, #f5576c, rgba(245, 87, 108, 0.3));
          border-radius: 3px;
        }

        .stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #f5576c;
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

        @media (max-width: 768px) {
          .battery-container {
            flex-direction: column;
          }

          .stats-row {
            flex-direction: column;
            border-radius: 24px;
            padding: 1.5rem;
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
