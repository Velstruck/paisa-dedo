import { motion } from 'framer-motion';
import { FaKeyboard } from 'react-icons/fa';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-6xl mb-4"
      >
        <FaKeyboard className="inline-block text-indigo-500" />
      </motion.div>
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
        Help a Developer Get Their Dream Keyboard! ⌨
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Because every developer deserves that satisfying *click* sound that makes coding feel like conducting a symphony!
      </p>
    </motion.div>
  );
}