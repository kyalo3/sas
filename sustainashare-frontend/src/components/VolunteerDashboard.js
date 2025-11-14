import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VolunteerDashboard() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDonations();
  }, []);

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

  if (loading) {
    return <div className="container mx-auto mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Volunteer Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">All Donations</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {donations.length === 0 ? (
            <p>No donations available.</p>
          ) : (
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Food Item</th>
                  <th className="px-4 py-2">Brand</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.id}>
                    <td className="border px-4 py-2">{donation.food_item}</td>
                    <td className="border px-4 py-2">{donation.brand}</td>
                    <td className="border px-4 py-2">{donation.quantity}</td>
                    <td className="border px-4 py-2">${donation.price}</td>
                    <td className="border px-4 py-2">
                      <span className={`px-2 py-1 rounded ${
                        donation.status === 'approved' ? 'bg-green-200' :
                        donation.status === 'funded' ? 'bg-blue-200' :
                        donation.status === 'rejected' ? 'bg-red-200' :
                        'bg-yellow-200'
                      }`}>
                        {donation.status}
                      </span>
                    </td>
                    <td className="border px-4 py-2">{donation.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default VolunteerDashboard;
