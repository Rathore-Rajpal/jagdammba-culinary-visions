import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Calendar, CheckCircle, AlertCircle, Loader2, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";
import { ReviewCTA } from "@/components/ReviewCTA";
import { ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 87694 80205"
      ],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["jagdambacatrers@gmail.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["1/1, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur"],
      action: "Get Directions"
    },
    {
      icon: MapPin,
      title: "Office Address - 2", 
      details: ["6/38, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur"],
      action: "Get Directions"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "6:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "6:00 AM - 11:00 PM" },
    { day: "Festival Days", hours: "24/7 Available" }
  ];

  const eventTypes = [
    "Wedding", "Birthday Party", "Corporate Event", "Anniversary", 
    "Festival Celebration", "Religious Ceremony", "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Clear error when field is edited
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    // Validate event type
    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: "Form Error",
        description: "Please fill all required fields correctly.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save data directly to Supabase
      const { data, error } = await supabase
        .from('contact_form')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            event_type: formData.eventType,
            event_date: formData.eventDate,
            guest_count: formData.guestCount ? parseInt(formData.guestCount) : null,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message || "Error submitting form to database");
      }
      
      console.log("Form submitted to Supabase:", data);
      
      // Show success message
      toast({
        title: "Booking Request Submitted!",
        description: "Thank you for your inquiry. We will contact you within 24 hours.",
        variant: "default"
      });
      
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        message: ""
      });
      
      // Reset success state after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error: any) {
      // Handle submission errors
      const errorMessage = error.message || "There was an error submitting your request.";
      
      // Show toast with error message
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive"
      });
      
      // Show alternative contact methods by setting a state
      setErrors({
        ...errors,
        serverError: "Please use alternative contact methods below while we fix the issue."
      });
      
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Update document title for better SEO
    document.title = "Contact Jagdamba Caterers | Best Catering in Jodhpur";
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Jagdamba Caterers | Best Catering in Jodhpur</title>
        <meta name="description" content="Contact Jagdamba Caterers for the best wedding catering services in Jodhpur. Get personalized quotes for your events, corporate functions, and celebrations." />
        <meta name="keywords" content="contact jagdamba caterers, jodhpur catering contact, wedding caterer contact, best catering services jodhpur contact, event catering jodhpur" />
        <link rel="canonical" href="https://www.jagdambacaterersjodhpur.in/contact" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Contact Jagdamba Caterers | Best Catering in Jodhpur" />
        <meta property="og:description" content="Contact Jagdamba Caterers for the best wedding catering services in Jodhpur. Get personalized quotes for your events, corporate functions, and celebrations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jagdambacaterersjodhpur.in/contact" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-hero">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
              Contact <span className="text-gradient-gold">Jagdamba Caterers</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to plan your perfect event with the best catering services in Jodhpur? Get in touch with us for personalized consultation and competitive quotes for wedding catering and special events.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Get in <span className="text-gradient-gold">Touch</span></h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to reach us. Choose what's most convenient for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 sm:p-6 text-center hover-tilt group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gradient-gold mb-2 sm:mb-4">{info.title}</h3>
                  
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-6">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-xs sm:text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {info.title === "Phone Numbers" ? (
                    <a href={`tel:${info.details[0].replace(/\s/g, '')}`} className="btn-hero-primary w-full golden-glow flex items-center justify-center text-xs sm:text-sm">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      {info.action}
                    </a>
                  ) : info.title === "Email" ? (
                    <a href={`mailto:${info.details[0]}`} className="btn-hero-primary w-full golden-glow flex items-center justify-center text-xs sm:text-sm">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      {info.action}
                    </a>
                  ) : info.title.includes("Address") ? (
                    <a href="https://www.google.com/maps/place/vijay+dairy+%26+provision+store/@26.2283726,73.0236435,17z/data=!4m6!3m5!1s0x39418b91910ea595:0xa23c230732f13d12!8m2!3d26.2283728!4d73.023645!16s%2Fg%2F11cm0kfn0h?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn-hero-primary w-full golden-glow flex items-center justify-center text-xs sm:text-sm">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      {info.action}
                    </a>
                  ) : (
                    <Button className="btn-hero-primary w-full golden-glow text-xs sm:text-sm">
                      {info.action}
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="glass-card p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
              <div className="text-center mb-3 sm:mb-6">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mx-auto mb-2 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gradient-gold">Business Hours</h3>
              </div>
              
              <div className="space-y-2 sm:space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex flex-col sm:flex-row justify-between items-center sm:items-center border-b border-border/50 pb-1 sm:pb-2">
                    <span className="font-medium text-sm sm:text-base mb-1 sm:mb-0">{schedule.day}</span>
                    <span className="text-primary text-sm sm:text-base">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-3 sm:mt-6">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Emergency catering services available 24/7 for special occasions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="glass-card p-4 sm:p-6 md:p-8 max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">Need <span className="text-gradient-gold">Immediate Assistance?</span></h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8">
                For urgent inquiries or last-minute bookings, contact us directly via phone or WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="tel:+918769480205" className="btn-hero-primary golden-glow flex items-center justify-center text-xs sm:text-sm">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 animate-pulse" />
                  Call Now: +91 87694 80205
                </a>
                <a href="https://wa.me/918769480205" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary flex items-center justify-center text-xs sm:text-sm">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-t from-muted/20 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Book <span className="text-gradient-gold">Your Event</span></h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to request a quote for your upcoming event. Our team will reach out to you within 24 hours.
              </p>
            </div>
            
            <div className="glass-card p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium mb-1 flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Your Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className={`w-full px-3 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-border'} bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium mb-1 flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className={`w-full px-3 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-border'} bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  {/* Phone Field */}
                  <div className="form-group">
                    <label htmlFor="phone" className="block text-sm font-medium mb-1 flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      Phone Number <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-3 py-2 rounded-md border ${errors.phone ? 'border-red-500' : 'border-border'} bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                  
                  {/* Event Type Field */}
                  <div className="form-group">
                    <label htmlFor="eventType" className="block text-sm font-medium mb-1 flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Event Type <span className="text-red-500 ml-1">*</span>
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 rounded-md border ${errors.eventType ? 'border-red-500' : 'border-border'} bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    >
                      <option value="">Select Event Type</option>
                      {eventTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>
                    )}
                  </div>
                  
                  {/* Event Date Field */}
                  <div className="form-group">
                    <label htmlFor="eventDate" className="block text-sm font-medium mb-1 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  {/* Guest Count Field */}
                  <div className="form-group">
                    <label htmlFor="guestCount" className="block text-sm font-medium mb-1 flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="Approximate number of guests"
                      className="w-full px-3 py-2 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium mb-1 flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please share any specific requirements or questions you have..."
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                {errors.serverError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">We're experiencing technical difficulties</p>
                      <p className="text-xs mt-1">{errors.serverError}</p>
                    </div>
                  </div>
                )}
                
                {/* Submit Button */}
                <div className="text-center pt-2">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`btn-hero-primary golden-glow w-full sm:w-auto px-8 py-2 ${isSubmitting ? 'opacity-70' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Submitted Successfully
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Booking Request
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    By submitting this form, you agree to our terms and conditions.
                    We'll use the information you provide to respond to your inquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Location Map Placeholder */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Find <span className="text-gradient-gold">Our Location</span></h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Visit us at our office in Jodhpur for in-person consultation and menu tasting.
              </p>
            </div>
            
            <div className="glass-card p-4 sm:p-6 md:p-8 text-center">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 sm:mb-4 md:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gradient-gold mb-2 sm:mb-3 md:mb-4">Office Location</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-5 md:mb-6">
                1/1, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur
              </p>
              <a 
                href="https://www.google.com/maps/place/vijay+dairy+%26+provision+store/@26.2283726,73.0236435,17z/data=!4m6!3m5!1s0x39418b91910ea595:0xa23c230732f13d12!8m2!3d26.2283728!4d73.023645!16s%2Fg%2F11cm0kfn0h?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hero-primary golden-glow inline-flex items-center justify-center text-xs sm:text-sm"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </section>
        
        {/* Review CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Your <span className="text-gradient-gold">Feedback</span> Matters</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Had a great experience with Jagdamba Caterers? Share your review and help others discover the best catering service in Jodhpur.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ReviewCTA variant="full" />
            </div>
            
            <div className="text-center mt-8 sm:mt-10">
              <p className="text-sm text-muted-foreground">
                Your reviews help us improve our services and reach more customers in Jodhpur and beyond.
                <br />Thank you for taking the time to share your experience!
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default ContactPage;