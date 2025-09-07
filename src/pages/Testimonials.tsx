import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reviewType, setReviewType] = useState<"review" | "story">("review");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    rating: 5,
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleOpenDialog = (type: "review" | "story") => {
    setReviewType(type);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // You would typically send this data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: reviewType === "review" ? "Review Submitted!" : "Your Story Submitted!",
      description: "Thank you for sharing your experience with us. Your feedback is valuable!",
      variant: "default",
    });
    
    // Reset form and close dialog
    setFormData({
      name: "",
      email: "",
      event: "",
      rating: 5,
      message: ""
    });
    setIsDialogOpen(false);
  };

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
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-hero">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              ग्राहक <span className="text-gradient-gold">प्रशंसापत्र</span> <br />
              <span className="text-xl md:text-2xl text-muted-foreground block mt-2">Client <span className="text-gradient-gold">Testimonials</span></span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
              Delicious Memories, Beautifully Catered.<br />
              <span className="block mt-2 font-semibold">स्वादिष्ट यादें, खूबसूरती से परोसी गई।</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our satisfied clients about their experiences with Jagdammba Caterers and how we made their events memorable.<br />
              <span className="text-sm sm:text-base md:text-lg">हमारे संतुष्ट ग्राहकों से जानिए, जिन्होंने जगदम्बा कैटरर्स के साथ अपने खास पलों को यादगार बनाया।</span>
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-20">
              {/* Example stats, replace with your own if needed */}
              <div className="glass-card p-4 sm:p-6 text-center hover-tilt group animate-scale-in">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="glass-card p-4 sm:p-6 text-center hover-tilt group animate-scale-in">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-1 sm:mb-2">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Events Catered</div>
              </div>
              <div className="glass-card p-4 sm:p-6 text-center hover-tilt group animate-scale-in">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-1 sm:mb-2">4.9/5</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="glass-card p-4 sm:p-6 text-center hover-tilt group animate-scale-in">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-1 sm:mb-2">99%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>

            {/* Featured Testimonial */}
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">What Our <span className="text-gradient-gold">Clients Say</span></h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from real customers who trusted us with their special moments.
              </p>
            </div>

            {/* Main Testimonial Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <div className="glass-card p-4 sm:p-8 md:p-12 text-center animate-fade-in-up">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6">{testimonials[currentTestimonial].image}</div>
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 sm:mb-4 md:mb-6 opacity-50" />
                <blockquote className="text-sm sm:text-base md:text-xl text-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-gradient-gold font-bold text-base sm:text-lg mb-0.5 sm:mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm text-muted-foreground mb-0.5 sm:mb-1">
                  {testimonials[currentTestimonial].event}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].date}
                </div>
              </div>
              {/* Navigation Buttons */}
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </button>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </button>
              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">More <span className="text-gradient-gold">Success Stories</span></h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through more testimonials from our satisfied clients across different types of events.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 sm:p-5 md:p-6 hover-tilt group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl mr-3 sm:mr-4">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-gradient-gold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.event}</div>
                    </div>
                  </div>
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    "{testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + '...' : testimonial.quote}"
                  </p>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review CTA */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="glass-card p-6 sm:p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">Had an Experience with <span className="text-gradient-gold">Jagdammba Caterers?</span></h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8">
                We'd love to hear about your experience! Your feedback helps us improve and helps other customers make informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="btn-hero-primary golden-glow" onClick={() => handleOpenDialog("review")}>
                  Write a Review
                </Button>
                <Button className="btn-hero-secondary" onClick={() => handleOpenDialog("story")}>
                  Share Your Story
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 md:py-16 lg:py-20 bg-hero">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12">Trusted by <span className="text-gradient-gold">Thousands</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏆</div>
                <h3 className="text-lg sm:text-xl font-bold text-gradient-gold mb-1 sm:mb-2">Award-Winning Service</h3>
                <p className="text-sm md:text-base text-muted-foreground">Recognized for excellence in catering and customer satisfaction</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤝</div>
                <h3 className="text-lg sm:text-xl font-bold text-gradient-gold mb-1 sm:mb-2">Trusted Partner</h3>
                <p className="text-sm md:text-base text-muted-foreground">Preferred caterer for leading venues and event organizers</p>
              </div>
              <div className="animate-fade-in-up sm:col-span-2 md:col-span-1 mx-auto md:mx-0 max-w-sm" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⭐</div>
                <h3 className="text-lg sm:text-xl font-bold text-gradient-gold mb-1 sm:mb-2">Consistent Quality</h3>
                <p className="text-sm md:text-base text-muted-foreground">Maintaining high standards across hundreds of successful events</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      {/* Review/Story Popup Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="glass-card border-primary/20 max-w-[90%] sm:max-w-md md:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-gradient-gold">
              {reviewType === "review" ? "Write a Review" : "Share Your Story"}
            </DialogTitle>
            <DialogDescription className="text-center text-sm sm:text-base text-muted-foreground">
              {reviewType === "review" 
                ? "Tell us about your experience with our catering services"
                : "Share how Jagdammba Caterers made your event special"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-2 sm:mt-4">
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="bg-background/50 border-primary/20 text-sm"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="bg-background/50 border-primary/20 text-sm"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="event" className="text-xs sm:text-sm font-medium">
                Event Type
              </label>
              <Input
                id="event"
                name="event"
                value={formData.event}
                onChange={handleInputChange}
                placeholder="Wedding, Birthday, Corporate Event, etc."
                required
                className="bg-background/50 border-primary/20 text-sm"
              />
            </div>

            {reviewType === "review" && (
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          rating <= formData.rating
                            ? "text-yellow-400 fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                {reviewType === "review" ? "Your Review" : "Your Story"}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={
                  reviewType === "review"
                    ? "Tell us about the food quality, service, and overall experience..."
                    : "Share how our catering services made your event memorable..."
                }
                required
                className="min-h-[120px] sm:min-h-[150px] bg-background/50 border-primary/20 text-sm"
              />
            </div>

            <div className="flex justify-end pt-2 sm:pt-4">
              <Button type="submit" className="btn-hero-primary golden-glow text-xs sm:text-sm">
                <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Submit {reviewType === "review" ? "Review" : "Story"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TestimonialsPage;