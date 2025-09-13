import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { openWhatsAppChat, cn } from "@/lib/utils";
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
    { id: "breakfast", name: "Breakfast", hindiName: "नाश्ता", emoji: "🍳" },
    { id: "snacks", name: "Salty Snacks", hindiName: "नमकीन", emoji: "🥜" },
    { id: "stall", name: "Stall Items", hindiName: "स्टॉल", emoji: "🍱" },
    { id: "salad", name: "Salad", hindiName: "सलाद", emoji: "🥗" },
    { id: "roti", name: "Roti", hindiName: "रोटी", emoji: "🫓" },
    { id: "rice", name: "Rice", hindiName: "चावल", emoji: "🍚" },
  ];

  // Complete menu based on provided categories
  const menuItems = [
    // Sweets Category - First Group
    { name: "Lapsi", hindiName: "लाप्सी", category: "sweets", description: "Traditional sweet made from broken wheat", image: sweetsCollection },
    { name: "Dal Badam Halwa", hindiName: "दाल बादाम हलवा", category: "sweets", description: "Rich almond and lentil halwa", image: sweetsCollection },
    { name: "Kaju Akhrot Halwa", hindiName: "काजू अखरोट हलवा", category: "sweets", description: "Premium cashew and walnut halwa", image: sweetsCollection },
    { name: "Anjir Katli", hindiName: "अंजीर कतली", category: "sweets", description: "Fig-based sweet delicacy", image: sweetsCollection },
    { name: "Kaju Roll", hindiName: "काजू रोल", category: "sweets", description: "Rolled cashew sweets", image: sweetsCollection },
    { name: "Pista Roll", hindiName: "पिस्ता रोल", category: "sweets", description: "Pistachio rolled sweets", image: sweetsCollection },
    { name: "Butter Scotch Halwa", hindiName: "बटर स्कॉच हलवा", category: "sweets", description: "Butterscotch flavored halwa", image: sweetsCollection },
    { name: "Panchmewa Chakki", hindiName: "पंचमेवा चक्की", category: "sweets", description: "Five-nut mixed sweet", image: sweetsCollection },
    { name: "Rabdi Malpua", hindiName: "रबड़ी मालपुआ", category: "sweets", description: "Sweet pancakes with rabdi", image: sweetsCollection },
    { name: "Mawa Barfi", hindiName: "मावा बर्फी", category: "sweets", description: "Milk solid based barfi", image: sweetsCollection },
    { name: "Milk Cake", hindiName: "मिल्क केक", category: "sweets", description: "Soft milk-based cake", image: sweetsCollection },
    { name: "Atta Malpua", hindiName: "आटा मालपुआ", category: "sweets", description: "Wheat flour pancakes in syrup", image: sweetsCollection },
    { name: "Gulab Jamun", hindiName: "गुलाब जामुन", category: "sweets", description: "Soft milk dumplings in syrup", image: sweetsCollection },
    { name: "Cutting Gulab Jamun", hindiName: "कटिंग गुलाब जामुन", category: "sweets", description: "Layered gulab jamun variety", image: sweetsCollection },
    { name: "Kaju Pista Roll", hindiName: "काजू पिस्ता रोल", category: "sweets", description: "Cashew pistachio rolls", image: sweetsCollection },
    { name: "Gajar Halwa", hindiName: "गाजर हलवा", category: "sweets", description: "Carrot-based halwa", image: sweetsCollection },
    { name: "Bundi", hindiName: "बुन्दी", category: "sweets", description: "Small sweet pearls made from gram flour", image: sweetsCollection },
    { name: "Besan Chakki", hindiName: "बेसन चक्की", category: "sweets", description: "Gram flour-based sweet", image: sweetsCollection },
    { name: "Dal Badam Chakki", hindiName: "दाल बादाम चक्की", category: "sweets", description: "Lentil and almond sweet", image: sweetsCollection },
    { name: "Motipak Chakki", hindiName: "मोतीपाक चक्की", category: "sweets", description: "Pearl-like sweet preparation", image: sweetsCollection },
    { name: "Balushahi", hindiName: "बालूशाही", category: "sweets", description: "Flaky, glazed donut-like sweet", image: sweetsCollection },
    { name: "Guniya", hindiName: "गुनिया", category: "sweets", description: "Sweet stuffed pastry", image: sweetsCollection },
    { name: "Rabdi Ghewar", hindiName: "रबड़ी घेवर", category: "sweets", description: "Disc-shaped sweet topped with rabdi", image: sweetsCollection },
    { name: "Sada Ghewar", hindiName: "सादा घेवर", category: "sweets", description: "Plain disc-shaped sweet", image: sweetsCollection },
    { name: "Churma Laddu", hindiName: "चूरमा लड्डू", category: "sweets", description: "Special variety of laddu", image: sweetsCollection },
    { name: "Bundi Laddu", hindiName: "बूंदी लड्डू", category: "sweets", description: "Gram flour pearls laddu", image: sweetsCollection },
    
    // Sweets Category - Second Group
    { name: "Fruit Cream", hindiName: "फ्रूट क्रीम", category: "sweets", description: "Fresh fruit with cream", image: sweetsCollection },
    { name: "Sponge Rasgulla", hindiName: "स्पन्ज रसगुला", category: "sweets", description: "Soft spongy cheese balls in syrup", image: sweetsCollection },
    { name: "Kesar Rajbhog", hindiName: "केशर राजभोग", category: "sweets", description: "Saffron flavored rajbhog", image: sweetsCollection },
    { name: "Malai Rajbhog", hindiName: "मलाई राजभोग", category: "sweets", description: "Cream-filled rajbhog", image: sweetsCollection },
    { name: "Chamcham", hindiName: "चमचम", category: "sweets", description: "Bengali sweet delicacy", image: sweetsCollection },
    { name: "Kesar Chamcham", hindiName: "केशर चमचम", category: "sweets", description: "Saffron chamcham", image: sweetsCollection },
    { name: "Ras Malai", hindiName: "रस मलाई", category: "sweets", description: "Soft cheese patties in sweet milk", image: sweetsCollection },
    { name: "Ras Madhuri", hindiName: "रस माधुरी", category: "sweets", description: "Sweet cheese balls in flavored milk", image: sweetsCollection },
    { name: "Chhena Roll", hindiName: "छैना रोल", category: "sweets", description: "Cottage cheese rolls", image: sweetsCollection },
    { name: "Chhena Toast", hindiName: "छैना टोस्ट", category: "sweets", description: "Grilled cottage cheese sweet", image: sweetsCollection },
    { name: "Khurbani", hindiName: "खुर्बानी", category: "sweets", description: "Sweet apricot preparation", image: sweetsCollection },
    { name: "Kheer Chamcham", hindiName: "खीर चमचम", category: "sweets", description: "Kheer-filled chamcham", image: sweetsCollection },
    { name: "Kesar Bati", hindiName: "केशर बाटी", category: "sweets", description: "Saffron bati", image: sweetsCollection },
    { name: "Khajur Pak", hindiName: "खजूर पाक", category: "sweets", description: "Date-based sweet", image: sweetsCollection },
    { name: "Kaju Kesarpak", hindiName: "काजू केसरपाक", category: "sweets", description: "Cashew saffron pak", image: sweetsCollection },
    { name: "Gulkand Barfi", hindiName: "गुलकन्द बर्फी", category: "sweets", description: "Rose petal barfi", image: sweetsCollection },
    { name: "Sangam Dryfruit", hindiName: "संगम ड्राईफ्रूट", category: "sweets", description: "Mixed dry fruit sweet", image: sweetsCollection },
    { name: "Anjir Patasha", hindiName: "अंजीर पताशा", category: "sweets", description: "Fig-based patasha", image: sweetsCollection },
    { name: "Imarti", hindiName: "इमरती", category: "sweets", description: "Traditional spiral sweet", image: sweetsCollection },
    { name: "Jalebi", hindiName: "जलेबी", category: "sweets", description: "Crispy spiral in syrup", image: sweetsCollection },
    { name: "Motichur Laddu", hindiName: "मोतीचूर लड्डू", category: "sweets", description: "Fine gram flour balls laddu", image: sweetsCollection },
    { name: "Gur Pak", hindiName: "गुल पाक", category: "sweets", description: "Jaggery-based sweet", image: sweetsCollection },
    { name: "Tiranga Halwa", hindiName: "तिरंगा हलवा", category: "sweets", description: "Three-colored halwa", image: sweetsCollection },
    { name: "Mirchi Chutney", hindiName: "मिर्ची चटनी", category: "sweets", description: "Sweet chili chutney", image: sweetsCollection },

    // Royal Vegetables Category - First Group
    { name: "Shahi Paneer", hindiName: "शाही पनीर", category: "vegetables", description: "Royal cottage cheese curry", image: curryDishes },
    { name: "Matar Paneer", hindiName: "मटर पनीर", category: "vegetables", description: "Peas and cottage cheese", image: curryDishes },
    { name: "Palak Paneer", hindiName: "पालक पनीर", category: "vegetables", description: "Spinach cottage cheese", image: curryDishes },
    { name: "Haldi Matar", hindiName: "हल्दी मटर", category: "vegetables", description: "Turmeric flavored peas", image: curryDishes },
    { name: "Gulabjamun Sabji", hindiName: "गुलाबजामुन सब्जी", category: "vegetables", description: "Special savory preparation", image: curryDishes },
    { name: "Govind Gatta", hindiName: "गोविन्द गट्टा", category: "vegetables", description: "Gram flour dumplings", image: curryDishes },
    { name: "Chakki Sabji", hindiName: "चक्की सब्जी", category: "vegetables", description: "Mixed vegetable preparation", image: curryDishes },
    { name: "Mix Veg", hindiName: "मिक्स वेज", category: "vegetables", description: "Mixed vegetable medley", image: curryDishes },
    { name: "Gobhi Tamatar Matar", hindiName: "गोभी टमाटर मटर", category: "vegetables", description: "Cauliflower with tomatoes and peas", image: curryDishes },
    { name: "Bhindi Shimla Mirchi Fry", hindiName: "भिंडी शिमला मिर्ची फ्राई", category: "vegetables", description: "Okra and bell pepper fry", image: curryDishes },
    { name: "Malai Pyaj Sabji", hindiName: "मलाई प्याज सब्जी", category: "vegetables", description: "Creamy onion curry", image: curryDishes },
    { name: "Lahsun Chutney", hindiName: "लहसुन चटनी", category: "vegetables", description: "Garlic chutney", image: curryDishes },
    { name: "Mewa Mung Dal Moger", hindiName: "मेवा मूंग दाल मोगर", category: "vegetables", description: "Dry fruit with mung dal preparation", image: curryDishes },
    { name: "Kaju Kari Sabji", hindiName: "काजू करी सब्जी", category: "vegetables", description: "Cashew curry", image: curryDishes },
    { name: "Pankaj Kutta Sabji", hindiName: "पंकज कट्टा सब्जी", category: "vegetables", description: "Special vegetable preparation", image: curryDishes },
    { name: "Gajar Muli Achar", hindiName: "गाजर मूली अचार", category: "vegetables", description: "Carrot radish pickle", image: curryDishes },
    { name: "Mirchi Kuta", hindiName: "मिर्ची कुटा", category: "vegetables", description: "Crushed chili preparation", image: curryDishes },
    { name: "Keri Gunda", hindiName: "केरी गुन्दा", category: "vegetables", description: "Mango gunda preparation", image: curryDishes },
    { name: "Dal Fry", hindiName: "दाल फ्राई", category: "vegetables", description: "Fried lentils", image: curryDishes },
    { name: "Dal Makhani", hindiName: "दाल मक्खनी", category: "vegetables", description: "Creamy black lentils", image: curryDishes },
    { name: "Sambhar Dal", hindiName: "सांभर दाल", category: "vegetables", description: "South Indian lentil preparation", image: curryDishes },
    { name: "Navratna Korma Sabji", hindiName: "नवरत्न कोरमा सब्जी", category: "vegetables", description: "Nine-gem vegetable korma", image: curryDishes },
    { name: "Mirchi Chutney", hindiName: "मिर्ची चटनी", category: "vegetables", description: "Chili chutney", image: curryDishes },
    { name: "Paneer Shimla Sabji", hindiName: "पनीर शिमला सब्जी", category: "vegetables", description: "Paneer bell pepper curry", image: curryDishes },
    { name: "Malai Kofta", hindiName: "मलाई कोफ्ता", category: "vegetables", description: "Creamy cottage cheese balls", image: curryDishes },
    { name: "Palak Maksum", hindiName: "पालक माक्सम", category: "vegetables", description: "Spinach special preparation", image: curryDishes },
    { name: "Aalu Gobhi", hindiName: "आलू गोभी", category: "vegetables", description: "Potato cauliflower", image: curryDishes },
    { name: "Dum Aalu", hindiName: "दम आलू", category: "vegetables", description: "Slow-cooked potatoes", image: curryDishes },

    // Royal Vegetables Category - Second Group
  { name: "Sarso ka Saag", hindiName: "सरसो का साग", category: "vegetables", description: "Mustard greens preparation", image: curryDishes },
  { name: "Tawa Sabji", hindiName: "तवा सब्जी", category: "vegetables", description: "Griddle-cooked vegetables", image: curryDishes },
  { name: "Shahi Raita", hindiName: "शाही रायता", category: "vegetables", description: "Royal yogurt preparation", image: curryDishes },
  { name: "Sev Tamatar", hindiName: "सेव टमाटर", category: "vegetables", description: "Tomato with crispy sev", image: curryDishes },
  { name: "Bhindi Masala", hindiName: "भिंडी मसाला", category: "vegetables", description: "Spiced okra preparation", image: curryDishes },
  { name: "Besan Mirchi", hindiName: "बेसन मिर्ची", category: "vegetables", description: "Gram flour coated chilies", image: curryDishes },
  { name: "Safed Kadhi", hindiName: "सफेद कढ़ी", category: "vegetables", description: "White yogurt curry", image: curryDishes },
  { name: "Palak Kadhi", hindiName: "पालक कढ़ी", category: "vegetables", description: "Spinach yogurt curry", image: curryDishes },
  { name: "Masala Kadhi", hindiName: "मसाला कढ़ी", category: "vegetables", description: "Spiced yogurt curry", image: curryDishes },
  { name: "Vegetable Raita", hindiName: "वेजीटेबल रायता", category: "vegetables", description: "Mixed vegetable yogurt", image: curryDishes },

    // Salty Snacks Category
    { name: "Mewa Hoya Moger", hindiName: "मेवा होया मोगर", category: "snacks", description: "Dry fruit based special snack", image: snacksImage },
    { name: "Mewa Madhur", hindiName: "मेवा मधुर", category: "snacks", description: "Sweet and savory dry fruit mix", image: snacksImage },
    { name: "Dal Moth", hindiName: "दाल मोठ", category: "snacks", description: "Lentil-based snack", image: snacksImage },
    { name: "Mix Namkeen", hindiName: "मिक्स नमकीन", category: "snacks", description: "Assorted savory mix", image: snacksImage },
    { name: "Ratalami Sev", hindiName: "रतालामी सेव", category: "snacks", description: "Ratlam-style sev", image: snacksImage },
    { name: "Navratna Mixer", hindiName: "नवरत्न मिक्सर", category: "snacks", description: "Nine-ingredient snack mix", image: snacksImage },
    { name: "Bhavnagari Gathia", hindiName: "भाव नगरी गाठिया", category: "snacks", description: "Bhavnagar-style gathia", image: snacksImage },
    { name: "Aalu Papdi", hindiName: "आलू पापड़ी", category: "snacks", description: "Potato wafers", image: snacksImage },
    { name: "Barik Sev", hindiName: "बारीक सेव", category: "snacks", description: "Fine gram flour noodles", image: snacksImage },
    { name: "Lahrun Gathia", hindiName: "लहरुन गाठिया", category: "snacks", description: "Garlic flavored gathia", image: snacksImage },
    { name: "Jhakas Papad", hindiName: "झकास पापड़", category: "snacks", description: "Special spiced papadum", image: snacksImage },
    { name: "Kotari Papad", hindiName: "कोतरी पापड़", category: "snacks", description: "Traditional papadum variety", image: snacksImage },
    { name: "Khichia", hindiName: "खिचिया", category: "snacks", description: "Rice flour crackers", image: snacksImage },
    { name: "Salewada Phali", hindiName: "सलेवड़ा फली", category: "snacks", description: "Salted beans snack", image: snacksImage },

    // Breakfast Category
    { name: "Jalebi Imarti", hindiName: "जलेबी इमरती", category: "breakfast", description: "Sweet spiral treats", image: curryDishes },
    { name: "Idli", hindiName: "इडली", category: "breakfast", description: "Steamed rice cakes", image: curryDishes },
    { name: "Sambhar", hindiName: "सांभर", category: "breakfast", description: "Lentil vegetable stew", image: curryDishes },
    { name: "Bada", hindiName: "बड़ा", category: "breakfast", description: "Lentil fritters", image: curryDishes },
    { name: "Nariyal Chutney", hindiName: "नारियल चटनी", category: "breakfast", description: "Coconut chutney", image: curryDishes },
    { name: "Hari Chutney", hindiName: "हरी चटनी", category: "breakfast", description: "Green chutney", image: curryDishes },
    { name: "Chaman", hindiName: "छमन", category: "breakfast", description: "Kashmiri paneer dish", image: curryDishes },
    { name: "Poha", hindiName: "पोहा", category: "breakfast", description: "Flattened rice dish", image: curryDishes },
    { name: "Upma", hindiName: "उपमा", category: "breakfast", description: "Semolina savory porridge", image: curryDishes },
    { name: "Mung Dal Moger Kachori", hindiName: "मूंग दाल मोगर कचोरी", category: "breakfast", description: "Mung dal stuffed fried pastry", image: curryDishes },
    { name: "Pyaz Kachori", hindiName: "प्याज़ कचोरी", category: "breakfast", description: "Onion stuffed kachori", image: curryDishes },
    { name: "Mirchi Vada", hindiName: "मिर्ची वड़ा", category: "breakfast", description: "Stuffed chili fritters", image: curryDishes },
    { name: "Kachori", hindiName: "कचोरी", category: "breakfast", description: "Spiced stuffed pastry", image: curryDishes },
    { name: "Bread Pakoda", hindiName: "ब्रेड पकौड़ा", category: "breakfast", description: "Bread fritters", image: curryDishes },
    { name: "Paneer Pakoda", hindiName: "पनीर पकौड़ा", category: "breakfast", description: "Cottage cheese fritters", image: curryDishes },
    { name: "Mix Pakoda", hindiName: "मिक्स पकौड़ा", category: "breakfast", description: "Assorted vegetable fritters", image: curryDishes },
    { name: "Kesar Puri", hindiName: "केशर पूर", category: "breakfast", description: "Saffron flavored fried bread", image: curryDishes },
    { name: "Coffee", hindiName: "कॉफी", category: "breakfast", description: "Indian tea/Coffee", image: curryDishes },

    // Stall Items Category
    { name: "Tandoori Roti", hindiName: "तंदूरी रोटी", category: "stall", description: "Clay oven baked flatbread", image: stallItemsImage },
    { name: "Roti", hindiName: "रोटी", category: "stall", description: "Traditional flatbread", image: stallItemsImage },
    { name: "Khai Sans", hindiName: "खाई साँस", category: "stall", description: "Special savory snack", image: stallItemsImage },
    { name: "Chowmein", hindiName: "चाऊमीन", category: "stall", description: "Stir-fried noodles", image: stallItemsImage },
    { name: "Pani Patasa", hindiName: "पानी पटासा", category: "stall", description: "Pani puri/Golgappa", image: stallItemsImage },
    { name: "Fruit Chaat", hindiName: "फ्रूट चाट", category: "stall", description: "Spiced fruit salad", image: stallItemsImage },
    { name: "Manchurian", hindiName: "मंचूरियन", category: "stall", description: "Indo-Chinese vegetable balls", image: stallItemsImage },
    { name: "Pav Bhaji", hindiName: "पाव भाजी", category: "stall", description: "Spiced vegetable mash with bread", image: stallItemsImage },
    { name: "Tawa Sabji", hindiName: "तवा सब्जी", category: "stall", description: "Griddle-cooked vegetables", image: stallItemsImage },
    { name: "Paneer Tikka", hindiName: "पनीर टिक्का", category: "stall", description: "Grilled spiced cottage cheese", image: stallItemsImage },
    { name: "Kesar Doodh", hindiName: "केसर दूध", category: "stall", description: "Saffron milk", image: stallItemsImage },
    { name: "Coffee", hindiName: "कॉफी", category: "stall", description: "Brewed coffee", image: stallItemsImage },
    { name: "Ice Cream", hindiName: "आइसक्रीम", category: "stall", description: "Frozen dessert", image: stallItemsImage },
    { name: "Aloo Tikki", hindiName: "आलू टिक्की", category: "stall", description: "Potato patties", image: stallItemsImage },
    { name: "Soup", hindiName: "सूप", category: "stall", description: "Vegetable soup", image: stallItemsImage },
    { name: "Juicer", hindiName: "जूसर", category: "stall", description: "Fresh fruit juices", image: stallItemsImage },
    { name: "Idli Sambhar", hindiName: "इडली सांभर", category: "stall", description: "Steamed rice cakes with lentil stew", image: stallItemsImage },
    { name: "Paneer Chilli", hindiName: "पनीर चिल्ली", category: "stall", description: "Spicy cottage cheese", image: stallItemsImage },
    { name: "Rumali Roti", hindiName: "रुमाली रोटी", category: "stall", description: "Thin handkerchief bread", image: stallItemsImage },
    { name: "Butter Naan", hindiName: "बटर नान", category: "stall", description: "Buttered leavened bread", image: stallItemsImage },
    { name: "Kadhai Doodh", hindiName: "कढ़ाई दूध", category: "stall", description: "Milk cooked in iron wok", image: stallItemsImage },
    { name: "Chole Bhature", hindiName: "छोले भटूरे", category: "stall", description: "Spiced chickpeas with fried bread", image: stallItemsImage },
    { name: "Delhi Chaat", hindiName: "दिल्ली चाट", category: "stall", description: "Savory snack with various textures", image: stallItemsImage },
    { name: "Spring Roll", hindiName: "स्प्रिंग रोल", category: "stall", description: "Crispy vegetable rolls", image: stallItemsImage },
    { name: "Palak Bada", hindiName: "पालक बड़ा", category: "stall", description: "Spinach fritters", image: stallItemsImage },
    { name: "Dal Fry", hindiName: "दाल फ्राई", category: "stall", description: "Fried lentils", image: stallItemsImage },
    { name: "Pineapple Shake", hindiName: "पाइनएप्पल शेक", category: "stall", description: "Pineapple milkshake", image: stallItemsImage },
    { name: "American Makka", hindiName: "अमेरिकन मक्का", category: "stall", description: "American style corn", image: stallItemsImage },
    { name: "Chuski Machine", hindiName: "चूस्की मशीन", category: "stall", description: "Ice gola/shaved ice", image: stallItemsImage },
    { name: "Popcorn Machine", hindiName: "पॉपकॉर्न मशीन", category: "stall", description: "Fresh popcorn", image: stallItemsImage },
    { name: "Gudiya Bal", hindiName: "गुड़िया बाल", category: "stall", description: "Cotton candy", image: stallItemsImage },

    // Salad Category
    { name: "Moth Fry", hindiName: "मोठ फ्राई", category: "salad", description: "Fried moth beans", image: saladImage },
    { name: "Chana Fry", hindiName: "चना फ्राई", category: "salad", description: "Fried chickpeas", image: saladImage },
    { name: "Ankurit Salad", hindiName: "अंकुरित सलाद", category: "salad", description: "Sprouted bean salad", image: saladImage },
    { name: "Kheera", hindiName: "खीरा", category: "salad", description: "Cucumber", image: saladImage },
    { name: "Tamatar", hindiName: "टमाटर", category: "salad", description: "Tomatoes", image: saladImage },
    { name: "Pyaz", hindiName: "प्याज", category: "salad", description: "Onions", image: saladImage },
    { name: "Kakdi", hindiName: "ककड़ी", category: "salad", description: "Cucumber variety", image: saladImage },
    { name: "Mooli", hindiName: "मूली", category: "salad", description: "Radish", image: saladImage },
    { name: "Gajar", hindiName: "गाजर", category: "salad", description: "Carrots", image: saladImage },

    // Roti Category
    { name: "Plain Roti", hindiName: "प्लेन रोटी", category: "roti", description: "Simple flatbread", image: rotiImage },
    { name: "Tawa Roti", hindiName: "तवा रोटी", category: "roti", description: "Griddle-cooked flatbread", image: rotiImage },
    { name: "Puri", hindiName: "पूरी", category: "roti", description: "Deep-fried puffed bread", image: rotiImage },
    { name: "Methi Puri", hindiName: "मेथी पूरी", category: "roti", description: "Fenugreek flavored puri", image: rotiImage },
    { name: "Rumali Roti", hindiName: "रुमाली रोटी", category: "roti", description: "Thin handkerchief bread", image: rotiImage },
    { name: "Butter Naan", hindiName: "बटर नान", category: "roti", description: "Buttered leavened bread", image: rotiImage },

    // Rice Category
    { name: "Khichdi", hindiName: "खिचड़ी", category: "rice", description: "Rice and lentil porridge", image: riceImage },
    { name: "Kabuli", hindiName: "काबुली", category: "rice", description: "Rice with chickpeas", image: riceImage },
    { name: "Matar Pulao", hindiName: "मटर पुलाव", category: "rice", description: "Peas pilaf", image: riceImage },
    { name: "Jeera Rice", hindiName: "जीरा राइस", category: "rice", description: "Cumin flavored rice", image: riceImage },
    { name: "Sada Chawal", hindiName: "सादा चावल", category: "rice", description: "Plain steamed rice", image: riceImage },
    { name: "Ram Khichdi", hindiName: "राम खिचड़ी", category: "rice", description: "Special khichdi variety", image: riceImage }
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
      <section className="py-12 md:py-20 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="text-gradient-gold">Complete Menu</span>
          </h1>
          <p className="font-hindi text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">जगदम्बा का विशेष मेनू</p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our authentic collection of traditional dishes, featuring sweets, royal vegetables, 
            breakfast items, snacks and more - all carefully prepared with premium ingredients.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item, index) => {
              // Get specific image path for this menu item if available
              const specificImagePath = getMenuItemImagePath(item.name, item.hindiName);
              
              return (
                <div 
                  key={index}
                  className="glass-card hover-tilt group animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-36 sm:h-40 md:h-48 bg-white flex items-center justify-center p-2">
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
                    </div>
                    {!specificImagePath && (
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

          {filteredItems.length === 0 && (
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
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;