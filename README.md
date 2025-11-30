# WanderGo - Travel Itinerary Assistant 🌍✈️

A comprehensive travel itinerary management web application built for travel agencies. Create, manage, and organize detailed travel plans with day-by-day activities, accommodations, transportation, and cost tracking.

## Features ✨

### Core Functionality
- **Create Itineraries**: Build complete travel plans with destination, dates, travelers, and budget
- **Day-by-Day Planning**: Organize each day with detailed activities, times, and locations
- **Activity Management**: Add activities with categories (sightseeing, food, shopping, adventure, relaxation)
- **Accommodation Tracking**: Store hotel/Airbnb details, check-in/out times, and costs
- **Transportation Planning**: Track transportation modes, routes, and expenses
- **Cost Tracking**: Automatic calculation of total trip costs
- **Status Management**: Track itineraries as draft, confirmed, or completed
- **Notes & Details**: Add custom notes for each day

### User Interface
- Modern, responsive design with gradient accents
- Filter itineraries by status (All, Draft, Confirmed, Completed)
- Interactive day tabs for easy navigation
- Modal-based activity editing
- Real-time cost calculations
- Beautiful card-based layouts

## Tech Stack 💻

### Backend
- **Node.js** with Express.js
- **MongoDB** for database
- **Mongoose** for ODM
- **CORS** enabled for cross-origin requests
- **dotenv** for environment configuration

### Frontend
- **React** (v19.2.0)
- **CSS3** with modern gradients and animations
- **Fetch API** for backend communication

## Project Structure 📁

```
WanderGo/
├── wandergo/                    # Backend server
│   ├── controllers/
│   │   ├── destinationController.js
│   │   └── itineraryController.js
│   ├── models/
│   │   ├── Destination.js
│   │   └── Itinerary.js        # Main itinerary schema
│   ├── routes/
│   │   ├── destinationRoutes.js
│   │   └── itineraryRoutes.js
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Express server
│
└── wandergo-frontend/           # React frontend
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── ItineraryList.js      # List all itineraries
    │   │   ├── ItineraryList.css
    │   │   ├── CreateItinerary.js    # Create new itinerary
    │   │   ├── CreateItinerary.css
    │   │   ├── ItineraryDetails.js   # Detailed view with day plans
    │   │   └── ItineraryDetails.css
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## Installation & Setup 🚀

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

### Step 1: Clone/Navigate to Project
```bash
cd C:\Users\Lenovo\Desktop\coding\WanderGo
```

### Step 2: Setup Backend
```bash
cd wandergo
npm install
```

Make sure MongoDB is running on your machine:
```bash
# Start MongoDB (if not running)
mongod
```

### Step 3: Setup Frontend
```bash
cd ../wandergo-frontend
npm install
```

## Running the Application 🏃

### Start Backend Server
Open a terminal and run:
```bash
cd wandergo
npm start
```
Backend will run on: `http://localhost:5000`

### Start Frontend Development Server
Open another terminal and run:
```bash
cd wandergo-frontend
npm start
```
Frontend will open automatically at: `http://localhost:3000`

## API Endpoints 🔌

### Itinerary Routes
- `GET /api/itineraries` - Get all itineraries
- `GET /api/itineraries/:id` - Get single itinerary by ID
- `POST /api/itineraries` - Create new itinerary
- `PUT /api/itineraries/:id` - Update itinerary
- `DELETE /api/itineraries/:id` - Delete itinerary

### Day Plan Routes
- `POST /api/itineraries/:id/dayplans` - Add day plan
- `PUT /api/itineraries/:id/dayplans/:dayPlanId` - Update day plan
- `DELETE /api/itineraries/:id/dayplans/:dayPlanId` - Delete day plan

### Destination Routes
- `GET /api/destinations` - Get all destinations
- `POST /api/destinations` - Add destination

## Data Models 📊

### Itinerary Schema
```javascript
{
  title: String,              // Trip title
  destination: String,        // Main destination
  startDate: Date,           // Trip start date
  endDate: Date,             // Trip end date
  numberOfDays: Number,      // Auto-calculated
  travelers: Number,         // Number of travelers
  budget: Number,            // Total budget
  description: String,       // Trip description
  dayPlans: [DayPlan],      // Array of day plans
  totalCost: Number,        // Auto-calculated
  status: String,           // draft/confirmed/completed
  createdAt: Date,
  updatedAt: Date
}
```

### DayPlan Schema
```javascript
{
  day: Number,
  date: Date,
  title: String,
  activities: [Activity],
  accommodation: {
    name: String,
    address: String,
    checkIn: String,
    checkOut: String,
    cost: Number
  },
  transportation: {
    mode: String,
    from: String,
    to: String,
    cost: Number
  },
  notes: String
}
```

### Activity Schema
```javascript
{
  time: String,
  title: String,
  description: String,
  location: String,
  cost: Number,
  category: String  // sightseeing/food/shopping/adventure/relaxation/other
}
```

## Usage Guide 📖

### Creating a New Itinerary
1. Click "Create New Itinerary" button
2. Fill in basic information (title, destination, dates, travelers, budget)
3. Number of days is auto-calculated based on start and end dates
4. Click "Create Itinerary"

### Adding Activities to Days
1. Select a day from the day tabs
2. Click "+ Add Activity" button
3. Fill in activity details (time, title, location, category, cost)
4. Click "Save"

### Managing Accommodations & Transportation
1. Navigate to the specific day
2. Fill in accommodation details (hotel name, address, check-in/out times, cost)
3. Fill in transportation details (mode, from/to locations, cost)
4. Data saves automatically on blur

### Cost Tracking
- Individual activity costs are displayed within each activity
- Daily accommodation and transportation costs are tracked
- Total trip cost is calculated automatically and displayed in the header

### Filtering Itineraries
Use the filter tabs on the main list page:
- **All**: Show all itineraries
- **Draft**: Work-in-progress itineraries
- **Confirmed**: Finalized travel plans
- **Completed**: Past trips

## Environment Variables ⚙️

Backend `.env` file:
```
MONGO_URL=mongodb://127.0.0.1:27017/wandergo
PORT=5000
```

## Troubleshooting 🔧

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check the connection URL in `.env`
- Default port is 27017

### Port Already in Use
- Backend: Change PORT in `.env` file
- Frontend: Will automatically use next available port

### CORS Errors
- Ensure backend is running before starting frontend
- CORS is enabled in server.js

## Future Enhancements 🚀

- User authentication and authorization
- Multiple itinerary templates
- Export itineraries to PDF
- Weather integration
- Maps integration for locations
- Collaborative itinerary sharing
- Mobile responsive improvements
- Image uploads for destinations/activities
- Currency conversion
- Travel recommendations AI

## License 📄

This project is private and proprietary.

## Contact 📧

For support or questions about WanderGo, please contact your development team.

---

**Happy Traveling! 🌍✈️**
