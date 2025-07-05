import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Users, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const { toast } = useToast();
  
  const emergencyContacts = [
    { name: "Emergency Services", number: "911", icon: Phone },
    { name: "National Domestic Violence Hotline", number: "1-800-799-7233", icon: MessageCircle },
    { name: "Crisis Text Line", number: "Text HOME to 741741", icon: MessageCircle },
  ];

  const shareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationMessage = `I'm sharing my location with you for safety: https://maps.google.com/maps?q=${latitude},${longitude}`;
          
          if (navigator.share) {
            navigator.share({
              title: 'My Current Location',
              text: locationMessage,
            });
          } else {
            navigator.clipboard.writeText(locationMessage);
            toast({
              title: "Location copied!",
              description: "Location link copied to clipboard. Share it with your trusted contacts.",
            });
          }
        },
        () => {
          toast({
            title: "Location access denied",
            description: "Please enable location access to share your location.",
            variant: "destructive",
          });
        }
      );
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Empowering women"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Safety, <span className="text-secondary">Our Priority</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Empowering women with resources, support, and tools for personal safety. 
            You are not alone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="emergency" size="lg" className="text-lg px-8 py-4">
              Get Help Now
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Safety Resources
            </Button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {emergencyContacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card key={index} className="p-6 bg-white/95 backdrop-blur-sm hover:bg-white transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary rounded-full">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{contact.name}</h3>
                      <p className="text-primary font-mono font-bold">{contact.number}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;