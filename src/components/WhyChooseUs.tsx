import { Crown, Building, Heart } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Crown,
      title: "Premium Taste",
      description: "Rich authentic flavors crafted with the finest ingredients and traditional recipes passed down through generations.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Building,
      title: "Complete Event Solutions",
      description: "Full-service catering with event setup, decoration, and professional staff to make your celebration seamless.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Heart,
      title: "Trusted Service",
      description: "Professional team with decades of experience, ensuring punctuality, quality, and memorable dining experiences.",
      gradient: "from-green-400 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient-gold">Jagdammba?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence, authenticity, and unforgettable celebrations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center hover-tilt group relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-gradient-gold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">Ready to Create Unforgettable Memories?</h3>
            <p className="text-muted-foreground mb-6">
              Let us handle the culinary experience while you enjoy every moment of your special celebration.
            </p>
            <button className="btn-hero-primary golden-glow">
              Start Planning Your Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};