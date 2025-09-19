import { Button } from "@/components/ui/button";
import { TreePine } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <TreePine className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">FitHome</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/packages" className="text-muted-foreground hover:text-primary transition-colors">
              Packages
            </a>
            <a href="/space-calculator" className="text-muted-foreground hover:text-primary transition-colors">
              Space Calculator
            </a>
            <a href="/our-story" className="text-muted-foreground hover:text-primary transition-colors">
              Our Story
            </a>
            <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
          </div>

          {/* Get Started Button */}
          <Button variant="default" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;