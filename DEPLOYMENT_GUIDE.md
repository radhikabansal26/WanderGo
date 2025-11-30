# 🚀 WanderGo Deployment Guide - FREE Setup

## For Capstone Project / Portfolio Demo

This guide will help you deploy WanderGo completely **FREE** using:
- **Vercel** (Frontend) - 100% Free
- **Render** (Backend) - Free tier
- **MongoDB Atlas** (Database) - Free tier

**Perfect for:** Portfolio, Capstone Projects, Demos, Low-traffic applications

---

## 📋 Pre-Deployment Checklist

Before starting, make sure you have:
- [ ] GitHub account
- [ ] Your project code ready
- [ ] 30 minutes of time
- [ ] All group members have access to GitHub repo

---

## 🗄️ STEP 1: Setup MongoDB Atlas (Database)

### 1.1 Create Account
1. Go to [mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
2. Sign up with Google/GitHub (easiest)
3. Choose **FREE M0 Cluster**

### 1.2 Create Cluster
1. Click "Build a Database"
2. Choose **M0 FREE** tier
3. Select region: **Mumbai (ap-south-1)** or closest to India
4. Cluster Name: `WanderGo` (or keep default)
5. Click "Create"

### 1.3 Create Database User
1. Go to "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Username: `wandergo`
4. Password: Click "Autogenerate Secure Password" → **COPY THIS PASSWORD**
5. Database User Privileges: **Read and write to any database**
6. Click "Add User"

### 1.4 Whitelist All IPs
1. Go to "Network Access" (left sidebar)
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere"
4. IP: `0.0.0.0/0`
5. Click "Confirm"

### 1.5 Get Connection String
1. Go to "Database" (left sidebar)
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string:
   ```
   mongodb+srv://wandergo:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. **Replace `<password>` with the password you copied earlier**
6. Add database name: `wandergo` at the end:
   ```
   mongodb+srv://wandergo:yourpassword@cluster0.xxxxx.mongodb.net/wandergo?retryWrites=true&w=majority
   ```
7. **SAVE THIS - You'll need it for Render**

---

## 🔙 STEP 2: Deploy Backend to Render

### 2.1 Prepare Your Code
1. Make sure your `wandergo` folder has all backend files
2. Ensure `.env` is in `.gitignore` (already done)

### 2.2 Push to GitHub
```bash
cd C:\Users\Lenovo\Desktop\coding\WanderGo
git init
git add .
git commit -m "Initial commit - WanderGo Capstone Project"
```

Create a new repository on GitHub:
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `wandergo-capstone`
3. Public or Private (your choice)
4. Click "Create repository"

Then push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/wandergo-capstone.git
git branch -M main
git push -u origin main
```

### 2.3 Deploy on Render
1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with **GitHub**
4. Authorize Render to access your repositories

### 2.4 Create Web Service
1. Click "New +" → "Web Service"
2. Connect your `wandergo-capstone` repository
3. Configure:
   - **Name:** `wandergo-backend`
   - **Region:** Singapore (closest to India)
   - **Branch:** `main`
   - **Root Directory:** `wandergo`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free

### 2.5 Add Environment Variables
Scroll down to "Environment Variables" section:

Click "Add Environment Variable" for each:

**Variable 1:**
- Key: `MONGO_URL`
- Value: `mongodb+srv://wandergo:yourpassword@cluster0.xxxxx.mongodb.net/wandergo?retryWrites=true&w=majority`
  (paste your MongoDB connection string)

**Variable 2:**
- Key: `PORT`
- Value: `5000`

**Variable 3:**
- Key: `OPENAI_API_KEY`
- Value: `your_openai_api_key_here` (leave as is, or add real key if you have one)

### 2.6 Create Web Service
1. Click "Create Web Service"
2. Wait 2-5 minutes for deployment
3. Once "Live" appears, copy your backend URL:
   ```
   https://wandergo-backend-xxxx.onrender.com
   ```
4. **SAVE THIS URL** - You need it for frontend!

### 2.7 Seed the Database
Once backend is deployed:
1. Go to "Shell" tab in Render dashboard
2. Run: `node seedIndianDestinations.js`
3. You should see: "✅ Successfully added 16 Indian destinations!"

---

## 🎨 STEP 3: Deploy Frontend to Vercel

### 3.1 Update API URLs in Frontend

**IMPORTANT:** Update all API calls to use your Render backend URL.

Update these files in `wandergo-frontend/src/components/`:

#### ExploreDestinations.js (Line 33):
```javascript
const response = await fetch('https://wandergo-backend-xxxx.onrender.com/api/destinations');
```

#### ExploreDestinations.js (Line 113):
```javascript
await fetch(`https://wandergo-backend-xxxx.onrender.com/api/destinations/${selectedDestination._id}/reviews`, {
```

#### AIRecommendations.js (Line 47):
```javascript
const response = await fetch('https://wandergo-backend-xxxx.onrender.com/api/destinations/ai/recommendations', {
```

#### ItineraryList.js (Line 23):
```javascript
const response = await fetch('https://wandergo-backend-xxxx.onrender.com/api/itineraries');
```

#### ItineraryList.js (Line 34):
```javascript
await fetch(`https://wandergo-backend-xxxx.onrender.com/api/itineraries/${id}`, {
```

#### CreateItinerary.js (Line 43):
```javascript
const response = await fetch('https://wandergo-backend-xxxx.onrender.com/api/itineraries', {
```

#### ItineraryDetails.js (Line 145):
```javascript
await fetch(`https://wandergo-backend-xxxx.onrender.com/api/itineraries/${data._id}`, {
```

**Replace `https://wandergo-backend-xxxx.onrender.com` with YOUR actual Render URL!**

### 3.2 Commit Changes
```bash
git add .
git commit -m "Update API URLs for production"
git push
```

### 3.3 Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Start Deploying"
3. Sign up with **GitHub**
4. Click "Add New Project"
5. Import your `wandergo-capstone` repository
6. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `wandergo-frontend`
   - Leave other settings as default
7. Click "Deploy"
8. Wait 2-3 minutes

### 3.4 Get Your Live URL
Once deployed, Vercel will show:
```
🎉 Your project is live at:
https://wandergo-capstone-xxxx.vercel.app
```

**CONGRATULATIONS! Your app is now live! 🎉**

---

## ✅ Testing Your Deployment

### Test Backend:
Visit: `https://wandergo-backend-xxxx.onrender.com/api/destinations`

You should see JSON with 16 Indian destinations!

### Test Frontend:
Visit: `https://wandergo-capstone-xxxx.vercel.app`

You should see your beautiful WanderGo homepage!

**⚠️ Important:** First load might take 30-60 seconds (Render waking up). This is normal for free tier!

---

## 📝 For Your Capstone Report

### Project URLs:
- **Live Application:** `https://wandergo-capstone-xxxx.vercel.app`
- **Backend API:** `https://wandergo-backend-xxxx.onrender.com`
- **GitHub Repository:** `https://github.com/YOUR_USERNAME/wandergo-capstone`

### Tech Stack:
- **Frontend:** React.js, CSS3, Responsive Design
- **Backend:** Node.js, Express.js, RESTful API
- **Database:** MongoDB Atlas (Cloud)
- **AI Integration:** OpenAI GPT-3.5-turbo
- **Deployment:** Vercel (Frontend), Render (Backend)

### Features:
- AI-Powered Travel Recommendations
- 16 Indian Destinations Database
- Interactive Itinerary Planning
- Review and Rating System
- Day-by-Day Activity Management
- Cost Tracking and Budget Management

---

## 🐛 Troubleshooting

### Problem: Backend not responding
**Solution:** Render free tier sleeps after 15 mins. First request takes 30-60 seconds to wake up. Just wait and refresh!

### Problem: CORS errors
**Solution:** Make sure you updated ALL API URLs in frontend to use your Render URL

### Problem: Database connection error
**Solution:** 
1. Check MongoDB Atlas whitelist (should be 0.0.0.0/0)
2. Verify connection string is correct
3. Make sure password doesn't have special characters

### Problem: Frontend not showing data
**Solution:**
1. Open browser console (F12)
2. Check for errors
3. Verify backend is responding
4. Make sure you ran `seedIndianDestinations.js`

---

## 💡 Tips for Presentation

### Wake Up Backend Before Demo:
Visit your backend URL 2-3 minutes before presenting to avoid sleep delay!

### For Professors/Evaluators:
Share these links:
- **Live App:** Your Vercel URL
- **GitHub:** Your repository
- **API Demo:** Backend URL + `/api/destinations`

### Impressive Features to Show:
1. AI-Powered Recommendations (even with sample data)
2. 16 Indian Destinations from various states
3. Detailed itinerary planning
4. Review system
5. Cost tracking
6. Beautiful responsive UI

---

## 🎓 Bonus: Custom Domain (Optional)

If you want a custom domain like `wandergo.com`:

**Vercel:**
1. Buy domain from [namecheap.com](https://namecheap.com) (~₹500/year)
2. Go to Vercel project settings
3. Add custom domain
4. Update DNS records

**Render:**
1. Custom domains available on paid plans only

---

## 📊 Free Tier Limits

### Vercel:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Perfect for your project

### Render:
- ✅ 750 hours/month (enough for 24/7 if one project)
- ⚠️ Sleeps after 15 mins inactivity
- ⚠️ 30-60 second cold start

### MongoDB Atlas:
- ✅ 512MB storage
- ✅ Enough for thousands of itineraries
- ✅ Perfect for capstone project

---

## 🎉 You're All Set!

Your WanderGo capstone project is now:
- ✅ Live on the internet
- ✅ Accessible 24/7
- ✅ Completely FREE
- ✅ Ready for evaluation
- ✅ Portfolio-ready

**Cost:** ₹0 (100% FREE!)

---

**Need Help?** Check the troubleshooting section or reach out to your group members!

**Good luck with your capstone presentation! 🚀🎓**
