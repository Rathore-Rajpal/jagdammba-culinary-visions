import { Users, Clock, Award, Utensils, Heart, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import chefCooking from "@/assets/chef-cooking.jpg";

const AboutPage = () => {
  const stats = [
    { icon: Utensils, value: "500+", label: "Events Catered", delay: "0s" },
    { icon: Award, value: "100+", label: "Food Varieties", delay: "0.2s" },
    { icon: Clock, value: "25+", label: "Years of Expertise", delay: "0.4s" },
    { icon: Users, value: "1000+", label: "Happy Families", delay: "0.6s" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "Every dish is prepared with love and dedication, using recipes passed down through generations."
    },
    {
      icon: Star,
      title: "Quality Ingredients", 
      description: "We source only the finest, freshest ingredients to ensure authentic taste and nutrition."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "Professional team committed to making your event memorable with flawless execution."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient-gold">About</span> Jagdamba Caterers
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
पिछले 25 वर्षों से, हम ऐसे पाक अनुभव गढ़ रहे हैं जो परिवारों को साथ लाएँ और यादें हमेशा के लिए संजो दें          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
            <div className="animate-fade-in-up order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gradient-gold">Our Story</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Founded with a vision to bring authentic flavors to every celebration, Jagdamba Caterers has been the trusted choice for families across Jodhpur. What began as a small family business has now grown into a renowned catering service—while keeping the same personal touch alive.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                We specialize in weddings, birthday parties, and social events, offering a perfect blend of traditional flavors and modern presentation. From intimate family gatherings to grand wedding celebrations, we make sure every detail reflects excellence.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                हर शादी, जन्मदिन और खास आयोजन को हम अपने स्वाद और सेवा से यादगार बना देते हैं। जगदम्बा कैटरर्स – जहाँ परंपरा और आधुनिकता का संगम मिलता है
              </p>
            </div>

            <div className="relative animate-scale-in mb-8 lg:mb-0 order-1 lg:order-2">
              <img 
                src={chefCooking} 
                alt="Professional Chef at Jagdamba Caterers"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-luxury)] hover-tilt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-4 sm:p-6 text-center hover-tilt group"
                style={{ animationDelay: stat.delay }}
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-xl md:text-2xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our <span className="text-gradient-gold">Values</span></h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape every dish we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="glass-card p-6 md:p-8 text-center hover-tilt group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gradient-gold mb-2 md:mb-4">{value.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Meet Our <span className="text-gradient-gold">Team</span></h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12">
            Led by experienced culinary professionals who bring decades of expertise to every event.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-col items-center">
                <img 
                  src="/logo.png" 
                  alt="Jagdamba Caterers Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6" 
                />
                <h3 className="text-xl md:text-2xl font-bold text-gradient-gold mb-2 md:mb-4">Halwaai Uday Singh Bhati</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">Head Chef & Founder</p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  With over 25 years of culinary expertise, Uday Singh Bhati leads our team with passion and precision. 
                  His deep understanding of traditional recipes combined with modern presentation techniques ensures 
                  every dish meets our high standards of taste and quality.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-col items-center">
                <img 
                  src="/logo.png" 
                  alt="Jagdamba Caterers Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6" 
                />
                <h3 className="text-xl md:text-2xl font-bold text-gradient-gold mb-2 md:mb-4">Mahendra Singh Bhati</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">Business Manager</p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  As our Business Manager, Mahendra Singh Bhati ensures seamless operations and exceptional client service.
                  With his strategic vision and dedication to customer satisfaction, he helps transform your event ideas into 
                  perfect celebrations.
                </p>
                <div className="flex space-x-4 items-center">
                  <a 
                    href="tel:+918769480205" 
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                    aria-label="Call"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1BAX3KYYyv/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 text-primary fill-current">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/jagdamba_caterers_events?igsh=MnhobDNidjBrM3hl&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 text-primary fill-current">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/918769480205" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-500/90 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 text-white fill-current">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;