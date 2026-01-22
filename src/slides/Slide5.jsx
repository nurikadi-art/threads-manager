import { motion } from 'framer-motion';
import { Calendar, AlertTriangle } from 'lucide-react';

export default function Slide5() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeks = [1, 2, 3, 4];

  return (
    <div className="slide slide-consistency">
      <motion.div
        className="section-badge"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AlertTriangle size={16} />
        <span>SECTION 02 — THE PAIN</span>
      </motion.div>

      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            The Consistency <span className="highlight">Paradox</span>
          </h2>
          <p className="slide-subtitle">
            Success demands relentless content output, but humans weren't built for algorithms
          </p>
        </motion.div>

        {/* Visual: Calendar filled with "Post Now" */}
        <motion.div
          className="calendar-visual"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="calendar-header">
            <Calendar size={24} />
            <span>Content Calendar</span>
            <span className="month">Every Month. Forever.</span>
          </div>

          <div className="calendar-grid">
            <div className="days-row">
              {days.map((day, idx) => (
                <div key={idx} className="day-label">{day}</div>
              ))}
            </div>
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="week-row">
                {days.map((_, dayIdx) => (
                  <motion.div
                    key={dayIdx}
                    className="calendar-cell"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.6 + (weekIdx * 7 + dayIdx) * 0.03,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <motion.span
                      className="post-badge"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: (weekIdx * 7 + dayIdx) * 0.1,
                      }}
                    >
                      POST
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          <div className="calendar-footer">
            <motion.div
              className="stress-indicator"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="pulse-dot" />
              <span>28 posts required this month</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="insight-card"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="insight-stat">3-5x daily</span>
          <span className="insight-text">posting frequency needed for algorithmic visibility</span>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-consistency {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(245, 87, 108, 0.2), rgba(245, 87, 108, 0.05));
          border: 1px solid rgba(245, 87, 108, 0.3);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: #f5576c;
        }

        .section-badge span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .content-wrapper {
          max-width: 900px;
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

        .calendar-visual {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
          color: white;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
        }

        .month {
          margin-left: auto;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.4);
        }

        .calendar-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .days-row, .week-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
        }

        .day-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          text-align: center;
          padding: 0.5rem;
        }

        .calendar-cell {
          aspect-ratio: 1;
          background: rgba(245, 87, 108, 0.1);
          border: 1px solid rgba(245, 87, 108, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .post-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          color: #f5576c;
          letter-spacing: 0.05em;
        }

        .calendar-footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stress-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #f5576c;
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        .insight-card {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }

        .insight-stat {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #f5576c, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .insight-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.25rem;
        }
      `}</style>
    </div>
  );
}
