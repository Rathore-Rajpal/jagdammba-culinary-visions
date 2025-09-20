import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { ReviewCTA } from "@/components/ReviewCTA";
import { openWhatsAppChat, cn } from "@/lib/utils";
import { supabase } from "@/lib/supabaseClient";
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

// Function to get menu item image path
const getMenuItemImagePath = (itemName: string, hindiName?: string) => {
  // Use the public folder path for images
  const IMAGES_PATH = "/jadamba-images/"; 

  try {
    // If we have a hindi name, use that for the image path
    if (hindiName) {
      return `${IMAGES_PATH}${hindiName}.png`;
    }
    
    // Hindi name mapping for common items without explicit hindi names
    const hindiNameMap: Record<string, string> = {
      // Sweets
      "Lapsi": "लाप्सी",
      "Dal Badam Halwa": "दाल बादाम हलवा",
      "Kaju Akhrot Halwa": "काजू अखरोट हलवा",
      "Anjir Katli": "अंजीर कटली",
      "Kaju Roll": "काजू रोल",
      "Pista Roll": "पिस्ता रोल",
      "Butter Scotch Halwa": "बटर स्कॉच हलवा",
      "Panchmewa Chakki": "पंचमेवा चक्की",
      "Rabdi Malpua": "रबड़ी मालपुआ",
      "Mawa Barfi": "मावा बर्फी",
      "Milk Cake": "मिल्क केक",
      "Atta Malpua": "आटा मालपुआ",
      "Gulab Jamun": "गुलाब जामुन",
      "Cutting Gulab Jamun": "कटिंग गुलाब जामुन",
      "Kaju Pista Roll": "काजू पिस्ता रोल",
      "Gajar Halwa": "गाजर हलवा",
      "Bundi": "बूंदी",
      "Besan Chakki": "बेसन चक्की",
      "Dal Badam Chakki": "दाल बादाम चक्की",
      "Motipak Chakki": "मोतीपाक चक्की",
      "Balushahi": "बालूशाही",
      "Guniya": "गुनिया",
      "Rabdi Ghewar": "रबड़ी घेवर",
      "Sada Ghewar": "सादा घेवर",
      "Churma Laddu": "चूरमा लड्डू",
      "Bundi Laddu": "बूंदी लड्डू",
      "Fruit Cream": "फ्रूट क्रीम",
      "Sponge Rasgulla": "स्पन्ज रसगुला",
      "Kesar Rajbhog": "केशर राजभोग",
      "Malai Rajbhog": "मलाई राजभोग",
      "Chamcham": "चमचम",
      "Kesar Chamcham": "केसर चमचम",
      "Ras Malai": "रस मलाई",
      "Ras Madhuri": "रस माधुरी",
      "Chhena Roll": "छैना रोल",
      "Chhena Toast": "छैना टोस्ट",
      "Khushbani": "खुर्बानी",
      "Kheer Chamcham": "खीर चमचम",
      "Kesar Bati": "केसर बाटी",
      "Khajur Pak": "खजूर पाक",
      "Kaju Kesarpak": "काजू केसरपाक",
      "Gulkand Barfi": "गुलकन्द बर्फी",
      "Sangam Dryfruit": "संगम ड्राईफ्रूट",
      "Anjir Patasha": "अंजीर पताशा",
      "Imarti": "इमरती",
      "Jalebi": "जलेबी",
      "Motichur Laddu": "मोतीचूर लड्डू",
      "Gur Pak": "गुल पाक",
      "Tiranga Halwa": "तिरंगा हलवा",
      
      // Vegetables
      "Shahi Paneer": "शाही पनीर",
      "Matar Paneer": "मटर पनीर",
      "Palak Paneer": "पालक पनीर",
      "Haldi Matar": "हल्दी मटर",
      "Gulabjamun Sabji": "गुलाबजामुन सब्जी",
      "Govind Gatta": "गोविन्द गट्टा",
      "Chakki Sabji": "चक्की सब्जी",
      "Mix Veg": "मिक्स वेज",
      "Gobhi Tamatar Matar": "गोभी टमाटर मटर",
      "Bhindi Shimla Mirchi Fry": "भिंडी शिमला मिर्ची फ्राई",
      "Malai Pyaj Sabji": "मलाई प्याज सब्जी",
      "Lahsun Chutney": "लहसुन चटनी",
      "Mewa Moyer": "मेवा मोयर",
      "Kaju Kari Sabji": "काजू करी सब्जी",
      "Pankaj Kutta Sabji": "पंकज कुट्टा सब्जी",
      "Gajar Muli Achar": "गाजर मूली अचार",
      "Mirchi Kuta": "मिर्ची कुटा",
      "Keri Gunda": "केरी गुन्दा",
      "Dal Fry": "दाल फ्राई",
      "Dal Makhani": "दाल मक्खनी",
      "Sambhar Dal": "सांभर दाल",
      "Bhindi Masala": "भिंडी मसाला",
      "Sarso ka Saag": "सरसो का साग",
      "Shahi Raita": "शाही रायता",
      "Vegetable Raita": "वेजीटेबल रायता",
      
      // Breakfast
      "Jalebi Imarti": "जलेबी इमरती",
      "Idli": "इडली",
      "Sambhar": "सांभर",
      "Poha": "पोहा",
      "Upma": "उपमा",
      "Moyan Kachori": "मोयन कचोरी",
      "Pyaz Kachori": "प्याज़ कचोरी",
      "Kachori": "कचोरी",
      "Bread Pakoda": "ब्रेड पकौड़ा",
      "Paneer Pakoda": "पनीर पकौड़ा",
      "Mix Pakoda": "मिक्स पकौड़ा",
      "Kesar Puri": "केशर पूर",
      "Bada": "बड़ा",
      "Nariyal Chutney": "नारियल चटनी",
      "Hari Chutney": "हरी चटनी",
      "Chaman": "छमन",
      "Mirchi Vada": "मिर्ची वड़ा",
      "Chai/Coffee": "कॉफी",
      
      // Snacks
      // "Mewa Moyer" entry already exists above
      "Mewa Madhur": "मेवा मधुर",
      "Dal Moth": "दाल मोठ",
      "Mix Namkeen": "मिक्स नमकीन",
      "Ratalami Sev": "रतालामी सेव",
      "Navratna Mixer": "नवरत्न मिक्सर",
      "Bhavnagari Gathia": "भाव नगरी गाठिया",
      "Aalu Papdi": "आलू पापड़ी",
      "Barik Sev": "बारीक सेव",
      "Lahrun Gathia": "लहरुन गाठिया",
      "Jhakas Papad": "झकास पापड़",
      "Kotari Papad": "कोतरी पापड़",
      "Khichia": "खिचिया",
      "Salewada Phali": "सलेवड़ा फली",
      
      // Rice
      "Jeera Rice": "जीरा राईस",
      "Sada Chawal": "सादा चावल",
      "Ram Khichdi": "राम खिचड़ी",
      "Khichdi": "खिचड़ी",
      "Kabuli": "कबुली",
      "Matar Pulao": "मटर पुलाव",
      
      // Roti
      "Plain Roti": "प्लेन रोटी",
      "Tawa Roti": "तवा रोटी",
      "Puri": "पूरी",
      "Methi Puri": "मेथी पूरी",
      "Rumali Roti": "रुमाली रोटी",
      "Butter Naan": "बटर नान",
      
      // Salad
      "Moth Fry": "मोठ फ्राई",
      "Chana Fry": "चना फ्राई",
      "Ankurit Salad": "अंकुरित सलाद",
      "Kheera": "खीरा",
      "Tamatar": "टमाटर",
      "Pyaz": "प्याज",
      "Mooli": "मूली",
      "Gajar": "गाजर",
      
      // Stall Items
      "Aloo Tikki": "आलू टिक्की",
      "Coffee": "कॉफी",
      "Ice Cream": "आईस्क्रीम",
      "Paneer Chilli": "पनीर चिल्ली",
      "American Makka": "अमेरिकन मक्का",
      "Chuski Machine": "चुस्की मशीन",
      "Popcorn Machine": "पोपकार्ण मशीन",
      "Gudiya Bal": "गुड़िया बाल",
      "Tandoori Roti": "तंदूरी रोटी",
      "Khai Sans": "खाई साँस",
      "Chowmein": "चाऊमीन",
      "Pani Patasa": "पानी पतासा",
      "Fruit Chaat": "फ्रूट चाट",
      "Manchurian": "मंचूरियन",
      "Pav Bhaji": "पाव भाजी",
      "Tawa Sabji (Stall)": "तवा सब्जी",
      "Paneer Tikka": "पनीर टिक्का",
      "Kesar Doodh": "केशर दूध",
      "Soup": "सूप",
      "Juicer": "ज्यूसर",
      "Idli Sambhar": "इडली सांभर",
      "Stall Rumali Roti": "रुमाली रोटी",
      "Stall Butter Naan": "बटर नान",
      "Kadhai Doodh": "कढ़ाई दूध",
      "Chole Bhature": "छोले भटूरे",
      "Delhi Chaat": "दिल्ली चाट",
      "Spring Roll": "स्प्रिंग रोल",
      "Palak Bada": "पालक बड़ा",
      "Stall Dal Fry": "दाल फ्राई",
      "Pineapple Shake": "पाइनपल शेक",
    };
    
    // Try to find a hindi name mapping
    if (hindiNameMap[itemName]) {
      return `${IMAGES_PATH}${hindiNameMap[itemName]}.png`;
    }
    
    // Fallback to category images if specific image isn't found
    return null;
  } catch (error) {
    console.error(`Error loading image for ${itemName}:`, error);
    return null;
  }
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
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

  // Fetch menu items from Supabase
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('menu_items')
          .select('*');
        
        if (error) {
          console.error('Error fetching menu items:', error);
          setError(error.message);
          setIsLoading(false);
          return;
        }
        
        // Map the data to include the appropriate image based on category
        const mappedData = data.map(item => ({
          ...item,
          name: item.english_name,
          hindiName: item.hindi_name,
          description: item.description || '',
          image: getCategoryImage(item.category)
        }));
        
        setMenuItems(mappedData);
        setIsLoading(false);
      } catch (err) {
        console.error('Error in fetchMenuItems:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const categories = [
    { id: "all", name: "All Items", hindiName: "सभी आइटम", emoji: "🍽️" },
    { id: "sweets", name: "Sweets", hindiName: "मिठाई", emoji: "🍯" },
    { id: "vegetables", name: "Royal Vegetables", hindiName: "शाही सब्जियां", emoji: "🥘" },
    { id: "breakfast", name: "Breakfast", hindiName: "नाश्ता", emoji: "🍳" },
    { id: "snacks", name: "Salty Snacks", hindiName: "नमकीन", emoji: "🥜" },
    { id: "stall", name: "Stall Items", hindiName: "स्टॉल", emoji: "🍱" },
    { id: "salad", name: "Salad", hindiName: "सलाद", emoji: "🥗" },
    { id: "roti", name: "Roti", hindiName: "रोटी", emoji: "🫓" },
    { id: "rice", name: "Rice", hindiName: "चावल", emoji: "🍚" },
  ];

  // Note: Removed the static menuItems array as we now fetch it from the database

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = 
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.hindiName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    // Update document title for better SEO
    document.title = "Our Menu | Best Catering Menu in Jodhpur | Jagdamba Caterers";
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Menu | Best Catering Menu in Jodhpur | Jagdamba Caterers</title>
        <meta name="description" content="Explore Jagdamba Caterers' extensive menu offering authentic Rajasthani cuisine. The best wedding catering menu in Jodhpur with traditional sweets, royal vegetables and more." />
        <meta name="keywords" content="catering menu jodhpur, wedding catering menu, best food catering jodhpur, jagdamba menu, rajasthani catering menu" />
        <link rel="canonical" href="https://www.jagdambacaterersjodhpur.in/menu" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Our Menu | Best Catering Menu in Jodhpur | Jagdamba Caterers" />
        <meta property="og:description" content="Explore Jagdamba Caterers' extensive menu offering authentic Rajasthani cuisine. The best wedding catering menu in Jodhpur with traditional sweets, royal vegetables and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jagdambacaterersjodhpur.in/menu" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="text-gradient-gold">Complete Menu</span>
          </h1>
          <p className="font-hindi text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">जगदम्बा का विशेष मेनू</p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the best catering menu in Jodhpur with our authentic collection of traditional Rajasthani dishes, 
            featuring premium sweets, royal vegetables, breakfast items, snacks and more - perfect for weddings and special events.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-3 text-sm md:text-base bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button variant="outline" className="btn-hero-secondary py-2 h-auto md:h-[42px]">
              <Filter className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Filter
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="overflow-x-auto pb-4 mb-8 md:mb-12 scrollbar-hide">
            <div className="flex space-x-2 md:space-x-3 md:flex-wrap md:justify-center min-w-max md:min-w-0 px-1">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`${
                    activeCategory === category.id 
                      ? "btn-hero-primary" 
                      : "btn-hero-secondary"
                  } px-3 md:px-5 py-2 md:py-3 text-sm md:text-base whitespace-nowrap md:mb-3`}
                >
                  <span className="mr-1 md:mr-2 text-base md:text-lg">{category.emoji}</span>
                  <div className="flex flex-col">
                    <span>{category.name}</span>
                    <span className="text-[10px] md:text-xs font-hindi">{category.hindiName}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Price Notice */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-block px-4 md:px-6 py-3 border border-primary/20 rounded-lg bg-primary/5 text-center">
              <p className="text-muted-foreground text-sm md:text-lg">
                <span className="font-bold text-primary">Note:</span> Prices are available upon request. Please contact us for detailed pricing.
              </p>
              <p className="font-hindi text-sm md:text-lg mt-1">मूल्य अनुरोध पर उपलब्ध हैं। कृपया विस्तृत जानकारी के लिए हमसे संपर्क करें।</p>
            </div>
          </div>

          {/* Menu Items Grid */}
          {isLoading ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Loading menu items...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-red-500 text-lg">Error loading menu: {error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((item, index) => {
                // Prefer Supabase image_url if present, else fallback
                const specificImagePath = getMenuItemImagePath(item.name, item.hindiName);
                const supabaseImageUrl = item.image_url || item.imageUrl;
                const imageSrc = supabaseImageUrl && supabaseImageUrl.startsWith('http')
                  ? supabaseImageUrl
                  : (specificImagePath || item.image);

                return (
                  <div 
                    key={index}
                    className="glass-card hover-tilt group animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-36 sm:h-40 md:h-48 bg-white flex items-center justify-center p-2">
                        <img 
                          src={imageSrc} 
                          alt={item.name}
                          className={cn(
                            "group-hover:scale-110 transition-transform duration-500",
                            imageSrc === supabaseImageUrl ? "max-w-full max-h-full object-contain" : "w-full h-full object-cover"
                          )}
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to category/local image if Supabase image fails to load
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = specificImagePath || item.image;
                            target.className = "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500";
                          }}
                        />
                      </div>
                      {!(imageSrc === supabaseImageUrl) && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      )}
                    </div>
                  
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gradient-gold mb-1 md:mb-2">
                      {item.name}
                      <span className="text-[10px] md:text-xs text-muted-foreground block mt-0.5 md:mt-1 font-hindi">
                        {item.hindiName || (
                          item.category === "sweets" ? "मिठाई" : 
                          item.category === "vegetables" ? "शाही सब्जियां" :
                          item.category === "breakfast" ? "नाश्ता" :
                          item.category === "snacks" ? "नमकीन" :
                          item.category === "stall" ? "स्टॉल" :
                          item.category === "salad" ? "सलाद" :
                          item.category === "roti" ? "रोटी" :
                          item.category === "rice" ? "चावल" : ""
                        )}
                      </span>
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs uppercase text-primary font-medium">
                        {categories.find(c => c.id === item.category)?.name}
                      </span>
                      <Button 
                        size="sm" 
                        className="btn-hero-primary text-xs md:text-sm py-1 h-7 md:h-8"
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
              );
            })}
            </div>
          )}

          {!isLoading && !error && filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No items found matching your search.</p>
            </div>
          )}

          {/* Contact for Custom Orders */}
          <div className="text-center mt-10 md:mt-16">
            <div className="glass-card p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gradient-gold mb-2">Custom Orders Welcome</h3>
              <p className="font-hindi text-lg md:text-xl mb-2">कस्टम ऑर्डर का स्वागत है</p>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                Don't see what you're looking for? We can prepare custom dishes according to your preferences and dietary requirements.
              </p>
              <Button 
                className="btn-hero-primary golden-glow text-sm md:text-base py-2 px-4"
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
        
      {/* Review Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="text-gradient-gold">Loved</span> Our Culinary Creations?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your dining experience with our catering services and help others discover the best catering in Jodhpur.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ReviewCTA variant="full" />
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;