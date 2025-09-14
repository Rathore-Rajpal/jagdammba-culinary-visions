import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReviewCTAProps {
  variant?: 'minimal' | 'full';
  className?: string;
}

export const ReviewCTA = ({ variant = 'full', className = '' }: ReviewCTAProps) => {
  // Google Business review link for Jagdamba Caterers
  const googleReviewLink = "https://www.google.com/maps/place/Jagdamba+caterers+and+event+management/@26.2283594,73.0210581,17z/data=!4m8!3m7!1s0x39418b2aefcf0ec9:0x4036b70674451813!8m2!3d26.2283594!4d73.023633!9m1!1b1!16s%2Fg%2F11s4x571rl?entry=ttu";
  
  if (variant === 'minimal') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <a 
          href={googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1 text-xs sm:text-sm"
        >
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
          <span>Write a Review</span>
        </a>
      </div>
    );
  }
  
  return (
    <div className={`glass-card p-4 sm:p-6 md:p-8 ${className}`}>
      <div className="flex flex-col items-center text-center">
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mx-0.5" />
          ))}
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gradient-gold mb-2">
          Enjoyed Our Services?
        </h3>
        <p className="text-sm md:text-base text-muted-foreground mb-4">
          Your feedback helps us improve and helps others discover the best catering service in Jodhpur.
        </p>
        <a 
          href={googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="btn-hero-primary golden-glow w-full flex items-center justify-center">
            <Star className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" />
            Write a Review on Google
          </Button>
        </a>
        <p className="text-xs text-muted-foreground mt-3">
          Your honest feedback means the world to us!
        </p>
      </div>
    </div>
  );
};