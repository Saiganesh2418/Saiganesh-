import React from 'react';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for any questions, support, or collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email Addresses</h4>
                  <div className="space-y-1">
                    <a 
                      href="mailto:saiganeshyalamanchidurgarao@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
                    >
                      saiganeshyalamanchidurgarao@gmail.com
                    </a>
                    <a 
                      href="mailto:mshree26092007@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
                    >
                      mshree26092007@gmail.com
                    </a>
                    <a 
                      href="mailto:Learnhubcommnuity2025@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
                    >
                      Learnhubcommnuity2025@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">WhatsApp Community</h4>
                  <a 
                    href="https://chat.whatsapp.com/C4nx8YithWz7QNjiMsoB2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    Join our active community
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-gray-300">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Global Community</h4>
                  <p className="text-gray-300">Serving learners worldwide with 24/7 support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Career?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Join thousands of successful learners who have already started their journey with LearnHub. 
              Get access to free courses, internships, and a supportive community that will help you achieve your goals.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://chat.whatsapp.com/C4nx8YithWz7QNjiMsoB2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 block text-center"
              >
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Community
              </a>
              
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                Get Started Today
              </button>
            </div>

            <p className="text-blue-100 text-sm mt-6 text-center">
              Note: Not from Official • Stay updated on latest trends and opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}