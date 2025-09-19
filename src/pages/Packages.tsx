import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      title: "Beginner Collection",
      description: "Perfect starter kit with resistance bands, yoga mat, and dumbbells",
      price: "$299",
      space: "6x6 ft",
      image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Resistance bands set (3 levels)",
        "Premium yoga mat",
        "Adjustable dumbbells (5-25 lbs)",
        "Exercise guide & video library",
        "30-day workout plan",
        "Free shipping & setup",
      ],
    },
    {
      title: "Strength Collection", 
      description: "Power rack, barbell set, and adjustable bench for serious lifting",
      price: "$1,299",
      space: "8x10 ft",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: [
        "Power rack with safety bars",
        "Olympic barbell & weight plates",
        "Adjustable bench (flat/incline)",
        "Pull-up/dip station",
        "Progressive strength program",
        "Expert form coaching videos",
      ],
    },
    {
      title: "Yoga Collection",
      description: "Premium mats, blocks, straps, and meditation cushions",
      price: "$199", 
      space: "6x8 ft",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: [
        "Premium yoga mat (6mm thick)",
        "Yoga blocks & straps",
        "Meditation cushion",
        "Essential oils diffuser",
        "Guided meditation library",
        "Flexibility improvement program",
      ],
    },
    {
      title: "Cardio Collection",
      description: "Compact treadmill, resistance bike, and jump rope set",
      price: "$899",
      space: "8x8 ft", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: [
        "Compact folding treadmill",
        "Magnetic resistance bike",
        "Premium jump rope set",
        "Heart rate monitor",
        "HIIT training programs",
        "Cardio tracking app",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Perfect Package</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each collection is expertly curated to deliver professional results in your space. All packages include equipment, training programs, and ongoing support.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden border-border">
                <div className="relative h-64">
                  <img
                    src={pkg.image}
                    alt={`${pkg.title} setup`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.price}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{pkg.title}</CardTitle>
                  <p className="text-muted-foreground">{pkg.description}</p>
                  <div className="text-sm text-muted-foreground">Space Required: {pkg.space}</div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1">
                      Get Started - {pkg.price}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;