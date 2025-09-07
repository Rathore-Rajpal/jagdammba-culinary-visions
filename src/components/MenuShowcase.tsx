import { useState } from "react";
import { Button } from "@/components/ui/button";
import { openWhatsAppChat } from "@/lib/utils";
import { Link } from "react-router-dom";
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
    <section id="menu" className="py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Our <span className="text-gradient-gold">Signature Menu</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic dishes, crafted with traditional recipes and premium ingredients.
          </p>
        </div>

        {/* Category Tabs - Horizontal scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 mb-8 md:mb-12 hide-scrollbar">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id 
                  ? "btn-hero-primary" 
                  : "btn-hero-secondary"
              } px-4 md:px-6 py-2 md:py-3 flex-shrink-0`}
            >
              <span className="mr-2 text-lg">{category.emoji}</span>
              <div className="flex flex-col">
                <span>{category.name}</span>
                <span className="text-xs font-hindi">{category.hindiName}</span>
              </div>
            </Button>
          ))}
        </div>

        {/* Menu Grid - 1 col on mobile, 2 on tablets, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={index}
              className="glass-card p-4 md:p-6 hover-tilt group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-gradient-gold mb-2">{item.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to="/menu">
            <Button 
              className="btn-hero-primary golden-glow w-full sm:w-auto"
            >
              View Complete Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
