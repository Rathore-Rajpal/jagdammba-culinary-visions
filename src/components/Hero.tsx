import { Button } from "@/components/ui/button";
import { ChefHat, Phone } from "lucide-react";
import heroThali from "@/assets/hero-thali.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* Floating spice particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {/* Large golden orb */}
        <div className="float-animation absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-primary/70 to-accent/80 rounded-full blur-2xl" style={{ animationDelay: '0s' }}></div>
        {/* Small golden sparkles */}
        <div className="float-animation absolute top-32 left-1/4 w-3 h-3 bg-accent rounded-full blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="float-animation absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full blur-[2px]" style={{ animationDelay: '2.5s' }}></div>
        <div className="float-animation absolute bottom-24 left-1/2 w-4 h-4 bg-accent rounded-full blur" style={{ animationDelay: '3.5s' }}></div>
        <div className="float-animation absolute top-1/3 right-1/4 w-5 h-5 bg-primary rounded-full blur" style={{ animationDelay: '2s' }}></div>
        <div className="float-animation absolute bottom-10 right-20 w-8 h-8 bg-gradient-to-tr from-accent/60 to-primary/80 rounded-full blur-xl" style={{ animationDelay: '4s' }}></div>
        {/* Animated ring */}
        <div className="float-animation absolute top-1/4 left-1/2 w-20 h-20 border-4 border-accent/40 rounded-full animate-spin-slow" style={{ animationDelay: '1.5s', borderStyle: 'dashed' }}></div>
        {/* Star shape */}
        <svg className="float-animation absolute bottom-16 right-1/3 w-8 h-8 text-primary/70 opacity-70" style={{ animationDelay: '2.2s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <polygon points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        {/* More sparkles */}
        <div className="float-animation absolute top-2/3 left-1/5 w-2 h-2 bg-accent rounded-full blur-[1px]" style={{ animationDelay: '3s' }}></div>
        <div className="float-animation absolute top-1/5 right-1/6 w-3 h-3 bg-primary rounded-full blur-[2px]" style={{ animationDelay: '2.7s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-6">
            
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient-gold">Delicious Memories,</span>
              <br />
              <span className="inline-block mt-2 text-3xl text-gradient-gold font-bold" style={{ lineHeight: 1.2 }}>
                जगदम्बा कैटरर्स
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Weddings, Birthdays & Social Events – Taste that Impresses, Service that Delights.
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              शादियाँ, जन्मदिन और हर खास पल – स्वाद जो दिल जीत ले, सेवा जो याद रह जाए।
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