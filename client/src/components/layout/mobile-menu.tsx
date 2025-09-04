import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <i className="fas fa-tools text-primary-foreground"></i>
              </div>
              <span className="font-bold text-foreground">MegaToolsX</span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav className="space-y-4 mt-8">
          <a 
            href="#tools" 
            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={onClose}
            data-testid="link-mobile-tools"
          >
            Tools
          </a>
          <a 
            href="#features" 
            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={onClose}
            data-testid="link-mobile-features"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={onClose}
            data-testid="link-mobile-pricing"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={onClose}
            data-testid="link-mobile-contact"
          >
            Contact
          </a>
          <Button 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
            onClick={onClose}
            data-testid="button-mobile-get-started"
          >
            Get Started
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
