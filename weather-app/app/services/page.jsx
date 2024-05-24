
import React from 'react'
import Navbar from '../components/Navbar'
const page = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">Our Services</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Weather Forecasts</h2>
          <p className="text-gray-600 leading-relaxed">
            Our core service is providing accurate and reliable weather forecasts. From hourly updates to weekly outlooks, our forecasts are designed to help you plan your day with confidence. Leveraging advanced meteorological models and real-time data, we ensure you receive the most current and precise information available.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Severe Weather Alerts</h2>
          <p className="text-gray-600 leading-relaxed">
            Stay safe with our timely severe weather alerts. We monitor conditions around the clock to provide you with immediate notifications about extreme weather events such as thunderstorms, hurricanes, and tornadoes. Our alerts are designed to give you the information you need to protect yourself and your loved ones.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Climate Analysis</h2>
          <p className="text-gray-600 leading-relaxed">
            Understand long-term weather patterns with our detailed climate analysis. Our expert meteorologists delve into historical data and trends to provide insights on climate change and its impact on different regions. Whether for academic research or personal interest, our climate reports are a valuable resource.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Customizable Weather Reports</h2>
          <p className="text-gray-600 leading-relaxed">
            Tailor your weather information to suit your needs with our customizable weather reports. Choose your preferred locations, set up personalized notifications, and access the specific data points that matter most to you. Our customizable reports ensure you get the weather information you need, how you want it.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Educational Resources</h2>
          <p className="text-gray-600 leading-relaxed">
            Expand your knowledge with our extensive educational resources. We offer a variety of articles, videos, and infographics that explain various weather phenomena, the science behind meteorology, and practical tips for weather preparedness. Our resources are designed to be informative and engaging for all ages.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Consulting Services</h2>
          <p className="text-gray-600 leading-relaxed">
            For businesses and organizations, we offer specialized weather consulting services. Our experts provide tailored weather data and analysis to help you make informed decisions, whether it’s for event planning, logistics, or strategic planning. Contact us to learn how we can assist with your specific needs.
          </p>
        </section>
      </div>
    </div>

        </div>
  )
}

export default page