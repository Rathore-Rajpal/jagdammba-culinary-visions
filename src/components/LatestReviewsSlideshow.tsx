import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

// Fixed path to the placeholder image
const PLACEHOLDER = "/placeholder.svg";

interface Review {
  name: string;
  review: string;
  rating: number;
  photo_url: string | null;
  created_at: string;
}

export function LatestReviewsSlideshow() {
  const [current, setCurrent] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  // Fetch reviews from the database and subscribe to realtime changes
  useEffect(() => {
    let isMounted = true;

    async function fetchReviews() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("name, review, rating, photo_url, created_at")
          .order("created_at", { ascending: false })
          .limit(5);

        if (error) {
          console.error("Error fetching reviews:", error);
          if (isMounted) setReviews([]);
        } else if (data) {
          if (isMounted) setReviews(data as Review[]);
        }
      } catch (e) {
        console.error("Exception while fetching reviews:", e);
        if (isMounted) setReviews([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchReviews();

    // Realtime subscription: listen for INSERT/UPDATE/DELETE on reviews
    const channel = supabase.channel('public:reviews')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'reviews' }, payload => {
        // When anything changes, re-fetch latest 5
        console.log('Realtime review change:', payload.event, payload.new || payload.old);
        fetchReviews();
      })
      .subscribe();

    return () => {
      isMounted = false;
      try { supabase.removeChannel(channel); } catch (e) { /* ignore */ }
    };
  }, []);
  
  // Simple interval for slide transition
  useEffect(() => {
    if (reviews.length < 2) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [reviews.length]);

  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto my-6 glass-card p-6 text-center">
        <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-gradient-gold">Loading Reviews...</h3>
        <p className="text-sm text-muted-foreground">Please wait while we fetch the latest customer feedback</p>
      </div>
    );
  }
  
  if (!reviews || reviews.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto my-6 glass-card p-6 text-center">
        <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-gradient-gold">No Reviews Yet</h3>
        <p className="text-sm text-muted-foreground">Be the first to share your experience with us!</p>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">
          What Our <span className="text-gradient-gold">Customers Say</span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto"></div>
      </div>
      
      <div className="relative h-auto min-h-[220px] md:h-[250px]">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                {/* Customer Photo */}
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/40 shadow-md mx-auto">
                      <img
                        src={review.photo_url || PLACEHOLDER}
                        alt={`${review.name}'s photo`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = PLACEHOLDER;
                        }}
                      />
                    </div>
                    {/* Star Rating */}
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={i < review.rating ? "text-yellow-400 text-sm" : "text-gray-300 text-sm"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Review Content */}
                <div className="md:w-3/4 text-center md:text-left">
                  <p className="text-lg font-serif italic mb-3">
                    "{review.review}"
                  </p>
                  <div className="font-semibold text-gradient-gold">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(review.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Simple dot navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`View review ${index + 1}`}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-yellow-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
