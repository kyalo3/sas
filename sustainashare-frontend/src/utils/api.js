// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// API Endpoints
export const ENDPOINTS = {
  AUTH: {
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGIN: `${API_BASE_URL}/auth/token`,
  },
  USERS: {
    ALL: `${API_BASE_URL}/users/`,
    ME: `${API_BASE_URL}/users/me`,
  },
  DONATIONS: {
    ALL: `${API_BASE_URL}/donations/`,
    BY_ID: (id) => `${API_BASE_URL}/donations/${id}`,
    APPROVE: (id) => `${API_BASE_URL}/donations/${id}/approve`,
    REJECT: (id) => `${API_BASE_URL}/donations/${id}/reject`,
    FUND: (id) => `${API_BASE_URL}/donations/${id}/fund`,
    BY_DONOR: (donorId) => `${API_BASE_URL}/donors/${donorId}/donations/`,
    BY_RECIPIENT: (recipientId) => `${API_BASE_URL}/recipients/${recipientId}/donations/`,
  },
};

// Helper function to get auth headers
export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
