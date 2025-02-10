import React from 'react'
import Home from './pages/Home'
import PlantDisease from './pages/Plant_Disease'
import Weather from './pages/Weather'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'
import Chatbot from './pages/Chatbot';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/weather" element={<PageWrapper><Weather /></PageWrapper>} />
        <Route path="/plantdisease" element={<PageWrapper><PlantDisease /></PageWrapper>} />
        <Route path="/chatbot" element={<PageWrapper><Chatbot /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// Page transition wrapper component
const PageWrapper = ({ children }) => { 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
