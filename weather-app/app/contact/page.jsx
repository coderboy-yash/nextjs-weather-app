
import React from 'react'
import Navbar from '../components/Navbar'
const page = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">Contact Us</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We value your feedback and are here to assist you with any questions, suggestions, or concerns. Please fill out the form below, and our support team will get back to you as soon as possible.
          </p>
          
          <form className="bg-white p-8 shadow-lg rounded-lg">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" 
                placeholder="Your Name" 
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" 
                placeholder="Your Email" 
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" 
                placeholder="Subject" 
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 h-32" 
                placeholder="Your Message" 
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Other Ways to Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you prefer, you can also reach us via email or phone:
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Email:</strong> <a href="mailto:support@weatherwebsite.com" className="text-blue-500">support@WeatherWise.com</a>
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-600 leading-relaxed mt-6">
            Thank you for choosing WeatherWise. We look forward to hearing from you!
          </p>
        </section>
      </div>
    </div>

    </div>
  )
}

export default page