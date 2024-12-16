import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r bg-[#FFFFFF] to-blue-100 py-8 px-6">
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
    
        <div>
        <h1 className="text-[#3563e9] text-3xl font-bold text-center lg:text-left">MORENT</h1>
        <p className="text-gray-600 mt-2">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">How it works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Featured</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Partnership</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Business Relation</a></li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Events</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Podcast</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Invite a Friend</a></li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Socials</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Discord</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-[#1A202C]
 text-sm">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-600">Privacy & Policy</a>
            <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
