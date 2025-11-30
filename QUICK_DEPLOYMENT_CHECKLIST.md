# ✅ Quick Deployment Checklist - For Group Project

## Before Starting (5 mins)
- [ ] Create GitHub account (if don't have)
- [ ] Create MongoDB Atlas account
- [ ] Create Render account
- [ ] Create Vercel account

**Tip:** Use Google/GitHub login for all - it's faster!

---

## Part 1: Database Setup (10 mins)

### MongoDB Atlas
- [ ] Sign up at mongodb.com/atlas
- [ ] Create FREE cluster (M0)
- [ ] Choose Mumbai region
- [ ] Create database user (username: `wandergo`)
- [ ] Save password somewhere safe
- [ ] Whitelist all IPs (0.0.0.0/0)
- [ ] Copy connection string
- [ ] Replace `<password>` in connection string
- [ ] Add `/wandergo` database name at end

**Your connection string should look like:**
```
mongodb+srv://wandergo:YourPassword123@cluster0.xxxxx.mongodb.net/wandergo?retryWrites=true&w=majority
```

✅ **SAVE THIS STRING!**

---

## Part 2: Push to GitHub (5 mins)

```bash
# Open terminal in your project folder
cd C:\Users\Lenovo\Desktop\coding\WanderGo

# Initialize git
git init
git add .
git commit -m "WanderGo Capstone Project"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/wandergo-capstone.git
git branch -M main
git push -u origin main
```

---

## Part 3: Deploy Backend - Render (10 mins)

### On Render.com:
- [ ] Sign up with GitHub
- [ ] Click "New +" → "Web Service"
- [ ] Connect your GitHub repo
- [ ] Fill in:
  - Name: `wandergo-backend`
  - Root Directory: `wandergo`
  - Build Command: `npm install`
  - Start Command: `npm start`
  - Instance: **Free**

### Add Environment Variables:
- [ ] `MONGO_URL` = (paste your MongoDB connection string)
- [ ] `PORT` = `5000`
- [ ] `OPENAI_API_KEY` = `your_openai_api_key_here`

- [ ] Click "Create Web Service"
- [ ] Wait for deployment (green "Live" badge)
- [ ] Copy your backend URL: `https://wandergo-backend-xxxx.onrender.com`

### Seed Database:
- [ ] In Render dashboard → Shell tab
- [ ] Run: `node seedIndianDestinations.js`
- [ ] See success message

✅ **SAVE BACKEND URL!**

---

## Part 4: Update Frontend URLs (5 mins)

**Replace `http://localhost:5000` with your Render URL in these files:**

In `wandergo-frontend/src/components/`:

- [ ] ExploreDestinations.js (2 places - lines 33, 113)
- [ ] AIRecommendations.js (1 place - line 47)
- [ ] ItineraryList.js (2 places - lines 23, 34)
- [ ] CreateItinerary.js (1 place - line 43)
- [ ] ItineraryDetails.js (1 place - line 145)

**Find:** `http://localhost:5000`
**Replace with:** `https://wandergo-backend-xxxx.onrender.com`

### Commit changes:
```bash
git add .
git commit -m "Update API URLs for production"
git push
```

---

## Part 5: Deploy Frontend - Vercel (5 mins)

### On Vercel.com:
- [ ] Sign up with GitHub
- [ ] Click "Add New Project"
- [ ] Import your `wandergo-capstone` repo
- [ ] Set Root Directory: `wandergo-frontend`
- [ ] Framework: Create React App (auto-detected)
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] Copy your live URL: `https://wandergo-capstone-xxxx.vercel.app`

✅ **YOUR APP IS LIVE!**

---

## Part 6: Test Everything (5 mins)

### Test Backend:
- [ ] Visit: `https://wandergo-backend-xxxx.onrender.com/api/destinations`
- [ ] Should see JSON with 16 destinations

### Test Frontend:
- [ ] Visit: `https://wandergo-capstone-xxxx.vercel.app`
- [ ] Should see WanderGo homepage
- [ ] Click "Explore" - see 16 Indian destinations
- [ ] Click "AI Assistant" - works
- [ ] Click "My Itineraries" - can create itinerary

**⚠️ First load = 30 seconds (backend waking up) - NORMAL!**

---

## Part 7: Prepare for Presentation

### URLs to Share:
```
Live App: https://wandergo-capstone-xxxx.vercel.app
GitHub: https://github.com/YOUR_USERNAME/wandergo-capstone
Backend API: https://wandergo-backend-xxxx.onrender.com
```

### Before Demo/Presentation:
- [ ] Visit backend URL 5 minutes before (to wake it up)
- [ ] Test all features once
- [ ] Take screenshots for report
- [ ] Prepare talking points

---

## 📊 For Your Report/Documentation

### Tech Stack:
- Frontend: React.js, CSS3
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- AI: OpenAI GPT-3.5
- Deployment: Vercel + Render
- Version Control: Git, GitHub

### Key Features:
- 16 Indian Travel Destinations
- AI-Powered Recommendations
- Itinerary Planning System
- Review & Rating System
- Cost Tracking
- Day-by-Day Activity Management

### Cost:
**₹0 - Completely FREE!**

---

## ⏱️ Total Time: ~45 minutes

**Perfect for a capstone project!** 🎓

---

## 🆘 Quick Troubleshooting

**Problem:** Backend slow
→ **Solution:** It's sleeping! Wait 30 seconds on first request

**Problem:** Can't see destinations
→ **Solution:** Did you run `seedIndianDestinations.js`?

**Problem:** CORS error
→ **Solution:** Check if you updated ALL API URLs in frontend

**Problem:** MongoDB connection error
→ **Solution:** Check connection string, password, and IP whitelist

---

## 👥 For Group Members

Share this checklist with your team. Each member can:
1. Access the live app (share Vercel URL)
2. View code on GitHub
3. Test features
4. Take screenshots for documentation

---

## 🎉 Success!

When everything works:
✅ Your app is live on the internet
✅ Anyone can access it
✅ Perfect for capstone evaluation
✅ Ready for your portfolio
✅ 100% FREE hosting

**Good luck with your presentation! 🚀**
