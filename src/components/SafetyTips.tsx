import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Smartphone, Users, Home, Car, Globe } from "lucide-react";

const SafetyTips = () => {
  const safetyCategories = [
    {
      id: "personal",
      title: "Personal Safety",
      icon: Users,
      tips: [
        "Trust your instincts - if something feels wrong, it probably is",
        "Stay alert and aware of your surroundings at all times",
        "Keep your phone charged and easily accessible",
        "Share your location with trusted friends or family",
        "Learn basic self-defense techniques",
        "Carry a whistle or personal alarm device"
      ]
    },
    {
      id: "home",
      title: "Home Security",
      icon: Home,
      tips: [
        "Always lock doors and windows, even when home",
        "Install quality deadbolts and security systems",
        "Use peepholes before opening doors to strangers",
        "Keep spare keys with trusted neighbors, not hidden outside",
        "Establish a safety plan with family members",
        "Consider security cameras for entry points"
      ]
    },
    {
      id: "travel",
      title: "Travel Safety",
      icon: Car,
      tips: [
        "Plan your route in advance and share it with someone",
        "Keep your car doors locked and windows up",
        "Park in well-lit, populated areas",
        "Check your backseat before getting in your car",
        "Use ride-sharing apps instead of walking alone at night",
        "Carry emergency supplies in your vehicle"
      ]
    },
    {
      id: "digital",
      title: "Online Safety",
      icon: Globe,
      tips: [
        "Use strong, unique passwords for all accounts",
        "Be cautious about sharing personal information online",
        "Check privacy settings on social media regularly",
        "Be wary of meeting online contacts in person",
        "Use secure networks for sensitive activities",
        "Report cyberbullying and online harassment"
      ]
    }
  ];

  return (
    <section id="safety-tips" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Safety Tips & Guidelines
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential safety information organized by category to help you stay protected 
            in various situations.
          </p>
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {safetyCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {safetyCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TabsContent key={category.id} value={category.id}>
                <Card className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary rounded-full">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.tips.map((tip, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground">{tip}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default SafetyTips;