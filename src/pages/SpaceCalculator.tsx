import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const SpaceCalculator = () => {
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" });
  const [roomType, setRoomType] = useState("");
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const calculateSpace = () => {
    const area = parseFloat(dimensions.length) * parseFloat(dimensions.width);
    const newRecommendations = [];

    if (area >= 36) { // 6x6 or larger
      newRecommendations.push({
        title: "Beginner Collection",
        suitability: "Perfect Fit",
        reason: "Ideal for starting your fitness journey",
        price: "$299"
      });
    }

    if (area >= 48) { // 6x8 or larger
      newRecommendations.push({
        title: "Yoga Collection", 
        suitability: "Perfect Fit",
        reason: "Excellent space for yoga and meditation",
        price: "$199"
      });
    }

    if (area >= 64) { // 8x8 or larger
      newRecommendations.push({
        title: "Cardio Collection",
        suitability: "Great Fit", 
        reason: "Good space for cardio equipment",
        price: "$899"
      });
    }

    if (area >= 80) { // 8x10 or larger
      newRecommendations.push({
        title: "Strength Collection",
        suitability: "Perfect Fit",
        reason: "Optimal space for strength training",
        price: "$1,299"
      });
    }

    setRecommendations(newRecommendations);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Space</span> Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Find the perfect equipment collection for your available space. Get personalized recommendations based on your room dimensions.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Enter Your Space Dimensions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="length">Length (feet)</Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="10"
                      value={dimensions.length}
                      onChange={(e) => setDimensions(prev => ({ ...prev, length: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="width">Width (feet)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="8"
                      value={dimensions.width}
                      onChange={(e) => setDimensions(prev => ({ ...prev, width: e.target.value }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (feet)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="8"
                      value={dimensions.height}
                      onChange={(e) => setDimensions(prev => ({ ...prev, height: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="room-type">Room Type</Label>
                    <Select value={roomType} onValueChange={setRoomType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bedroom">Bedroom</SelectItem>
                        <SelectItem value="garage">Garage</SelectItem>
                        <SelectItem value="basement">Basement</SelectItem>
                        <SelectItem value="spare-room">Spare Room</SelectItem>
                        <SelectItem value="living-room">Living Room</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Space Summary</h4>
                    {dimensions.length && dimensions.width ? (
                      <>
                        <p className="text-sm text-muted-foreground">
                          Area: {parseFloat(dimensions.length) * parseFloat(dimensions.width)} sq ft
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Dimensions: {dimensions.length}' × {dimensions.width}' × {dimensions.height || "8"}'
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">Enter dimensions to see summary</p>
                    )}
                  </div>
                </div>
              </div>

              <Button 
                onClick={calculateSpace} 
                className="w-full"
                disabled={!dimensions.length || !dimensions.width}
              >
                Calculate My Recommendations
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Recommended Collections</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-foreground">{rec.title}</h3>
                        <span className="text-2xl font-bold text-primary">{rec.price}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-success">{rec.suitability}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{rec.reason}</p>
                      </div>
                      
                      <div className="mt-4 flex gap-3">
                        <Button className="flex-1">Select Package</Button>
                        <Button variant="outline" className="flex-1">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SpaceCalculator;