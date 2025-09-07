import { Button } from "@/components/ui/button";
import { ChefHat, Phone } from "lucide-react";
import heroThali from "@/assets/hero-thali.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* Floating spice particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="float-animation absolute top-20 left-20 w-4 h-4 bg-accent rounded-full"></div>
        <div className="float-animation absolute top-40 right-32 w-3 h-3 bg-primary rounded-full" style={{ animationDelay: '2s' }}></div>
        <div className="float-animation absolute bottom-32 left-40 w-5 h-5 bg-accent rounded-full" style={{ animationDelay: '4s' }}></div>
        <div className="float-animation absolute top-60 right-20 w-2 h-2 bg-primary rounded-full" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <ChefHat className="w-12 h-12 text-primary mr-4" />
              <span className="text-2xl font-bold text-gradient-gold">Jagdammba Caterers</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient-gold">Delicious Memories,</span>
              <br />
              <span className="text-foreground">Beautifully Catered.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Weddings, Birthdays & Social Events – Taste that Impresses, Service that Delights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-hero-primary golden-glow group">
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Book Your Event
              </button>
              <button className="btn-hero-secondary">
                📖 View Menu
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative group">
              <img 
                src={heroThali} 
                alt="Luxurious Indian Thali - Jagdammba Caterers"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-luxury)] hover-tilt transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating stats */}
              <div className="absolute top-4 right-4 glass-card p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-gold">500+</div>
                  <div className="text-sm text-muted-foreground">Events</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 glass-card p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-gold">25+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};