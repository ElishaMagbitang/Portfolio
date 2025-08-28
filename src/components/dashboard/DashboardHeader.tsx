import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-primary/10 p-8 shadow-card">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
        <Avatar className="h-24 w-24 border-4 border-primary/20 shadow-glow">
          <AvatarImage src="/elishajhoyce.jpg" />
          <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">JS</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-foreground">Elisha Jhoyce Magbitang</h1>
              <Badge className="bg-success/20 text-success border-success/30 animate-glow">
                Available for work
              </Badge>
            </div>
            <p className="text-xl text-primary font-medium">UI/UX Design | Project Manager </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Cabangaan, Silang, Cavite
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                magbitangelishajhoyce@gmail.com
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl">
            I am proficient in UI/UX design and frontend development, skilled in tools like Figma, Canva, HTML/CSS, and Laravel. 
            I have experience building web systems, health apps, and automation workflows with n8n, supported by knowledge of C, Java, Python, and C#. 
            I also bring strong communication, adaptability, and teamwork skills from leadership and customer service experiences.
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button className="shadow-elegant">
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </Button>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};