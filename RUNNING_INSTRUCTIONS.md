# Running the Sustain a Share Application

## Prerequisites
- Python 3.8+
- Node.js 14+
- MongoDB running (locally or remote)

## Backend Setup & Run

1. Navigate to the backend directory:
```bash
cd sustainashare_backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables (if needed):
Create a `.env` file with your MongoDB connection string:
```
MONGODB_URL=mongodb://localhost:27017/sustainashare
```

4. Run the backend server:
```bash
python -m uvicorn app.main:app --reload
```

The backend will start at: **http://localhost:8000**

5. View API documentation:
- Swagger UI: **http://localhost:8000/docs**
- ReDoc: **http://localhost:8000/redoc**

## Frontend Setup & Run

1. Navigate to the frontend directory:
```bash
cd sustainashare-frontend
```

2. Install Node dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will start at: **http://localhost:3000**

## Testing the Application

### 1. Register Users
- Go to http://localhost:3000
- Click "Register"
- Create test accounts for each role:
  - Admin user (role: admin)
  - Donor user (role: donor)
  - Recipient user (role: recipient)

### 2. Test Recipient Flow
- Login as a recipient
- Create a donation request
- Fill in food item, quantity, description, etc.
- Submit the request (status will be "pending")

### 3. Test Admin Flow
- Login as an admin
- View all users in the Admin Dashboard
- See all donation requests
- Approve or reject pending requests

### 4. Test Donor Flow
- Login as a donor
- View approved donation requests
- Fund a request by clicking "Fund This Request"
- View your funded donations

### 5. Test API Directly
Use the Swagger UI at http://localhost:8000/docs to:
- Test individual endpoints
- View request/response schemas
- Try authentication flows

## Common Issues

### Backend Issues
- **MongoDB connection error**: Ensure MongoDB is running
- **Port already in use**: Change port with `uvicorn app.main:app --reload --port 8001`

### Frontend Issues
- **API connection failed**: Ensure backend is running on port 8000
- **CORS errors**: Backend already has CORS enabled for development
- **Tailwind styles not loading**: Run `npm install` again

## Quick Test Commands

### Test Backend
```bash
# From the sas directory
cd sustainashare_backend
python -m uvicorn app.main:app --reload
```

### Test Frontend
```bash
# From the sas directory (in a new terminal)
cd sustainashare-frontend
npm start
```
