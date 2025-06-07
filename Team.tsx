import React from 'react';
import { Crown, Shield } from 'lucide-react';

export default function Team() {
  const founders = [
    {
      name: 'Mr. Saiganesh',
      role: 'Founder',
      email: 'Saiganeshyalamanchidurgarao@gmail.com'
    },
    {
      name: 'Mr. Shree',
      role: 'Founder',
      email: 'mshree26092007@gmail.com'
    }
  ];

  const admins = [
    'Ashutosh',
    'Akshaya',
    'Sai Ram Tummuri',
    'Aalok Shrrama',
    'Pranjal'
  ];

  return (
    <section id="team" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who make LearnHub possible
          </p>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{founder.name}</h4>
                <p className="text-blue-600 font-medium mb-4">{founder.role}</p>
                <a 
                  href={`mailto:${founder.email}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  {founder.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Administrators */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Administrators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {admins.map((admin, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{admin}</h4>
                <p className="text-gray-600 text-sm">Administrator</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}