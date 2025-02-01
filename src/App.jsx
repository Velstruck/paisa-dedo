import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import QRSection from './components/QRSection';
import KeyboardSpecs from './components/KeyboardSpecs';
import WhyINeed from './components/WhyINeed';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          
          <QRSection />
          <KeyboardSpecs />
          <WhyINeed />
        </motion.div>
      </div>
    </div>
  );
}

export default App;