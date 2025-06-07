import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Our
            <span className="text-blue-600 block">Learning Community!</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us for exciting discussions and explore free educational opportunities 
            from top universities and companies worldwide. Let's Learn, Grow, and Share Knowledge!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a
              href="https://chat.whatsapp.com/C4nx8YithWz7QNjiMsoB2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Community
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            We share free Education with Skills and Certificates. Ask for any course or internship you want!
          </p>
        </div>
      </div>
    </section>
  );
}