import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const StatsCard = ({ title, value, subtitle, icon: Icon, trend }: StatsCardProps) => {
  return (
    <Card className="relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-card hover:shadow-elegant transition-smooth">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <div className="rounded-lg bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        {trend && (
          <div className="mt-4 flex items-center text-xs">
            <span className={`font-medium ${trend.isPositive ? 'text-success' : 'text-destructive'}`}>
              {trend.isPositive ? '+' : ''}{trend.value}%
            </span>
            <span className="ml-1 text-muted-foreground">from last month</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-5 transition-opacity" />
      </CardContent>
    </Card>
  );
};