import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';
import './BookCallWidget.css';

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/bookings/need-a-va-lets-talk';

const BookCallWidget = () => {
  return (
    <motion.div
      className="book-call-widget"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="book-call-widget__label">BOOK A CALL</div>
      <div className="book-call-widget__qr-container">
        <QRCodeSVG
          value={BOOKING_URL}
          size={100}
          bgColor="#ffffff"
          fgColor="#0f0f14"
          level="M"
          includeMargin={false}
        />
      </div>
    </motion.div>
  );
};

export default BookCallWidget;
