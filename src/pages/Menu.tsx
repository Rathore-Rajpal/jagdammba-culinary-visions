import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { openWhatsAppChat } from "@/lib/utils";
import sweetsCollection from "@/assets/sweets-collection.jpg";
import curryDishes from "@/assets/curry-dishes.jpg";
import heroThali from "@/assets/hero-thali.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";
// Additional category-specific images
import riceImage from "@/assets/rice.png";
import rotiImage from "@/assets/roti.png";
import saladImage from "@/assets/Salad.png";
import snacksImage from "@/assets/salty snaks.png";
import stallItemsImage from "@/assets/stall items.png";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Helper function to get appropriate image based on category
  const getCategoryImage = (category: string) => {
    switch(category) {
      case "sweets":
        return sweetsCollection;
      case "vegetables":
        return curryDishes;
      case "breakfast":
        return chefCooking;
      case "snacks":
        return snacksImage; // Using specific snacks image
      case "stall":
        return stallItemsImage; // Using specific stall items image
      case "salad":
        return saladImage; // Using specific salad image
      case "roti":
        return rotiImage; // Using specific roti image
      case "rice":
        return riceImage; // Using specific rice image
      default:
        return sweetsCollection;
    }
  };

  const categories = [
    { id: "all", name: "All Items", hindiName: "सभी आइटम", emoji: "🍽️" },
    { id: "sweets", name: "Sweets", hindiName: "मिठाई", emoji: "🍯" },
    { id: "vegetables", name: "Royal Vegetables", hindiName: "शाही सब्जियां", emoji: "🥘" },
    { id: "breakfast", name: "Breakfast", hindiName: "नाश्ता", emoji: "�" },
    { id: "snacks", name: "Salty Snacks", hindiName: "नमकीन", emoji: "🥜" },
    { id: "stall", name: "Stall Items", hindiName: "स्टॉल", emoji: "🍱" },
    { id: "salad", name: "Salad", hindiName: "सलाद", emoji: "🥗" },
    { id: "roti", name: "Roti", hindiName: "रोटी", emoji: "🫓" },
    { id: "rice", name: "Rice", hindiName: "चावल", emoji: "🍚" },
  ];

  // Complete menu based on provided categories
  const menuItems = [
    // Sweets Category - First Group
    { name: "Lapsi", category: "sweets", description: "Traditional sweet made from broken wheat", image: sweetsCollection },
    { name: "Dal Badam Halwa", category: "sweets", description: "Rich almond and lentil halwa", image: sweetsCollection },
    { name: "Kaju Akhrot Halwa", category: "sweets", description: "Premium cashew and walnut halwa", image: sweetsCollection },
    { name: "Anjir Katli", category: "sweets", description: "Fig-based sweet delicacy", image: sweetsCollection },
    { name: "Kaju Roll", category: "sweets", description: "Rolled cashew sweets", image: sweetsCollection },
    { name: "Pista Roll", category: "sweets", description: "Pistachio rolled sweets", image: sweetsCollection },
    { name: "Butter Scotch Halwa", category: "sweets", description: "Butterscotch flavored halwa", image: sweetsCollection },
    { name: "Panchmewa Chakki", category: "sweets", description: "Five-nut mixed sweet", image: sweetsCollection },
    { name: "Rabdi Malpua", category: "sweets", description: "Sweet pancakes with rabdi", image: sweetsCollection },
    { name: "Mawa Barfi", category: "sweets", description: "Milk solid based barfi", image: sweetsCollection },
    { name: "Milk Cake", category: "sweets", description: "Soft milk-based cake", image: sweetsCollection },
    { name: "Atta Malpua", category: "sweets", description: "Wheat flour pancakes in syrup", image: sweetsCollection },
    { name: "Gulab Jamun", category: "sweets", description: "Soft milk dumplings in syrup", image: sweetsCollection },
    { name: "Cutting Gulab Jamun", category: "sweets", description: "Layered gulab jamun variety", image: sweetsCollection },
    { name: "Kaju Pista Roll", category: "sweets", description: "Cashew pistachio rolls", image: sweetsCollection },
    { name: "Gajar Halwa", category: "sweets", description: "Carrot-based halwa", image: sweetsCollection },
    { name: "Bundi", category: "sweets", description: "Small sweet pearls made from gram flour", image: sweetsCollection },
    { name: "Besan Chakki", category: "sweets", description: "Gram flour-based sweet", image: sweetsCollection },
    { name: "Dal Badam Chakki", category: "sweets", description: "Lentil and almond sweet", image: sweetsCollection },
    { name: "Motipak Chakki", category: "sweets", description: "Pearl-like sweet preparation", image: sweetsCollection },
    { name: "Balushahi", category: "sweets", description: "Flaky, glazed donut-like sweet", image: sweetsCollection },
    { name: "Guniya", category: "sweets", description: "Sweet stuffed pastry", image: sweetsCollection },
    { name: "Rabdi Ghewar", category: "sweets", description: "Disc-shaped sweet topped with rabdi", image: sweetsCollection },
    { name: "Sada Ghewar", category: "sweets", description: "Plain disc-shaped sweet", image: sweetsCollection },
    { name: "Surma Laddu", category: "sweets", description: "Special variety of laddu", image: sweetsCollection },
    { name: "Bundi Laddu", category: "sweets", description: "Gram flour pearls laddu", image: sweetsCollection },
    
    // Sweets Category - Second Group
    { name: "Fruit Cream", category: "sweets", description: "Fresh fruit with cream", image: sweetsCollection },
    { name: "Sponge Rasgulla", category: "sweets", description: "Soft spongy cheese balls in syrup", image: sweetsCollection },
    { name: "Kesar Rajbhog", category: "sweets", description: "Saffron flavored rajbhog", image: sweetsCollection },
    { name: "Malai Rajbhog", category: "sweets", description: "Cream-filled rajbhog", image: sweetsCollection },
    { name: "Chamcham", category: "sweets", description: "Bengali sweet delicacy", image: sweetsCollection },
    { name: "Kesar Chamcham", category: "sweets", description: "Saffron chamcham", image: sweetsCollection },
    { name: "Ras Malai", category: "sweets", description: "Soft cheese patties in sweet milk", image: sweetsCollection },
    { name: "Ras Madhuri", category: "sweets", description: "Sweet cheese balls in flavored milk", image: sweetsCollection },
    { name: "Chhena Roll", category: "sweets", description: "Cottage cheese rolls", image: sweetsCollection },
    { name: "Chhena Toast", category: "sweets", description: "Grilled cottage cheese sweet", image: sweetsCollection },
    { name: "Khushbani", category: "sweets", description: "Sweet apricot preparation", image: sweetsCollection },
    { name: "Kheer Chamcham", category: "sweets", description: "Kheer-filled chamcham", image: sweetsCollection },
    { name: "Kesar Bati", category: "sweets", description: "Saffron bati", image: sweetsCollection },
    { name: "Khajur Pak", category: "sweets", description: "Date-based sweet", image: sweetsCollection },
    { name: "Kaju Kesarpak", category: "sweets", description: "Cashew saffron pak", image: sweetsCollection },
    { name: "Gulkand Barfi", category: "sweets", description: "Rose petal barfi", image: sweetsCollection },
    { name: "Sangam Dryfruit", category: "sweets", description: "Mixed dry fruit sweet", image: sweetsCollection },
    { name: "Anjir Patasha", category: "sweets", description: "Fig-based patasha", image: sweetsCollection },
    { name: "Imarti", category: "sweets", description: "Traditional spiral sweet", image: sweetsCollection },
    { name: "Jalebi", category: "sweets", description: "Crispy spiral in syrup", image: sweetsCollection },
    { name: "Motichur Laddu", category: "sweets", description: "Fine gram flour balls laddu", image: sweetsCollection },
    { name: "Gur Pak", category: "sweets", description: "Jaggery-based sweet", image: sweetsCollection },
    { name: "Tiranga Halwa", category: "sweets", description: "Three-colored halwa", image: sweetsCollection },
    { name: "Mirchi Chutney", category: "sweets", description: "Sweet chili chutney", image: sweetsCollection },

    // Royal Vegetables Category - First Group
    { name: "Shahi Paneer", category: "vegetables", description: "Royal cottage cheese curry", image: curryDishes },
    { name: "Matar Paneer", category: "vegetables", description: "Peas and cottage cheese", image: curryDishes },
    { name: "Palak Paneer", category: "vegetables", description: "Spinach cottage cheese", image: curryDishes },
    { name: "Haldi Matar", category: "vegetables", description: "Turmeric flavored peas", image: curryDishes },
    { name: "Gulabjamun Sabji", category: "vegetables", description: "Special savory preparation", image: curryDishes },
    { name: "Govind Gatta", category: "vegetables", description: "Gram flour dumplings", image: curryDishes },
    { name: "Chakki Sabji", category: "vegetables", description: "Mixed vegetable preparation", image: curryDishes },
    { name: "Mix Veg", category: "vegetables", description: "Mixed vegetable medley", image: curryDishes },
    { name: "Gobhi Tamatar Matar", category: "vegetables", description: "Cauliflower with tomatoes and peas", image: curryDishes },
    { name: "Bhindi Shimla Mirchi Fry", category: "vegetables", description: "Okra and bell pepper fry", image: curryDishes },
    { name: "Malai Pyaj Sabji", category: "vegetables", description: "Creamy onion curry", image: curryDishes },
    { name: "Lahsun Chutney", category: "vegetables", description: "Garlic chutney", image: curryDishes },
    { name: "Mewa Moyer", category: "vegetables", description: "Dry fruit preparation", image: curryDishes },
    { name: "Kaju Kari Sabji", category: "vegetables", description: "Cashew curry", image: curryDishes },
    { name: "Pankaj Kutta Sabji", category: "vegetables", description: "Special vegetable preparation", image: curryDishes },
    { name: "Gajar Muli Achar", category: "vegetables", description: "Carrot radish pickle", image: curryDishes },
    { name: "Mirchi Kuta", category: "vegetables", description: "Crushed chili preparation", image: curryDishes },
    { name: "Keri Gunda", category: "vegetables", description: "Mango gunda preparation", image: curryDishes },
    { name: "Dal Fry", category: "vegetables", description: "Fried lentils", image: curryDishes },
    { name: "Dal Makhani", category: "vegetables", description: "Creamy black lentils", image: curryDishes },
    { name: "Sambhar Dal", category: "vegetables", description: "South Indian lentil preparation", image: curryDishes },
    { name: "Navratna Korma Sabji", category: "vegetables", description: "Nine-gem vegetable korma", image: curryDishes },
    { name: "Mirchi Chutney", category: "vegetables", description: "Chili chutney", image: curryDishes },
    { name: "Paneer Shimla Sabji", category: "vegetables", description: "Paneer bell pepper curry", image: curryDishes },
    { name: "Malai Kofta", category: "vegetables", description: "Creamy cottage cheese balls", image: curryDishes },
    { name: "Palak Maksum", category: "vegetables", description: "Spinach special preparation", image: curryDishes },
    { name: "Aalu Gobhi", category: "vegetables", description: "Potato cauliflower", image: curryDishes },
    { name: "Dum Aalu", category: "vegetables", description: "Slow-cooked potatoes", image: curryDishes },

    // Royal Vegetables Category - Second Group
    { name: "Sarso ka Saag", category: "vegetables", description: "Mustard greens preparation", image: curryDishes },
    { name: "Tawa Sabji", category: "vegetables", description: "Griddle-cooked vegetables", image: curryDishes },
    { name: "Shahi Raita", category: "vegetables", description: "Royal yogurt preparation", image: curryDishes },
    { name: "Sev Tamatar", category: "vegetables", description: "Tomato with crispy sev", image: curryDishes },
    { name: "Bhindi Masala", category: "vegetables", description: "Spiced okra preparation", image: curryDishes },
    { name: "Besan Mirchi", category: "vegetables", description: "Gram flour coated chilies", image: curryDishes },
    { name: "Safed Kadhi", category: "vegetables", description: "White yogurt curry", image: curryDishes },
    { name: "Palak Kadhi", category: "vegetables", description: "Spinach yogurt curry", image: curryDishes },
    { name: "Masala Kadhi", category: "vegetables", description: "Spiced yogurt curry", image: curryDishes },
    { name: "Vegetable Raita", category: "vegetables", description: "Mixed vegetable yogurt", image: curryDishes },

    // Salty Snacks Category
    { name: "Mewa Moyer", category: "snacks", description: "Dry fruit based snack", image: snacksImage },
    { name: "Mewa Madhur", category: "snacks", description: "Sweet and savory dry fruit mix", image: snacksImage },
    { name: "Dal Moth", category: "snacks", description: "Lentil-based snack", image: snacksImage },
    { name: "Mix Namkeen", category: "snacks", description: "Assorted savory mix", image: snacksImage },
    { name: "Ratalami Sev", category: "snacks", description: "Ratlam-style sev", image: snacksImage },
    { name: "Navratna Mixer", category: "snacks", description: "Nine-ingredient snack mix", image: snacksImage },
    { name: "Bhavnagari Gathia", category: "snacks", description: "Bhavnagar-style gathia", image: snacksImage },
    { name: "Aalu Papdi", category: "snacks", description: "Potato wafers", image: snacksImage },
    { name: "Barik Sev", category: "snacks", description: "Fine gram flour noodles", image: snacksImage },
    { name: "Lahrun Gathia", category: "snacks", description: "Garlic flavored gathia", image: snacksImage },
    { name: "Jhakas Papad", category: "snacks", description: "Special spiced papadum", image: snacksImage },
    { name: "Kotari Papad", category: "snacks", description: "Traditional papadum variety", image: snacksImage },
    { name: "Khichia", category: "snacks", description: "Rice flour crackers", image: snacksImage },
    { name: "Salewada Phali", category: "snacks", description: "Salted beans snack", image: snacksImage },

    // Breakfast Category
    { name: "Jalebi Imarti", category: "breakfast", description: "Sweet spiral treats", image: curryDishes },
    { name: "Idli", category: "breakfast", description: "Steamed rice cakes", image: curryDishes },
    { name: "Sambhar", category: "breakfast", description: "Lentil vegetable stew", image: curryDishes },
    { name: "Bada", category: "breakfast", description: "Lentil fritters", image: curryDishes },
    { name: "Nariyal Chutney", category: "breakfast", description: "Coconut chutney", image: curryDishes },
    { name: "Hari Chutney", category: "breakfast", description: "Green chutney", image: curryDishes },
    { name: "Chaman", category: "breakfast", description: "Kashmiri paneer dish", image: curryDishes },
    { name: "Poha", category: "breakfast", description: "Flattened rice dish", image: curryDishes },
    { name: "Upma", category: "breakfast", description: "Semolina savory porridge", image: curryDishes },
    { name: "Moyan Kachori", category: "breakfast", description: "Stuffed fried pastry", image: curryDishes },
    { name: "Pyaz Kachori", category: "breakfast", description: "Onion stuffed kachori", image: curryDishes },
    { name: "Mirchi Vada", category: "breakfast", description: "Stuffed chili fritters", image: curryDishes },
    { name: "Kachori", category: "breakfast", description: "Spiced stuffed pastry", image: curryDishes },
    { name: "Bread Pakoda", category: "breakfast", description: "Bread fritters", image: curryDishes },
    { name: "Paneer Pakoda", category: "breakfast", description: "Cottage cheese fritters", image: curryDishes },
    { name: "Mix Pakoda", category: "breakfast", description: "Assorted vegetable fritters", image: curryDishes },
    { name: "Kesar Puri", category: "breakfast", description: "Saffron flavored fried bread", image: curryDishes },
    { name: "Chai/Coffee", category: "breakfast", description: "Indian tea/Coffee", image: curryDishes },

    // Stall Items Category
    { name: "Tandoori Roti", category: "stall", description: "Clay oven baked flatbread", image: stallItemsImage },
    { name: "Roti", category: "stall", description: "Traditional flatbread", image: stallItemsImage },
    { name: "Khai Sans", category: "stall", description: "Special savory snack", image: stallItemsImage },
    { name: "Chowmein", category: "stall", description: "Stir-fried noodles", image: stallItemsImage },
    { name: "Pani Patasa", category: "stall", description: "Pani puri/Golgappa", image: stallItemsImage },
    { name: "Fruit Chaat", category: "stall", description: "Spiced fruit salad", image: stallItemsImage },
    { name: "Manchurian", category: "stall", description: "Indo-Chinese vegetable balls", image: stallItemsImage },
    { name: "Pav Bhaji", category: "stall", description: "Spiced vegetable mash with bread", image: stallItemsImage },
    { name: "Tawa Sabji", category: "stall", description: "Griddle-cooked vegetables", image: stallItemsImage },
    { name: "Paneer Tikka", category: "stall", description: "Grilled spiced cottage cheese", image: stallItemsImage },
    { name: "Kesar Doodh", category: "stall", description: "Saffron milk", image: stallItemsImage },
    { name: "Coffee", category: "stall", description: "Brewed coffee", image: stallItemsImage },
    { name: "Ice Cream", category: "stall", description: "Frozen dessert", image: stallItemsImage },
    { name: "Aloo Tikki", category: "stall", description: "Potato patties", image: stallItemsImage },
    { name: "Soup", category: "stall", description: "Vegetable soup", image: stallItemsImage },
    { name: "Juicer", category: "stall", description: "Fresh fruit juices", image: stallItemsImage },
    { name: "Idli Sambhar", category: "stall", description: "Steamed rice cakes with lentil stew", image: stallItemsImage },
    { name: "Paneer Chilli", category: "stall", description: "Spicy cottage cheese", image: stallItemsImage },
    { name: "Rumali Roti", category: "stall", description: "Thin handkerchief bread", image: stallItemsImage },
    { name: "Butter Naan", category: "stall", description: "Buttered leavened bread", image: stallItemsImage },
    { name: "Kadhai Doodh", category: "stall", description: "Milk cooked in iron wok", image: stallItemsImage },
    { name: "Chole Bhature", category: "stall", description: "Spiced chickpeas with fried bread", image: stallItemsImage },
    { name: "Delhi Chaat", category: "stall", description: "Savory snack with various textures", image: stallItemsImage },
    { name: "Spring Roll", category: "stall", description: "Crispy vegetable rolls", image: stallItemsImage },
    { name: "Palak Bada", category: "stall", description: "Spinach fritters", image: stallItemsImage },
    { name: "Dal Fry", category: "stall", description: "Fried lentils", image: stallItemsImage },
    { name: "Pineapple Shake", category: "stall", description: "Pineapple milkshake", image: stallItemsImage },
    { name: "American Makka", category: "stall", description: "American style corn", image: stallItemsImage },
    { name: "Chuski Machine", category: "stall", description: "Ice gola/shaved ice", image: stallItemsImage },
    { name: "Popcorn Machine", category: "stall", description: "Fresh popcorn", image: stallItemsImage },
    { name: "Gudiya Bal", category: "stall", description: "Cotton candy", image: stallItemsImage },

    // Salad Category
    { name: "Moth Fry", category: "salad", description: "Fried moth beans", image: saladImage },
    { name: "Chana Fry", category: "salad", description: "Fried chickpeas", image: saladImage },
    { name: "Ankurit Salad", category: "salad", description: "Sprouted bean salad", image: saladImage },
    { name: "Kheera", category: "salad", description: "Cucumber", image: saladImage },
    { name: "Tamatar", category: "salad", description: "Tomatoes", image: saladImage },
    { name: "Pyaz", category: "salad", description: "Onions", image: saladImage },
    { name: "Kakdi", category: "salad", description: "Cucumber variety", image: saladImage },
    { name: "Mooli", category: "salad", description: "Radish", image: saladImage },
    { name: "Gajar", category: "salad", description: "Carrots", image: saladImage },

    // Roti Category
    { name: "Plain Roti", category: "roti", description: "Simple flatbread", image: rotiImage },
    { name: "Tawa Roti", category: "roti", description: "Griddle-cooked flatbread", image: rotiImage },
    { name: "Puri", category: "roti", description: "Deep-fried puffed bread", image: rotiImage },
    { name: "Methi Puri", category: "roti", description: "Fenugreek flavored puri", image: rotiImage },
    { name: "Rumali Roti", category: "roti", description: "Thin handkerchief bread", image: rotiImage },
    { name: "Butter Naan", category: "roti", description: "Buttered leavened bread", image: rotiImage },

    // Rice Category
    { name: "Khichdi", category: "rice", description: "Rice and lentil porridge", image: riceImage },
    { name: "Kabuli", category: "rice", description: "Rice with chickpeas", image: riceImage },
    { name: "Matar Pulao", category: "rice", description: "Peas pilaf", image: riceImage },
    { name: "Jeera Rice", category: "rice", description: "Cumin flavored rice", image: riceImage },
    { name: "Sada Chawal", category: "rice", description: "Plain steamed rice", image: riceImage },
    { name: "Ram Khichdi", category: "rice", description: "Special khichdi variety", image: riceImage }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gradient-gold">Complete Menu</span>
          </h1>
          <p className="font-hindi text-3xl mb-4">जगदम्बा का विशेष मेनू</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our authentic collection of traditional dishes, featuring sweets, royal vegetables, 
            breakfast items, snacks and more - all carefully prepared with premium ingredients.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button variant="outline" className="btn-hero-secondary">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? "btn-hero-primary" 
                    : "btn-hero-secondary"
                } px-6 py-3`}
              >
                <span className="mr-2 text-lg">{category.emoji}</span>
                <div className="flex flex-col">
                  <span>{category.name}</span>
                  <span className="text-xs font-hindi">{category.hindiName}</span>
                </div>
              </Button>
            ))}
          </div>

          {/* Price Notice */}
          <div className="text-center mb-10">
            <div className="inline-block px-6 py-3 border border-primary/20 rounded-lg bg-primary/5 text-center">
              <p className="text-muted-foreground text-lg">
                <span className="font-bold text-primary">Note:</span> Prices are available upon request. Please contact us for detailed pricing.
              </p>
              <p className="font-hindi text-lg mt-1">मूल्य अनुरोध पर उपलब्ध हैं। कृपया विस्तृत जानकारी के लिए हमसे संपर्क करें।</p>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={index}
                className="glass-card hover-tilt group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gradient-gold mb-2">
                    {item.name}
                    <span className="text-xs text-muted-foreground block mt-1 font-hindi">
                      {item.category === "sweets" ? "मिठाई" : 
                       item.category === "vegetables" ? "शाही सब्जियां" :
                       item.category === "breakfast" ? "नाश्ता" :
                       item.category === "snacks" ? "नमकीन" :
                       item.category === "stall" ? "स्टॉल" :
                       item.category === "salad" ? "सलाद" :
                       item.category === "roti" ? "रोटी" :
                       item.category === "rice" ? "चावल" : ""}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase text-primary font-medium">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                    <Button 
                      size="sm" 
                      className="btn-hero-primary"
                      onClick={() => openWhatsAppChat(
                        item.name, 
                        `Hello! I am interested in ordering "${item.name}". Could you please provide pricing and availability information?`
                      )}
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No items found matching your search.</p>
            </div>
          )}

          {/* Contact for Custom Orders */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gradient-gold mb-2">Custom Orders Welcome</h3>
              <p className="font-hindi text-xl mb-2">कस्टम ऑर्डर का स्वागत है</p>
              <p className="text-muted-foreground mb-6">
                Don't see what you're looking for? We can prepare custom dishes according to your preferences and dietary requirements.
              </p>
              <Button 
                className="btn-hero-primary golden-glow"
                onClick={() => openWhatsAppChat(
                  "Custom Menu", 
                  "Hello! I would like to discuss creating a custom menu for my event. Could you please help me with options and pricing?"
                )}
              >
                Contact for Custom Menu
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;