const express = require("express");
const router = express.Router();
const { 
    getDestinations, 
    getDestinationById,
    addDestination,
    updateDestination,
    deleteDestination,
    addReview,
    getAIRecommendations
} = require("../controllers/destinationController");

router.get("/", getDestinations);
router.get("/:id", getDestinationById);
router.post("/", addDestination);
router.put("/:id", updateDestination);
router.delete("/:id", deleteDestination);
router.post("/:id/reviews", addReview);
router.post("/ai/recommendations", getAIRecommendations);

module.exports = router;
