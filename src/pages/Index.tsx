import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { SkillsOverview } from "@/components/dashboard/SkillsOverview";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { Code, Users, Award, Coffee } from "lucide-react";

// Import generated images
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskManager from "@/assets/project-taskmanager.jpg";

const Index = () => {
  const stats = [
    {
      title: "Projects Completed",
      value: "24",
      subtitle: "In the last 2 years",
      icon: Code,
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Happy Clients",
      value: "18",
      subtitle: "5-star ratings",
      icon: Users,
      trend: { value: 8, isPositive: true }
    },
    {
      title: "Certifications",
      value: "6",
      subtitle: "Technical certificates",
      icon: Award,
      trend: { value: 2, isPositive: true }
    },
    {
      title: "Coffee Cups",
      value: "∞",
      subtitle: "Fuel for coding",
      icon: Coffee
    }
  ];

  const projects = [
    {
      title: "Portfolio Dashboard",
      description: "A modern portfolio dashboard built with React and TypeScript. Features dark theme, responsive design, and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      image: projectDashboard,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: projectEcommerce,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      image: projectTaskManager,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="animate-fade-in">
          <DashboardHeader />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {stats.map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 100}ms` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Section */}
          <div className="lg:col-span-1 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <SkillsOverview />
          </div>

          {/* Projects Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-slide-up" style={{ animationDelay: "500ms" }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={project.title} className="animate-slide-up" style={{ animationDelay: `${600 + index * 100}ms` }}>
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;