import React from 'react'

const AboutUs = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-6 max-w-7xl">
      {/* Centered Heading */}
      <h2 className="text-4xl md:text-5xl font-sans text-gray-900 mb-12 text-center">
        About <span className="text-gray-600">Grahmind</span>
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Vision GIF */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <img 
              src="https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif" 
              alt="Vision and Innovation"
              className="w-full h-auto rounded-lg shadow-2xl filter grayscale hover:brightness-110 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Right side - Simplified Content */}
        <div className="flex justify-center lg:justify-start">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md text-center lg:text-left">
            Grahmind empowers businesses to harness AI and digital innovation. Our mission is to deliver intelligent, ethical, and impactful solutions that drive growth and creativity. We value innovation, integrity, collaboration, and excellence in every partnership.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutUs