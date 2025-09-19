import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-bg py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Born from a passion for making fitness accessible to everyone, FitHome transforms how people approach health and wellness at home.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Beginning</h2>
                <p className="text-muted-foreground mb-4">
                  FitHome started when our founder, Sarah Chen, struggled to maintain her fitness routine as a busy working mother. Between commuting, work demands, and family responsibilities, finding time for the gym became impossible.
                </p>
                <p className="text-muted-foreground">
                  She realized that millions of people faced the same challenge - wanting to stay fit but lacking the time, convenience, or resources to make it happen consistently.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Home fitness space"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Strength training equipment"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
                <p className="text-muted-foreground mb-4">
                  Working with fitness professionals, interior designers, and equipment specialists, we developed curated collections that deliver gym-quality results in any home space.
                </p>
                <p className="text-muted-foreground">
                  Each package is thoughtfully designed to maximize effectiveness while minimizing space requirements, making professional fitness accessible to everyone.
                </p>
              </div>
            </div>

            <Card className="border-border bg-hero-bg">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  To eliminate the barriers between people and their fitness goals by bringing professional-grade equipment and expert guidance directly to their homes, creating sustainable healthy habits that fit into real life.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">50,000+</div>
                  <h3 className="font-semibold text-foreground mb-2">Home Gyms Created</h3>
                  <p className="text-sm text-muted-foreground">Transforming spaces across the country</p>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">4.9★</div>
                  <h3 className="font-semibold text-foreground mb-2">Customer Rating</h3>
                  <p className="text-sm text-muted-foreground">Consistently exceeding expectations</p>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">99.2%</div>
                  <h3 className="font-semibold text-foreground mb-2">Delivery Success</h3>
                  <p className="text-sm text-muted-foreground">Reliable service you can count on</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;