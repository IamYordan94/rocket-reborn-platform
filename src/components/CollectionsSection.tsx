import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CollectionsSection = () => {
  const collections = [
    {
      title: "Beginner Collection",
      description: "Perfect starter kit with resistance bands, yoga mat, and dumbbells",
      price: "$299",
      space: "6x6 ft",
      image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Strength Collection", 
      description: "Power rack, barbell set, and adjustable bench for serious lifting",
      price: "$1,299",
      space: "8x10 ft",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "Yoga Collection",
      description: "Premium mats, blocks, straps, and meditation cushions",
      price: "$199", 
      space: "6x8 ft",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "Cardio Collection",
      description: "Compact treadmill, resistance bike, and jump rope set",
      price: "$899",
      space: "8x8 ft", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Curated for Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Four expertly designed collections that transform any space into your personal fitness sanctuary
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow border-border">
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={`${collection.title} setup`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground">{collection.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">{collection.price}</div>
                    <div className="text-sm text-muted-foreground">Space: {collection.space}</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;