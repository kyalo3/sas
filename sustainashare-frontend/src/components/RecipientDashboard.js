import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipientDashboard() {
  const [donations, setDonations] = useState([]);
  const [formData, setFormData] = useState({
    food_item: '',
    quantity: '',
    description: '',
    brand: '',
    price: ''
  });
  const token = localStorage.getItem('token');
  // Assuming recipient_id is stored in localStorage upon login
  const recipientId = localStorage.getItem('userId'); 

  useEffect(() => {
    const fetchDonations = async () => {
      if (!recipientId) return;
      try {
        // This endpoint needs to be created in the backend
        const response = await axios.get(`http://localhost:8000/recipients/${recipientId}/donations/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDonations(response.data);
      } catch (error) {
        console.error('Failed to fetch donations:', error.response ? error.response.data : error.message);
      }
    };

    if (token) {
      fetchDonations();
    }
  }, [token, recipientId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recipientId) {
      alert('User not logged in or recipient ID not found.');
      return;
    }
    try {
      const donationData = { ...formData, recipient_id: recipientId, donor_id: "" };
      const response = await axios.post('http://localhost:8000/donations/', donationData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDonations([...donations, response.data]);
      setFormData({ food_item: '', quantity: '', description: '', brand: '', price: '' }); // Reset form
    } catch (error) {
      console.error('Failed to create donation request:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Recipient Dashboard</h1>
      
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Create Donation Request</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="food_item">
                Food Item
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="food_item" type="text" name="food_item" value={formData.food_item} onChange={handleChange} placeholder="e.g., Apples" required />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">
                Quantity
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity" type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 10" required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Details about the item" required></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="brand">
                Brand
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="brand" type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="e.g., Generic" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                Estimated Price
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number" name="price" value={formData.price} onChange={handleChange} placeholder="e.g., 5.99" />
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit Request
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">My Donation Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Food Item</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map(donation => (
                <tr key={donation.id}>
                  <td className="py-2 px-4 border-b">{donation.food_item}</td>
                  <td className="py-2 px-4 border-b">{donation.quantity}</td>
                  <td className="py-2 px-4 border-b">{donation.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecipientDashboard;
