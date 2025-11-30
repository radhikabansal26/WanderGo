# Quick Start Guide - WanderGo

## Prerequisites Check ✅

Before starting, ensure you have:
- [ ] Node.js installed (v14+)
- [ ] MongoDB installed and running
- [ ] Git Bash or Command Prompt

## Quick Start Steps 🚀

### 1. Start MongoDB
Open a terminal and run:
```bash
mongod
```
Keep this terminal open.

### 2. Start Backend Server
Open a NEW terminal:
```bash
cd c:\Users\Lenovo\Desktop\coding\WanderGo\wandergo
npm install
npm start
```
You should see: "Server running on port 5000" and "MongoDB Connected"

### 3. Start Frontend
Open ANOTHER NEW terminal:
```bash
cd c:\Users\Lenovo\Desktop\coding\WanderGo\wandergo-frontend
npm install
npm start
```
Your browser will automatically open to http://localhost:3000

## That's It! 🎉

You should now see the WanderGo application running with:
- A beautiful header with the WanderGo branding
- A list view for itineraries (empty at first)
- A "Create New Itinerary" button

## First Steps in the App

1. **Create Your First Itinerary**
   - Click "Create New Itinerary"
   - Fill in: Title, Destination, Start Date, End Date
   - Add travelers and budget (optional)
   - Click "Create Itinerary"

2. **Plan Your Days**
   - Click through the Day tabs (Day 1, Day 2, etc.)
   - Add activities with times and locations
   - Fill in hotel/accommodation details
   - Add transportation info
   - Add notes for each day

3. **Track Costs**
   - Add costs to activities, accommodations, and transportation
   - Watch the total cost update automatically in the header

## Troubleshooting 🔧

**MongoDB not starting?**
- Make sure MongoDB is installed
- Try running `mongod --dbpath <path>` with a specific data directory

**Port 5000 already in use?**
- Change PORT in `wandergo/.env` file
- Update API calls in frontend components to use new port

**Frontend won't start?**
- Delete node_modules folder
- Run `npm install` again
- Try `npm start` again

**Can't connect to backend?**
- Ensure backend is running on port 5000
- Check browser console for errors
- Verify MongoDB is connected

## Need Help? 📞

Check the main README.md for:
- Detailed API documentation
- Database schema information
- Feature explanations
- Advanced configuration options

---

**Happy Planning! ✈️🌍**
