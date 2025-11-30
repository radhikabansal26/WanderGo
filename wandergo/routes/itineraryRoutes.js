const express = require("express");
const router = express.Router();
const {
    getAllItineraries,
    getItineraryById,
    createItinerary,
    updateItinerary,
    deleteItinerary,
    addDayPlan,
    updateDayPlan,
    deleteDayPlan
} = require("../controllers/itineraryController");

// Main itinerary routes
router.get("/", getAllItineraries);
router.get("/:id", getItineraryById);
router.post("/", createItinerary);
router.put("/:id", updateItinerary);
router.delete("/:id", deleteItinerary);

// Day plan routes
router.post("/:id/dayplans", addDayPlan);
router.put("/:id/dayplans/:dayPlanId", updateDayPlan);
router.delete("/:id/dayplans/:dayPlanId", deleteDayPlan);

module.exports = router;
