const mongoose = require("mongoose");
const Destination = require("./models/Destination");
require("dotenv").config();

const indianDestinations = [
    // BEACHES
    {
        title: "Goa Beaches",
        description: "India's beach paradise with golden sands, vibrant nightlife, Portuguese heritage, and water sports. Famous for its laid-back atmosphere and stunning coastline.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
        location: "Goa",
        country: "India",
        category: "Beach",
        rating: 4.7,
        price: 8000,
        priceLevel: "Budget",
        bestTimeToVisit: "November to February",
        averageStay: "4-5 days",
        highlights: [
            "Baga Beach - Water sports and nightlife",
            "Calangute Beach - Queen of Beaches",
            "Basilica of Bom Jesus - UNESCO World Heritage Site",
            "Dudhsagar Falls - Majestic waterfalls",
            "Old Goa Churches - Portuguese architecture"
        ],
        activities: ["Beach Activities", "Water Sports", "Nightlife", "Heritage Tours", "Seafood Dining"],
        featured: true,
        reviews: [
            {
                userName: "Rajesh Kumar",
                rating: 5,
                comment: "Perfect beach destination! Amazing nightlife, beautiful beaches, and delicious seafood. Goa never disappoints!",
                verified: true
            },
            {
                userName: "Priya Sharma",
                rating: 5,
                comment: "Loved the Portuguese architecture and beach shacks. Great mix of relaxation and adventure!",
                verified: true
            }
        ],
        totalReviews: 2
    },
    {
        title: "Andaman & Nicobar Islands",
        description: "Pristine tropical islands with crystal-clear waters, coral reefs, white sandy beaches, and rich marine life. A paradise for beach lovers and adventure seekers.",
        image: "https://images.unsplash.com/photo-1599802969726-841f8c82d1a3?w=800",
        location: "Port Blair, Andaman & Nicobar",
        country: "India",
        category: "Beach",
        rating: 4.9,
        price: 35000,
        priceLevel: "Luxury",
        bestTimeToVisit: "October to May",
        averageStay: "6-8 days",
        highlights: [
            "Radhanagar Beach - Asia's best beach",
            "Cellular Jail - Historical monument",
            "Scuba Diving - Explore coral reefs",
            "Havelock Island - Pristine beaches",
            "Neil Island - Serene and peaceful"
        ],
        activities: ["Scuba Diving", "Snorkeling", "Beach Relaxation", "Island Hopping", "Water Sports"],
        featured: true,
        reviews: [
            {
                userName: "Amit Patel",
                rating: 5,
                comment: "Absolutely stunning! The water is so clear and the beaches are pristine. Best honeymoon destination!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Varkala Beach, Kerala",
        description: "Unique cliff beach with natural mineral springs, stunning red laterite cliffs, and serene atmosphere. Perfect for relaxation and spiritual experiences.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
        location: "Varkala, Kerala",
        country: "India",
        category: "Beach",
        rating: 4.6,
        price: 12000,
        priceLevel: "Moderate",
        bestTimeToVisit: "September to March",
        averageStay: "3-4 days",
        highlights: [
            "Cliff Beach - Unique red cliff formations",
            "Janardhana Swamy Temple - Ancient temple",
            "Ayurvedic Spas - Traditional treatments",
            "Mineral Springs - Natural healing waters",
            "Sunset Views - Spectacular cliff views"
        ],
        activities: ["Beach Relaxation", "Ayurveda", "Yoga", "Temple Visits", "Cliff Walks"],
        featured: false,
        reviews: [
            {
                userName: "Sneha Menon",
                rating: 5,
                comment: "Beautiful and peaceful beach. The cliff views are amazing and Ayurvedic massages are perfect!",
                verified: true
            }
        ],
        totalReviews: 1
    },

    // MOUNTAINS
    {
        title: "Manali, Himachal Pradesh",
        description: "Picturesque hill station nestled in the Himalayas, famous for snow-capped mountains, adventure sports, and beautiful valleys.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
        location: "Manali, Himachal Pradesh",
        country: "India",
        category: "Mountain",
        rating: 4.8,
        price: 15000,
        priceLevel: "Moderate",
        bestTimeToVisit: "October to February (snow), March to June (pleasant)",
        averageStay: "4-6 days",
        highlights: [
            "Rohtang Pass - Snow-covered mountain pass",
            "Solang Valley - Adventure sports hub",
            "Hidimba Devi Temple - Ancient wooden temple",
            "Old Manali - Cafes and local culture",
            "Beas River - River rafting"
        ],
        activities: ["Skiing", "Paragliding", "Trekking", "River Rafting", "Mountain Biking"],
        featured: true,
        reviews: [
            {
                userName: "Vikram Singh",
                rating: 5,
                comment: "Perfect mountain getaway! Loved the snow activities and beautiful scenery. Must visit in winter!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Leh-Ladakh",
        description: "High-altitude desert mountain region with stunning landscapes, ancient monasteries, pristine lakes, and adventure trails. A paradise for bikers and adventure enthusiasts.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        location: "Leh, Ladakh",
        country: "India",
        category: "Mountain",
        rating: 4.9,
        price: 40000,
        priceLevel: "Luxury",
        bestTimeToVisit: "May to September",
        averageStay: "7-10 days",
        highlights: [
            "Pangong Lake - Crystal blue high-altitude lake",
            "Nubra Valley - Sand dunes and double-humped camels",
            "Magnetic Hill - Gravity-defying phenomenon",
            "Thiksey Monastery - Beautiful Buddhist monastery",
            "Khardung La - World's highest motorable road"
        ],
        activities: ["Bike Rides", "Trekking", "Monastery Visits", "Photography", "Camping"],
        featured: true,
        reviews: [
            {
                userName: "Arjun Reddy",
                rating: 5,
                comment: "Once in a lifetime experience! The landscapes are breathtaking. Bike trip was absolutely amazing!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Shimla, Himachal Pradesh",
        description: "Colonial-era hill station with Victorian architecture, pine forests, and panoramic mountain views. The Queen of Hills offers pleasant weather and scenic beauty.",
        image: "https://images.unsplash.com/photo-1605649488614-3b7e5d96c0e5?w=800",
        location: "Shimla, Himachal Pradesh",
        country: "India",
        category: "Mountain",
        rating: 4.5,
        price: 12000,
        priceLevel: "Moderate",
        bestTimeToVisit: "March to June, December to February",
        averageStay: "3-5 days",
        highlights: [
            "Mall Road - Shopping and cafes",
            "Jakhu Temple - Hilltop temple with views",
            "Christ Church - Neo-Gothic architecture",
            "Kufri - Snow activities and adventure",
            "Toy Train - UNESCO World Heritage railway"
        ],
        activities: ["Shopping", "Heritage Walks", "Toy Train Ride", "Trekking", "Ice Skating"],
        featured: false,
        reviews: [
            {
                userName: "Meera Joshi",
                rating: 4,
                comment: "Beautiful hill station with colonial charm. Mall Road is lovely for evening walks!",
                verified: false
            }
        ],
        totalReviews: 1
    },

    // CITIES
    {
        title: "Jaipur, Rajasthan",
        description: "The Pink City, famous for magnificent forts, palaces, vibrant culture, and royal heritage. A perfect blend of history and modernity.",
        image: "https://images.unsplash.com/photo-1599661046289-e729faf1b54f?w=800",
        location: "Jaipur, Rajasthan",
        country: "India",
        category: "City",
        rating: 4.7,
        price: 10000,
        priceLevel: "Budget",
        bestTimeToVisit: "November to February",
        averageStay: "3-4 days",
        highlights: [
            "Amber Fort - Majestic hilltop fort",
            "Hawa Mahal - Palace of Winds",
            "City Palace - Royal residence",
            "Jantar Mantar - Ancient observatory",
            "Local Markets - Traditional handicrafts and jewelry"
        ],
        activities: ["Fort Tours", "Shopping", "Cultural Shows", "Food Tours", "Heritage Walks"],
        featured: true,
        reviews: [
            {
                userName: "Ananya Gupta",
                rating: 5,
                comment: "Amazing city with rich history! The forts are magnificent and shopping is great. Loved the pink architecture!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Varanasi, Uttar Pradesh",
        description: "One of the world's oldest living cities, the spiritual capital of India on the banks of holy Ganges. Experience ancient rituals and spiritual awakening.",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
        location: "Varanasi, Uttar Pradesh",
        country: "India",
        category: "Cultural",
        rating: 4.8,
        price: 8000,
        priceLevel: "Budget",
        bestTimeToVisit: "October to March",
        averageStay: "2-3 days",
        highlights: [
            "Ganga Aarti - Evening prayer ceremony",
            "Boat Ride - Sunrise on the Ganges",
            "Kashi Vishwanath Temple - Sacred Shiva temple",
            "Sarnath - Buddhist pilgrimage site",
            "Ghats - Ancient riverfront steps"
        ],
        activities: ["Spiritual Tours", "Boat Rides", "Temple Visits", "Cultural Experiences", "Photography"],
        featured: true,
        reviews: [
            {
                userName: "Deepak Verma",
                rating: 5,
                comment: "Spiritually overwhelming! The Ganga Aarti is mesmerizing. A must-visit for cultural experience!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Mumbai, Maharashtra",
        description: "The City of Dreams, India's financial capital with bustling markets, colonial architecture, Bollywood, and vibrant street food culture.",
        image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800",
        location: "Mumbai, Maharashtra",
        country: "India",
        category: "City",
        rating: 4.6,
        price: 18000,
        priceLevel: "Moderate",
        bestTimeToVisit: "November to February",
        averageStay: "3-5 days",
        highlights: [
            "Gateway of India - Iconic monument",
            "Marine Drive - Queen's Necklace",
            "Elephanta Caves - Ancient rock sculptures",
            "Bollywood Tours - Film city visits",
            "Street Food - Vada Pav, Pav Bhaji, Bhel Puri"
        ],
        activities: ["City Tours", "Food Tours", "Shopping", "Beach Visits", "Nightlife"],
        featured: false,
        reviews: [
            {
                userName: "Kavita Shah",
                rating: 5,
                comment: "Vibrant and energetic city! Love the street food and the sea-facing views at Marine Drive!",
                verified: true
            }
        ],
        totalReviews: 1
    },

    // HISTORICAL
    {
        title: "Agra - Taj Mahal",
        description: "Home to the iconic Taj Mahal, one of the Seven Wonders of the World. The city of Mughal heritage and architectural marvels.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
        location: "Agra, Uttar Pradesh",
        country: "India",
        category: "Historical",
        rating: 4.9,
        price: 10000,
        priceLevel: "Moderate",
        bestTimeToVisit: "October to March",
        averageStay: "2-3 days",
        highlights: [
            "Taj Mahal - Monument of love",
            "Agra Fort - UNESCO World Heritage Site",
            "Fatehpur Sikri - Abandoned Mughal city",
            "Itmad-ud-Daulah - Baby Taj",
            "Mehtab Bagh - Taj sunset views"
        ],
        activities: ["Monument Tours", "Photography", "Heritage Walks", "Marble Shopping", "Mughlai Cuisine"],
        featured: true,
        reviews: [
            {
                userName: "Rohan Malhotra",
                rating: 5,
                comment: "Taj Mahal is even more beautiful in person! A must-visit landmark. The architecture is stunning!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Hampi, Karnataka",
        description: "Ancient village with magnificent ruins of the Vijayanagara Empire. A UNESCO World Heritage Site with boulder-strewn landscapes and temple complexes.",
        image: "https://images.unsplash.com/photo-1582554356628-c8dd46a50e1f?w=800",
        location: "Hampi, Karnataka",
        country: "India",
        category: "Historical",
        rating: 4.7,
        price: 9000,
        priceLevel: "Budget",
        bestTimeToVisit: "October to February",
        averageStay: "2-3 days",
        highlights: [
            "Virupaksha Temple - Ancient functioning temple",
            "Vittala Temple - Stone chariot and musical pillars",
            "Matanga Hill - Sunrise views",
            "Royal Enclosure - Palace ruins",
            "Boulder climbing - Unique rock formations"
        ],
        activities: ["Heritage Tours", "Rock Climbing", "Photography", "Temple Visits", "Cycling"],
        featured: true,
        reviews: [
            {
                userName: "Aditya Rao",
                rating: 5,
                comment: "Incredible historical site! The ruins are magnificent and the landscape is unique. History lover's paradise!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Khajuraho, Madhya Pradesh",
        description: "Famous for UNESCO World Heritage temples with intricate erotic sculptures, showcasing medieval Indian art and architecture.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
        location: "Khajuraho, Madhya Pradesh",
        country: "India",
        category: "Historical",
        rating: 4.6,
        price: 11000,
        priceLevel: "Moderate",
        bestTimeToVisit: "October to February",
        averageStay: "2 days",
        highlights: [
            "Western Group of Temples - Magnificent sculptures",
            "Kandariya Mahadev Temple - Largest temple",
            "Sound and Light Show - Temple history",
            "Archaeological Museum - Ancient artifacts",
            "Panna National Park - Wildlife safari nearby"
        ],
        activities: ["Temple Tours", "Photography", "Cultural Shows", "Wildlife Safari", "Heritage Walks"],
        featured: false,
        reviews: [
            {
                userName: "Sanjay Tripathi",
                rating: 5,
                comment: "Architectural marvel! The intricate carvings are mind-blowing. A unique piece of Indian heritage!",
                verified: true
            }
        ],
        totalReviews: 1
    },

    // ADVENTURE & NATURE
    {
        title: "Rishikesh, Uttarakhand",
        description: "Yoga capital of the world, adventure sports hub, and spiritual town on the banks of the Ganges. Perfect blend of spirituality and adventure.",
        image: "https://images.unsplash.com/photo-1626092825103-16dc814dfbfd?w=800",
        location: "Rishikesh, Uttarakhand",
        country: "India",
        category: "Adventure",
        rating: 4.8,
        price: 12000,
        priceLevel: "Moderate",
        bestTimeToVisit: "September to November, March to May",
        averageStay: "3-5 days",
        highlights: [
            "River Rafting - Thrilling white water rafting",
            "Lakshman Jhula - Iconic suspension bridge",
            "Yoga Ashrams - Spiritual yoga retreats",
            "Bungee Jumping - India's highest jump",
            "Beatles Ashram - Historic meditation center"
        ],
        activities: ["River Rafting", "Bungee Jumping", "Yoga", "Trekking", "Camping"],
        featured: true,
        reviews: [
            {
                userName: "Neha Kapoor",
                rating: 5,
                comment: "Perfect mix of adventure and spirituality! River rafting was thrilling and yoga was peaceful!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Ranthambore National Park, Rajasthan",
        description: "One of India's best tiger reserves, offering thrilling wildlife safaris in historical ruins and diverse ecosystem.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        location: "Sawai Madhopur, Rajasthan",
        country: "India",
        category: "Nature",
        rating: 4.7,
        price: 20000,
        priceLevel: "Luxury",
        bestTimeToVisit: "October to April",
        averageStay: "2-3 days",
        highlights: [
            "Tiger Safari - Spot majestic Bengal tigers",
            "Ranthambore Fort - Ancient hilltop fort",
            "Wildlife Photography - Diverse fauna",
            "Padam Talao - Scenic lake",
            "Nature Walks - Guided forest trails"
        ],
        activities: ["Wildlife Safari", "Photography", "Bird Watching", "Nature Walks", "Fort Visits"],
        featured: true,
        reviews: [
            {
                userName: "Karan Saxena",
                rating: 5,
                comment: "Saw 3 tigers! Absolutely thrilling experience. The forest is beautiful and guides are excellent!",
                verified: true
            }
        ],
        totalReviews: 1
    },

    // RELAXATION & CULTURAL
    {
        title: "Udaipur, Rajasthan",
        description: "The City of Lakes, known for romantic palaces, serene lakes, and royal heritage. India's most romantic city with stunning architecture.",
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09d?w=800",
        location: "Udaipur, Rajasthan",
        country: "India",
        category: "Relaxation",
        rating: 4.8,
        price: 16000,
        priceLevel: "Luxury",
        bestTimeToVisit: "September to March",
        averageStay: "3-4 days",
        highlights: [
            "City Palace - Lakeside royal palace",
            "Lake Pichola - Boat rides and sunset views",
            "Jag Mandir - Island palace",
            "Monsoon Palace - Hilltop palace views",
            "Traditional Rajasthani Cuisine - Cultural dining"
        ],
        activities: ["Boat Rides", "Palace Tours", "Cultural Shows", "Shopping", "Fine Dining"],
        featured: true,
        reviews: [
            {
                userName: "Pooja Desai",
                rating: 5,
                comment: "Most romantic city in India! Lake views are mesmerizing and palaces are stunning. Perfect for couples!",
                verified: true
            }
        ],
        totalReviews: 1
    },
    {
        title: "Alleppey Backwaters, Kerala",
        description: "Serene network of canals, lagoons, and lakes. Experience traditional houseboat stays and lush green landscapes. Venice of the East.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
        location: "Alleppey, Kerala",
        country: "India",
        category: "Relaxation",
        rating: 4.8,
        price: 18000,
        priceLevel: "Moderate",
        bestTimeToVisit: "November to February",
        averageStay: "2-3 days",
        highlights: [
            "Houseboat Cruise - Overnight backwater stay",
            "Vembanad Lake - Largest lake in Kerala",
            "Village Tours - Traditional Kerala life",
            "Ayurvedic Treatments - Wellness therapies",
            "Kerala Cuisine - Fresh seafood and coconut-based dishes"
        ],
        activities: ["Houseboat Stays", "Village Tours", "Ayurveda", "Bird Watching", "Photography"],
        featured: true,
        reviews: [
            {
                userName: "Rahul Iyer",
                rating: 5,
                comment: "Most peaceful experience ever! Houseboat stay was magical and food was delicious. Highly recommend!",
                verified: true
            }
        ],
        totalReviews: 1
    }
];

async function seedIndianDestinations() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");

        // Clear existing destinations
        await Destination.deleteMany({});
        console.log("Cleared existing destinations");

        // Insert Indian destinations
        await Destination.insertMany(indianDestinations);
        console.log(`✅ Successfully added ${indianDestinations.length} Indian destinations!`);
        console.log("\nDestinations by category:");
        console.log("Beach: 3 destinations");
        console.log("Mountain: 3 destinations");
        console.log("City: 3 destinations");
        console.log("Historical: 3 destinations");
        console.log("Adventure: 1 destination");
        console.log("Nature: 1 destination");
        console.log("Relaxation: 2 destinations");
        console.log("Cultural: 1 destination (Varanasi)");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding destinations:", error);
        process.exit(1);
    }
}

seedIndianDestinations();
