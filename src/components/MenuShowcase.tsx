import { useState } from "react";
import { Button } from "@/components/ui/button";
import { openWhatsAppChat } from "@/lib/utils";
import sweetsCollection from "@/assets/sweets-collection.jpg";
import curryDishes from "@/assets/curry-dishes.jpg";

export const MenuShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("sweets");

  const categories = [
    { id: "sweets", name: "Sweets", hindiName: "मिठाई", emoji: "🍯" },
    { id: "sabjis", name: "Sabjis", hindiName: "सब्जियाँ", emoji: "🥘" },
    { id: "namkeen", name: "Namkeen", hindiName: "नमकीन", emoji: "🥜" },
    { id: "specialties", name: "Specialties", hindiName: "विशेषताएं", emoji: "⭐" },
  ];

  const menuItems = {
    sweets: [
      { name: "Gulab Jamun", description: "Soft milk dumplings in cardamom syrup", image: sweetsCollection },
      { name: "Rasgulla", description: "Spongy cheese balls in sugar syrup", image: sweetsCollection },
      { name: "Kaju Katli", description: "Diamond-shaped cashew delights", image: sweetsCollection },
      { name: "Jalebi", description: "Crispy spiral sweets in saffron syrup", image: sweetsCollection },
    ],
    sabjis: [
      { name: "Paneer Butter Masala", description: "Creamy tomato-based cottage cheese curry", image: curryDishes },
      { name: "Dal Makhani", description: "Rich black lentils in creamy gravy", image: curryDishes },
      { name: "Aloo Gobi", description: "Spiced potatoes and cauliflower", image: curryDishes },
      { name: "Palak Paneer", description: "Cottage cheese in spinach gravy", image: curryDishes },
    ],
    namkeen: [
      { name: "Samosa", description: "Crispy triangular pastries with spiced filling", image: curryDishes },
      { name: "Dhokla", description: "Steamed savory cake from Gujarat", image: curryDishes },
      { name: "Kachori", description: "Flaky pastries with lentil filling", image: curryDishes },
      { name: "Pakora", description: "Deep-fried vegetable fritters", image: curryDishes },
    ],
    specialties: [
      { name: "Royal Thali", description: "Complete meal with variety of dishes", image: sweetsCollection },
      { name: "Wedding Special", description: "Grand feast for special occasions", image: curryDishes },
      { name: "Festival Combo", description: "Traditional festival delicacies", image: sweetsCollection },
      { name: "Premium Platter", description: "Curated selection of finest dishes", image: curryDishes },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient-gold">Signature Menu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic dishes, crafted with traditional recipes and premium ingredients.
          </p>
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

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-tilt group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gradient-gold mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="btn-hero-primary golden-glow"
            onClick={() => openWhatsAppChat(
              "Complete Menu", 
              "Hello! I am interested in seeing your complete menu with detailed pricing information. Could you please share the full menu with me?"
            )}
          >
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
};