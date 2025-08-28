import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "UI/UX Design", level: 85, color: "bg-warning" },
  { name: "Frontend Development (HTML/CSS, Laravel)", level: 80, color: "bg-info" },
  { name: "Programming Languages (C, Java, Python, C#)", level: 70, color: "bg-primary" },
  { name: "Automation with n8n", level: 65, color: "bg-success" },
  { name: "Microsoft Office (Excel, Word, PowerPoint)", level: 90, color: "bg-destructive" },
  { name: "Time Management & Organization", level: 90, color: "bg-warning" },
];

export const SkillsOverview = () => {
  return (
    <Card className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground">Skills Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress 
              value={skill.level} 
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};