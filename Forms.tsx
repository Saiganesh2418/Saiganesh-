import React, { useState } from 'react';
import { UserPlus, MessageSquare, Send } from 'lucide-react';

export default function Forms() {
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    experience: ''
  });

  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    rating: '5',
    message: ''
  });

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content for registration
    const subject = encodeURIComponent('New Registration - LearnHub');
    const body = encodeURIComponent(`
New Registration Details:

Name: ${registrationForm.name}
Email: ${registrationForm.email}
Phone: ${registrationForm.phone}
Areas of Interest: ${registrationForm.interests}
Experience Level: ${registrationForm.experience}

Submitted on: ${new Date().toLocaleString()}
    `);

    // Send to both email addresses
    const email1 = 'saiganeshyalamanchidurgarao@gmail.com';
    const email2 = 'Learnhubcommnuity2025@gmail.com';
    
    // Open default email client with both recipients
    window.open(`mailto:${email1},${email2}?subject=${subject}&body=${body}`);
    
    alert('Thank you for registering! Your registration details have been prepared for email submission.');
    setRegistrationForm({ name: '', email: '', phone: '', interests: '', experience: '' });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content for feedback
    const subject = encodeURIComponent('New Feedback - LearnHub');
    const body = encodeURIComponent(`
New Feedback Received:

Name: ${feedbackForm.name}
Email: ${feedbackForm.email}
Rating: ${feedbackForm.rating}/5 stars
Message: ${feedbackForm.message}

Submitted on: ${new Date().toLocaleString()}
    `);

    // Send to both email addresses
    const email1 = 'saiganeshyalamanchidurgarao@gmail.com';
    const email2 = 'Learnhubcommnuity2025@gmail.com';
    
    // Open default email client with both recipients
    window.open(`mailto:${email1},${email2}?subject=${subject}&body=${body}`);
    
    alert('Thank you for your feedback! Your feedback has been prepared for email submission.');
    setFeedbackForm({ name: '', email: '', rating: '5', message: '' });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Register to get started or share your feedback to help us improve
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Registration</h3>
            </div>

            <form onSubmit={handleRegistrationSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={registrationForm.name}
                  onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={registrationForm.email}
                  onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={registrationForm.phone}
                  onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                <textarea
                  value={registrationForm.interests}
                  onChange={(e) => setRegistrationForm({...registrationForm, interests: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What courses or skills are you interested in?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <select
                  value={registrationForm.experience}
                  onChange={(e) => setRegistrationForm({...registrationForm, experience: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                Register Now
              </button>
            </form>
          </div>

          {/* Feedback Form */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Feedback</h3>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={feedbackForm.name}
                  onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={feedbackForm.email}
                  onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select
                  value={feedbackForm.rating}
                  onChange={(e) => setFeedbackForm({...feedbackForm, rating: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Very Good</option>
                  <option value="3">⭐⭐⭐ Good</option>
                  <option value="2">⭐⭐ Fair</option>
                  <option value="1">⭐ Poor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback *</label>
                <textarea
                  required
                  value={feedbackForm.message}
                  onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Share your thoughts, suggestions, or experiences..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}