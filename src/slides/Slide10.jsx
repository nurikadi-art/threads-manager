import { motion } from 'framer-motion';
import { TrendingDown, DollarSign, Percent } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="slide slide-cost">
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            The <span className="highlight">99%</span> Cost Reduction
          </h2>
          <p className="slide-subtitle">
            Professional video content at a fraction of traditional costs
          </p>
        </motion.div>

        {/* Visual: $10,000 vs $89 */}
        <div className="cost-comparison">
          {/* Traditional Cost */}
          <motion.div
            className="cost-card traditional"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="cost-header">
              <span className="cost-type">Traditional Production</span>
            </div>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span className="item-label">Talent/Actor</span>
                <span className="item-cost">$3,000</span>
              </div>
              <div className="cost-item">
                <span className="item-label">Crew & Equipment</span>
                <span className="item-cost">$2,500</span>
              </div>
              <div className="cost-item">
                <span className="item-label">Studio Rental</span>
                <span className="item-cost">$1,500</span>
              </div>
              <div className="cost-item">
                <span className="item-label">Post-Production</span>
                <span className="item-cost">$2,000</span>
              </div>
              <div className="cost-item">
                <span className="item-label">Misc & Contingency</span>
                <span className="item-cost">$1,000</span>
              </div>
            </div>
            <div className="cost-total">
              <span className="total-label">Per Video</span>
              <motion.span
                className="total-amount"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                $10,000
              </motion.span>
            </div>
          </motion.div>

          {/* Arrow/Reduction indicator */}
          <motion.div
            className="reduction-indicator"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <motion.div
              className="reduction-badge"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(56, 239, 125, 0.3)',
                  '0 0 40px rgba(56, 239, 125, 0.5)',
                  '0 0 20px rgba(56, 239, 125, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TrendingDown size={24} />
              <span className="reduction-percent">99%</span>
              <span className="reduction-text">LESS</span>
            </motion.div>
          </motion.div>

          {/* AI Avatar Cost */}
          <motion.div
            className="cost-card ai-avatar"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="cost-header">
              <span className="cost-type">AI Avatar</span>
              <span className="recommended-badge">Recommended</span>
            </div>
            <div className="cost-features">
              <div className="feature-item">✓ Unlimited takes</div>
              <div className="feature-item">✓ No scheduling</div>
              <div className="feature-item">✓ Instant delivery</div>
              <div className="feature-item">✓ Easy edits</div>
              <div className="feature-item">✓ Multi-language</div>
            </div>
            <div className="cost-total highlight-total">
              <span className="total-label">Per Video</span>
              <motion.span
                className="total-amount"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                $89
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* ROI Banner */}
        <motion.div
          className="roi-banner"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="roi-stat">
            <span className="roi-number">112x</span>
            <span className="roi-label">more videos per budget</span>
          </div>
          <div className="roi-divider" />
          <div className="roi-stat">
            <span className="roi-number">48hrs</span>
            <span className="roi-label">time saved per video</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-cost {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .content-wrapper {
          max-width: 1100px;
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
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .cost-comparison {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .cost-card {
          flex: 1;
          max-width: 320px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          text-align: left;
        }

        .cost-card.traditional {
          opacity: 0.7;
        }

        .cost-card.ai-avatar {
          border-color: rgba(56, 239, 125, 0.3);
          box-shadow: 0 0 40px rgba(56, 239, 125, 0.1);
        }

        .cost-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cost-type {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .recommended-badge {
          padding: 0.25rem 0.75rem;
          background: rgba(56, 239, 125, 0.2);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: #38ef7d;
          text-transform: uppercase;
        }

        .cost-breakdown {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .cost-item {
          display: flex;
          justify-content: space-between;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
        }

        .item-label {
          color: rgba(255, 255, 255, 0.5);
        }

        .item-cost {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .cost-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .feature-item {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .cost-total {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .total-label {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .total-amount {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
        }

        .highlight-total .total-amount {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .reduction-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          align-self: center;
        }

        .reduction-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          border: 2px solid rgba(56, 239, 125, 0.4);
          border-radius: 50%;
          color: #38ef7d;
        }

        .reduction-percent {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .reduction-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .roi-banner {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding: 1.25rem 2.5rem;
          background: rgba(56, 239, 125, 0.05);
          border: 1px solid rgba(56, 239, 125, 0.2);
          border-radius: 100px;
        }

        .roi-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .roi-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #38ef7d;
        }

        .roi-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .roi-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 900px) {
          .cost-comparison {
            flex-direction: column;
            align-items: center;
          }

          .reduction-indicator {
            transform: rotate(90deg);
            margin: 1rem 0;
          }

          .roi-banner {
            flex-direction: column;
            border-radius: 24px;
            padding: 1.5rem;
          }

          .roi-divider {
            width: 100%;
            height: 1px;
          }
        }
      `}</style>
    </div>
  );
}
