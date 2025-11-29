import Navigation from "@/components/Navigation";
import { Shield, Eye, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DetectAI</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Leading the way in AI-generated content detection
          </p>

          <div className="glass-card p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              In an era where AI-generated content is becoming increasingly sophisticated, 
              we provide cutting-edge technology to distinguish between authentic and AI-created 
              images and videos. Our mission is to promote digital authenticity and trust.
            </p>
            <p className="text-muted-foreground">
              Using advanced deep learning algorithms and neural network analysis, we can detect 
              subtle patterns and artifacts that distinguish AI-generated content from real photographs 
              and videos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Detection</h3>
              <p className="text-muted-foreground">
                Our AI models are trained on millions of images and videos to provide highly accurate 
                detection across multiple AI generation platforms.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-muted-foreground">
                Your uploaded content is processed securely and never stored longer than necessary. 
                We prioritize your privacy and data security.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-muted-foreground">
                Get results in seconds with our optimized detection pipeline that balances speed 
                and accuracy.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Join thousands of users worldwide who rely on our platform to verify content 
                authenticity daily.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Technology</h2>
            <p className="text-muted-foreground mb-4">
              Our detection system uses state-of-the-art convolutional neural networks (CNNs) and 
              transformer-based architectures to analyze:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Pixel-level artifacts and inconsistencies
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Frequency domain patterns unique to AI generation
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Temporal consistency in video frames
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Metadata and EXIF data analysis
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Cross-platform AI signature recognition
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
