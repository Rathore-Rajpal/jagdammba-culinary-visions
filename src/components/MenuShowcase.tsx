import { useState } from "react";
import { Button } from "@/components/ui/button";
import { openWhatsAppChat, cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import sweetsCollection from "@/assets/sweets-collection.jpg";
import curryDishes from "@/assets/curry-dishes.jpg";
import riceImage from "@/assets/rice.png";
import rotiImage from "@/assets/roti.png";
import saladImage from "@/assets/Salad.png";
import snacksImage from "@/assets/salty snaks.png";
import stallItemsImage from "@/assets/stall items.png";

// Function to get menu item image path
const getMenuItemImagePath = (itemName: string, hindiName?: string) => {
  // Use the public folder path for images
  const IMAGES_PATH = "/jadamba-images/"; 

  try {
    // If we have a hindi name, use that for the image path
    if (hindiName) {
      return `${IMAGES_PATH}${hindiName}.png`;
    }
    
    // Fallback to category images if specific image isn't found
    return null;
  } catch (error) {
    console.error(`Error loading image for ${itemName}:`, error);
    return null;
  }
};

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
      { name: "Gulab Jamun", hindiName: "गुलाब जामुन", description: "Soft milk dumplings in cardamom syrup", image: sweetsCollection },
      { name: "Sponge Rasgulla", hindiName: "स्पन्ज रसगुला", description: "Spongy cheese balls in sugar syrup", image: sweetsCollection },
      { name: "Anjir Katli", hindiName: "अंजीर कतली", description: "Fig-based sweet delicacy", image: sweetsCollection },
      { name: "Jalebi", hindiName: "जलेबी", description: "Crispy spiral sweets in saffron syrup", image: sweetsCollection },
    ],
    sabjis: [
      { name: "Shahi Paneer", hindiName: "शाही पनीर", description: "Royal cottage cheese curry", image: curryDishes },
      { name: "Dal Makhani", hindiName: "दाल मक्खनी", description: "Rich black lentils in creamy gravy", image: curryDishes },
      { name: "Aloo Gobi", hindiName: "आलू गोभी", description: "Spiced potatoes and cauliflower", image: curryDishes },
      { name: "Palak Paneer", hindiName: "पालक पनीर", description: "Cottage cheese in spinach gravy", image: curryDishes },
    ],
    namkeen: [
      { name: "Mewa Moyer", hindiName: "मेवा मोयर", description: "Dry fruit based snack", image: snacksImage },
      { name: "Mewa Madhur", hindiName: "मेवा मधुर", description: "Sweet and savory dry fruit mix", image: snacksImage },
      { name: "Dal Moth", hindiName: "दाल मोठ", description: "Lentil-based snack", image: snacksImage },
      { name: "Mix Namkeen", hindiName: "मिक्स नमकीन", description: "Assorted savory mix", image: snacksImage },
    ],
    specialties: [
      { name: "Tandoori Roti", hindiName: "तंदूरी रोटी", description: "Clay oven baked flatbread", image: stallItemsImage },
      { name: "Rumali Roti", hindiName: "रुमाली रोटी", description: "Thin handkerchief bread", image: stallItemsImage },
      { name: "Khichdi", hindiName: "खिचड़ी", description: "Rice and lentil porridge", image: riceImage },
      { name: "Matar Pulao", hindiName: "मटर पुलाव", description: "Peas pilaf", image: riceImage },
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
                <div className="w-full h-40 md:h-48 bg-white flex items-center justify-center p-2">
                  {/* Get specific image path for this menu item if available */}
                  {(() => {
                    const specificImagePath = getMenuItemImagePath(item.name, item.hindiName);
                    return (
                      <img 
                        src={specificImagePath || item.image} 
                        alt={item.name}
                        className={cn(
                          "group-hover:scale-110 transition-transform duration-500",
                          specificImagePath ? "max-w-full max-h-full object-contain" : "w-full h-full object-cover"
                        )}
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to category image if specific image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = item.image;
                          target.className = "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500";
                        }}
                      />
                    );
                  })()}
                </div>
                {!getMenuItemImagePath(item.name, item.hindiName) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                )}
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-gradient-gold mb-1">{item.name}</h3>
              <p className="text-xs md:text-sm font-hindi mb-2">{item.hindiName}</p>
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
