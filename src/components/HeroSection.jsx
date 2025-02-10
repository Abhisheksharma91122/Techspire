import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative h-[600px] flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-white to-blue-200 opacity-50 blur-2xl"></div>
            <div className="relative">
                <h1 className="text-6xl font-bold text-green-700">Empowering Farmers, Enriching Harvests!</h1>
                <p className="text-xl text-gray-700 mt-4">Your go-to platform for smart farming solutions.</p>
                <a href="#services">
                <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-lg">
                    Get Started
                </button></a>
            </div>
        </div>
    )
}

export default HeroSection
