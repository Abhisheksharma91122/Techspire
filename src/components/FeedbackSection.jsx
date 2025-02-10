import React from 'react'

const FeedbackSection = () => {
    return (
        <div className="py-12 bg-gray-100 text-center">
            <h2 className="text-4xl font-bold text-green-700 mb-6">Your Feedback Matters</h2>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">Help us improve by sharing your thoughts on our platform.</p>
            <textarea className="w-3/4 md:w-1/2 p-4 border border-gray-300 rounded-lg shadow-md" rows="4" placeholder="Enter your feedback..."></textarea>
            <br />
            <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md">Submit Feedback</button>
        </div>
    )
}

export default FeedbackSection
