import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="about-hero bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Sustain a Share</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building a sustainable future through community collaboration and food sharing
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="our-story py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sustain a Share was born from a simple observation: while millions of people go hungry every day, 
              tons of perfectly good food is wasted. We believed there had to be a better way to connect those 
              with excess food to those in need.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2024, our platform has grown from a small community initiative to a nationwide movement, 
              connecting donors, recipients, and volunteers in a shared mission to eliminate food waste and 
              fight hunger.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we're proud to have facilitated thousands of donations, helped hundreds of families, 
              and built a community of compassionate individuals who believe in the power of sharing.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="mission-card bg-white p-8 rounded-xl shadow-lg">
              <div className="icon-container bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                To create a world where no one goes hungry while perfectly good food goes to waste. 
                We empower communities to share resources efficiently and compassionately, building 
                bridges between abundance and need.
              </p>
            </div>
            <div className="vision-card bg-white p-8 rounded-xl shadow-lg">
              <div className="icon-container bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                A sustainable future where food security is achieved through community collaboration, 
                technology innovation, and the kindness of people helping people. We envision a world 
                where every meal matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="core-values py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="value-card text-center p-6">
              <div className="value-icon bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Compassion</h4>
              <p className="text-gray-600">We lead with empathy and understanding for all members of our community</p>
            </div>
            <div className="value-card text-center p-6">
              <div className="value-icon bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Integrity</h4>
              <p className="text-gray-600">We operate with transparency and honesty in all our interactions</p>
            </div>
            <div className="value-card text-center p-6">
              <div className="value-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Community</h4>
              <p className="text-gray-600">We believe in the power of people coming together for a common cause</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dedicated professionals working tirelessly to make food sharing accessible to everyone
          </p>
          <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="team-card bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="avatar bg-gradient-to-br from-green-400 to-blue-500 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>
              <h4 className="text-xl font-semibold mb-2">John Doe</h4>
              <p className="text-green-600 mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">Passionate about eliminating food waste and building sustainable communities</p>
            </div>
            <div className="team-card bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="avatar bg-gradient-to-br from-purple-400 to-pink-500 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                JS
              </div>
              <h4 className="text-xl font-semibold mb-2">Jane Smith</h4>
              <p className="text-blue-600 mb-3">Operations Director</p>
              <p className="text-gray-600 text-sm">Ensuring smooth operations and excellent user experience for our community</p>
            </div>
            <div className="team-card bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="avatar bg-gradient-to-br from-yellow-400 to-orange-500 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                MJ
              </div>
              <h4 className="text-xl font-semibold mb-2">Mike Johnson</h4>
              <p className="text-purple-600 mb-3">Community Manager</p>
              <p className="text-gray-600 text-sm">Building and nurturing our growing community of donors and recipients</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section bg-gradient-to-r from-green-600 to-blue-600 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Be part of the change. Together, we can create a world without hunger.
          </p>
          <Link 
            to="/register" 
            className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
