import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 87694 80205", href: "tel:+918769480205" },
    { icon: Mail, text: "info@jagdambacaterers.com", href: "mailto:info@jagdambacaterers.com" },
    { icon: MapPin, text: "123 Catering Street, Food City, FC 12345" },
    { icon: Clock, text: "Mon-Sun: 6:00 AM - 11:00 PM" },
  ];

  return (
    <footer className="bg-background border-t border-primary/20 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Jagdamba Caterers Logo" 
                className="w-10 h-10 mr-3" 
              />
              <span className="text-2xl font-bold text-gradient-gold">Jagdamba</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Creating delicious memories through authentic flavors and exceptional catering services for over 25 years.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary">📘</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary">📷</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary">🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gradient-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-gradient-gold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-gradient-gold mb-4">Get Started</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Ready to plan your next event? Contact us for a personalized quote.
            </p>
            <Link to="/contact" className="btn-hero-primary w-full golden-glow inline-flex items-center justify-center">
              Book Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2024 Jagdamba Caterers. All rights reserved. Crafted with ❤️ for food lovers.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-muted-foreground">|</span>
            <Link to="/terms-and-conditions" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a 
          href="https://wa.me/918769480205" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </a>
      </div>
    </footer>
  );
};
