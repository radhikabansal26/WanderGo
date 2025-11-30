const mongoose = require("mongoose");
const Destination = require("./models/Destination");
require("dotenv").config();

const sampleDestinations = [
    {
        title: "Paris, France",
        description: "The City of Light, known for its art, fashion, gastronomy and culture. Home to iconic landmarks like the Eiffel Tower and Louvre Museum.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
        location: "Paris, Île-de-France",
        country: "France",
        category: "City",
        rating: 4.8,
        price: 2500,
        priceLevel: "Luxury",
        bestTimeToVisit: "April to June, September to November",
        averageStay: "4-6 days",
        highlights: [
            "Eiffel Tower - Iconic iron lattice tower",
            "Louvre Museum - World's largest art museum",
            "Notre-Dame Cathedral - Gothic architecture masterpiece",
            "Champs-Élysées - Famous shopping avenue",
            "Versailles Palace - Royal château and gardens"
        ],
        activities: ["City Tours", "Museum Visits", "Fine Dining", "River Cruises", "Shopping"],
        featured: true,
        reviews: [
            {
                userName: "Emma Wilson",
                rating: 5,
                comment: "Absolutely magical! The architecture, food, and culture exceeded all expectations. A dream destination!",
                verified: true
            },
            {
                userName: "James Chen",
                rating: 5,
                comment: "Perfect romantic getaway. Every corner is picturesque. The museums are world-class!",
                verified: true
            },
            {
                userName: "Sofia Rodriguez",
                rating: 4,
                comment: "Beautiful city with rich history. Can be crowded during peak season but still worth it!",
                verified: false
            }
        ],
        totalReviews: 3
    },
    {
        title: "Bali, Indonesia",
        description: "Tropical paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        location: "Bali",
        country: "Indonesia",
        category: "Beach",
        rating: 4.7,
        price: 1500,
        priceLevel: "Moderate",
        bestTimeToVisit: "April to October (dry season)",
        averageStay: "7-10 days",
        highlights: [
            "Ubud Rice Terraces - Stunning green landscapes",
            "Tanah Lot Temple - Sea temple with amazing sunsets",
            "Seminyak Beach - Beautiful beaches and surfing",
            "Sacred Monkey Forest - Wildlife sanctuary",
            "Mount Batur - Active volcano for sunrise trekking"
        ],
        activities: ["Beach Activities", "Temple Visits", "Yoga Retreats", "Surfing", "Spa & Wellness"],
        featured: true,
        reviews: [
            {
                userName: "Michael Brown",
                rating: 5,
                comment: "Paradise on earth! The beaches, temples, and people are amazing. Great value for money!",
                verified: true
            },
            {
                userName: "Lisa Anderson",
                rating: 4,
                comment: "Beautiful island with so much to offer. Loved the culture and natural beauty!",
                verified: true
            }
        ],
        totalReviews: 2
    },
    {
        title: "Tokyo, Japan",
        description: "A bustling metropolis blending ultramodern with traditional, from neon-lit skyscrapers to historic temples.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        location: "Tokyo",
        country: "Japan",
        category: "City",
        rating: 4.9,
        price: 3000,
        priceLevel: "Luxury",
        bestTimeToVisit: "March to May, September to November",
        averageStay: "5-7 days",
        highlights: [
            "Shibuya Crossing - World's busiest intersection",
            "Senso-ji Temple - Tokyo's oldest temple",
            "Tokyo Skytree - Tallest tower in Japan",
            "Tsukiji Fish Market - Famous seafood market",
            "Mount Fuji - Iconic volcanic mountain"
        ],
        activities: ["City Exploration", "Food Tours", "Shopping", "Temple Visits", "Day Trips"],
        featured: true,
        reviews: [
            {
                userName: "David Kim",
                rating: 5,
                comment: "Mind-blowing experience! The perfect mix of tradition and technology. Food is incredible!",
                verified: true
            },
            {
                userName: "Anna Martinez",
                rating: 5,
                comment: "Cleanest, safest, and most fascinating city I've visited. Will definitely return!",
                verified: true
            },
            {
                userName: "Tom Johnson",
                rating: 5,
                comment: "Amazing culture, delicious food, and incredibly polite people. Tokyo is a must-visit!",
                verified: false
            }
        ],
        totalReviews: 3
    },
    {
        title: "Santorini, Greece",
        description: "Stunning Greek island famous for dramatic views, beautiful sunsets, and white-washed buildings.",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
        location: "Santorini, Cyclades",
        country: "Greece",
        category: "Beach",
        rating: 4.9,
        price: 2800,
        priceLevel: "Luxury",
        bestTimeToVisit: "April to November",
        averageStay: "4-6 days",
        highlights: [
            "Oia Village - Famous for stunning sunsets",
            "Red Beach - Unique volcanic sand beach",
            "Ancient Thera - Archaeological site",
            "Wine Tours - Local vineyards and tastings",
            "Caldera Views - Breathtaking cliff views"
        ],
        activities: ["Beach Relaxation", "Wine Tasting", "Boat Tours", "Photography", "Sunset Viewing"],
        featured: true,
        reviews: [
            {
                userName: "Rachel Green",
                rating: 5,
                comment: "Most romantic place on earth! The sunsets are absolutely breathtaking. Perfect honeymoon destination!",
                verified: true
            },
            {
                userName: "Chris Evans",
                rating: 5,
                comment: "Pictures don't do it justice. The views, food, and atmosphere are simply perfect!",
                verified: true
            }
        ],
        totalReviews: 2
    },
    {
        title: "New York City, USA",
        description: "The city that never sleeps, offering world-class museums, Broadway shows, diverse cuisine, and iconic landmarks.",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
        location: "New York",
        country: "USA",
        category: "City",
        rating: 4.6,
        price: 3500,
        priceLevel: "Luxury",
        bestTimeToVisit: "April to June, September to November",
        averageStay: "5-7 days",
        highlights: [
            "Statue of Liberty - Iconic American symbol",
            "Central Park - Urban oasis in Manhattan",
            "Times Square - Vibrant entertainment hub",
            "Empire State Building - Art Deco skyscraper",
            "Broadway Shows - World-famous theater district"
        ],
        activities: ["Museum Visits", "Shopping", "Broadway Shows", "Food Tours", "Sightseeing"],
        featured: false,
        reviews: [
            {
                userName: "Sarah Miller",
                rating: 5,
                comment: "Energy like no other city! So much to see and do. The food scene is incredible!",
                verified: true
            },
            {
                userName: "John Davis",
                rating: 4,
                comment: "Amazing city with endless possibilities. Can be overwhelming but in a good way!",
                verified: false
            }
        ],
        totalReviews: 2
    },
    {
        title: "Machu Picchu, Peru",
        description: "Ancient Incan citadel set high in the Andes Mountains, one of the New Seven Wonders of the World.",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800",
        location: "Cusco Region",
        country: "Peru",
        category: "Historical",
        rating: 4.9,
        price: 1800,
        priceLevel: "Moderate",
        bestTimeToVisit: "May to September (dry season)",
        averageStay: "3-5 days",
        highlights: [
            "Machu Picchu Ruins - Ancient Incan city",
            "Huayna Picchu - Mountain hike with views",
            "Sacred Valley - Incan archaeological sites",
            "Inca Trail - Famous trekking route",
            "Cusco City - Historic former Incan capital"
        ],
        activities: ["Hiking", "Historical Tours", "Photography", "Cultural Experiences", "Trekking"],
        featured: true,
        reviews: [
            {
                userName: "Amanda White",
                rating: 5,
                comment: "Absolutely breathtaking! The history and views are beyond words. A bucket list must!",
                verified: true
            },
            {
                userName: "Robert Taylor",
                rating: 5,
                comment: "One of the most incredible places I've ever visited. The trek is challenging but so worth it!",
                verified: true
            }
        ],
        totalReviews: 2
    },
    {
        title: "Dubai, UAE",
        description: "Futuristic city known for luxury shopping, ultramodern architecture, and vibrant nightlife.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        location: "Dubai",
        country: "United Arab Emirates",
        category: "City",
        rating: 4.5,
        price: 3200,
        priceLevel: "Luxury",
        bestTimeToVisit: "November to March",
        averageStay: "4-6 days",
        highlights: [
            "Burj Khalifa - Tallest building in the world",
            "Dubai Mall - Massive shopping complex",
            "Palm Jumeirah - Artificial island resort",
            "Desert Safari - Dune bashing and camel rides",
            "Dubai Marina - Waterfront dining and nightlife"
        ],
        activities: ["Shopping", "Desert Safari", "Beach Activities", "Fine Dining", "Luxury Experiences"],
        featured: false,
        reviews: [
            {
                userName: "Maria Garcia",
                rating: 5,
                comment: "Luxury at its finest! Everything is grand and impressive. Shopping paradise!",
                verified: true
            },
            {
                userName: "Peter Wilson",
                rating: 4,
                comment: "Modern marvel with amazing architecture. Desert safari was a highlight!",
                verified: false
            }
        ],
        totalReviews: 2
    },
    {
        title: "Swiss Alps, Switzerland",
        description: "Majestic mountain range offering world-class skiing, hiking, and breathtaking alpine scenery.",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
        location: "Various regions",
        country: "Switzerland",
        category: "Mountain",
        rating: 4.8,
        price: 3500,
        priceLevel: "Luxury",
        bestTimeToVisit: "December to March (skiing), June to September (hiking)",
        averageStay: "5-7 days",
        highlights: [
            "Matterhorn - Iconic pyramid-shaped mountain",
            "Jungfraujoch - Top of Europe railway station",
            "Interlaken - Adventure sports capital",
            "Zermatt - Car-free alpine village",
            "Glacier Express - Scenic train journey"
        ],
        activities: ["Skiing", "Hiking", "Mountain Climbing", "Train Rides", "Photography"],
        featured: true,
        reviews: [
            {
                userName: "Oliver Schmidt",
                rating: 5,
                comment: "Winter wonderland! The skiing is world-class and the scenery is unbelievable!",
                verified: true
            },
            {
                userName: "Emma Thompson",
                rating: 5,
                comment: "Absolutely stunning! Every view is postcard-perfect. Expensive but worth every penny!",
                verified: true
            }
        ],
        totalReviews: 2
    }
];

async function seedDestinations() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");

        // Clear existing destinations
        await Destination.deleteMany({});
        console.log("Cleared existing destinations");

        // Insert sample destinations
        await Destination.insertMany(sampleDestinations);
        console.log(`✅ Successfully added ${sampleDestinations.length} sample destinations!`);

        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding destinations:", error);
        process.exit(1);
    }
}

seedDestinations();
