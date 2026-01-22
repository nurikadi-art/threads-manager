import { motion } from 'framer-motion';
import { MessageCircle, Mail, Linkedin, Twitter, HelpCircle } from 'lucide-react';

export default function Slide20() {
  const questions = [
    "How realistic are AI avatars?",
    "What's the production timeline?",
    "Can I use my own voice?",
    "How does pricing work?",
  ];

  return (
    <div className="slide slide-qa">
      <div className="content-wrapper">
        {/* Animated background */}
        <div className="qa-background">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-question"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <HelpCircle size={40} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="qa-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <motion.div
              className="icon-ring"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <MessageCircle size={50} />
          </motion.div>

          <motion.h2
            className="qa-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Questions <span className="ampersand">&</span> Answers
          </motion.h2>

          <motion.p
            className="qa-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Let's discuss how AI avatars can transform your content strategy
          </motion.p>

          {/* Sample questions */}
          <motion.div
            className="questions-preview"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {questions.map((q, idx) => (
              <motion.div
                key={idx}
                className="question-chip"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + idx * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <HelpCircle size={14} />
                <span>{q}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="contact-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span className="contact-label">Connect With Us</span>
            <div className="contact-links">
              <motion.a
                href="#"
                className="contact-link"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="contact-link"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="contact-link"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Thank you message */}
          <motion.div
            className="thank-you"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <span>Thank you for your attention</span>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .slide-qa {
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
        }

        .qa-background {
          position: absolute;
          inset: -100px;
          pointer-events: none;
        }

        .floating-question {
          position: absolute;
          color: rgba(102, 126, 234, 0.15);
        }

        .main-content {
          position: relative;
          z-index: 2;
        }

        .qa-icon {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.1));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(102, 126, 234, 0.3);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
        }

        .icon-ring {
          position: absolute;
          inset: -10px;
          border: 2px solid rgba(102, 126, 234, 0.3);
          border-radius: 35px;
        }

        .qa-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .ampersand {
          font-style: italic;
          background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .qa-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 2.5rem;
        }

        .questions-preview {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .question-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .question-chip:hover {
          border-color: rgba(102, 126, 234, 0.5);
        }

        .question-chip svg {
          color: #667eea;
        }

        .contact-section {
          margin-bottom: 2.5rem;
        }

        .contact-label {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 1rem;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .contact-link {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.5);
          color: #667eea;
        }

        .thank-you {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          display: inline-block;
        }

        .thank-you span {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 600px) {
          .question-chip {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
