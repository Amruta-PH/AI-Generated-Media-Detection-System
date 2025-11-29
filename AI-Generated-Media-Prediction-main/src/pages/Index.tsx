import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, Sparkles, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full glass-card border border-primary/30">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Advanced AI Detection Technology
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Detect AI-Generated
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
              Images & Videos
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced machine learning algorithms to identify AI-generated content with precision. 
            Protect authenticity in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prediction">
              <Button size="lg" className="gradient-primary glow-purple text-lg px-8">
                Try Detection
                <Eye className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
                Login / Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl hover:glow-purple transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Image Detection</h3>
              <p className="text-muted-foreground">
                Analyze images from any source including Gemini, DALL-E, Midjourney, and more with high accuracy.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover:glow-blue transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Analysis</h3>
              <p className="text-muted-foreground">
                Advanced frame-by-frame analysis to detect AI-generated video content with precision.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover:glow-purple transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
              <p className="text-muted-foreground">
                Get detailed descriptions in English, Hindi, Kannada, Telugu, and Tamil languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 glass-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                99.9%
              </div>
              <p className="text-muted-foreground">Detection Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                
              </div>
              <p className="text-muted-foreground"></p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                5
              </div>
              <p className="text-muted-foreground">Languages Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Verify Authenticity?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start detecting AI-generated content now with our advanced detection technology.
          </p>
          <Link to="/prediction">
            <Button size="lg" className="gradient-primary glow-purple text-lg px-8">
              Get Started
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
