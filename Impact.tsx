import React from 'react';
import { Users, BookOpen, Trophy, Handshake } from 'lucide-react';

export default function Impact() {
  const metrics = [
    {
      icon: BookOpen,
      number: '25+',
      label: 'Expert Courses',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Users,
      number: '100K+',
      label: 'Active Learners',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Trophy,
      number: '95%',
      label: 'Success Rate',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Handshake,
      number: '50+',
      label: 'Industry Partners',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a thriving community of learners and see the difference we're making together
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}