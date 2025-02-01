import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { FaQrcode } from 'react-icons/fa';
import qrcode from "/public/images/qrcode.jpg";

export default function QRSection() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 p-8 rounded-xl shadow-lg max-w-sm mx-auto text-center"
    >
      <FaQrcode className="text-4xl mx-auto mb-4 text-indigo-500" />
      <div className="bg-white p-4 rounded-lg inline-block mb-4">
        <img src={qrcode} alt="vasudevfbp7@oksbi" />
      </div>
      <a href="https://tinyurl.com/fundmevasu" target="_blank" rel="noreferrer">
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold animate-glow hover:bg-indigo-700 transition-all">
        Scan & Pay (Mobile App)
      </button>
      </a>
    </motion.div>
  );
}