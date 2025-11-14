import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="contact-hero bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
          <div className="info-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="info-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg text-center">
              <div className="icon-container bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-700 mb-2">General Inquiries:</p>
              <p className="text-blue-600 font-semibold mb-3">info@sustainashare.org</p>
              <p className="text-gray-700 mb-2">Support:</p>
              <p className="text-blue-600 font-semibold">support@sustainashare.org</p>
            </div>

            <div className="info-card bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg text-center">
              <div className="icon-container bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Call Us</h3>
              <p className="text-gray-700 mb-2">Main Office:</p>
              <p className="text-green-600 font-semibold mb-3">+254 700 123 456</p>
              <p className="text-gray-700 mb-2">Support Line:</p>
              <p className="text-green-600 font-semibold">+254 711 987 654</p>
            </div>

            <div className="info-card bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg text-center">
              <div className="icon-container bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Visit Us</h3>
              <p className="text-gray-700 mb-2">Head Office:</p>
              <p className="text-purple-600 font-semibold mb-3">Nairobi, Kenya</p>
              <p className="text-gray-700 mb-2">Postal Address:</p>
              <p className="text-purple-600 font-semibold">P.O. Box 12345-00100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="form-group">
                  <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-gray-700 font-semibold mb-2">Your Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="form-group mb-8">
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..." 
                  rows="6" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <div className="map-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Find Us</h2>
          <div className="map-container max-w-5xl mx-auto bg-gray-200 rounded-xl overflow-hidden shadow-lg" style={{height: '400px'}}>
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-green-100">
              <div className="text-center">
                <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-gray-600 text-lg">Nairobi, Kenya</p>
                <p className="text-gray-500">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="office-hours py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Office Hours</h2>
            <div className="hours-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="hours-item flex justify-between border-b border-gray-200 pb-3">
                <span className="font-semibold text-gray-700">Monday - Friday:</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item flex justify-between border-b border-gray-200 pb-3">
                <span className="font-semibold text-gray-700">Saturday:</span>
                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item flex justify-between border-b border-gray-200 pb-3">
                <span className="font-semibold text-gray-700">Sunday:</span>
                <span className="text-gray-600">Closed</span>
              </div>
              <div className="hours-item flex justify-between border-b border-gray-200 pb-3">
                <span className="font-semibold text-gray-700">Public Holidays:</span>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
