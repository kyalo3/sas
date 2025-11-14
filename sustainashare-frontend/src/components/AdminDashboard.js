import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [donations, setDonations] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error.response ? error.response.data : error.message);
      }
    };

    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/donations/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDonations(response.data);
      } catch (error) {
        console.error('Failed to fetch donations:', error.response ? error.response.data : error.message);
      }
    };

    if (token) {
      fetchUsers();
      fetchDonations();
    }
  }, [token]);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8000/donations/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDonations(donations.map(d => d.id === id ? { ...d, status: 'approved' } : d));
    } catch (error) {
      console.error('Failed to approve donation:', error.response ? error.response.data : error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8000/donations/${id}/reject`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDonations(donations.map(d => d.id === id ? { ...d, status: 'rejected' } : d));
    } catch (error) {
      console.error('Failed to reject donation:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
      
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">{user.full_name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Donation Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Food Item</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map(donation => (
                <tr key={donation.id}>
                  <td className="py-2 px-4 border-b">{donation.food_item}</td>
                  <td className="py-2 px-4 border-b">{donation.quantity}</td>
                  <td className="py-2 px-4 border-b">{donation.status}</td>
                  <td className="py-2 px-4 border-b">
                    {donation.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(donation.id)}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(donation.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
