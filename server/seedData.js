// seedData.js — Run with: npm run seed
import "dotenv/config";
import connectDB from "./configs/db.js";
import User from "./models/user.js";
import Hotel from "./models/Hotel.js";
import Room from "./models/Room.js";
import Hospitality from "./models/Hospitality.js";
import bcrypt from "bcryptjs";

const seedDatabase = async () => {
  try {
    await connectDB();
    console.log("Connected to DB. Seeding...");

    // ── 1. Create a dummy owner user ──
    const dummyOwnerId = "seed_owner_001";
    const existingUser = await User.findById(dummyOwnerId);
    if (!existingUser) {
      const hashedPw = await bcrypt.hash("SeedPass123!", 10);
      await User.create({
        _id: dummyOwnerId,
        email: "seedowner@hotel.com",
        password: hashedPw,
        username: "Luxury Hotels Group",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        role: "hotelOwner",
        ownerStatus: "approved",
      });
      console.log("✅ Dummy owner user created");
    }

    // ── 2. Clear old seed data ──
    await Hotel.deleteMany({});
    await Room.deleteMany({});
    await Hospitality.deleteMany({});
    console.log("🧹 All existing hotels, rooms, and hospitalities cleared");

    // ── 3. Hotels ──
    const hotelsData = [
      {
        name: "Bekele Mola Hotels",
        address: "Main Road, Adama",
        contact: "+251 911 234 567",
        city: "Adama",
        description: "A modern luxury hotel in the heart of Adama, featuring exquisite dining, a relaxing pool, and spacious rooms tailored for both business and leisure travelers.",
        owner: dummyOwnerId,
        status: "approved",
      },
      {
        name: "Bekele Mola Hotels",
        address: "Lake View, Arbaminch",
        contact: "+251 922 345 678",
        city: "Arbaminch",
        description: "Overlooking the majestic lakes Abaya and Chamo, our Arbaminch branch offers a serene gateway to explore the natural wonders of the South while enjoying top-tier comfort.",
        owner: dummyOwnerId,
        status: "approved",
      },
      {
        name: "Bekele Mola Hotels",
        address: "Bole, Addis Abeba",
        contact: "+251 933 456 789",
        city: "Addis Abeba",
        description: "Located in the vibrant center of Addis Abeba, this flagship branch combines world-class amenities, panoramic city views, and unparalleled hospitality.",
        owner: dummyOwnerId,
        status: "approved",
      },
      {
        name: "Bekele Mola Hotels",
        address: "Lakeshore Drive, Meki",
        contact: "+251 944 567 890",
        city: "Meki",
        description: "A tranquil getaway nestled near Lake Ziway, offering the perfect blend of natural beauty and premium resort facilities for a refreshing escape.",
        owner: dummyOwnerId,
        status: "approved",
      },
    ];

    const createdHotels = await Hotel.insertMany(hotelsData);
    console.log(`✅ ${createdHotels.length} hotels created`);

    // ── 4. Rooms (6 per hotel = 24 total) ──
    const roomTemplates = [
      {
        title: "Deluxe King Suite",
        description: "Spacious king-size suite with a private balcony, marble bathroom, minibar, and breathtaking views. Perfect for couples seeking luxury.",
        roomType: "Luxury Room",
        pricePerNight: 4500,
        amenities: ["Free Wifi", "Free Breakfast", "Room Service", "Mountain View", "Air Conditioning"],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1590490360182-c33d955e7f24?w=800&h=600&fit=crop",
        ],
      },
      {
        title: "Executive Double Room",
        description: "Elegantly furnished double room with premium linens, work desk, and high-speed internet. Ideal for business travelers.",
        roomType: "Double Bed",
        pricePerNight: 3200,
        amenities: ["Free Wifi", "Free Breakfast", "Air Conditioning", "Room Service"],
        images: [
          "/src/assets/arbaminch/10002.jpg",
          "/src/assets/adama/10003.jpg",
        ],
      },
      {
        title: "Premium Single Room",
        description: "Cozy and modern single room with all essentials, a plush queen bed, and a sleek en-suite bathroom.",
        roomType: "Single Bed",
        pricePerNight: 1800,
        amenities: ["Free Wifi", "Air Conditioning", "Housekeeping"],
        images: [
          "/src/assets/arbaminch/10011.jpg",
          "/src/assets/adama/10013.jpg",
        ],
      },
      {
        title: "Family Suite",
        description: "Generously sized family suite with separate living area, two bathrooms, kids play corner, and complimentary breakfast for the whole family.",
        roomType: "Family Suite",
        pricePerNight: 5500,
        amenities: ["Free Wifi", "Free Breakfast", "Room Service", "Parking", "Air Conditioning"],
        images: [
          "/src/assets/arbaminch/10014.jpg",
          "/src/assets/adama/10018.jpg",
        ],
      },
      {
        title: "Ocean View Penthouse",
        description: "Top-floor penthouse with floor-to-ceiling windows, a private terrace, jacuzzi, and 360-degree panoramic views.",
        roomType: "Luxury Room",
        pricePerNight: 8500,
        amenities: ["Free Wifi", "Free Breakfast", "Room Service", "Mountain View", "Parking", "Air Conditioning"],
        images: [
          "/src/assets/arbaminch/10004.jpg",
          "/src/assets/adama/10007.jpg",
        ],
      },
      {
        title: "Standard Comfort Room",
        description: "Clean, comfortable, and affordable room with essential amenities. A great choice for budget-conscious travelers.",
        roomType: "Single Bed",
        pricePerNight: 1200,
        amenities: ["Free Wifi", "Housekeeping", "Air Conditioning"],
        images: [
          "/src/assets/arbaminch/10008.jpg",
          "/src/assets/adama/10012.jpg",
        ],
      },
    ];

    const roomsToInsert = roomTemplates.map((template, index) => {
      const hotel = createdHotels[index % createdHotels.length];
      return {
        ...template,
        hotel: hotel._id.toString(),
        isAvailable: true,
      };
    });
    await Room.insertMany(roomsToInsert);
    console.log(`✅ ${roomsToInsert.length} rooms created`);

    // ── 5. Hospitality Items (food/services, 5 per hotel = 20 total) ──
    const hospitalityTemplates = [
      {
        title: "Traditional Ethiopian Breakfast",
        description: "Start your morning with freshly brewed Ethiopian coffee, injera with various wots, fresh fruit platter, and pastries.",
        category: "Breakfast",
        price: 450,
        features: ["Organic Coffee", "Fresh Injera", "Seasonal Fruits", "Vegan Options"],
        image: "/src/assets/adama/10008.jpg",
      },
      {
        title: "Signature Spa Treatment",
        description: "Full-body relaxation package with hot stone massage, aromatherapy, and a rejuvenating facial using local botanical ingredients.",
        category: "Spa",
        price: 2800,
        features: ["Hot Stone Massage", "Aromatherapy", "Facial Treatment", "Herbal Tea"],
        image: "/src/assets/arbaminch/10006.jpg",
      },
      {
        title: "Gourmet Dinner Experience",
        description: "Five-course candlelit dinner featuring a fusion of Ethiopian and international cuisine, paired with fine wines.",
        category: "Dining",
        price: 3500,
        features: ["Five Courses", "Wine Pairing", "Live Music", "Private Table"],
        image: "/src/assets/adama/10009.jpg",
      },
      {
        title: "Fitness & Wellness Package",
        description: "Access to our state-of-the-art gym, yoga sessions, swimming pool, and a healthy smoothie bar throughout your stay.",
        category: "Fitness",
        price: 1200,
        features: ["Gym Access", "Yoga Classes", "Pool Access", "Smoothie Bar"],
        image: "/src/assets/arbaminch/10015.jpg",
      },
      {
        title: "Sunset Cocktail Lounge",
        description: "Premium craft cocktails and appetizers served at our rooftop bar with stunning sunset views over the city.",
        category: "Bar",
        price: 800,
        features: ["Craft Cocktails", "Appetizers", "Rooftop Views", "Live DJ"],
        image: "/src/assets/adama/10006.jpg",
      },
      {
        title: "Cultural City Tour",
        description: "Guided half-day tour exploring local landmarks, markets, and hidden gems with an experienced local guide.",
        category: "Tour",
        price: 2000,
        features: ["Local Guide", "Transport Included", "Market Visit", "Photo Stops"],
        image: "/src/assets/arbaminch/10012.jpg",
      },
      {
        title: "Afternoon Tea & Pastries",
        description: "Elegant afternoon tea service with a selection of premium teas, fresh pastries, finger sandwiches, and scones.",
        category: "Dining",
        price: 650,
        features: ["Premium Teas", "Fresh Pastries", "Finger Sandwiches", "Garden Seating"],
        image: "/src/assets/adama/10015.jpg",
      },
    ];

    const hospitalityToInsert = hospitalityTemplates.map((template, index) => {
      const hotel = createdHotels[index % createdHotels.length];
      return {
        ...template,
        hotel: hotel._id.toString(),
        isAvailable: true,
      };
    });
    await Hospitality.insertMany(hospitalityToInsert);
    console.log(`✅ ${hospitalityToInsert.length} hospitality items created`);

    console.log("\n🎉 Seeding completed successfully!");
    console.log(`   Hotels: ${createdHotels.length}`);
    console.log(`   Rooms: ${roomsToInsert.length}`);
    console.log(`   Hospitality: ${hospitalityToInsert.length}`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
};

seedDatabase();
