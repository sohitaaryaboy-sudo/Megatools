import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, Wand2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { generateContent } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface GeneratorCardProps {
  tool: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  inputPlaceholder: string;
  inputField?: string;
}

export function GeneratorCard({ 
  tool, 
  icon, 
  title, 
  description, 
  color, 
  bgColor, 
  inputPlaceholder,
  inputField = "topic"
}: GeneratorCardProps) {
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const generateMutation = useMutation({
    mutationFn: (inputValue: string) => generateContent(tool, { [inputField]: inputValue }),
    onSuccess: (data) => {
      toast({
        title: "Generated Successfully!",
        description: "Your content is ready to use",
      });
    },
    onError: (error) => {
      toast({
        title: "Generation Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleGenerate = () => {
    if (!input.trim()) {
      toast({
        title: "Input Required",
        description: `Please enter a ${inputField}`,
        variant: "destructive",
      });
      return;
    }
    generateMutation.mutate(input);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
    });
  };

  return (
    <Card className="tool-card h-full">
      <CardContent className="p-6">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
          <i className={`${icon} ${color} text-xl`}></i>
        </div>
        <h4 className="font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="space-y-3">
          <Input
            type="text"
            placeholder={inputPlaceholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            data-testid={`input-${tool}`}
          />
          <Button 
            onClick={handleGenerate}
            disabled={generateMutation.isPending}
            className={`w-full ${color.replace('text-', 'bg-').replace('-600', '-600')} text-white hover:opacity-90 transition-colors`}
            data-testid={`button-generate-${tool}`}
          >
            {generateMutation.isPending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 mr-2" />
                Generate
              </>
            )}
          </Button>
        </div>
        
        {generateMutation.data && (
          <div className="mt-4 space-y-2">
            <div className="p-3 bg-muted rounded-lg">
              {Array.isArray(generateMutation.data.result) ? (
                <div className="space-y-2">
                  {generateMutation.data.result.map((item: string, index: number) => (
                    <div key={index} className="flex items-center justify-between">
                      <Badge variant="outline" className="mr-2">{item}</Badge>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => copyToClipboard(item)}
                        data-testid={`button-copy-${tool}-${index}`}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <Textarea 
                    value={generateMutation.data.result} 
                    readOnly 
                    className="min-h-[100px] resize-none"
                    data-testid={`textarea-result-${tool}`}
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="mt-2"
                    onClick={() => copyToClipboard(generateMutation.data.result)}
                    data-testid={`button-copy-${tool}`}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
