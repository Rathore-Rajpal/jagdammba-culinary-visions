import { Crown, Users, Calendar, Utensils, Heart, Award, Star, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: Crown,
      title: "Wedding Catering",
      description: "Complete wedding catering solutions with traditional and contemporary menu options. From intimate ceremonies to grand celebrations.",
      features: ["Custom menu planning", "Professional service staff", "Decoration & setup", "Multiple cuisine options"],
      price: "Starting from ₹200 per plate",
      image: "🎊"
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional catering services for business meetings, conferences, and corporate parties with emphasis on quality and presentation.",
      features: ["Business lunch menus", "Coffee break services", "Formal dinner setups", "Dietary accommodations"],
      price: "Starting from ₹150 per plate",
      image: "🏢"
    },
    {
      icon: Calendar,
      title: "Birthday Parties",
      description: "Make birthdays memorable with our specially curated party menus, including kids' favorites and adult delicacies.",
      features: ["Theme-based menus", "Birthday special items", "Party decorations", "Cake coordination"],
      price: "Starting from ₹120 per plate",
      image: "🎂"
    },
    {
      icon: Heart,
      title: "Family Functions",
      description: "Traditional home-style cooking for family gatherings, festivals, and special occasions with authentic flavors.",
      features: ["Traditional recipes", "Home-style preparation", "Festival specials", "Bulk cooking options"],
      price: "Starting from ₹100 per plate",
      image: "🏠"
    },
    {
      icon: Utensils,
      title: "Bulk Orders",
      description: "Large quantity food preparation for institutions, hostels, community events, and social gatherings.",
      features: ["Volume discounts", "Institution-friendly menus", "Scheduled deliveries", "Hygiene compliance"],
      price: "Custom pricing available",
      image: "📦"
    },
    {
      icon: Star,
      title: "Premium Services",
      description: "Luxury catering experience with live counters, specialized chefs, and premium ingredients for exclusive events.",
      features: ["Live cooking stations", "Specialized chefs", "Premium ingredients", "Personalized service"],
      price: "Starting from ₹400 per plate",
      image: "✨"
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "Express Service",
      description: "Quick delivery and setup for last-minute events and urgent requirements."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks and hygiene standards maintained throughout preparation."
    },
    {
      icon: Users,
      title: "Professional Staff",
      description: "Trained service staff for seamless event execution and guest satisfaction."
    },
    {
      icon: Heart,
      title: "Custom Menus",
      description: "Personalized menu creation based on dietary preferences and cultural requirements."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-hero">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive catering solutions for every occasion, combining traditional flavors with professional service excellence.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Complete <span className="text-gradient-gold">Catering Solutions</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From intimate family gatherings to grand celebrations, we provide full-service catering tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="glass-card p-8 hover-tilt group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.image}</div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-gold mb-2">{service.title}</h3>
                    <p className="text-primary font-semibold">{service.price}</p>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="btn-hero-primary w-full golden-glow">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Plan Your <span className="text-gradient-gold">Perfect Event?</span></h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized consultation and let us create an unforgettable culinary experience for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero-primary golden-glow">
                Get Free Quote
              </button>
              <button className="btn-hero-secondary">
                View Sample Menus
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;