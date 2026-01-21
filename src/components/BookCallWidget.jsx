import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';
import './BookCallWidget.css';

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/bookings/need-a-va-lets-talk';

const BookCallWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="book-call-widget"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div
        className="book-call-widget__trigger"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="book-call-widget__icon">📞</span>
        <span className="book-call-widget__text">BOOK A CALL</span>
        <span className={`book-call-widget__arrow ${isExpanded ? 'expanded' : ''}`}>▲</span>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="book-call-widget__content"
            initial={{ opacity: 0, height: 0, scale: 0.8 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="book-call-widget__qr-container">
              <QRCodeSVG
                value={BOOKING_URL}
                size={140}
                bgColor="transparent"
                fgColor="#c9a962"
                level="M"
                includeMargin={false}
              />
            </div>
            <p className="book-call-widget__scan-text">Scan to book</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="book-call-widget__link"
            >
              Or click here
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BookCallWidget;
