import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, MessageCircle, ExternalLink } from "lucide-react";

const Footer = () => {
  const resources = [
    {
      name: "National Domestic Violence Hotline",
      contact: "1-800-799-7233",
      website: "https://www.thehotline.org",
      description: "24/7 confidential support"
    },
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      website: "https://www.crisistextline.org",
      description: "Free 24/7 crisis support via text"
    },
    {
      name: "RAINN National Sexual Assault Hotline",
      contact: "1-800-656-4673",
      website: "https://www.rainn.org",
      description: "Free, confidential support"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Resources */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Emergency Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">{resource.name}</h4>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span className="font-mono font-bold text-secondary">{resource.contact}</span>
                  </div>
                  <p className="text-sm text-white/80">{resource.description}</p>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(resource.website, '_blank')}
                  >
                    Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Site Info */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6" />
              <div>
                <div className="font-bold text-lg">SafeSpace</div>
                <div className="text-sm text-white/80">Empowering women through safety resources</div>
              </div>
            </div>
            
            <div className="text-center md:text-right text-sm text-white/80">
              <p className="mb-2">
                This website provides information and resources for educational purposes.
              </p>
              <p>
                For immediate emergencies, always call 911 or your local emergency services.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 mt-6 text-center text-sm text-white/60">
          <p>&copy; 2024 SafeSpace. Created to support women's safety and empowerment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;