const Itinerary = require("../models/Itinerary");

// Get all itineraries
exports.getAllItineraries = async (req, res) => {
    try {
        const itineraries = await Itinerary.find().sort({ createdAt: -1 });
        res.json(itineraries);
    } catch (err) {
        res.status(500).json({ message: "Error fetching itineraries", error: err.message });
    }
};

// Get single itinerary by ID
exports.getItineraryById = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        res.json(itinerary);
    } catch (err) {
        res.status(500).json({ message: "Error fetching itinerary", error: err.message });
    }
};

// Create new itinerary
exports.createItinerary = async (req, res) => {
    try {
        const newItinerary = new Itinerary(req.body);
        await newItinerary.save();
        res.status(201).json(newItinerary);
    } catch (err) {
        res.status(500).json({ message: "Error creating itinerary", error: err.message });
    }
};

// Update itinerary
exports.updateItinerary = async (req, res) => {
    try {
        const updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedItinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        res.json(updatedItinerary);
    } catch (err) {
        res.status(500).json({ message: "Error updating itinerary", error: err.message });
    }
};

// Delete itinerary
exports.deleteItinerary = async (req, res) => {
    try {
        const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
        if (!deletedItinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        res.json({ message: "Itinerary deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting itinerary", error: err.message });
    }
};

// Add day plan to itinerary
exports.addDayPlan = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        itinerary.dayPlans.push(req.body);
        await itinerary.save();
        res.json(itinerary);
    } catch (err) {
        res.status(500).json({ message: "Error adding day plan", error: err.message });
    }
};

// Update day plan
exports.updateDayPlan = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        const dayPlan = itinerary.dayPlans.id(req.params.dayPlanId);
        if (!dayPlan) {
            return res.status(404).json({ message: "Day plan not found" });
        }
        Object.assign(dayPlan, req.body);
        await itinerary.save();
        res.json(itinerary);
    } catch (err) {
        res.status(500).json({ message: "Error updating day plan", error: err.message });
    }
};

// Delete day plan
exports.deleteDayPlan = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        itinerary.dayPlans.id(req.params.dayPlanId).deleteOne();
        await itinerary.save();
        res.json(itinerary);
    } catch (err) {
        res.status(500).json({ message: "Error deleting day plan", error: err.message });
    }
};
