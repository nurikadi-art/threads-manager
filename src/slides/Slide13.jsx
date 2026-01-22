import { motion } from 'framer-motion';
import { Trophy, Check, X, Minus } from 'lucide-react';

export default function Slide13() {
  const features = [
    { name: 'Video Quality', heygen: '4K', synthesia: '1080p', winner: 'heygen' },
    { name: 'Lip Sync Accuracy', heygen: '98%', synthesia: '92%', winner: 'heygen' },
    { name: 'Avatar Customization', heygen: 'Extensive', synthesia: 'Limited', winner: 'heygen' },
    { name: 'Languages Supported', heygen: '140+', synthesia: '120+', winner: 'heygen' },
    { name: 'Starting Price', heygen: '$24/mo', synthesia: '$29/mo', winner: 'heygen' },
    { name: 'API Access', heygen: true, synthesia: true, winner: 'tie' },
    { name: 'Custom Avatar', heygen: true, synthesia: true, winner: 'tie' },
    { name: 'Real-time Streaming', heygen: true, synthesia: false, winner: 'heygen' },
  ];

  return (
    <div className="slide slide-comparison">
      <motion.div
        className="section-badge"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Trophy size={16} />
        <span>SECTION 04 — THE SHOWCASE</span>
      </motion.div>

      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            Platform <span className="highlight">Face-off</span>
          </h2>
          <p className="slide-subtitle">
            Comparing the leading AI avatar platforms
          </p>
        </motion.div>

        {/* Visual: HeyGen vs Synthesia table */}
        <motion.div
          className="comparison-table"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Table Header */}
          <div className="table-header">
            <div className="header-cell feature-header">Features</div>
            <div className="header-cell platform-header heygen">
              <div className="platform-logo">H</div>
              <span>HeyGen</span>
            </div>
            <div className="header-cell platform-header synthesia">
              <div className="platform-logo">S</div>
              <span>Synthesia</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="table-body">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="table-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.08 }}
              >
                <div className="row-cell feature-cell">{feature.name}</div>
                <div className={`row-cell value-cell ${feature.winner === 'heygen' ? 'winner' : ''}`}>
                  {typeof feature.heygen === 'boolean' ? (
                    feature.heygen ? <Check size={18} className="check-icon" /> : <X size={18} className="x-icon" />
                  ) : (
                    feature.heygen
                  )}
                </div>
                <div className={`row-cell value-cell ${feature.winner === 'synthesia' ? 'winner' : ''}`}>
                  {typeof feature.synthesia === 'boolean' ? (
                    feature.synthesia ? <Check size={18} className="check-icon" /> : <X size={18} className="x-icon" />
                  ) : (
                    feature.synthesia
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="table-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          * Data as of 2024. Features and pricing subject to change.
        </motion.p>
      </div>

      <style jsx>{`
        .slide-comparison {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(79, 172, 254, 0.05));
          border: 1px solid rgba(79, 172, 254, 0.3);
          border-radius: 100px;
          margin-bottom: 1.5rem;
          color: #4facfe;
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
          margin-bottom: 2rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .highlight {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .comparison-table {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-cell {
          padding: 1rem 1.25rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
        }

        .feature-header {
          text-align: left;
        }

        .platform-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .platform-logo {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
        }

        .heygen .platform-logo {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .synthesia .platform-logo {
          background: linear-gradient(135deg, #00d4aa, #00a388);
          color: white;
        }

        .table-body {
          display: flex;
          flex-direction: column;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .row-cell {
          padding: 0.875rem 1.25rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
        }

        .feature-cell {
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
        }

        .value-cell {
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .value-cell.winner {
          color: #4facfe;
          font-weight: 600;
        }

        .check-icon {
          color: #38ef7d;
        }

        .x-icon {
          color: rgba(255, 255, 255, 0.3);
        }

        .table-note {
          margin-top: 1rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 600px) {
          .table-header, .table-row {
            grid-template-columns: 1.5fr 1fr 1fr;
          }

          .header-cell, .row-cell {
            padding: 0.75rem;
            font-size: 0.75rem;
          }

          .platform-header span {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
