import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="hero-section text-center py-20 px-4">
        <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 text-gray-800">
          Welcome to <span className="text-green-600">Sustain a Share</span>
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Connecting generous donors with those in need to share food resources and make a lasting difference in our community
        </p>
        <div className="cta-buttons flex flex-wrap justify-center gap-4">
          <Link 
            to="/register" 
            className="cta-button bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link 
            to="/login" 
            className="cta-button bg-white hover:bg-gray-100 text-green-600 font-bold py-3 px-8 rounded-lg shadow-lg border-2 border-green-600 transition duration-300 transform hover:scale-105"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section container mx-auto px-4 py-16">
        <h2 className="section-title text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div className="feature-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Donors Card */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="icon-container bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="card-title text-2xl font-semibold mb-4 text-blue-600 text-center">For Donors</h3>
            <p className="card-description text-gray-600 mb-6 text-center leading-relaxed">
              Browse donation requests from verified recipients and fund those that resonate with you. Track your contributions and witness the positive impact you create.
            </p>
            <Link to="/register" className="card-link block text-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
              Become a Donor →
            </Link>
          </div>

          {/* Recipients Card */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="icon-container bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="card-title text-2xl font-semibold mb-4 text-green-600 text-center">For Recipients</h3>
            <p className="card-description text-gray-600 mb-6 text-center leading-relaxed">
              Submit donation requests for food items you need. Get matched with compassionate donors who want to help. Track your requests in real-time.
            </p>
            <Link to="/register" className="card-link block text-center text-green-600 hover:text-green-800 font-semibold transition duration-300">
              Request Donations →
            </Link>
          </div>

          {/* Volunteers Card */}
          <div className="feature-card bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div className="icon-container bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="card-title text-2xl font-semibold mb-4 text-purple-600 text-center">For Volunteers</h3>
            <p className="card-description text-gray-600 mb-6 text-center leading-relaxed">
              Help facilitate donations between donors and recipients. Monitor donation activities and ensure smooth operations within your community.
            </p>
            <Link to="/register" className="card-link block text-center text-purple-600 hover:text-purple-800 font-semibold transition duration-300">
              Join as Volunteer →
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-item">
              <div className="stat-number text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="stat-label text-gray-600">Donations Made</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="stat-label text-gray-600">Families Helped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="stat-label text-gray-600">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section bg-gradient-to-r from-green-600 to-blue-600 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="cta-title text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="cta-text text-xl text-white mb-8 max-w-2xl mx-auto">
            Join our community today and start sharing resources with those who need them most
          </p>
          <Link 
            to="/register" 
            className="cta-button-large bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-center mb-8 text-gray-800">About Us</h2>
          <div className="about-content max-w-4xl mx-auto">
            <p className="about-text text-lg text-gray-700 mb-6 leading-relaxed text-center">
              Sustain a Share is a community-driven platform dedicated to reducing food waste and fighting hunger. 
              We connect generous donors with families and individuals in need, creating a sustainable ecosystem 
              where excess food resources are shared rather than wasted.
            </p>
            <div className="mission-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="mission-card bg-white p-6 rounded-lg shadow-md">
                <h3 className="mission-title text-xl font-semibold text-green-600 mb-3">Our Mission</h3>
                <p className="mission-text text-gray-600 leading-relaxed">
                  To create a world where no one goes hungry while perfectly good food goes to waste. 
                  We empower communities to share resources efficiently and compassionately.
                </p>
              </div>
              <div className="vision-card bg-white p-6 rounded-lg shadow-md">
                <h3 className="vision-title text-xl font-semibold text-blue-600 mb-3">Our Vision</h3>
                <p className="vision-text text-gray-600 leading-relaxed">
                  A sustainable future where food security is achieved through community collaboration, 
                  technology, and the kindness of people helping people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
          <div className="contact-content max-w-4xl mx-auto">
            <p className="contact-intro text-lg text-gray-700 mb-10 text-center">
              Have questions or want to learn more? We'd love to hear from you!
            </p>
            <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="contact-card text-center">
                <div className="contact-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="contact-method text-lg font-semibold text-gray-800 mb-2">Email</h3>
                <p className="contact-detail text-gray-600">info@sustainashare.org</p>
                <p className="contact-detail text-gray-600">support@sustainashare.org</p>
              </div>
              <div className="contact-card text-center">
                <div className="contact-icon bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="contact-method text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="contact-detail text-gray-600">+254 700 123 456</p>
                <p className="contact-detail text-gray-600">+254 711 987 654</p>
              </div>
              <div className="contact-card text-center">
                <div className="contact-icon bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="contact-method text-lg font-semibold text-gray-800 mb-2">Address</h3>
                <p className="contact-detail text-gray-600">Nairobi, Kenya</p>
                <p className="contact-detail text-gray-600">P.O. Box 12345-00100</p>
              </div>
            </div>
            <div className="contact-form-section mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="form-title text-2xl font-semibold text-center mb-6 text-gray-800">Send us a Message</h3>
              <form className="contact-form max-w-2xl mx-auto">
                <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea 
                    placeholder="Your Message" 
                    rows="5" 
                    className="form-textarea w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                <div className="form-submit text-center">
                  <button 
                    type="submit" 
                    className="submit-button bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="footer-text">© 2025 Sustain a Share. Making a difference, one donation at a time.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
