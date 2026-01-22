import { motion } from 'framer-motion';

export default function Slide1() {
  return (
    <div className="slide slide-title">
      <motion.div
        className="title-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating geometric shapes */}
        <div className="floating-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-2"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-3"
            animate={{
              x: [0, 30, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Main Title */}
        <motion.div
          className="hero-badge"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="badge-text">SECTION 01 — THE WHY</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="title-line">The</span>
          <span className="title-line gradient-text">Algorithmic</span>
          <span className="title-line">Imperative</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Why the rules of content have fundamentally changed
        </motion.p>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="scroll-line"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span>Press → or swipe to continue</span>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .slide-title {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .title-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          padding: 2rem;
        }

        .floating-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.1));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          right: -50px;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          bottom: -50px;
          left: -30px;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          top: 50%;
          left: 10%;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          margin-bottom: 2rem;
        }

        .badge-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .title-line {
          display: block;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 60%, #4facfe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .scroll-line {
          width: 1px;
          height: 30px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
        }
      `}</style>
    </div>
  );
}
