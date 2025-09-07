import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import sweetsCollection from "@/assets/sweets-collection.jpg";
import curryDishes from "@/assets/curry-dishes.jpg";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Items", emoji: "🍽️" },
    { id: "sweets", name: "Sweets", emoji: "🍯" },
    { id: "vegetables", name: "Vegetables", emoji: "🥘" },
    { id: "snacks", name: "Snacks", emoji: "🥜" },
    { id: "specialties", name: "Specialties", emoji: "⭐" },
  ];

  // Extracted from the uploaded menu image
  const menuItems = [
    // Sweets Category
    { name: "Laddu", category: "sweets", price: "₹120/kg", description: "Traditional sweet balls made with gram flour and ghee", image: sweetsCollection },
    { name: "Dal Badam Halwa", category: "sweets", price: "₹200/kg", description: "Rich almond and lentil halwa", image: sweetsCollection },
    { name: "Kaju Almond Halwa", category: "sweets", price: "₹300/kg", description: "Premium cashew and almond halwa", image: sweetsCollection },
    { name: "Kaju Katli", category: "sweets", price: "₹400/kg", description: "Diamond-shaped cashew delights", image: sweetsCollection },
    { name: "Anjir Katli", category: "sweets", price: "₹350/kg", description: "Fig-based sweet delicacy", image: sweetsCollection },
    { name: "Kaju Roll", category: "sweets", price: "₹380/kg", description: "Rolled cashew sweets", image: sweetsCollection },
    { name: "Pista Roll", category: "sweets", price: "₹420/kg", description: "Pistachio rolled sweets", image: sweetsCollection },
    { name: "Badam Kesar Halwa", category: "sweets", price: "₹250/kg", description: "Almond saffron halwa", image: sweetsCollection },
    { name: "Panchmel Chakki", category: "sweets", price: "₹180/kg", description: "Five-grain mixed sweet", image: sweetsCollection },
    { name: "Rabdi Malpuaa", category: "sweets", price: "₹8/piece", description: "Sweet pancakes with rabdi", image: sweetsCollection },
    { name: "Kesar Katli", category: "sweets", price: "₹220/kg", description: "Saffron flavored katli", image: sweetsCollection },
    { name: "Mawa Barfi", category: "sweets", price: "₹180/kg", description: "Milk solid based barfi", image: sweetsCollection },
    { name: "Milk Cake", category: "sweets", price: "₹150/kg", description: "Soft milk-based cake", image: sweetsCollection },
    { name: "Gulab Jamun", category: "sweets", price: "₹120/kg", description: "Soft milk dumplings in syrup", image: sweetsCollection },
    { name: "Cutting Gulab Jamun", category: "sweets", price: "₹140/kg", description: "Layered gulab jamun variety", image: sweetsCollection },
    { name: "Kaju Pista Roll", category: "sweets", price: "₹450/kg", description: "Cashew pistachio rolls", image: sweetsCollection },
    { name: "Gajar Halwa", category: "sweets", price: "₹160/kg", description: "Carrot-based halwa", image: sweetsCollection },

    // Vegetables/Curries
    { name: "Fruit Cream", category: "vegetables", price: "₹80/plate", description: "Fresh fruit with cream", image: curryDishes },
    { name: "Sponge Rasamalai", category: "vegetables", price: "₹10/piece", description: "Soft cottage cheese in milk", image: sweetsCollection },
    { name: "Kesar Rajbhog", category: "vegetables", price: "₹12/piece", description: "Saffron flavored rajbhog", image: sweetsCollection },
    { name: "Malai Rajbhog", category: "vegetables", price: "₹10/piece", description: "Cream-filled rajbhog", image: sweetsCollection },
    { name: "Chamcham", category: "vegetables", price: "₹8/piece", description: "Bengali sweet delicacy", image: sweetsCollection },
    { name: "Kesar Chamcham", category: "vegetables", price: "₹10/piece", description: "Saffron chamcham", image: sweetsCollection },
    { name: "Rasamalai", category: "vegetables", price: "₹8/piece", description: "Traditional rasamalai", image: sweetsCollection },
    { name: "Ras Machuri", category: "vegetables", price: "₹6/piece", description: "Sweet cheese balls", image: sweetsCollection },
    { name: "Chhena Roll", category: "vegetables", price: "₹10/piece", description: "Cottage cheese rolls", image: sweetsCollection },
    { name: "Chhena Toast", category: "vegetables", price: "₹8/piece", description: "Grilled cottage cheese", image: sweetsCollection },
    { name: "Khurasani", category: "vegetables", price: "₹120/kg", description: "Crispy sweet preparation", image: sweetsCollection },
    { name: "Kheer Chamcham", category: "vegetables", price: "₹10/piece", description: "Kheer-filled chamcham", image: sweetsCollection },
    { name: "Kesar Bati", category: "vegetables", price: "₹8/piece", description: "Saffron bati", image: sweetsCollection },
    { name: "Khajur Pak", category: "vegetables", price: "₹150/kg", description: "Date-based sweet", image: sweetsCollection },
    { name: "Kaju Kesar Pak", category: "vegetables", price: "₹350/kg", description: "Cashew saffron pak", image: sweetsCollection },
    { name: "Gulkand Barfi", category: "vegetables", price: "₹200/kg", description: "Rose petal barfi", image: sweetsCollection },
    { name: "Sangam Dryfruit", category: "vegetables", price: "₹400/kg", description: "Mixed dry fruit sweet", image: sweetsCollection },
    { name: "Anjir Panara", category: "vegetables", price: "₹300/kg", description: "Fig-based panara", image: sweetsCollection },
    { name: "Imrati", category: "vegetables", price: "₹120/kg", description: "Traditional spiral sweet", image: sweetsCollection },
    { name: "Jalebi", category: "vegetables", price: "₹100/kg", description: "Crispy spiral in syrup", image: sweetsCollection },
    { name: "Moti Chur Laddu", category: "vegetables", price: "₹140/kg", description: "Fine gram flour balls", image: sweetsCollection },
    { name: "Gur Pak", category: "vegetables", price: "₹80/kg", description: "Jaggery-based sweet", image: sweetsCollection },
    { name: "Tirang Halwa", category: "vegetables", price: "₹180/kg", description: "Three-colored halwa", image: sweetsCollection },
    { name: "Gulkhiya", category: "vegetables", price: "₹120/kg", description: "Sweet dumplings", image: sweetsCollection },
    { name: "Rabdi Meher", category: "vegetables", price: "₹8/piece", description: "Rabdi-based sweet", image: sweetsCollection },
    { name: "Sahi Meher", category: "vegetables", price: "₹10/piece", description: "Premium meher variety", image: sweetsCollection },
    { name: "Churma Laddu", category: "vegetables", price: "₹100/kg", description: "Wheat flour sweet balls", image: sweetsCollection },
    { name: "Bundi Laddu", category: "vegetables", price: "₹120/kg", description: "Gram flour pearls in laddu", image: sweetsCollection },

    // Wedding Vegetables (Sabji)
    { name: "Shahi Paneer", category: "vegetables", price: "₹150/kg", description: "Royal cottage cheese curry", image: curryDishes },
    { name: "Matar Paneer", category: "vegetables", price: "₹120/kg", description: "Peas and cottage cheese", image: curryDishes },
    { name: "Palak Paneer", category: "vegetables", price: "₹110/kg", description: "Spinach cottage cheese", image: curryDishes },
    { name: "Haldi Matar", category: "vegetables", price: "₹80/kg", description: "Turmeric flavored peas", image: curryDishes },
    { name: "Fulgobi Jartalu Sabji", category: "vegetables", price: "₹90/kg", description: "Cauliflower potato curry", image: curryDishes },
    { name: "Gobind Gatta", category: "vegetables", price: "₹120/kg", description: "Gram flour dumplings", image: curryDishes },
    { name: "Chakki Sabji", category: "vegetables", price: "₹100/kg", description: "Mixed vegetable preparation", image: curryDishes },
    { name: "Mishar Baig", category: "vegetables", price: "₹80/kg", description: "Mixed vegetable medley", image: curryDishes },
    { name: "Goshi Tamatar Matar", category: "vegetables", price: "₹140/kg", description: "Tomato peas curry", image: curryDishes },
    { name: "Jhipdi Shimla Mirchi Fraid", category: "vegetables", price: "₹110/kg", description: "Stuffed capsicum", image: curryDishes },
    { name: "Malai Pyaj Sabji", category: "vegetables", price: "₹100/kg", description: "Creamy onion curry", image: curryDishes },
    { name: "Lashan Chatni", category: "vegetables", price: "₹60/kg", description: "Garlic chutney", image: curryDishes },
    { name: "Methi Bhogi", category: "vegetables", price: "₹90/kg", description: "Fenugreek preparation", image: curryDishes },
    { name: "Kaju Kari Sabji", category: "vegetables", price: "₹180/kg", description: "Cashew curry", image: curryDishes },
    { name: "Panchkuta Sabji", category: "vegetables", price: "₹120/kg", description: "Five vegetable mix", image: curryDishes },
    { name: "Gajar Muli Achar", category: "vegetables", price: "₹80/kg", description: "Carrot radish pickle", image: curryDishes },
    { name: "Mirchi Kuta", category: "vegetables", price: "₹70/kg", description: "Chili preparation", image: curryDishes },
    { name: "Keri Gunth", category: "vegetables", price: "₹90/kg", description: "Mango preparation", image: curryDishes },
    { name: "Dal Fraid", category: "vegetables", price: "₹80/kg", description: "Fried lentils", image: curryDishes },
    { name: "Dal Makhani", category: "vegetables", price: "₹100/kg", description: "Creamy black lentils", image: curryDishes },
    { name: "Safed Dal", category: "vegetables", price: "₹70/kg", description: "White lentil curry", image: curryDishes },
    { name: "Navratna Korma Sabji", category: "vegetables", price: "₹150/kg", description: "Nine-gem vegetable korma", image: curryDishes },
    { name: "Mirchi Chatni", category: "vegetables", price: "₹60/kg", description: "Chili chutney", image: curryDishes },
    { name: "Paneer Shimla Sabji", category: "vegetables", price: "₹140/kg", description: "Paneer capsicum curry", image: curryDishes },
    { name: "Malai Kofta", category: "vegetables", price: "₹130/kg", description: "Creamy cottage cheese balls", image: curryDishes },
    { name: "Palak Mashalas", category: "vegetables", price: "₹100/kg", description: "Spinach masala curry", image: curryDishes },
    { name: "Aalu Gobhi", category: "vegetables", price: "₹80/kg", description: "Potato cauliflower", image: curryDishes },
    { name: "Dum Aalu", category: "vegetables", price: "₹90/kg", description: "Slow-cooked potatoes", image: curryDishes },

    // Shahi Sabji (Royal Vegetables)
    { name: "Tawa Sabji", category: "specialties", price: "₹120/kg", description: "Griddle-cooked vegetables", image: curryDishes },
    { name: "Shahi Raiyta", category: "specialties", price: "₹80/kg", description: "Royal yogurt preparation", image: curryDishes },
    { name: "Sey Tamatar", category: "specialties", price: "₹100/kg", description: "Stuffed tomatoes", image: curryDishes },
    { name: "Jhipdi Masala", category: "specialties", price: "₹110/kg", description: "Spiced preparation", image: curryDishes },
    { name: "Besan Mirch", category: "specialties", price: "₹90/kg", description: "Gram flour chili", image: curryDishes },
    { name: "Safed Kadi", category: "specialties", price: "₹80/kg", description: "White curry", image: curryDishes },
    { name: "Palak Kadi", category: "specialties", price: "₹90/kg", description: "Spinach curry", image: curryDishes },
    { name: "Masala Kadi", category: "specialties", price: "₹100/kg", description: "Spiced curry", image: curryDishes },
    { name: "Vegetarian Raiyta", category: "specialties", price: "₹70/kg", description: "Mixed vegetable raita", image: curryDishes },

    // Namkeen/Snacks
    { name: "Namkeen", category: "snacks", price: "₹120/kg", description: "Mixed savory snacks", image: curryDishes },
    { name: "Methi Bhogat", category: "snacks", price: "₹100/kg", description: "Fenugreek snack", image: curryDishes },
    { name: "Methi Masur", category: "snacks", price: "₹90/kg", description: "Fenugreek lentil snack", image: curryDishes },
    { name: "Dal Moth", category: "snacks", price: "₹110/kg", description: "Lentil-based snack", image: curryDishes },
    { name: "Mixed Namkeen", category: "snacks", price: "₹130/kg", description: "Assorted savory mix", image: curryDishes },
    { name: "Ratavari Sey", category: "snacks", price: "₹80/kg", description: "Traditional snack", image: curryDishes },
    { name: "Ikakadi Papdi", category: "snacks", price: "₹90/kg", description: "Crispy wafers", image: curryDishes },
    { name: "Khajori Papdi", category: "snacks", price: "₹100/kg", description: "Date-flavored wafers", image: curryDishes },
    { name: "Ladhar Gathia", category: "snacks", price: "₹110/kg", description: "Spiced gathia", image: curryDishes },
    { name: "Saladed Phuli", category: "snacks", price: "₹120/kg", description: "Salted puffed snack", image: curryDishes },
    { name: "Bhavgari Gathia", category: "snacks", price: "₹130/kg", description: "Bhavnagar-style gathia", image: curryDishes },
    { name: "Aalu Papdi", category: "snacks", price: "₹90/kg", description: "Potato wafers", image: curryDishes },
    { name: "Barik Sey", category: "snacks", price: "₹100/kg", description: "Fine noodle snack", image: curryDishes }
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
                {category.name}
              </Button>
            ))}
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
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {item.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gradient-gold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase text-primary font-medium">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                    <Button size="sm" className="btn-hero-primary">
                      Add to Order
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
              <h3 className="text-2xl font-bold text-gradient-gold mb-4">Custom Orders Welcome</h3>
              <p className="text-muted-foreground mb-6">
                Don't see what you're looking for? We can prepare custom dishes according to your preferences and dietary requirements.
              </p>
              <Button className="btn-hero-primary golden-glow">
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