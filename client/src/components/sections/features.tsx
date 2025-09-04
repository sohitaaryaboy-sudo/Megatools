import { Card, CardContent } from "@/components/ui/card";
import { Infinity, Smartphone, Shield, Zap, Globe, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Infinity,
      title: "100% Free Forever",
      description: "All 23+ tools are completely free with unlimited usage. No hidden fees, no premium plans, no restrictions.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect experience on smartphones, tablets, and desktops. All tools work flawlessly across devices.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your data is protected with enterprise-grade security. We don't store your personal content.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with instant results. No waiting, no delays - just fast, efficient tools.",
    },
    {
      icon: Globe,
      title: "All Platforms",
      description: "Support for YouTube, Instagram, TikTok, Twitter, Facebook, LinkedIn, Pinterest, and Reddit.",
    },
    {
      icon: Users,
      title: "Creator-Focused",
      description: "Built specifically for content creators, influencers, and social media managers.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose MegaToolsX?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for creators, by creators. Everything you need to succeed on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-8 border border-border" data-testid={`card-feature-${index}`}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-primary-foreground w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
