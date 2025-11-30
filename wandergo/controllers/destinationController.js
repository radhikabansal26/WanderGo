const Destination = require("../models/Destination");
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Get all destinations
exports.getDestinations = async (req, res) => {
    try {
        const { category, priceLevel, minRating } = req.query;
        let query = {};
        
        if (category) query.category = category;
        if (priceLevel) query.priceLevel = priceLevel;
        if (minRating) query.rating = { $gte: parseFloat(minRating) };
        
        const data = await Destination.find(query).sort({ featured: -1, rating: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get single destination
exports.getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: "Destination not found" });
        }
        res.json(destination);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Add a destination
exports.addDestination = async (req, res) => {
    try {
        const newDest = new Destination(req.body);
        await newDest.save();
        res.json(newDest);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update destination
exports.updateDestination = async (req, res) => {
    try {
        const updated = await Destination.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete destination
exports.deleteDestination = async (req, res) => {
    try {
        await Destination.findByIdAndDelete(req.params.id);
        res.json({ message: "Destination deleted" });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Add review to destination
exports.addReview = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: "Destination not found" });
        }
        
        destination.reviews.push(req.body);
        destination.totalReviews = destination.reviews.length;
        
        // Recalculate average rating
        const avgRating = destination.reviews.reduce((sum, review) => sum + review.rating, 0) / destination.reviews.length;
        destination.rating = Math.round(avgRating * 10) / 10;
        
        await destination.save();
        res.json(destination);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get AI-powered recommendations
exports.getAIRecommendations = async (req, res) => {
    try {
        const { preferences, budget, travelStyle, duration } = req.body;
        
        if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
            // Return sample recommendations if API key not set
            return res.json({
                recommendations: [
                    {
                        destination: "Paris, France",
                        reason: "Perfect blend of culture, history, and romance",
                        highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
                        bestFor: "Cultural experiences and romantic getaways",
                        estimatedBudget: "$2000-3000",
                        suggestedDuration: "5-7 days"
                    },
                    {
                        destination: "Tokyo, Japan",
                        reason: "Amazing fusion of traditional and modern culture",
                        highlights: ["Shibuya Crossing", "Mount Fuji", "Ancient Temples"],
                        bestFor: "Cultural exploration and food lovers",
                        estimatedBudget: "$2500-4000",
                        suggestedDuration: "7-10 days"
                    },
                    {
                        destination: "Bali, Indonesia",
                        reason: "Tropical paradise with beaches and temples",
                        highlights: ["Beach Resorts", "Rice Terraces", "Water Temples"],
                        bestFor: "Relaxation and adventure activities",
                        estimatedBudget: "$1500-2500",
                        suggestedDuration: "5-7 days"
                    }
                ],
                note: "Add your OpenAI API key to .env file for personalized AI recommendations"
            });
        }
        
        const prompt = `As a travel expert, recommend 5 travel destinations based on:
        - Preferences: ${preferences}
        - Budget: ${budget}
        - Travel Style: ${travelStyle}
        - Duration: ${duration}
        
        Provide recommendations in JSON format with: destination, reason, highlights (array), bestFor, estimatedBudget, suggestedDuration`;
        
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
        });
        
        const recommendations = JSON.parse(completion.choices[0].message.content);
        res.json({ recommendations });
    } catch (err) {
        console.error('OpenAI Error:', err);
        res.status(500).json({ message: "Error generating recommendations", error: err.message });
    }
};
