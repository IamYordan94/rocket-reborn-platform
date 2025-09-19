import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Busy Mom, NYC",
      quote: "Lost 25 pounds in 4 months with the Beginner Collection. Having everything at home meant no excuses - I could work out during naptime!",
      result: "-25 lbs in 4 months",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Mike R.",
      role: "Software Engineer, Austin", 
      quote: "The Strength Collection transformed my garage into a professional gym. Gained 15 lbs of muscle and saved thousands on gym memberships.",
      result: "+15 lbs muscle gain",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Lisa K.",
      role: "Yoga Instructor, Portland",
      quote: "The Yoga Collection helped me create the perfect meditation space. My flexibility improved 40% and stress levels dropped significantly.",
      result: "40% flexibility gain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Real Transformations, Real Homes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how our customers achieved their fitness goals in the comfort of their own spaces
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile photo`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="text-lg font-semibold text-success">
                  {testimonial.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">99.2%</div>
            <div className="text-sm text-muted-foreground">Delivery Reliability</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Home Gyms Created</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary">5 Year</div>
            <div className="text-sm text-muted-foreground">Equipment Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;