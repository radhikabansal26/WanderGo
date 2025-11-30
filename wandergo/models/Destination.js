const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    date: { type: Date, default: Date.now },
    verified: { type: Boolean, default: false }
});

const DestinationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    location: { type: String },
    country: { type: String },
    category: { 
        type: String, 
        enum: ['Beach', 'Mountain', 'City', 'Historical', 'Adventure', 'Relaxation', 'Cultural', 'Nature'],
        default: 'City'
    },
    rating: { type: Number, default: 0 },
    price: { type: Number, required: true },
    priceLevel: { 
        type: String, 
        enum: ['Budget', 'Moderate', 'Luxury'],
        default: 'Moderate'
    },
    reviews: [ReviewSchema],
    totalReviews: { type: Number, default: 0 },
    bestTimeToVisit: { type: String },
    averageStay: { type: String },
    highlights: [{ type: String }],
    activities: [{ type: String }],
    featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Destination", DestinationSchema);
