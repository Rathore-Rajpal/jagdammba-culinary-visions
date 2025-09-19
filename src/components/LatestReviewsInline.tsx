import { LatestReviewsSlideshow } from "@/components/LatestReviewsSlideshow";

export function LatestReviewsInline() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-center text-gradient-gold">Latest Customer Reviews</h3>
      <LatestReviewsSlideshow />
    </div>
  );
}
