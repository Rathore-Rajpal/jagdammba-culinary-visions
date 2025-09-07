import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { openWhatsAppChat } from "@/lib/utils";
import sweetsCollection from "@/assets/sweets-collection.jpg";
import curryDishes from "@/assets/curry-dishes.jpg";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Items", hindiName: "सभी आइटम", emoji: "🍽️" },
    { id: "sweets", name: "Sweets", hindiName: "मिठाई", emoji: "🍯" },
    { id: "vegetables", name: "Vegetables", hindiName: "सब्जियाँ", emoji: "🥘" },
    { id: "snacks", name: "Snacks", hindiName: "नाश्ता", emoji: "🥜" },
    { id: "specialties", name: "Specialties", hindiName: "विशेषताएं", emoji: "⭐" },
  ];

  // Extracted from the uploaded menu image
  const menuItems = [
    // Sweets Category
    { name: "Laddu", category: "sweets", description: "Traditional sweet balls made with gram flour and ghee", image: sweetsCollection },
    { name: "Dal Badam Halwa", category: "sweets", description: "Rich almond and lentil halwa", image: sweetsCollection },
    { name: "Kaju Almond Halwa", category: "sweets", description: "Premium cashew and almond halwa", image: sweetsCollection },
    { name: "Kaju Katli", category: "sweets", description: "Diamond-shaped cashew delights", image: sweetsCollection },
    { name: "Anjir Katli", category: "sweets", description: "Fig-based sweet delicacy", image: sweetsCollection },
    { name: "Kaju Roll", category: "sweets", description: "Rolled cashew sweets", image: sweetsCollection },
    { name: "Pista Roll", category: "sweets", description: "Pistachio rolled sweets", image: sweetsCollection },
    { name: "Badam Kesar Halwa", category: "sweets", description: "Almond saffron halwa", image: sweetsCollection },
    { name: "Panchmel Chakki", category: "sweets", description: "Five-grain mixed sweet", image: sweetsCollection },
    { name: "Rabdi Malpuaa", category: "sweets", description: "Sweet pancakes with rabdi", image: sweetsCollection },
    { name: "Kesar Katli", category: "sweets", description: "Saffron flavored katli", image: sweetsCollection },
    { name: "Mawa Barfi", category: "sweets", description: "Milk solid based barfi", image: sweetsCollection },
    { name: "Milk Cake", category: "sweets", description: "Soft milk-based cake", image: sweetsCollection },
    { name: "Gulab Jamun", category: "sweets", description: "Soft milk dumplings in syrup", image: sweetsCollection },
    { name: "Cutting Gulab Jamun", category: "sweets", description: "Layered gulab jamun variety", image: sweetsCollection },
    { name: "Kaju Pista Roll", category: "sweets", description: "Cashew pistachio rolls", image: sweetsCollection },
    { name: "Gajar Halwa", category: "sweets", description: "Carrot-based halwa", image: sweetsCollection },

    // Milk-based Sweets
    { name: "Fruit Cream", category: "vegetables", description: "Fresh fruit with cream", image: curryDishes },
    { name: "Sponge Rasamalai", category: "vegetables", description: "Soft cottage cheese in milk", image: sweetsCollection },
    { name: "Kesar Rajbhog", category: "vegetables", description: "Saffron flavored rajbhog", image: sweetsCollection },
    { name: "Malai Rajbhog", category: "vegetables", description: "Cream-filled rajbhog", image: sweetsCollection },
    { name: "Chamcham", category: "vegetables", description: "Bengali sweet delicacy", image: sweetsCollection },
    { name: "Kesar Chamcham", category: "vegetables", description: "Saffron chamcham", image: sweetsCollection },
    { name: "Rasamalai", category: "vegetables", description: "Traditional rasamalai", image: sweetsCollection },
    { name: "Ras Machuri", category: "vegetables", description: "Sweet cheese balls", image: sweetsCollection },
    { name: "Chhena Roll", category: "vegetables", description: "Cottage cheese rolls", image: sweetsCollection },
    { name: "Chhena Toast", category: "vegetables", description: "Grilled cottage cheese", image: sweetsCollection },
    { name: "Khurasani", category: "vegetables", description: "Crispy sweet preparation", image: sweetsCollection },
    { name: "Kheer Chamcham", category: "vegetables", description: "Kheer-filled chamcham", image: sweetsCollection },
    { name: "Kesar Bati", category: "vegetables", description: "Saffron bati", image: sweetsCollection },
    { name: "Khajur Pak", category: "vegetables", description: "Date-based sweet", image: sweetsCollection },
    { name: "Kaju Kesar Pak", category: "vegetables", description: "Cashew saffron pak", image: sweetsCollection },
    { name: "Gulkand Barfi", category: "vegetables", description: "Rose petal barfi", image: sweetsCollection },
    { name: "Sangam Dryfruit", category: "vegetables", description: "Mixed dry fruit sweet", image: sweetsCollection },
    { name: "Anjir Panara", category: "vegetables", description: "Fig-based panara", image: sweetsCollection },
    { name: "Imrati", category: "vegetables", description: "Traditional spiral sweet", image: sweetsCollection },
    { name: "Jalebi", category: "vegetables", description: "Crispy spiral in syrup", image: sweetsCollection },
    { name: "Moti Chur Laddu", category: "vegetables", description: "Fine gram flour balls", image: sweetsCollection },
    { name: "Gur Pak", category: "vegetables", description: "Jaggery-based sweet", image: sweetsCollection },
    { name: "Tirang Halwa", category: "vegetables", description: "Three-colored halwa", image: sweetsCollection },
    { name: "Gulkhiya", category: "vegetables", description: "Sweet dumplings", image: sweetsCollection },
    { name: "Rabdi Meher", category: "vegetables", description: "Rabdi-based sweet", image: sweetsCollection },
    { name: "Sahi Meher", category: "vegetables", description: "Premium meher variety", image: sweetsCollection },
    { name: "Churma Laddu", category: "vegetables", description: "Wheat flour sweet balls", image: sweetsCollection },
    { name: "Bundi Laddu", category: "vegetables", description: "Gram flour pearls in laddu", image: sweetsCollection },

    // Wedding Vegetables (Sabji)
    { name: "Shahi Paneer", category: "vegetables", description: "Royal cottage cheese curry", image: curryDishes },
    { name: "Matar Paneer", category: "vegetables", description: "Peas and cottage cheese", image: curryDishes },
    { name: "Palak Paneer", category: "vegetables", description: "Spinach cottage cheese", image: curryDishes },
    { name: "Haldi Matar", category: "vegetables", description: "Turmeric flavored peas", image: curryDishes },
    { name: "Fulgobi Jartalu Sabji", category: "vegetables", description: "Cauliflower potato curry", image: curryDishes },
    { name: "Gobind Gatta", category: "vegetables", description: "Gram flour dumplings", image: curryDishes },
    { name: "Chakki Sabji", category: "vegetables", description: "Mixed vegetable preparation", image: curryDishes },
    { name: "Mishar Baig", category: "vegetables", description: "Mixed vegetable medley", image: curryDishes },
    { name: "Goshi Tamatar Matar", category: "vegetables", description: "Tomato peas curry", image: curryDishes },
    { name: "Jhipdi Shimla Mirchi Fraid", category: "vegetables", description: "Stuffed capsicum", image: curryDishes },
    { name: "Malai Pyaj Sabji", category: "vegetables", description: "Creamy onion curry", image: curryDishes },
    { name: "Lashan Chatni", category: "vegetables", description: "Garlic chutney", image: curryDishes },
    { name: "Methi Bhogi", category: "vegetables", description: "Fenugreek preparation", image: curryDishes },
    { name: "Kaju Kari Sabji", category: "vegetables", description: "Cashew curry", image: curryDishes },
    { name: "Panchkuta Sabji", category: "vegetables", description: "Five vegetable mix", image: curryDishes },
    { name: "Gajar Muli Achar", category: "vegetables", description: "Carrot radish pickle", image: curryDishes },
    { name: "Mirchi Kuta", category: "vegetables", description: "Chili preparation", image: curryDishes },
    { name: "Keri Gunth", category: "vegetables", description: "Mango preparation", image: curryDishes },
    { name: "Dal Fraid", category: "vegetables", description: "Fried lentils", image: curryDishes },
    { name: "Dal Makhani", category: "vegetables", description: "Creamy black lentils", image: curryDishes },
    { name: "Safed Dal", category: "vegetables", description: "White lentil curry", image: curryDishes },
    { name: "Navratna Korma Sabji", category: "vegetables", description: "Nine-gem vegetable korma", image: curryDishes },
    { name: "Mirchi Chatni", category: "vegetables", description: "Chili chutney", image: curryDishes },
    { name: "Paneer Shimla Sabji", category: "vegetables", description: "Paneer capsicum curry", image: curryDishes },
    { name: "Malai Kofta", category: "vegetables", description: "Creamy cottage cheese balls", image: curryDishes },
    { name: "Palak Mashalas", category: "vegetables", description: "Spinach masala curry", image: curryDishes },
    { name: "Aalu Gobhi", category: "vegetables", description: "Potato cauliflower", image: curryDishes },
    { name: "Dum Aalu", category: "vegetables", description: "Slow-cooked potatoes", image: curryDishes },

    // Shahi Sabji (Royal Vegetables)
    { name: "Tawa Sabji", category: "specialties", description: "Griddle-cooked vegetables", image: curryDishes },
    { name: "Shahi Raiyta", category: "specialties", description: "Royal yogurt preparation", image: curryDishes },
    { name: "Sey Tamatar", category: "specialties", description: "Stuffed tomatoes", image: curryDishes },
    { name: "Jhipdi Masala", category: "specialties", description: "Spiced preparation", image: curryDishes },
    { name: "Besan Mirch", category: "specialties", description: "Gram flour chili", image: curryDishes },
    { name: "Safed Kadi", category: "specialties", description: "White curry", image: curryDishes },
    { name: "Palak Kadi", category: "specialties", description: "Spinach curry", image: curryDishes },
    { name: "Masala Kadi", category: "specialties", description: "Spiced curry", image: curryDishes },
    { name: "Vegetarian Raiyta", category: "specialties", description: "Mixed vegetable raita", image: curryDishes },

    // Namkeen/Snacks
    { name: "Namkeen", category: "snacks", description: "Mixed savory snacks", image: curryDishes },
    { name: "Methi Bhogat", category: "snacks", description: "Fenugreek snack", image: curryDishes },
    { name: "Methi Masur", category: "snacks", description: "Fenugreek lentil snack", image: curryDishes },
    { name: "Dal Moth", category: "snacks", description: "Lentil-based snack", image: curryDishes },
    { name: "Mixed Namkeen", category: "snacks", description: "Assorted savory mix", image: curryDishes },
    { name: "Ratavari Sey", category: "snacks", description: "Traditional snack", image: curryDishes },
    { name: "Ikakadi Papdi", category: "snacks", description: "Crispy wafers", image: curryDishes },
    { name: "Khajori Papdi", category: "snacks", description: "Date-flavored wafers", image: curryDishes },
    { name: "Ladhar Gathia", category: "snacks", description: "Spiced gathia", image: curryDishes },
    { name: "Saladed Phuli", category: "snacks", description: "Salted puffed snack", image: curryDishes },
    { name: "Bhavgari Gathia", category: "snacks", description: "Bhavnagar-style gathia", image: curryDishes },
    { name: "Aalu Papdi", category: "snacks", description: "Potato wafers", image: curryDishes },
    { name: "Barik Sey", category: "snacks", description: "Fine noodle snack", image: curryDishes }
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
          <p className="font-hindi text-3xl mb-4">हमारा संपूर्ण मेनू</p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our extensive collection of authentic dishes, carefully prepared using traditional recipes and premium ingredients.
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
                  <h3 className="text-lg font-semibold text-gradient-gold mb-2">{item.name}</h3>
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