import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import FeedbackSection from '../components/FeedbackSection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <FeedbackSection />
            <Footer />
        </div>
    )
}

export default Home
