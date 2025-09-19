import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Heart, Zap, Home } from "lucide-react";

const HeroSection = () => {
  const fitnessGoals = [
    { icon: Dumbbell, label: "Build Strength", color: "text-primary" },
    { icon: Heart, label: "Lose Weight", color: "text-red-500" },
    { icon: Zap, label: "Improve Flexibility", color: "text-orange-500" },
    { icon: Home, label: "Save Space", color: "text-success" },
  ];

  return (
    <section className="bg-hero-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your home, your gym, your{" "}
                <span className="text-primary">transformation</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Professional fitness results in your personal space. Curated equipment packages with expert training programs designed for real homes and busy lives.
              </p>
            </div>

            {/* Fitness Goals */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">What's your fitness goal?</h3>
              <div className="grid grid-cols-2 gap-3">
                {fitnessGoals.map((goal, index) => (
                  <Card key={index} className="p-4 cursor-pointer hover:shadow-md transition-shadow border-border">
                    <div className="flex items-center space-x-3">
                      <goal.icon className={`h-5 w-5 ${goal.color}`} />
                      <span className="text-sm font-medium text-foreground">{goal.label}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Packages
              </Button>
              <Button size="lg" variant="outline">
                Calculate My Space
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image with Overlay */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Modern home gym setup with equipment and natural lighting"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Space Calculator Overlay */}
              <Card className="absolute bottom-4 right-4 p-4 bg-background/95 backdrop-blur-sm border-border">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Space Calculator</h4>
                  <p className="text-sm text-muted-foreground">Find perfect equipment for your space</p>
                  <Button size="sm" className="w-full">
                    Try Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;