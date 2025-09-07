import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      event: "Wedding Reception",
      rating: 5,
      image: "👰",
      quote: "Jagdammba Caterers made our wedding day absolutely perfect! The food was incredible, and every guest complimented the authentic flavors. The service was impeccable, and they handled everything with such professionalism. Highly recommended!",
      date: "March 2024"
    },
    {
      name: "Rajesh Kumar",
      event: "Corporate Event",
      rating: 5,
      image: "👨‍💼",
      quote: "Outstanding catering service for our company's annual meeting. The variety of dishes was impressive, and the presentation was top-notch. They accommodated all dietary requirements seamlessly. Will definitely use their services again!",
      date: "February 2024"
    },
    {
      name: "Meera Gupta",
      event: "Birthday Celebration",
      rating: 5,
      image: "👩",
      quote: "The team at Jagdammba Caterers went above and beyond for my mother's 60th birthday. Every dish was prepared with love and attention to detail. The traditional sweets were absolutely divine. Thank you for making it so special!",
      date: "January 2024"
    },
    {
      name: "Vikram Singh",
      event: "Anniversary Party",
      rating: 5,
      image: "👨",
      quote: "Exceptional quality and service! The food was fresh, delicious, and beautifully presented. The staff was courteous and professional throughout the event. Jagdammba Caterers truly understands the art of hospitality.",
      date: "December 2023"
    },
    {
      name: "Anjali Patel",
      event: "Festival Celebration",
      rating: 5,
      image: "👩‍🦱",
      quote: "We've been using Jagdammba Caterers for our community festivals for years. Their consistency in quality and ability to serve large crowds while maintaining taste is remarkable. They're our go-to caterers!",
      date: "November 2023"
    },
    {
      name: "Suresh Agarwal",
      event: "Business Launch",
      rating: 5,
      image: "👨‍💻",
      quote: "Professional, reliable, and delicious! They catered our product launch event and impressed all our clients and partners. The live cooking stations were a huge hit. Excellent value for money!",
      date: "October 2023"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Events Catered" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Client <span className="text-gradient-gold">Testimonials</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients about their experiences with Jagdammba Caterers and how we made their events memorable.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-tilt group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-gradient-gold mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our <span className="text-gradient-gold">Clients Say</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real customers who trusted us with their special moments.
            </p>
          </div>

          {/* Main Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card p-12 text-center animate-fade-in-up">
              <div className="text-6xl mb-6">{testimonials[currentTestimonial].image}</div>
              
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
              
              <blockquote className="text-xl text-foreground mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="text-gradient-gold font-bold text-lg mb-1">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-muted-foreground mb-1">
                {testimonials[currentTestimonial].event}
              </div>
              <div className="text-sm text-muted-foreground">
                {testimonials[currentTestimonial].date}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">More <span className="text-gradient-gold">Success Stories</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through more testimonials from our satisfied clients across different types of events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-tilt group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-gradient-gold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + '...' : testimonial.quote}"
                </p>

                <div className="text-xs text-muted-foreground">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Had an Experience with <span className="text-gradient-gold">Jagdammba Caterers?</span></h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to hear about your experience! Your feedback helps us improve and helps other customers make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero-primary golden-glow">
                Write a Review
              </Button>
              <Button className="btn-hero-secondary">
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Trusted by <span className="text-gradient-gold">Thousands</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gradient-gold mb-2">Award-Winning Service</h3>
              <p className="text-muted-foreground">Recognized for excellence in catering and customer satisfaction</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gradient-gold mb-2">Trusted Partner</h3>
              <p className="text-muted-foreground">Preferred caterer for leading venues and event organizers</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gradient-gold mb-2">Consistent Quality</h3>
              <p className="text-muted-foreground">Maintaining high standards across hundreds of successful events</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;