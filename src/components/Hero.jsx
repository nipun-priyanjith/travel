import React, { useState } from "react";

const Hero = () => {
  const [selectedClass, setSelectedClass] = useState("Business Class");
  const [selectedTrip, setSelectedTrip] = useState("One Way");

  return (
    <section
      className="bg-cover bg-center text-gray-600"
      style={{
        backgroundImage: `url('https://cdn.wallpapersafari.com/51/17/4Z195x.jpg')`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-20 space-y-8">
        {/* Hero Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center w-full max-w-4xl leading-tight tracking-wider drop-shadow-2xl animate__animated animate__fadeIn animate__delay-1s">
  Explore the World Together <br />
  With Premium Travel
</h2>


        {/* Book Now Button */}
        {/* <div className="w-full flex justify-center max-w-4xl animate__animated animate__fadeIn animate__delay-2s">
          <button className="bg-pink-600 px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg ring-4 ring-pink-300 focus:outline-none hover:ring-pink-500 focus:ring-2">
            <span>Book Now</span>
            <span className="text-lg">📅</span>
          </button>
        </div> */}

        {/* Travel Class Options */}
        <div className="flex justify-center text-lg font-semibold space-x-6 animate__animated animate__fadeIn animate__delay-3s">
          <span
            className={`cursor-pointer px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-lg font-medium tracking-wide ${
              selectedClass === "Business Class"
                ? "bg-pink-600 text-white shadow-xl"
                : "bg-gray-200 hover:bg-pink-600 hover:text-white"
            }`}
            onClick={() => setSelectedClass("Business Class")}
          >
            Business Class
          </span>
          <span
            className={`cursor-pointer px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-lg font-medium tracking-wide ${
              selectedClass === "First Class"
                ? "bg-pink-600 text-white shadow-xl"
                : "bg-gray-200 hover:bg-pink-600 hover:text-white"
            }`}
            onClick={() => setSelectedClass("First Class")}
          >
            First Class
          </span>
        </div>

        {/* Travel Type Options */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-4xl mt-10 animate__animated animate__fadeIn animate__delay-4s">
          <div className="flex justify-center mb-6 space-x-6">
            <button
              className={`px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selectedTrip === "One Way"
                  ? "bg-pink-600 text-white shadow-xl"
                  : "bg-gray-200 hover:bg-pink-600 hover:text-white"
              }`}
              onClick={() => setSelectedTrip("One Way")}
            >
              One Way
            </button>
            <button
              className={`px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selectedTrip === "Round Trip"
                  ? "bg-pink-600 text-white shadow-xl"
                  : "bg-gray-200 hover:bg-pink-600 hover:text-white"
              }`}
              onClick={() => setSelectedTrip("Round Trip")}
            >
              Round Trip
            </button>
            <button
              className={`px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selectedTrip === "Multicity"
                  ? "bg-pink-600 text-white shadow-xl"
                  : "bg-gray-200 hover:bg-pink-600 hover:text-white"
              }`}
              onClick={() => setSelectedTrip("Multicity")}
            >
              Multicity
            </button>
          </div>

          {/* Flight Search Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Departure City */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-700">Departure City</label>
              <div className="flex items-center border-2 rounded-lg p-3 shadow-inner hover:shadow-lg transition-all duration-300">
                <span className="mr-3 text-2xl">✈️</span>
                <select className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 py-2 px-3 rounded-md">
                  <option>Pakistan</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
            </div>

            {/* Arrival City */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-700">Arrival City</label>
              <div className="flex items-center border-2 rounded-lg p-3 shadow-inner hover:shadow-lg transition-all duration-300">
                <span className="mr-3 text-2xl">🏙️</span>
                <select className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 py-2 px-3 rounded-md">
                  <option>Dubai</option>
                  <option>London</option>
                  <option>New York</option>
                </select>
              </div>
            </div>

            {/* Arrival Date */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-700">Arrival Date</label>
              <input
                type="date"
                className="border-2 rounded-lg p-3 w-full shadow-inner hover:shadow-lg transition-all duration-300 focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Passengers */}
            <div>
              <label className="block text-lg font-semibold mb-2 text-gray-700">Passengers</label>
              <div className="flex items-center border-2 rounded-lg p-3 shadow-inner hover:shadow-lg transition-all duration-300">
                <span className="mr-3 text-2xl">👤</span>
                <select className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 py-2 px-3 rounded-md">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>

          {/* Search Flight Button */}
          <div className="text-center mt-8">
            <button className="bg-pink-600 px-12 py-4 rounded-full text-white font-semibold shadow-xl hover:bg-pink-700 transition-all duration-300 hover:ring-4 ring-pink-500 focus:outline-none focus:ring-2">
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
