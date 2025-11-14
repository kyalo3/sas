import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VolunteerDashboard() {
  const [donations, setDonations] = useState([]);
  const [volunteerProfile, setVolunteerProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    availability: '',
    areas_of_interest: '',
    transportation: false,
    emergency_contact: ''
  });

  useEffect(() => {
    fetchVolunteerProfile();
    fetchDonations();
  }, []);

  const fetchVolunteerProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('user_id');
      const response = await axios.get(`http://localhost:8000/volunteers/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVolunteerProfile(response.data);
    } catch (error) {
      if (error.response?.status === 404) {
        setShowProfileForm(true);
      }
      console.error('Error fetching volunteer profile:', error);
    }
  };

  const fetchDonations = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/donations/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setDonations(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching donations:', error);
      alert('Failed to fetch donations');
      setLoading(false);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('user_id');
      await axios.post('http://localhost:8000/volunteers/', 
        { ...formData, user_id: userId },
        { headers: { Authorization: `Bearer ${token}` }}
      );
      alert('Volunteer profile created successfully!');
      setShowProfileForm(false);
      fetchVolunteerProfile();
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Failed to create profile');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  if (loading) {
    return <div className="container mx-auto mt-10">Loading...</div>;
  }

  const filteredDonations = donations.filter(donation => {
    if (filter === 'all') return true;
    return donation.status === filter;
  });

  const stats = {
    total: donations.length,
    pending: donations.filter(d => d.status === 'pending').length,
    approved: donations.filter(d => d.status === 'approved').length,
    funded: donations.filter(d => d.status === 'funded').length,
    completed: donations.filter(d => d.status === 'completed').length
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Volunteer Dashboard</h1>

      {/* Volunteer Profile Section */}
      {showProfileForm ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">Create Your Volunteer Profile</h2>
          <form onSubmit={handleProfileSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Availability</label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekends, Evenings"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Areas of Interest</label>
                <input
                  type="text"
                  name="areas_of_interest"
                  value={formData.areas_of_interest}
                  onChange={handleInputChange}
                  placeholder="e.g., Food delivery, Sorting"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Emergency Contact</label>
                <input
                  type="text"
                  name="emergency_contact"
                  value={formData.emergency_contact}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="transportation"
                  checked={formData.transportation}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-gray-700 text-sm font-bold">I have my own transportation</label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Profile
            </button>
          </form>
        </div>
      ) : volunteerProfile && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">My Volunteer Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-600">Name</p>
              <p className="font-bold">{volunteerProfile.first_name} {volunteerProfile.last_name}</p>
            </div>
            <div>
              <p className="text-gray-600">Phone</p>
              <p className="font-bold">{volunteerProfile.phone_number}</p>
            </div>
            <div>
              <p className="text-gray-600">Availability</p>
              <p className="font-bold">{volunteerProfile.availability}</p>
            </div>
            <div>
              <p className="text-gray-600">Areas of Interest</p>
              <p className="font-bold">{volunteerProfile.areas_of_interest}</p>
            </div>
            <div>
              <p className="text-gray-600">Transportation</p>
              <p className="font-bold">{volunteerProfile.transportation ? 'Available' : 'Not Available'}</p>
            </div>
            <div>
              <p className="text-gray-600">Emergency Contact</p>
              <p className="font-bold">{volunteerProfile.emergency_contact}</p>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Total Donations</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Pending</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Approved</h3>
          <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Funded</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.funded}</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded shadow">
          <h3 className="text-gray-600 text-sm">Completed</h3>
          <p className="text-3xl font-bold text-indigo-600">{stats.completed}</p>
        </div>
      </div>

      {/* Donations Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Donation Tracking</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded ${filter === 'approved' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Approved
            </button>
            <button
              onClick={() => setFilter('funded')}
              className={`px-4 py-2 rounded ${filter === 'funded' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
            >
              Funded
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 overflow-x-auto">
          {filteredDonations.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No donations found for this filter.</p>
          ) : (
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Food Item</th>
                  <th className="px-4 py-2 text-left">Brand</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonations.map((donation) => (
                  <tr key={donation.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{donation.food_item}</td>
                    <td className="px-4 py-3">{donation.brand}</td>
                    <td className="px-4 py-3">{donation.quantity}</td>
                    <td className="px-4 py-3">${donation.price}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        donation.status === 'approved' ? 'bg-green-200 text-green-800' :
                        donation.status === 'funded' ? 'bg-blue-200 text-blue-800' :
                        donation.status === 'completed' ? 'bg-indigo-200 text-indigo-800' :
                        donation.status === 'rejected' ? 'bg-red-200 text-red-800' :
                        'bg-yellow-200 text-yellow-800'
                      }`}>
                        {donation.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-4 py-3 max-w-xs truncate">{donation.description}</td>
                    <td className="px-4 py-3">
                      {donation.status === 'funded' && (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-3 rounded">
                          Coordinate Delivery
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">
            View My Tasks
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
            Report Activity
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded">
            Contact Coordinator
          </button>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDashboard;
