import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DonorDashboard() {
  const [approvedDonations, setApprovedDonations] = useState([]);
  const [myDonations, setMyDonations] = useState([]);
  const [donorProfile, setDonorProfile] = useState(null);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [profileForm, setProfileForm] = useState({
    first_name: '',
    last_name: '',
    title: '',
    phone_number: '',
    company: '',
    services_interested_in: '',
    participating_locations: ''
  });
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchDonorProfile = async () => {
      if (!userId) return;
      try {
        const response = await axios.get(`http://localhost:8000/donors/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data && response.data.length > 0) {
          setDonorProfile(response.data[0]);
        }
      } catch (error) {
        console.log('No donor profile found - this is a new donor');
        setShowProfileForm(true);
      }
    };

    const fetchApprovedDonations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/donations/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Filter for approved donations that haven't been funded yet
        const approved = response.data.filter(d => d.status === 'approved' && !d.donor_id);
        setApprovedDonations(approved);
      } catch (error) {
        console.error('Failed to fetch approved donations:', error.response ? error.response.data : error.message);
      }
    };

    const fetchMyDonations = async () => {
      if (!userId) return;
      try {
        const response = await axios.get(`http://localhost:8000/donors/${userId}/donations/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMyDonations(response.data);
      } catch (error) {
        // It's okay if this fails - donor might not have any donations yet
        console.log('No donations found for this donor');
      }
    };

    if (token) {
      fetchDonorProfile();
      fetchApprovedDonations();
      fetchMyDonations();
    }
  }, [token, userId]);

  const handleFund = async (donationId) => {
    if (!userId) {
      alert('User not logged in');
      return;
    }
    try {
      await axios.put(`http://localhost:8000/donations/${donationId}/fund`, 
        { donor_id: userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Remove from approved list and add to my donations
      const fundedDonation = approvedDonations.find(d => d.id === donationId);
      setApprovedDonations(approvedDonations.filter(d => d.id !== donationId));
      setMyDonations([...myDonations, { ...fundedDonation, status: 'funded', donor_id: userId }]);
      alert('Donation funded successfully!');
    } catch (error) {
      console.error('Failed to fund donation:', error.response ? error.response.data : error.message);
      alert('Failed to fund donation: ' + (error.response?.data?.detail || 'An error occurred'));
    }
  };

  const handleProfileFormChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const handleProfileFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        ...profileForm,
        services_interested_in: profileForm.services_interested_in.split(',').map(s => s.trim()),
        participating_locations: profileForm.participating_locations.split(',').map(l => l.trim())
      };
      
      await axios.post('http://localhost:8000/donors/', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      alert('Donor profile created successfully!');
      setShowProfileForm(false);
      // Refresh the profile
      const response = await axios.get(`http://localhost:8000/donors/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data && response.data.length > 0) {
        setDonorProfile(response.data[0]);
      }
    } catch (error) {
      console.error('Failed to create donor profile:', error);
      alert('Failed to create donor profile: ' + (error.response?.data?.detail || 'An error occurred'));
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Donor Dashboard</h1>
      
      {/* Profile Creation Form */}
      {showProfileForm && !donorProfile && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Complete Your Donor Profile</h2>
          <p className="text-gray-600 mb-4">Please fill in your donor information to get started</p>
          <form onSubmit={handleProfileFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
              <input
                type="text"
                name="first_name"
                value={profileForm.first_name}
                onChange={handleProfileFormChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
              <input
                type="text"
                name="last_name"
                value={profileForm.last_name}
                onChange={handleProfileFormChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                name="title"
                value={profileForm.title}
                onChange={handleProfileFormChange}
                placeholder="e.g., CEO, Manager"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="text"
                name="phone_number"
                value={profileForm.phone_number}
                onChange={handleProfileFormChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
              <input
                type="text"
                name="company"
                value={profileForm.company}
                onChange={handleProfileFormChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Services Interested In *</label>
              <input
                type="text"
                name="services_interested_in"
                value={profileForm.services_interested_in}
                onChange={handleProfileFormChange}
                placeholder="Food Donation, Sponsorship (comma-separated)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Participating Locations *</label>
              <input
                type="text"
                name="participating_locations"
                value={profileForm.participating_locations}
                onChange={handleProfileFormChange}
                placeholder="Nairobi, Mombasa (comma-separated)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
              >
                Create Profile
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Donor Profile Section */}
      {donorProfile && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg font-semibold text-gray-800">
                {donorProfile.first_name} {donorProfile.last_name}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="text-lg font-semibold text-gray-800">{donorProfile.phone_number}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="text-sm text-gray-500">Company</p>
              <p className="text-lg font-semibold text-gray-800">{donorProfile.company}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="text-sm text-gray-500">Company Type</p>
              <p className="text-lg font-semibold text-gray-800">
                {donorProfile.type_of_company || 'N/A'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="text-sm text-gray-500">Title</p>
              <p className="text-lg font-semibold text-gray-800">{donorProfile.title}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="text-sm text-gray-500">Services Interested In</p>
              <p className="text-lg font-semibold text-gray-800">
                {donorProfile.services_interested_in?.join(', ') || 'N/A'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow col-span-full">
              <p className="text-sm text-gray-500">Participating Locations</p>
              <p className="text-lg font-semibold text-gray-800">
                {donorProfile.participating_locations?.join(', ') || 'N/A'}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Available Donation Requests</h2>
        <p className="text-gray-600 mb-4">Browse approved donation requests that need funding</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Food Item</th>
                <th className="py-2 px-4 border-b">Brand</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {approvedDonations.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                    No donation requests available at the moment
                  </td>
                </tr>
              ) : (
                approvedDonations.map(donation => (
                  <tr key={donation.id}>
                    <td className="py-2 px-4 border-b">{donation.food_item}</td>
                    <td className="py-2 px-4 border-b">{donation.brand}</td>
                    <td className="py-2 px-4 border-b">{donation.description}</td>
                    <td className="py-2 px-4 border-b">{donation.quantity}</td>
                    <td className="py-2 px-4 border-b">${donation.price}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleFund(donation.id)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
                      >
                        Fund This Request
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">My Funded Donations</h2>
        <p className="text-gray-600 mb-4">Donations you have funded</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Food Item</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              {myDonations.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-4 px-4 text-center text-gray-500">
                    You haven't funded any donations yet
                  </td>
                </tr>
              ) : (
                myDonations.map(donation => (
                  <tr key={donation.id}>
                    <td className="py-2 px-4 border-b">{donation.food_item}</td>
                    <td className="py-2 px-4 border-b">{donation.quantity}</td>
                    <td className="py-2 px-4 border-b">
                      <span className="px-2 py-1 rounded bg-green-100 text-green-800">
                        {donation.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">${donation.price}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DonorDashboard;
