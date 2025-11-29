import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Star, Send } from "lucide-react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.feedback) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a rating",
        variant: "destructive",
      });
      return;
    }

    // In production, this would send to your backend
    toast({
      title: "Thank You!",
      description: "Your feedback has been submitted successfully",
    });

    // Reset form
    setFormData({ name: "", email: "", feedback: "" });
    setRating(0);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Feedback</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 text-center">
            Help us improve DetectAI with your valuable insights
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Submit Feedback</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div>
                  <Label>Rating</Label>
                  <div className="flex gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || rating)
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    placeholder="Tell us about your experience..."
                    rows={6}
                    className="bg-background/50 border-border/50 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary glow-purple">
                  Submit Feedback
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Why Your Feedback Matters</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Helps us improve detection accuracy
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Guides new feature development
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Enhances user experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Identifies and resolves issues faster
                  </li>
                </ul>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Improvements</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border/50">
                    <p className="font-medium mb-1">Enhanced Video Detection</p>
                    <p className="text-sm text-muted-foreground">
                      Based on user feedback, we've improved our video analysis algorithms
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <p className="font-medium mb-1">Multi-Language Support</p>
                    <p className="text-sm text-muted-foreground">
                      Added support for 5 languages as requested by our community
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Faster Processing</p>
                    <p className="text-sm text-muted-foreground">
                      Reduced detection time by 40% through optimization
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <h3 className="text-xl font-semibold mb-2">Community Stats</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">4.8/5</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-secondary">2,500+</p>
                    <p className="text-sm text-muted-foreground">Reviews</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
