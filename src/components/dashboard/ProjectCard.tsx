import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  githubUrl, 
  liveUrl, 
  featured 
}: ProjectCardProps) => {
  return (
    <Card className={`group relative overflow-hidden border transition-smooth hover:shadow-elegant ${
      featured 
        ? 'border-primary/50 bg-gradient-primary/5 shadow-glow' 
        : 'border-border/50 bg-card/50 backdrop-blur-sm'
    }`}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {featured && (
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Featured
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2 pt-2">
            {githubUrl && (
              <Button size="sm" variant="outline" className="flex-1">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" className="flex-1">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};