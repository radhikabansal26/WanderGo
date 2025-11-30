const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    time: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    cost: { type: Number, default: 0 },
    category: { type: String, enum: ['sightseeing', 'food', 'shopping', 'adventure', 'relaxation', 'other'], default: 'other' }
});

const DayPlanSchema = new mongoose.Schema({
    day: { type: Number, required: true },
    date: { type: Date, required: true },
    title: { type: String },
    activities: [ActivitySchema],
    accommodation: {
        name: { type: String },
        address: { type: String },
        checkIn: { type: String },
        checkOut: { type: String },
        cost: { type: Number }
    },
    transportation: {
        mode: { type: String },
        from: { type: String },
        to: { type: String },
        cost: { type: Number }
    },
    notes: { type: String }
});

const ItinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    numberOfDays: { type: Number, required: true },
    travelers: { type: Number, default: 1 },
    budget: { type: Number },
    description: { type: String },
    dayPlans: [DayPlanSchema],
    totalCost: { type: Number, default: 0 },
    status: { type: String, enum: ['draft', 'confirmed', 'completed'], default: 'draft' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware to update the updatedAt field
ItinerarySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("Itinerary", ItinerarySchema);
