import { Button } from "@/components/ui/button";
import { Play, CircleOff, Infinity, Smartphone, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-bounce-gentle mb-8">
            <div className="w-20 h-20 gradient-bg rounded-2xl mx-auto flex items-center justify-center mb-6">
              <i className="fas fa-rocket text-primary-foreground text-3xl"></i>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Ultimate <span className="text-primary">Social Media</span> Tools Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Access 23+ professional tools for free. Download content, generate viral ideas, analyze performance, and grow your social media presence with our comprehensive toolkit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
              data-testid="button-start-tools"
              onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2" />
              Start Using Tools
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-background border border-border text-foreground px-8 py-4 text-lg font-semibold hover:bg-muted"
              data-testid="button-learn-more"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CircleOff className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Infinity className="text-emerald-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Unlimited Usage</h3>
              <p className="text-muted-foreground text-sm">All tools completely free with no usage limits</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mobile Optimized</h3>
              <p className="text-muted-foreground text-sm">Perfect experience on all devices</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Zap className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">Instant results with optimized performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
