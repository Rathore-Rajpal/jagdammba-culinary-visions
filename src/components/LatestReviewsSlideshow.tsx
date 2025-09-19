import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

// Fixed path to the placeholder image
const PLACEHOLDER = "/jadamba-images/placeholder.png";

interface Review {
  name: string;
  review: string;
  rating: number;
  photo_url: string | null;
  created_at: string;
}

export function LatestReviewsSlideshow() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      try {
        console.log("Fetching reviews...");
        const { data, error } = await supabase
          .from("reviews")
          .select("name, review, rating, photo_url, created_at")
          .order("created_at", { ascending: false })
          .limit(5);
        
        if (error) {
          console.error("Error fetching reviews:", error);
        } else {
          console.log("Reviews fetched successfully:", data);
          setReviews(data);
        }
      } catch (e) {
        console.error("Exception while fetching reviews:", e);
      }
    }
    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length < 2) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews]);

  if (!reviews.length) {
    return (
      <div className="w-full max-w-3xl mx-auto my-8 glass-card p-12 text-center">
        <h3 className="text-2xl font-semibold mb-3 text-gradient-gold">No Reviews Yet</h3>
        <p className="text-muted-foreground">Be the first to share your experience with us!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto relative overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">
          What Our <span className="text-gradient-gold">Customers Say</span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto"></div>
      </div>
      
      {reviews.map((r, i) => (
        <div
          key={i}
          className={`transition-all duration-700 ${
            i === current 
              ? "opacity-100 translate-x-0 scale-100 z-10" 
              : "opacity-0 translate-x-8 scale-95 absolute inset-0 z-0"
          }`}
        >
          <div className="glass-card p-8 md:p-10 relative">
            {/* Decorative quote mark */}
            <div className="absolute top-4 left-6 text-6xl opacity-10 font-serif text-primary">"</div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="md:w-1/4">
                <div className="relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white/50 shadow-xl mx-auto">
                    <img
                      src={r.photo_url || PLACEHOLDER}
                      alt="Customer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className={`text-lg ${idx < r.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/4 text-center md:text-left">
                <p className="text-lg md:text-xl font-serif italic mb-4 relative">
                  "{r.review}"
                </p>
                <div className="font-bold text-lg text-gradient-gold">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{new Date(r.created_at).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current 
                ? "bg-gradient-to-r from-yellow-400 to-amber-600 scale-125" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
