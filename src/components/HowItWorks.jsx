import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 to-indigo-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl font-extrabold text-center mb-6 text-gray-800">How it Works</h3>
        <p className="text-center text-gray-700 mb-12">
          A simple and streamlined process to book your flight, with each step designed for your convenience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Steps */}
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Search Flights</h4>
                <p className="text-gray-600">Browse through our extensive flight options tailored to your needs.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Fill Contact Form</h4>
                <p className="text-gray-600">Provide necessary details to help us understand your preferences.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Choose Your Airline</h4>
                <p className="text-gray-600">Select the airline that best fits your schedule and preferences.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Booking in 10 Minutes!</h4>
                <p className="text-gray-600">Confirm your flight and receive booking details within minutes.</p>
              </div>
            </div>
          </div>

          {/* Right Column: YouTube Video */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/oDi3IDSdZrk?si=WTjWvnfw1d06Qjz1"
              title="How it works video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
