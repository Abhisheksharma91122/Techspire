import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-green-700 text-white py-6 text-center mt-12">
            <p className="text-lg">© 2025 FarmSupport. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Contact Us</a>
            </div>
        </footer>
    )
}

export default Footer
