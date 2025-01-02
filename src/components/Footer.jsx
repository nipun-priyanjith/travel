import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Quick Links Section */}
        <div className="space-y-6">
          <h4 className="text-xl font-extrabold text-pink-500 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <a href="#pricing" className="text-lg font-medium hover:text-pink-400 transition duration-300 transform hover:scale-105">
                Pricing
              </a>
            </li>
            <li>
              <a href="#blog" className="text-lg font-medium hover:text-pink-400 transition duration-300 transform hover:scale-105">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-6">
          <h4 className="text-xl font-extrabold text-pink-500 uppercase tracking-wider">Contact Us</h4>
          <p className="text-lg font-light">Phone: <span className="font-medium">(888) 231-4522</span></p>
          <p className="text-lg font-light">Location: <span className="font-medium">Los Angeles, California, USA</span></p>
        </div>

        {/* Gallery Showcase Section */}
        <div className="space-y-6">
          <h4 className="text-xl font-extrabold text-pink-500 uppercase tracking-wider">Gallery Showcase</h4>
          <div className="grid grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://th.bing.com/th/id/OIP.KhHInz84N3tyAj0EQThnGgHaE8?rs=1&pid=ImgDetMain"
                alt="Gallery"
                className="object-cover w-full h-40 rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Costa Victoria</div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://www.pixelstalk.net/wp-content/uploads/images6/Travel-Wallpaper-Free-Download.jpg"
                alt="Gallery"
                className="object-cover w-full h-40 rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Maldives Escape</div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://th.bing.com/th/id/OIP.ibq9zNRzkBueGR5UvQTt9gHaE3?rs=1&pid=ImgDetMain"
                alt="Gallery"
                className="object-cover w-full h-40 rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Ocean Retreat</div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://th.bing.com/th/id/OIP.XNLQn5Z__Lm-akhM3ys8VQHaE7?rs=1&pid=ImgDetMain"
                alt="Gallery"
                className="object-cover w-full h-40 rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Sunset Tour</div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://th.bing.com/th/id/R.22be21195bab77ea4557bc2196dc5734?rik=mcX5r4%2fCZLdngg&pid=ImgRaw&r=0"
                alt="Gallery"
                className="object-cover w-full h-40 rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Island Paradise</div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://th.bing.com/th/id/OIP.Vt3kGu4X6WQlmH91GpJpzgHaFH?rs=1&pid=ImgDetMain"
                alt="Gallery"
                className="object-cover w-full h-40 rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold">Tropical Bliss</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t-2 border-gray-700 pt-6 text-center">
        <p className="text-sm font-light text-gray-400">
          © 2025 All Rights Reserved. Designed with by IRUSIRI GROUP.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
