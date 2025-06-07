import React from 'react';
import { BookOpen, Users, Briefcase, Video, Code, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Free Education',
      description: 'Access high-quality educational content from top institutions worldwide',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Free Courses',
      description: 'Comprehensive courses covering various fields and skill levels',
      color: 'text-green-600'
    },
    {
      icon: Briefcase,
      title: 'Free Internships',
      description: 'Hands-on experience opportunities with leading companies',
      color: 'text-purple-600'
    },
    {
      icon: Video,
      title: 'Free Webinars',
      description: 'Interactive sessions with industry experts and thought leaders',
      color: 'text-red-600'
    },
    {
      icon: Code,
      title: 'Free Bootcamps',
      description: 'Intensive training programs for rapid skill development',
      color: 'text-yellow-600'
    }
  ];

  const features = [
    'Industry-relevant curriculum updated regularly',
    'Hands-on projects and real-world applications',
    'Career support and job placement assistance',
    'Lifetime access to course materials',
    '24/7 community support',
    'Verified certificates upon completion'
  ];

  const partners = ['Microsoft', 'Google', 'ISRO', 'Letsupgrade', 'Cisco', 'And Many More...'];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of free educational opportunities designed to transform your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose LearnHub?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Partners</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gray-100 hover:border-blue-200 transition-colors duration-200">
                <span className="text-gray-700 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}