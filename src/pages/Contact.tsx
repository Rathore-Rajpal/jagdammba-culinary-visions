import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 99286 49209",
        "+91 90797 50530",
        "+91 87694 80205",
        "+91 70147 14021"
      ],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@jagdammbacaterers.com"],
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
      title: "Home Address", 
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to your backend or email service
    alert("Thank you for your inquiry! We'll get back to you soon.");
    
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
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-gradient-gold">Jagdammba Caterers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to plan your perfect event? Get in touch with us for personalized consultation and competitive quotes.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get in <span className="text-gradient-gold">Touch</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what's most convenient for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-tilt group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-gradient-gold mb-4">{info.title}</h3>
                
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>

                <Button className="btn-hero-primary w-full golden-glow">
                  {info.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="glass-card p-8 max-w-2xl mx-auto mb-16">
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gradient-gold">Business Hours</h3>
            </div>
            
            <div className="space-y-4">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-primary">{schedule.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Emergency catering services available 24/7 for special occasions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Send Us a <span className="text-gradient-gold">Message</span></h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
              </p>
            </div>

            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Guest Count
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Number of guests"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MessageCircle className="inline w-4 h-4 mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your event requirements, dietary preferences, budget, or any special requests..."
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="btn-hero-primary golden-glow px-12">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need <span className="text-gradient-gold">Immediate Assistance?</span></h2>
            <p className="text-lg text-muted-foreground mb-8">
              For urgent inquiries or last-minute bookings, contact us directly via phone or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero-primary golden-glow">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 99286 49209
              </Button>
              <Button className="btn-hero-secondary">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Find <span className="text-gradient-gold">Our Location</span></h2>
            <p className="text-lg text-muted-foreground">
              Visit us at our office in Jodhpur for in-person consultation and menu tasting.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">Office Location</h3>
            <p className="text-lg text-muted-foreground mb-6">
              1/1, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur
            </p>
            <Button className="btn-hero-primary golden-glow">
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;