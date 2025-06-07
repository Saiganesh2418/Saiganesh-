import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">LearnHub</h3>
                <p className="text-xs text-gray-400">Transforming Lives Through Education</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering learners worldwide with free, high-quality education. Join our community 
              to access courses, internships, and career opportunities from top companies and institutions.
            </p>
            <p className="text-sm text-gray-400">
              Thank you for joining us! Let's Learn, Grow, and Share Knowledge together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Founders:</p>
              <p className="text-gray-400">Mr. Saiganesh</p>
              <p className="text-gray-400">Mr. Shree</p>
              <div className="mt-3">
                <p className="text-gray-300">Community Email:</p>
                <a 
                  href="mailto:Learnhubcommnuity2025@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Learnhubcommnuity2025@gmail.com
                </a>
              </div>
              <div className="mt-4">
                <a 
                  href="https://chat.whatsapp.com/C4nx8YithWz7QNjiMsoB2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-200"
                >
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 LearnHub. Made with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> for learners worldwide.
            </p>
            <p className="text-gray-500 text-xs">
              Regards, Saiganesh and M.Shree
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}