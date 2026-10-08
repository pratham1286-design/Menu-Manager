// =====================================================
//  data.js
//  All the data for the website is stored here.
//  (In a real project this would come from a database)
// =====================================================

// ---------- Food Courts inside LPU campus ----------
// Each food court has some stores, and each store has a menu (items).
// veg: true  -> vegetarian dish (green dot)
// veg: false -> non-veg dish (red dot)
// best: true -> shows a "Bestseller" tag
// sponsored: true -> shows a "Featured" badge and is shown first

var foodCourts = [
  {
    id: "fc1",
    name: "Uni Mall Food Court",
    location: "Uni Mall, LPU Campus",
    timings: "9:00 AM - 10:00 PM",
    rating: 4.5,
    icon: "🏬",
    sponsored: true,
    stores: [
      {
        name: "Punjabi Tadka",
        cuisine: "North Indian",
        rating: 4.5,
        sponsored: true,
        items: [
          { name: "Amritsari Kulcha with Chole", price: 110, veg: true, best: true },
          { name: "Dal Makhani with 2 Naan", price: 130, veg: true, best: false },
          { name: "Paneer Butter Masala Thali", price: 160, veg: true, best: true },
          { name: "Butter Chicken with Rice", price: 190, veg: false, best: true },
          { name: "Sweet Lassi", price: 50, veg: true, best: false }
        ]
      },
      {
        name: "Pizza Hub",
        cuisine: "Italian",
        rating: 4.2,
        sponsored: false,
        items: [
          { name: "Margherita Pizza (8 inch)", price: 149, veg: true, best: false },
          { name: "Farmhouse Pizza (8 inch)", price: 199, veg: true, best: true },
          { name: "Chicken Tikka Pizza (8 inch)", price: 229, veg: false, best: false },
          { name: "Garlic Bread with Cheese", price: 99, veg: true, best: true },
          { name: "White Sauce Pasta", price: 129, veg: true, best: false }
        ]
      },
      {
        name: "Wok & Roll",
        cuisine: "Chinese",
        rating: 4.1,
        sponsored: false,
        items: [
          { name: "Veg Hakka Noodles", price: 99, veg: true, best: true },
          { name: "Chilli Paneer Dry", price: 139, veg: true, best: false },
          { name: "Chicken Fried Rice", price: 149, veg: false, best: false },
          { name: "Veg Manchurian Gravy", price: 119, veg: true, best: false },
          { name: "Chicken Momos (8 pcs)", price: 110, veg: false, best: true }
        ]
      },
      {
        name: "Frosty Shakes",
        cuisine: "Beverages & Desserts",
        rating: 4.4,
        sponsored: false,
        items: [
          { name: "Cold Coffee", price: 80, veg: true, best: true },
          { name: "Oreo Shake", price: 100, veg: true, best: true },
          { name: "Mango Smoothie", price: 90, veg: true, best: false },
          { name: "Chocolate Brownie with Ice Cream", price: 110, veg: true, best: false },
          { name: "Fresh Lime Soda", price: 50, veg: true, best: false }
        ]
      }
    ]
  },

  {
    id: "fc2",
    name: "Block 34 Food Court",
    location: "Block 34, Academic Area, LPU Campus",
    timings: "8:00 AM - 8:00 PM",
    rating: 4.3,
    icon: "🎓",
    sponsored: true,
    stores: [
      {
        name: "Student Thali Point",
        cuisine: "Home Style Meals",
        rating: 4.3,
        sponsored: true,
        items: [
          { name: "Mini Veg Thali", price: 90, veg: true, best: true },
          { name: "Rajma Chawal", price: 80, veg: true, best: true },
          { name: "Kadhi Chawal", price: 75, veg: true, best: false },
          { name: "Aloo Paratha with Curd (2 pcs)", price: 70, veg: true, best: false },
          { name: "Egg Curry with Rice", price: 100, veg: false, best: false }
        ]
      },
      {
        name: "Momo Magic",
        cuisine: "Tibetan / Snacks",
        rating: 4.4,
        sponsored: false,
        items: [
          { name: "Veg Steamed Momos (8 pcs)", price: 70, veg: true, best: true },
          { name: "Paneer Fried Momos (8 pcs)", price: 100, veg: true, best: false },
          { name: "Chicken Steamed Momos (8 pcs)", price: 110, veg: false, best: true },
          { name: "Kurkure Momos (8 pcs)", price: 120, veg: true, best: false },
          { name: "Veg Thukpa", price: 90, veg: true, best: false }
        ]
      },
      {
        name: "Kulhad Chai Corner",
        cuisine: "Tea & Snacks",
        rating: 4.6,
        sponsored: false,
        items: [
          { name: "Kulhad Masala Chai", price: 25, veg: true, best: true },
          { name: "Bun Maska", price: 35, veg: true, best: true },
          { name: "Samosa (2 pcs)", price: 30, veg: true, best: false },
          { name: "Bread Pakora", price: 30, veg: true, best: false },
          { name: "Maggi Masala", price: 50, veg: true, best: false }
        ]
      }
    ]
  },

  {
    id: "fc3",
    name: "Block 32 Food Court",
    location: "Block 32, Academic Area, LPU Campus",
    timings: "8:30 AM - 7:30 PM",
    rating: 4.2,
    icon: "🏫",
    sponsored: false,
    stores: [
      {
        name: "South Spice",
        cuisine: "South Indian",
        rating: 4.5,
        sponsored: false,
        items: [
          { name: "Masala Dosa", price: 80, veg: true, best: true },
          { name: "Idli Sambar (4 pcs)", price: 60, veg: true, best: false },
          { name: "Medu Vada (3 pcs)", price: 60, veg: true, best: false },
          { name: "Paneer Dosa", price: 110, veg: true, best: true },
          { name: "Filter Coffee", price: 35, veg: true, best: false }
        ]
      },
      {
        name: "Rolls & Wraps Co.",
        cuisine: "Fast Food",
        rating: 4.0,
        sponsored: false,
        items: [
          { name: "Paneer Tikka Roll", price: 90, veg: true, best: true },
          { name: "Egg Roll", price: 70, veg: false, best: false },
          { name: "Chicken Seekh Roll", price: 120, veg: false, best: true },
          { name: "Aloo Tikki Burger", price: 60, veg: true, best: false },
          { name: "French Fries", price: 70, veg: true, best: false }
        ]
      },
      {
        name: "Chaat Bazaar",
        cuisine: "Street Food",
        rating: 4.3,
        sponsored: false,
        items: [
          { name: "Pani Puri (8 pcs)", price: 40, veg: true, best: true },
          { name: "Papdi Chaat", price: 60, veg: true, best: false },
          { name: "Aloo Tikki Chaat", price: 60, veg: true, best: true },
          { name: "Pav Bhaji", price: 90, veg: true, best: false },
          { name: "Dahi Bhalla", price: 60, veg: true, best: false }
        ]
      }
    ]
  },

  {
    id: "fc4",
    name: "Boys Hostel Food Court",
    location: "Boys Hostel Area, LPU Campus",
    timings: "7:30 AM - 11:30 PM",
    rating: 4.1,
    icon: "🏠",
    sponsored: false,
    stores: [
      {
        name: "Biryani House",
        cuisine: "Mughlai",
        rating: 4.6,
        sponsored: true,
        items: [
          { name: "Veg Dum Biryani", price: 120, veg: true, best: false },
          { name: "Chicken Dum Biryani", price: 160, veg: false, best: true },
          { name: "Egg Biryani", price: 130, veg: false, best: false },
          { name: "Paneer Tikka (6 pcs)", price: 140, veg: true, best: false },
          { name: "Phirni", price: 50, veg: true, best: false }
        ]
      },
      {
        name: "Burger Barn",
        cuisine: "Fast Food",
        rating: 4.1,
        sponsored: false,
        items: [
          { name: "Classic Veg Burger", price: 70, veg: true, best: false },
          { name: "Crispy Chicken Burger", price: 110, veg: false, best: true },
          { name: "Double Cheese Burger", price: 120, veg: true, best: true },
          { name: "Peri Peri Fries", price: 80, veg: true, best: false },
          { name: "Chicken Nuggets (6 pcs)", price: 100, veg: false, best: false }
        ]
      },
      {
        name: "Night Canteen",
        cuisine: "Late Night Snacks",
        rating: 4.4,
        sponsored: false,
        items: [
          { name: "Maggi Masala", price: 40, veg: true, best: true },
          { name: "Cheese Maggi", price: 60, veg: true, best: false },
          { name: "Egg Bhurji with Pav", price: 70, veg: false, best: true },
          { name: "Bread Omelette", price: 60, veg: false, best: false },
          { name: "Masala Chai", price: 20, veg: true, best: false }
        ]
      }
    ]
  },

  {
    id: "fc5",
    name: "Girls Hostel Food Court",
    location: "Girls Hostel Area, LPU Campus",
    timings: "7:30 AM - 10:30 PM",
    rating: 4.3,
    icon: "🏡",
    sponsored: false,
    stores: [
      {
        name: "Sweet Tooth Desserts",
        cuisine: "Desserts",
        rating: 4.5,
        sponsored: false,
        items: [
          { name: "Gulab Jamun (2 pcs)", price: 40, veg: true, best: false },
          { name: "Rasmalai (2 pcs)", price: 60, veg: true, best: true },
          { name: "Kulfi Falooda", price: 80, veg: true, best: true },
          { name: "Belgian Waffle", price: 110, veg: true, best: false },
          { name: "Ice Cream Sundae", price: 90, veg: true, best: false }
        ]
      },
      {
        name: "Healthy Bowl",
        cuisine: "Salads & Sandwiches",
        rating: 4.2,
        sponsored: false,
        items: [
          { name: "Veg Grilled Sandwich", price: 60, veg: true, best: true },
          { name: "Paneer Sandwich", price: 80, veg: true, best: false },
          { name: "Fruit Bowl", price: 70, veg: true, best: false },
          { name: "Chicken Salad Bowl", price: 120, veg: false, best: false },
          { name: "Sprouts Chaat", price: 50, veg: true, best: true }
        ]
      },
      {
        name: "Frosty Shakes",
        cuisine: "Beverages",
        rating: 4.3,
        sponsored: false,
        items: [
          { name: "Cold Coffee", price: 80, veg: true, best: true },
          { name: "KitKat Shake", price: 110, veg: true, best: false },
          { name: "Strawberry Shake", price: 90, veg: true, best: false },
          { name: "Blue Lagoon Mocktail", price: 80, veg: true, best: false },
          { name: "Hot Chocolate", price: 90, veg: true, best: false }
        ]
      }
    ]
  },

  {
    id: "fc6",
    name: "Main Gate Food Court",
    location: "Near Main Gate, LPU Campus",
    timings: "9:00 AM - 9:00 PM",
    rating: 4.0,
    icon: "🚪",
    sponsored: false,
    stores: [
      {
        name: "Amritsari Kulcha Point",
        cuisine: "Punjabi",
        rating: 4.7,
        sponsored: false,
        items: [
          { name: "Aloo Kulcha with Chole", price: 80, veg: true, best: true },
          { name: "Paneer Kulcha with Chole", price: 100, veg: true, best: true },
          { name: "Chole Bhature", price: 90, veg: true, best: false },
          { name: "Lassi (Large)", price: 50, veg: true, best: false }
        ]
      },
      {
        name: "Momo Magic",
        cuisine: "Tibetan / Snacks",
        rating: 4.2,
        sponsored: false,
        items: [
          { name: "Veg Steamed Momos (8 pcs)", price: 70, veg: true, best: false },
          { name: "Tandoori Momos (8 pcs)", price: 130, veg: true, best: true },
          { name: "Chicken Fried Momos (8 pcs)", price: 120, veg: false, best: false },
          { name: "Chilli Garlic Noodles", price: 100, veg: true, best: false }
        ]
      },
      {
        name: "Wok & Roll",
        cuisine: "Chinese",
        rating: 4.0,
        sponsored: false,
        items: [
          { name: "Schezwan Noodles", price: 100, veg: true, best: false },
          { name: "Honey Chilli Potato", price: 110, veg: true, best: true },
          { name: "Chilli Chicken Dry", price: 160, veg: false, best: true },
          { name: "Veg Spring Rolls", price: 90, veg: true, best: false }
        ]
      }
    ]
  }
];
