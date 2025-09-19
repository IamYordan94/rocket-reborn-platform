import { Card, CardContent } from "@/components/ui/card";

const ProfessionalsSection = () => {
  const professionals = [
    {
      name: "Dr. Amanda Chen",
      title: "Physical Therapist, DPT",
      quote: "FitHome's equipment selection prioritizes proper form and injury prevention - exactly what I recommend to my patients.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Marcus Johnson", 
      title: "NASM Certified Trainer",
      quote: "The progressive training programs paired with quality equipment create the perfect foundation for long-term fitness success.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sarah Williams",
      title: "RYT-500 Yoga Instructor", 
      quote: "The mindful curation of yoga equipment and meditation accessories creates an authentic studio experience at home.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Trusted by Fitness Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Certified trainers and physical therapists recommend FitHome for safe, effective home fitness
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-4">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{professional.name}</h4>
                    <p className="text-sm text-muted-foreground">{professional.title}</p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground text-center italic">
                  "{professional.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;