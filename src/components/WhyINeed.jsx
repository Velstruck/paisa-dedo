import { motion } from 'framer-motion';
import { FaCode, FaKeyboard, FaGamepad, FaBolt, FaTrophy } from 'react-icons/fa';

export default function WhyINeed() {
  const thoughts = [
    {
      icon: <FaCode className="text-cyan-500 animate-pulse" />,
      text: "Every millisecond counts when debugging at 3 AM. These premium switches might just save my sanity! 🚀"
    },
    {
      icon: <FaKeyboard className="text-purple-500 animate-pulse" />,
      text: "They say a craftsman is only as good as their tools. My code deserves better than a squeaky spacebar! ⚡"
    },
    {
      icon: <FaGamepad className="text-green-500 animate-bounce" />,
      text: "From coding sessions to gaming marathons, this keyboard will be my trusty companion 🎮"
    },
    {
      icon: <FaBolt className="text-yellow-500 animate-spin" />,
      text: "Mechanical switches = faster code compilation. It's just science! 🧪"
    },
    {
      icon: <FaTrophy className="text-orange-500 animate-pulse" />,
      text: "Level up my development setup: Achievement Unlocked 🏆"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-16">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ⌨️ Developer's Quest for the Perfect Keyboard ⚡
      </motion.h2>
      
      <motion.div 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {thoughts.map((thought, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 backdrop-blur-glass p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">
                {thought.icon}
              </div>
              <p className="text-lg font-medium text-gray-200">
                {thought.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text">
          Thanks for supporting this developer's keyboard upgrade!<span className='text-white'> 🎹⚡</span>
        </span>
      </motion.div>
    </div>
  );
}