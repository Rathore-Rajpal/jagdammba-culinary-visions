import { Quote, Star, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Define testimonial types
type Testimonial = {
  id: number;
  customerName: string;
  location: string;
  role?: string;
  quote: string;
  foodItem?: string;
  image: string;
  arrowPosition: 'left' | 'right';
  arrowImage: string;
  imagePosition: 'left' | 'right';
};

const TestimonialsNew = () => {
  // Testimonials in vertical layout similar to Homekich
  const testimonials: Testimonial[] = [
    {
      id: 0,
      customerName: "Priya Sharma",
      location: "Jodhpur",
      role: "Bride",
      quote: "Making these traditional dishes for my wedding reminded me of my grandmother's cooking. The flavors were exactly how I remembered from childhood celebrations.",
      foodItem: "Royal Rajasthani Thali",
      image: "/testimonials/testimonial-1.png",
      arrowPosition: "right",
      arrowImage: "/testimonials/testimonial-arrow-1.png",
      imagePosition: "left"
    },
    {
      id: 1,
      customerName: "Rajesh Mehta",
      location: "Jaipur",
      role: "Business Owner",
      quote: "I haven't had rajma chawal that tasted like this in over two years. It honestly made me feel like I was back home again.",
      foodItem: "North Indian Comfort Food",
      image: "/testimonials/testimonial-2.png",
      arrowPosition: "left",
      arrowImage: "/testimonials/testimonial-arrow-3.png",
      imagePosition: "right"
    },
    {
      id: 2,
      customerName: "Joey Russo",
      location: "Udaipur",
      role: "Chef",
      quote: "I started making traditional Rajasthani dal to feel close to my roots. Now they're helping me support myself—and spread a little love too.",
      foodItem: "Traditional Marwari Cuisine",
      image: "/testimonials/testimonial-4.png",
      arrowPosition: "right",
      arrowImage: "/testimonials/testimonial-arrow-4.png",
      imagePosition: "left"
    },
    {
      id: 3,
      customerName: "Anita Desai",
      location: "Delhi",
      quote: "The team recreated my mother's secret recipe for the corporate event. Everyone was asking for the chef's contact information by the end of the night!",
      foodItem: "Traditional Indian Sweets",
      image: "/testimonials/testimonial-1 (1).png",
      arrowPosition: "left",
      arrowImage: "/testimonials/testimonial-arrow-3 (1).png",
      imagePosition: "right"
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section - Full Screen Feature */}
        <section className="pt-28 pb-16 bg-hero overflow-hidden relative">
          {/* Background Particles - for visual interest */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="float-animation absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-primary/70 to-accent/80 rounded-full blur-2xl"></div>
            <div className="float-animation absolute top-1/4 left-1/2 w-20 h-20 border-4 border-accent/40 rounded-full animate-spin-slow" style={{ borderStyle: 'dashed', animationDelay: '1.5s' }}></div>
            <svg className="float-animation absolute bottom-16 right-1/3 w-8 h-8 text-primary/70 opacity-70" style={{ animationDelay: '2.2s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <polygon points="12,2 15,10 23,10 17,15 19,23 12,18 5,23 7,15 1,10 9,10" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6">
            {/* Title */}
            <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Taste of <span className="text-gradient-gold">Nostalgia</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Our customers share how Jagdamba's authentic flavors connect them to cherished memories and traditions
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Vertical Layout */}
        <section className="py-16 md:py-24 bg-muted/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient-gold">Customer Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from our clients who have enjoyed our authentic culinary traditions
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              {/* Vertical Layout with Alternating Testimonials */}
              <div className="relative space-y-32">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="relative">
                    <div className={`flex flex-col ${testimonial.imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-28`}>
                      {/* Image Side - Polaroid Style */}
                      <div className="w-full md:w-6/12 relative">
                        <div className="bg-white p-4 rounded-lg shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img 
                              src={testimonial.image} 
                              alt={`${testimonial.customerName}'s testimonial`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="mt-3 text-black text-center p-1">
                            <p className="font-handwriting text-lg">{testimonial.foodItem || "Traditional Cuisine"}</p>
                          </div>
                        </div>
                        
                        {/* Arrow Image - Only for first and third testimonial */}
                        {(testimonial.id === 0 || testimonial.id === 2) && (
                          <img 
                            src={testimonial.arrowImage}
                            alt="Arrow connecting"
                            className={`hidden md:block absolute top-1/2 ${
                              testimonial.id === 0 
                                ? 'left-full ml-2' // First testimonial (Priya Sharma) - right side
                                : 'left-full ml-2' // Third testimonial (Joey Russo) - right side
                            } -translate-y-1/2 w-24 h-auto z-10 opacity-90`}
                          />
                        )}
                        
                        {/* Special arrow for second testimonial */}
                        {testimonial.id === 1 && (
                          <img 
                            src="/testimonials/testimonial-arrow-1.png"
                            alt="Arrow connecting"
                            className="hidden md:block absolute top-1/2 right-full mr-2 -translate-y-1/2 w-24 h-auto z-10 opacity-90 -scale-x-100"
                          />
                        )}
                        
                        {/* Special arrow for last testimonial */}
                        {testimonial.id === 3 && (
                          <img 
                            src="/testimonials/testimonial-arrow-1.png"
                            alt="Arrow connecting"
                            className="hidden md:block absolute top-1/2 right-full mr-2 -translate-y-1/2 w-24 h-auto z-10 opacity-90 -scale-x-100"
                          />
                        )}
                      </div>
                      
                      {/* Quote Side */}
                      <div className="w-full md:w-5/12 glass-card p-6 md:p-8" style={{ backgroundColor: 'rgba(210, 230, 255, 0.25)' }}>
                        <div className="mb-5">
                          <Quote className="w-12 h-12 text-primary opacity-60 mb-4" />
                          <p className="text-lg md:text-xl leading-relaxed mb-4">
                            "{testimonial.quote}"
                          </p>
                          
                          {/* Customer Info */}
                          <div className="pt-4 border-t border-primary/20">
                            <h3 className="text-xl font-bold text-gradient-gold mb-1">{testimonial.customerName}</h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role && `${testimonial.role}, `}{testimonial.location}
                            </p>
                          </div>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex mt-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Customer Highlights Section */}
        <section className="py-16 md:py-24 bg-hero">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Memorable <span className="text-gradient-gold">Moments</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Special occasions made extraordinary by our authentic culinary traditions
              </p>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* Bigger First Image */}
              <div className="col-span-2 md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-lg">
                <img 
                  src="/testimonials/Gemini_Generated_Image_703epk703epk703e.png" 
                  alt="Wedding celebration" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="text-white font-medium">Luxury Wedding Reception</p>
                  <p className="text-sm text-white/80">Jodhpur, Rajasthan</p>
                </div>
              </div>
              
              {/* Regular Grid Images */}
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/testimonials/Gemini_Generated_Image_9mekp09mekp09mek.png" 
                  alt="Grand Engagement Party" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="text-white font-medium">Grand Engagement Party</p>
                  <p className="text-sm text-white/80">Jaipur</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/testimonials/Gemini_Generated_Image_hqqkwwhqqkwwhqqk.png" 
                  alt="Traditional Ceremony" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="text-white font-medium">Traditional Ceremony</p>
                  <p className="text-sm text-white/80">Udaipur</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/testimonials/Gemini_Generated_Image_nfqw06nfqw06nfqw.png" 
                  alt="Royal Dining Experience" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="text-white font-medium">Royal Dining Experience</p>
                  <p className="text-sm text-white/80">Jaisalmer</p>
                </div>
              </div>
              
              {/* Fifth Image (New Addition) */}
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/testimonials/Gemini_Generated_Image_8gstg68gstg68gst.png" 
                  alt="Festive Celebration" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <p className="text-white font-medium">Festive Celebration</p>
                  <p className="text-sm text-white/80">Bikaner</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Share Your Story CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Share Your <span className="text-gradient-gold">Food Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Did Jagdamba Caterers create a memorable experience for your special event? 
                We'd love to hear how our food connected you to cherished memories or created new ones!
              </p>
              <Button className="btn-hero-primary golden-glow text-lg px-8 py-6 hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 mr-2" />
                Tell Us Your Story
              </Button>
            </div>
          </div>
        </section>
        
        {/* Stats & Trust Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted By <span className="text-gradient-gold">Thousands</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Creating memorable culinary experiences across Rajasthan since 1997
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Events Catered</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-2">500+</div>
                <div className="text-sm text-muted-foreground">5-Star Reviews</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Signature Dishes</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialsNew;
