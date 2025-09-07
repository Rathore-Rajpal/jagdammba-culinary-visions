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
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-gold">About</span> Jagdammba Caterers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting culinary experiences that bring families together and create lasting memories for over 25 years.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-gradient-gold">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to bring authentic flavors to every celebration, Jagdammba Caterers has been the trusted choice for families across the region. What started as a small family business has grown into a renowned catering service, yet we maintain the same personal touch and attention to detail that made us who we are.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey is rooted in tradition, driven by innovation, and guided by our commitment to excellence. Every event we cater is an opportunity to showcase our passion for food and our dedication to creating unforgettable experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intimate family gatherings to grand wedding celebrations, we understand that food is more than sustenance—it's the heart of every celebration, the catalyst for connection, and the foundation of cherished memories.
              </p>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src={chefCooking} 
                alt="Professional Chef at Jagdammba Caterers"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-luxury)] hover-tilt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-tilt group"
                style={{ animationDelay: stat.delay }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our <span className="text-gradient-gold">Values</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape every dish we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="glass-card p-8 text-center hover-tilt group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gradient-gold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our <span className="text-gradient-gold">Team</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Led by experienced culinary professionals who bring decades of expertise to every event.
          </p>
          
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">Halwaai Uday Singh Bhati</h3>
            <p className="text-lg text-muted-foreground mb-6">Head Chef & Founder</p>
            <p className="text-muted-foreground leading-relaxed">
              With over 25 years of culinary expertise, Uday Singh Bhati leads our team with passion and precision. 
              His deep understanding of traditional recipes combined with modern presentation techniques ensures 
              every dish meets our high standards of taste and quality.
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;