import React from 'react'
import { Home, MessageCircle, AlertCircle, Sun, Star } from "lucide-react";

const ServicesSection = () => {
    const services = [
        { icon: <AlertCircle className="text-red-500" />, title: "Disease Detection", desc: "Upload crop images for instant disease detection.", color: "bg-red-100", link: "#disease" },
        { icon: <Sun className="text-yellow-500" />, title: "Weather Updates", desc: "Get real-time weather data & forecasts.", color: "bg-yellow-100", link: "#weather" },
        { icon: <MessageCircle className="text-blue-500" />, title: "AI Assistant", desc: "Get answers to all your farming queries.", color: "bg-blue-100", link: "#chatbot" }
    ];
    return (
        <div className="py-12 bg-gray-50" id="services">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Our Services</h2>
      <div className="flex justify-center space-x-6">
        {services.map((service, index) => (
          <div key={index} className={`p-6 rounded-lg ${service.color} w-72 text-center shadow-md hover:shadow-lg transition`}>
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
            <a href={service.link} className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
