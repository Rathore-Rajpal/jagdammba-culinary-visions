import { useState, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MessageCircle, 
  Star, 
  Upload, 
  Calendar, 
  Mail, 
  User, 
  Check, 
  Loader2 
} from "lucide-react";

export const StoryForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Collect form data
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const eventDate = (form.elements.namedItem("eventDate") as HTMLInputElement)?.value;
    const review = (form.elements.namedItem("review") as HTMLTextAreaElement)?.value;
    // rating is from state
    let photoUrl = null;

    // If photo is selected, upload to Supabase storage
    if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files.length > 0) {
      const file = fileInputRef.current.files[0];
      const filePath = `reviews/${Date.now()}_${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage.from('reviews').upload(filePath, file);
      if (uploadError) {
        alert("Photo upload failed: " + uploadError.message);
        setIsSubmitting(false);
        return;
      }
      const { data: publicUrlData } = supabase.storage.from('reviews').getPublicUrl(filePath);
      photoUrl = publicUrlData?.publicUrl || null;
    }

    // Insert into Supabase 'reviews' table
    const { error } = await supabase.from('reviews').insert([
      {
        name,
        email,
        event_date: eventDate,
        review,
        rating,
        photo_url: photoUrl,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      alert("Submission failed: " + error.message);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setRating(0);
      setFileName("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }, 2000);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="btn-hero-primary golden-glow text-lg px-8 py-6 hover:scale-105 transition-transform">
          <MessageCircle className="w-5 h-5 mr-2" />
          Tell Us Your Story
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] glass-card overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="text-gradient-gold">Share Your Story</span>
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Tell us about your experience with Jagdamba Caterers. Your story might inspire others!
          </DialogDescription>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">Your story has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  id="name"
                  placeholder="Your full name"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            {/* Event Date */}
            <div className="space-y-2">
              <Label htmlFor="eventDate">Event Date</Label>
              <div className="relative" onClick={e => {
                const input = document.getElementById('eventDate');
                if (input) (input as HTMLInputElement).showPicker?.();
              }}>
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" />
                <Input 
                  id="eventDate" 
                  name="eventDate"
                  type="date" 
                  className="pl-10 cursor-pointer"
                  required
                  max={new Date().toISOString().split('T')[0]}
                  style={{ colorScheme: 'light' }}
                  onKeyDown={e => e.preventDefault()} // Prevent manual typing
                />
              </div>
            </div>
            
            {/* Star Rating */}
            <div className="space-y-2">
              <Label htmlFor="rating">Your Rating</Label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 cursor-pointer ${
                      (rating >= star || hoverRating >= star)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-400"
                    } transition-colors`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>
            
            {/* Review */}
            <div className="space-y-2">
              <Label htmlFor="review">Your Experience</Label>
              <Textarea 
                id="review" 
                placeholder="Tell us about your experience with our catering service..."
                className="min-h-[100px]"
                required
              />
            </div>
            
            {/* Photo Upload */}
            <div className="space-y-2">
              <Label htmlFor="photo">Add a Photo (Optional, profile photo)</Label>
              <input
                ref={fileInputRef}
                id="photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={triggerFileInput}
                  className="sm:flex-1"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Photo
                </Button>
                {/* File name on its own line on small screens; truncated to avoid expanding the form */}
                {fileName && (
                  <div className="w-full sm:w-auto truncate py-2 px-3 bg-muted/20 rounded-md text-sm break-words">
                    <span className="inline-block max-w-full align-middle" aria-hidden>
                      {fileName}
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Dialog footer with submit button */}
            <DialogFooter className="pt-4">
              <Button 
                type="submit" 
                className="w-full btn-hero-primary" 
                disabled={isSubmitting || rating === 0}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>Submit Your Story</>
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};