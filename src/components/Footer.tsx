import { Phone, Mail, MapPin, Clock, MessageCircle, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ReviewCTA } from "./ReviewCTA";

export const Footer = () => {
  const navigate = useNavigate();
  
  // Custom navigation function that scrolls to top
  const navigateTo = (path: string) => {
    // Scroll to top immediately before navigation
    window.scrollTo(0, 0);
    // Navigate to the desired path
    navigate(path);
  };
  
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 87694 80205", href: "tel:+918769480205" },
    { icon: Mail, text: "jagdambacatrers@gmail.com", href: "mailto:jagdambacatrers@gmail.com" },
    { icon: MapPin, text: "Office 1: 1/1, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur" },
    { icon: MapPin, text: "Office 2: 6/38, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur" },
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
                alt="Jagdamba Caterers and Events Logo" 
                className="w-10 h-10 mr-3" 
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gradient-gold">Jagdamba</span>
                <span className="text-sm text-muted-foreground -mt-1">Caterers and Events</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full w-fit mt-1">Since 1997</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Providing the best catering services in Jodhpur since 1997. Creating delicious memories through authentic Rajasthani flavors and exceptional wedding catering services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1BAX3KYYyv/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 text-primary fill-current">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/jagdamba_caterers_events?igsh=MnhobDNidjBrM3hl&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 text-primary fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gradient-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => navigateTo(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </button>
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
              Ready to plan your next event? Call us for a personalized quote.
            </p>
            <a 
              href="tel:+918769480205" 
              className="btn-hero-primary w-full golden-glow inline-flex items-center justify-center mb-4"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call to Book Now
            </a>
            
            {/* Google Review Link */}
            <a 
              href="https://www.google.com/maps/place/Jagdamba+caterers+and+event+management/@26.2283594,73.0210581,17z/data=!4m8!3m7!1s0x39418b2aefcf0ec9:0x4036b70674451813!8m2!3d26.2283594!4d73.023633!9m1!1b1!16s%2Fg%2F11s4x571rl?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary w-full inline-flex items-center justify-center"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
              Rate & Review Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2024 Jagdamba Caterers and Events. All rights reserved. Serving with ❤️ since 1997.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 mt-4 md:mt-0">
            <button 
              onClick={() => navigateTo('/privacy-policy')} 
              className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span className="text-muted-foreground">|</span>
            <button 
              onClick={() => navigateTo('/terms-and-conditions')} 
              className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <span className="text-muted-foreground">|</span>
            <a 
              href="https://www.google.com/maps/place/Jagdamba+caterers+and+event+management/@26.2283594,73.0210581,17z/data=!4m8!3m7!1s0x39418b2aefcf0ec9:0x4036b70674451813!8m2!3d26.2283594!4d73.023633!9m1!1b1!16s%2Fg%2F11s4x571rl?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center"
            >
              <Star className="w-3 h-3 mr-1 text-yellow-400" />
              Write a Review
            </a>
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
