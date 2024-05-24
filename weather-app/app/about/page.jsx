
import React from 'react' 
import Navbar from '../components/Navbar'
const page = () => {
  return (
    <div>
              <Navbar></Navbar>
              <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">About Us</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to WeatherWise, your trusted source for accurate and up-to-date weather information. 
            Founded in 2024, we are a group of passionate meteorologists and technology enthusiasts dedicated to delivering 
            precise weather forecasts and valuable insights to users worldwide.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
            <li><strong>Accurate Forecasts:</strong> Utilizing cutting-edge technology and trusted meteorological data, we provide precise predictions for any timeframe.</li>
            <li><strong>Real-Time Updates:</strong> Stay informed with the latest weather conditions and severe weather alerts as they happen.</li>
            <li><strong>Detailed Analysis:</strong> Our meteorologists offer in-depth explanations of weather patterns to help you understand the "why" behind the weather.</li>
            <li><strong>Customizable Experience:</strong> Tailor your weather information with location preferences, personalized alerts, and more.</li>
            <li><strong>Educational Resources:</strong> Access a wealth of knowledge through articles, videos, and infographics on various weather-related topics.</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed">
            At WeatherWise, we are committed to providing the highest quality weather information. 
            Our goal is to be your go-to source for all weather-related needs, helping you stay informed, prepared, and safe.
          </p>
        </section>
        

      </div>
    </div>

    </div>
  )
}

export default page