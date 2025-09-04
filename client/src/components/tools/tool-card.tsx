import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  onUse: () => void;
  children?: React.ReactNode;
}

export function ToolCard({ icon, title, description, color, bgColor, onUse, children }: ToolCardProps) {
  return (
    <Card className="tool-card h-full">
      <CardContent className="p-6">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
          <i className={`${icon} ${color} text-xl`}></i>
        </div>
        <h4 className="font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {children || (
          <Button 
            onClick={onUse}
            className={`w-full ${color.replace('text-', 'bg-').replace('-600', '-600')} text-white hover:opacity-90 transition-colors`}
            data-testid={`button-use-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <i className={`${icon} mr-2`}></i>
            Use Tool
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
