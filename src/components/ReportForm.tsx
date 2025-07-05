import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, MapPin, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    description: "",
    date: "",
    time: "",
    anonymous: true
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a frontend-only form - in a real app, this would send to a backend
    toast({
      title: "Report Submitted",
      description: "Thank you for your report. This information helps improve community safety awareness.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      type: "",
      location: "",
      description: "",
      date: "",
      time: "",
      anonymous: true
    });
  };

  return (
    <section id="report" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Report an Incident
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Help build community awareness by sharing information about unsafe locations 
            or incidents. Your privacy is protected.
          </p>
          
          {/* Important Disclaimer */}
          <div className="bg-secondary/20 border border-secondary rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-emergency mt-0.5 flex-shrink-0" />
              <div className="text-sm text-foreground">
                <strong>Important:</strong> This form is for community awareness and data collection only. 
                For immediate emergencies, please call 911 or your local emergency services.
              </div>
            </div>
          </div>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Incident Type */}
              <div className="space-y-2">
                <Label htmlFor="type">Type of Incident</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select incident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="harassment">Harassment</SelectItem>
                    <SelectItem value="unsafe-area">Unsafe Area/Location</SelectItem>
                    <SelectItem value="suspicious-activity">Suspicious Activity</SelectItem>
                    <SelectItem value="poor-lighting">Poor Lighting/Infrastructure</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="Street address or area description"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <Label htmlFor="time">Time (approximate)</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Textarea
                  id="description"
                  placeholder="Please provide details about the incident or unsafe condition..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="pl-10 min-h-[120px]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-sm text-muted-foreground">
                All reports are submitted anonymously and used for community safety awareness.
              </div>
              
              <Button type="submit" variant="accent" size="lg">
                Submit Report
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ReportForm;