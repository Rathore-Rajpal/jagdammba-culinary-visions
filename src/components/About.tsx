import { Users, Clock, Award, Utensils } from "lucide-react";
import chefCooking from "@/assets/chef-cooking.jpg";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export const About = () => {
  const stats = [
    { icon: Utensils, value: "645", label: "Events Catered", delay: "0s" },
    { icon: Award, value: "123", label: "Food Varieties", delay: "0.2s" },
    { icon: Clock, value: "27", label: "Years of Expertise", delay: "0.4s" },
    { icon: Users, value: "1001", label: "Happy Families", delay: "0.6s" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">About</span> Jagdammba Caterers
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Jagdammba Caterers brings you the authentic taste of Jodhpur, professional catering, and flawless service for every occasion. With decades of expertise, we make your celebrations in the Blue City truly unforgettable.

From intimate family gatherings to grand wedding celebrations, we craft culinary experiences that blend Jodhpur’s rich traditional flavors with modern presentation, ensuring every dish tells a story of love, heritage, and taste.
            </p>
            
            

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 text-center hover-tilt group"
                  style={{ animationDelay: stat.delay }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <AnimatedNumber value={stat.value} className="text-2xl font-bold text-gradient-gold mb-1" />
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative group">
              <img 
                src={chefCooking} 
                alt="Professional Chef Cooking - Jagdammba Caterers"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-luxury)] hover-tilt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 glass-card p-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Premium Quality</div>
                    <div className="text-xs text-muted-foreground">Certified Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};