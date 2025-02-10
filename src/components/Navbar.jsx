import React, { useState } from 'react'
import { Home, MessageCircle, AlertCircle, Sun, Star } from "lucide-react";
import NavLink from './NavLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-white to-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/"> <h1 className="text-2xl font-bold text-green-600">FarmSupport</h1> </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink icon={<Home />} text="Home" herf='/'/>
          <NavLink icon={<MessageCircle />} text="AI Chatbot" herf='/chatbot'/>
          <NavLink icon={<AlertCircle />} text="Disease Protection" herf='/plantdisease'/>
          <NavLink icon={<Sun />} text="Weather" herf='/weather'/>
          <NavLink icon={<Star />} text="Feedback" herf='/feedback'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
