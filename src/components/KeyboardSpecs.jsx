import { motion } from 'framer-motion';
import { FaKeyboard, FaCog, FaVolumeMute } from 'react-icons/fa';
import { IoKeypadSharp } from "react-icons/io5";

export default function KeyboardSpecs() {
  const specs = [
    { icon: <FaKeyboard />, title: "Switches", desc: "Cherry MX Browns (Because we're not monsters who use Blues in the office)" },
    { icon: <FaCog />, title: "Type", desc: "75% Layout (Perfect for those who actually use function keys)" },
    { icon: <IoKeypadSharp />, title: "Features", desc: "Hot-swappable, RGB (for extra coding power), Sound-dampened" }
  ];

  return (
    <div className="max-w-4xl mx-auto my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">The Dream Machine</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800/50 backdrop-blur-glass p-6 rounded-xl"
          >
            <div className="text-3xl text-indigo-500 mb-4">{spec.icon}</div>
            <h3 className="text-xl font-bold mb-2">{spec.title}</h3>
            <p className="text-gray-300">{spec.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}