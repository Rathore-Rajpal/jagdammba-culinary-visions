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
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center lg:text-left">
              <span className="text-gradient-gold">About</span> Jagdamba Caterers and Events
            </h2>
            <div className="inline-block mb-4 text-sm sm:text-base md:text-lg px-3 py-1 bg-primary/10 rounded-full text-primary border border-primary/30">
              <span className="font-semibold">Serving Delicious Memories Since 1997</span>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Jagdamba Caterers and Events brings you the authentic taste of Jodhpur, professional catering, and flawless event management since 1997. With decades of expertise, we make your celebrations in the Blue City truly unforgettable.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              From intimate family gatherings to grand wedding celebrations, we craft culinary experiences that blend Jodhpur's rich traditional flavors with modern presentation, ensuring every dish tells a story of love, heritage, and taste.
            </p>

            {/* Stats Grid - More responsive with smaller padding on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card p-3 sm:p-4 md:p-6 text-center hover-tilt group"
                  style={{ animationDelay: stat.delay }}
                >
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                  <AnimatedNumber value={stat.value} className="text-xl md:text-2xl font-bold text-gradient-gold mb-1" />
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Display first on mobile */}
          <div className="relative animate-scale-in order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative group max-w-md mx-auto lg:max-w-full">
              <img 
                src={chefCooking} 
                alt="Professional Chef Cooking - Jagdamba Caterers"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-luxury)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              
              {/* Floating badge - Smaller and positioned better for mobile */}
              <div className="absolute top-3 left-3 md:top-6 md:left-6 glass-card p-2 md:p-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-foreground">Premium Quality</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">Certified Excellence</div>
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
