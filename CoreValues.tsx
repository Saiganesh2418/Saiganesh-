import React from 'react';
import { Target, Heart, Lightbulb, Globe } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: Target,
      title: 'Mission Focused',
      description: 'Empowering learners with practical skills for real-world success.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Heart,
      title: 'Student First',
      description: 'Every decision we make prioritizes our learners\' success and growth.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'Constantly evolving our curriculum to match industry demands.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Building a worldwide network of skilled professionals.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do and shape our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}