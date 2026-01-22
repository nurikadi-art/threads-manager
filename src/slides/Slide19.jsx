import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Shield, Clock } from 'lucide-react';

export default function Slide19() {
  return (
    <div className="slide slide-cta">
      <div className="content-wrapper">
        {/* Decorative elements */}
        <div className="deco-elements">
          <motion.div
            className="deco-circle circle-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="deco-circle circle-2"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="deco-circle circle-3"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="badge"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} />
          <span>Ready to Transform?</span>
        </motion.div>

        <motion.h2
          className="cta-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Start Your <span className="gradient-text">Twin</span>
        </motion.h2>

        <motion.p
          className="cta-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Create your AI avatar today and join the content revolution
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="cta-button-wrapper"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(102, 126, 234, 0.3)',
                '0 0 60px rgba(102, 126, 234, 0.5)',
                '0 0 30px rgba(102, 126, 234, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Get Started</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="trust-row"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="trust-item">
            <Zap size={18} />
            <span>Instant Setup</span>
          </div>
          <div className="trust-item">
            <Shield size={18} />
            <span>Enterprise Security</span>
          </div>
          <div className="trust-item">
            <Clock size={18} />
            <span>24/7 Support</span>
          </div>
        </motion.div>

        {/* Pricing teaser */}
        <motion.div
          className="pricing-teaser"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="price-from">Starting from</span>
          <span className="price-amount">$24<span className="price-period">/mo</span></span>
          <span className="price-note">Cancel anytime • No credit card required for trial</span>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .content-wrapper {
          max-width: 800px;
          width: 100%;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .deco-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .deco-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid;
        }

        .circle-1 {
          width: 600px;
          height: 600px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(102, 126, 234, 0.2);
        }

        .circle-2 {
          width: 450px;
          height: 450px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(118, 75, 162, 0.2);
        }

        .circle-3 {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(240, 147, 251, 0.2);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(102, 126, 234, 0.05));
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: #667eea;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 700;
          color: white;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 60%, #4facfe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 450px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .cta-button-wrapper {
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .trust-row {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .trust-item svg {
          color: #667eea;
        }

        .pricing-teaser {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          display: inline-flex;
        }

        .price-from {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .price-amount {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
        }

        .price-period {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
        }

        .price-note {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 600px) {
          .trust-row {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
