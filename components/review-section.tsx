"use client";

import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  productId: string;
  authorName: string;
  rating: number;
  text: string;
  isVerified: boolean;
  createdAt: string;
}

interface ReviewSectionProps {
  productId: string;
}

function StarDisplay({
  rating,
  interactive = false,
  onSelect,
}: {
  rating: number;
  interactive?: boolean;
  onSelect?: (r: number) => void;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${interactive ? "cursor-pointer transition-transform hover:scale-110" : ""} ${
            star <= rating
              ? "fill-brand-gold text-brand-gold"
              : "fill-none text-brand-gold/20"
          }`}
          onClick={() => interactive && onSelect?.(star)}
        />
      ))}
    </div>
  );
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function ReviewSection({ productId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Form state
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/reviews?productId=${encodeURIComponent(productId)}`,
      );
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) setReviews(data);
      }
    } catch (e) {
      console.error("Failed to fetch reviews:", e);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || name.trim().length < 2) {
      setError("Name must be at least 2 characters");
      return;
    }
    if (rating < 1 || rating > 5) {
      setError("Please select a rating");
      return;
    }
    if (!text.trim() || text.trim().length < 10 || text.trim().length > 500) {
      setError("Review text must be between 10 and 500 characters");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          authorName: name.trim(),
          rating,
          text: text.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to submit review");
        return;
      }

      // Optimistic update
      setReviews((prev) => [data, ...prev]);
      setName("");
      setRating(0);
      setText("");
      setShowForm(false);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-2xl font-serif text-brand-brown-dark">
          Customer Reviews
        </h2>

        {reviews.length > 0 && (
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
            <span className="text-lg font-medium text-brand-gold">
              {avgRating.toFixed(1)} out of 5
            </span>
            <span className="text-sm text-brand-brown/60">
              ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
            </span>
          </div>
        )}
      </div>

      {/* Write a Review toggle */}
      <button
        onClick={() => setShowForm((v) => !v)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-brand-gold/30 bg-brand-cream/50 text-brand-brown hover:bg-brand-gold/10 text-sm font-medium transition-colors"
      >
        <Star className="w-4 h-4" />
        {showForm ? "Cancel" : "Write a Review"}
      </button>

      {/* Review Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 rounded-lg border border-brand-gold/20 bg-brand-cream/20"
        >
          {error && (
            <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-md border border-brand-gold/30 bg-white text-brand-brown placeholder:text-brand-brown/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 text-sm"
              required
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-1.5">
              Rating
            </label>
            <StarDisplay rating={rating} interactive onSelect={setRating} />
            {rating > 0 && (
              <p className="text-xs text-brand-brown/60 mt-1">
                {rating} out of 5 stars
              </p>
            )}
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-1.5">
              Your Review
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your experience (10-500 characters)"
              rows={4}
              className="w-full px-3 py-2 rounded-md border border-brand-gold/30 bg-white text-brand-brown placeholder:text-brand-brown/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 text-sm resize-none"
              required
            />
            <p className="text-xs text-brand-brown/50 mt-1">
              {text.trim().length} / 500
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-4 py-2.5 rounded-md bg-brand-gold text-white font-medium text-sm hover:bg-brand-gold-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}

      {/* Reviews List */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-5 rounded-lg border border-brand-gold/10 bg-white animate-pulse"
            >
              <div className="h-4 w-32 bg-brand-cream rounded mb-3" />
              <div className="h-3 w-20 bg-brand-cream rounded mb-3" />
              <div className="h-3 w-full bg-brand-cream rounded mb-2" />
              <div className="h-3 w-3/4 bg-brand-cream rounded" />
            </div>
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-12 space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10">
            <Star className="w-6 h-6 text-brand-gold" />
          </div>
          <p className="text-lg font-serif text-brand-brown-dark">
            No reviews yet. Be the first!
          </p>
          <p className="text-sm text-brand-brown/50">
            Share your experience with this product.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-lg border border-brand-gold/10 bg-white space-y-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-brand-brown">
                    {review.authorName}
                  </span>
                  {review.isVerified && (
                    <span className="text-[10px] rounded-full px-2 py-0.5 bg-brand-whatsapp/10 text-brand-whatsapp font-medium">
                      Verified
                    </span>
                  )}
                </div>
                <span className="text-xs text-brand-brown/50">
                  {formatDate(review.createdAt)}
                </span>
              </div>

              <StarDisplay rating={review.rating} />

              <p className="text-sm text-brand-brown/80 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
