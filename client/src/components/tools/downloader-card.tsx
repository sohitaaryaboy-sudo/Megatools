import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { downloadContent } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface DownloaderCardProps {
  platform: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export function DownloaderCard({ platform, icon, title, description, color, bgColor }: DownloaderCardProps) {
  const [url, setUrl] = useState("");
  const { toast } = useToast();

  const downloadMutation = useMutation({
    mutationFn: (url: string) => downloadContent(platform.toLowerCase(), url),
    onSuccess: (data) => {
      toast({
        title: "Download Ready!",
        description: `${data.title || data.message}`,
      });
    },
    onError: (error) => {
      toast({
        title: "Download Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleDownload = () => {
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }
    downloadMutation.mutate(url);
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
            type="url"
            placeholder={`Enter ${platform} URL...`}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            data-testid={`input-${platform.toLowerCase()}-url`}
          />
          <Button 
            onClick={handleDownload}
            disabled={downloadMutation.isPending}
            className={`w-full ${color.replace('text-', 'bg-').replace('-600', '-600')} text-white hover:opacity-90 transition-colors`}
            data-testid={`button-download-${platform.toLowerCase()}`}
          >
            {downloadMutation.isPending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Download
              </>
            )}
          </Button>
        </div>
        
        {downloadMutation.data && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-green-700 text-sm font-medium">Ready!</span>
              {downloadMutation.data.downloadUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={downloadMutation.data.downloadUrl} download data-testid={`link-download-${platform.toLowerCase()}`}>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
