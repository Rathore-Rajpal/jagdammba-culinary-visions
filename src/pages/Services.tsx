import { Crown, Users, Calendar, Utensils, Heart, Award, Star, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { openWhatsAppChat } from "@/lib/utils";
import { ReviewCTA } from "@/components/ReviewCTA";

const ServicesPage = () => {
  const services = [
    {
      icon: Crown,
      title: "Wedding Catering",
      hindiTitle: "शादी का खानपान",
      description: "Complete wedding catering solutions with traditional and contemporary menu options. From intimate ceremonies to grand celebrations.",
      hindiDescription: "पारंपरिक और समकालीन मेनू विकल्पों के साथ पूर्ण विवाह खानपान समाधान। छोटे समारोहों से लेकर बड़े उत्सवों तक।",
      features: ["Custom menu planning", "Professional service staff", "Decoration & setup", "Multiple cuisine options"],
      hindiFeatures: ["कस्टम मेनू योजना", "पेशेवर सेवा स्टाफ", "सजावट और सेटअप", "कई व्यंजन विकल्प"],
      price: "Starting from ₹200 per plate",
      hindiPrice: "₹200 प्रति थाली से शुरू",
      image: "🎊"
    },
    {
      icon: Users,
      title: "Corporate Events",
      hindiTitle: "कॉर्पोरेट इवेंट्स",
      description: "Professional catering services for business meetings, conferences, and corporate parties with emphasis on quality and presentation.",
      hindiDescription: "व्यापारिक बैठकों, सम्मेलनों और कॉर्पोरेट पार्टियों के लिए गुणवत्ता और प्रस्तुति पर जोर देने वाली पेशेवर खानपान सेवाएं।",
      features: ["Business lunch menus", "Coffee break services", "Formal dinner setups", "Dietary accommodations"],
      hindiFeatures: ["व्यापारिक लंच मेनू", "कॉफी ब्रेक सेवाएं", "औपचारिक डिनर सेटअप", "आहार समायोजन"],
      price: "Starting from ₹150 per plate",
      hindiPrice: "₹150 प्रति थाली से शुरू",
      image: "🏢"
    },
    {
      icon: Calendar,
      title: "Birthday Parties",
      hindiTitle: "जन्मदिन की पार्टियां",
      description: "Make birthdays memorable with our specially curated party menus, including kids' favorites and adult delicacies.",
      hindiDescription: "बच्चों के पसंदीदा और वयस्क व्यंजनों सहित हमारे विशेष रूप से क्यूरेटेड पार्टी मेनू के साथ जन्मदिन को यादगार बनाएं।",
      features: ["Theme-based menus", "Birthday special items", "Party decorations", "Cake coordination"],
      hindiFeatures: ["थीम आधारित मेनू", "जन्मदिन विशेष आइटम", "पार्टी सजावट", "केक समन्वय"],
      price: "Starting from ₹120 per plate",
      hindiPrice: "₹120 प्रति थाली से शुरू",
      image: "🎂"
    },
    {
      icon: Heart,
      title: "Family Functions",
      hindiTitle: "पारिवारिक समारोह",
      description: "Traditional home-style cooking for family gatherings, festivals, and special occasions with authentic flavors.",
      hindiDescription: "पारिवारिक समारोहों, त्योहारों और विशेष अवसरों के लिए प्रामाणिक स्वाद के साथ पारंपरिक घरेलू शैली का खाना।",
      features: ["Traditional recipes", "Home-style preparation", "Festival specials", "Bulk cooking options"],
      hindiFeatures: ["पारंपरिक व्यंजन", "घरेलू शैली की तैयारी", "त्योहार विशेष", "थोक पाक विकल्प"],
      price: "Starting from ₹100 per plate",
      hindiPrice: "₹100 प्रति थाली से शुरू",
      image: "🏠"
    },
    {
      icon: Utensils,
      title: "Bulk Orders",
      hindiTitle: "थोक आदेश",
      description: "Large quantity food preparation for institutions, hostels, community events, and social gatherings.",
      hindiDescription: "संस्थानों, छात्रावासों, सामुदायिक कार्यक्रमों और सामाजिक समारोहों के लिए बड़ी मात्रा में भोजन की तैयारी।",
      features: ["Volume discounts", "Institution-friendly menus", "Scheduled deliveries", "Hygiene compliance"],
      hindiFeatures: ["मात्रा छूट", "संस्थान-अनुकूल मेनू", "निर्धारित वितरण", "स्वच्छता अनुपालन"],
      price: "Custom pricing available",
      hindiPrice: "कस्टम मूल्य निर्धारण उपलब्ध",
      image: "📦"
    },
    {
      icon: Star,
      title: "Premium Services",
      hindiTitle: "प्रीमियम सेवाएं",
      description: "Luxury catering experience with live counters, specialized chefs, and premium ingredients for exclusive events.",
      hindiDescription: "विशिष्ट आयोजनों के लिए लाइव काउंटरों, विशेषज्ञ शेफों और प्रीमियम सामग्रियों के साथ लक्जरी खानपान अनुभव।",
      features: ["Live cooking stations", "Specialized chefs", "Premium ingredients", "Personalized service"],
      hindiFeatures: ["लाइव कुकिंग स्टेशन", "विशेषज्ञ शेफ", "प्रीमियम सामग्री", "व्यक्तिगत सेवा"],
      price: "Starting from ₹400 per plate",
      hindiPrice: "₹400 प्रति थाली से शुरू",
      image: "✨"
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "Express Service",
      hindiTitle: "एक्सप्रेस सेवा",
      description: "Quick delivery and setup for last-minute events and urgent requirements.",
      hindiDescription: "लास्ट-मिनट इवेंट्स और अर्जेंट आवश्यकताओं के लिए त्वरित डिलिवरी और सेटअप।"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      hindiTitle: "गुणवत्ता आश्वासन",
      description: "Rigorous quality checks and hygiene standards maintained throughout preparation.",
      hindiDescription: "तैयारी के दौरान कड़ी गुणवत्ता जांच और स्वच्छता मानकों का रखरखाव।"
    },
    {
      icon: Users,
      title: "Professional Staff",
      hindiTitle: "पेशेवर स्टाफ",
      description: "Trained service staff for seamless event execution and guest satisfaction.",
      hindiDescription: "निर्बाध कार्यक्रम निष्पादन और अतिथि संतुष्टि के लिए प्रशिक्षित सेवा स्टाफ।"
    },
    {
      icon: Heart,
      title: "Custom Menus",
      hindiTitle: "कस्टम मेनू",
      description: "Personalized menu creation based on dietary preferences and cultural requirements.",
      hindiDescription: "आहार प्राथमिकताओं और सांस्कृतिक आवश्यकताओं के आधार पर व्यक्तिगत मेनू निर्माण।"
    }
  ];

  useEffect(() => {
    // Update document title for better SEO
    document.title = "Catering Services in Jodhpur | Wedding & Event Catering | Jagdamba";
  }, []);

  return (
    <>
      <Helmet>
        <title>Catering Services in Jodhpur | Wedding & Event Catering | Jagdamba</title>
        <meta name="description" content="Discover Jagdamba's professional catering services in Jodhpur for weddings, corporate events, birthdays and more. The best wedding catering in Jodhpur since 1997." />
        <meta name="keywords" content="catering services jodhpur, wedding catering jodhpur, best catering services, event catering, birthday party catering, corporate catering jodhpur" />
        <link rel="canonical" href="https://www.jagdambacaterersjodhpur.in/services" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Catering Services in Jodhpur | Wedding & Event Catering | Jagdamba" />
        <meta property="og:description" content="Discover Jagdamba's professional catering services in Jodhpur for weddings, corporate events, birthdays and more. The best wedding catering in Jodhpur since 1997." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jagdambacaterersjodhpur.in/services" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-hero">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="font-hindi text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">हमारी सेवाएं</p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Jodhpur's premier catering services for every occasion, combining traditional Rajasthani flavors with professional excellence. The best wedding catering in Jodhpur since 1997.
            </p>
            <p className="font-hindi text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-muted-foreground max-w-3xl mx-auto">
              हर अवसर के लिए व्यापक खानपान समाधान, पारंपरिक स्वादों को पेशेवर सेवा उत्कृष्टता के साथ जोड़ते हुए।
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">Complete <span className="text-gradient-gold">Catering Solutions</span></h2>
              <p className="font-hindi text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">संपूर्ण खानपान समाधान</p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                From intimate family gatherings to grand celebrations, we provide full-service catering tailored to your needs.
              </p>
              <p className="font-hindi text-sm sm:text-base md:text-lg mt-2 sm:mt-3 text-muted-foreground max-w-2xl mx-auto">
                छोटे पारिवारिक समारोहों से लेकर बड़े उत्सवों तक, हम आपकी आवश्यकताओं के अनुसार पूर्ण-सेवा खानपान प्रदान करते हैं।
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="glass-card p-5 md:p-8 hover-tilt group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-4 md:mb-6">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.image}</div>
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gradient-gold mb-1">{service.title}</h3>
                    <p className="font-hindi text-base md:text-lg mb-1 md:mb-2">{service.hindiTitle}</p>
                    <p className="text-primary font-semibold text-sm md:text-base">{service.price}</p>
                    <p className="font-hindi text-xs md:text-sm text-primary">{service.hindiPrice}</p>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3 leading-relaxed">{service.description}</p>
                  <p className="font-hindi text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed">{service.hindiDescription}</p>

                  <div className="space-y-2 mb-4 md:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 md:mr-3 flex-shrink-0 mt-1"></div>
                        <span className="text-muted-foreground">{feature}</span>
                        <span className="text-muted-foreground font-hindi text-[10px] md:text-xs ml-1">({service.hindiFeatures[featureIndex]})</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => openWhatsAppChat(
                      service.title,
                      `Hello! I would like to inquire about your ${service.title} services. Could you please provide more information about pricing and availability for my upcoming event?`
                    )}
                    className="btn-hero-primary w-full golden-glow text-sm md:text-base py-2 md:py-3"
                  >
                    Inquire Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Additional <span className="text-gradient-gold">Services</span></h2>
              <p className="font-hindi text-lg sm:text-xl md:text-2xl mb-3 md:mb-4">अतिरिक्त सेवाएं</p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                We go beyond just food to ensure your event is a complete success.
              </p>
              <p className="font-hindi text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-2">
                हम आपके कार्यक्रम को पूरी तरह सफल बनाने के लिए केवल भोजन से आगे जाते हैं।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 md:p-6 hover-tilt animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-3 md:mb-4">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gradient-gold mb-1">{service.title}</h3>
                  <p className="font-hindi text-base md:text-md mb-2">{service.hindiTitle}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{service.description}</p>
                  <p className="font-hindi text-[10px] md:text-xs text-muted-foreground mt-2">{service.hindiDescription}</p>
                  <button 
                    onClick={() => openWhatsAppChat(
                      service.title,
                      `Hello! I would like to know more details about your "${service.title}" service. Could you please provide additional information?`
                    )}
                    className="btn-hero-secondary w-full text-xs md:text-sm mt-4 py-1.5 md:py-2"
                  >
                    Get Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-hero">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">Ready to Plan Your <span className="text-gradient-gold">Perfect Event?</span></h2>
            <p className="font-hindi text-lg sm:text-xl md:text-2xl mb-3 md:mb-4">अपने परफेक्ट इवेंट की योजना बनाने के लिए तैयार हैं?</p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 md:mb-4 max-w-2xl mx-auto">
              Contact us today for a personalized consultation and let us create an unforgettable culinary experience for your special occasion.
            </p>
            <p className="font-hindi text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              व्यक्तिगत परामर्श के लिए आज ही हमसे संपर्क करें और हमें अपने विशेष अवसर के लिए एक अविस्मरणीय पाक अनुभव बनाने दें।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="btn-hero-primary golden-glow inline-flex items-center justify-center text-sm md:text-base py-3 px-4 md:px-8">
                Get Free Quote <span className="font-hindi text-xs md:text-sm ml-1">(निःशुल्क कोटेशन प्राप्त करें)</span>
              </Link>
              <Link to="/menu" className="btn-hero-secondary inline-flex items-center justify-center text-sm md:text-base py-3 px-4 md:px-8">
                View Sample Menus <span className="font-hindi text-xs md:text-sm ml-1">(नमूना मेनू देखें)</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Our <span className="text-gradient-gold">Satisfied</span> Clients</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of happy customers who have experienced premium catering services for their events across Jodhpur.
              </p>
              <p className="font-hindi text-sm md:text-base lg:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                जोधपुर भर में अपने कार्यक्रमों के लिए प्रीमियम केटरिंग सेवाओं का अनुभव करने वाले सैकड़ों खुश ग्राहकों से जुड़ें।
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

export default ServicesPage;