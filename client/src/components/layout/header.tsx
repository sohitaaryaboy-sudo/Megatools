import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <i className="fas fa-tools text-primary-foreground text-lg"></i>
              </div>
              <h1 className="text-xl font-bold text-foreground">MegaToolsX</h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#tools" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-tools">
                Tools
              </a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-features">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-pricing">
                Pricing
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact">
                Contact
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-get-started">
                Get Started
              </Button>
            </nav>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
