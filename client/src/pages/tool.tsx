import { useRoute } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Tool() {
  const [match, params] = useRoute("/tool/:toolName");
  
  if (!match) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground capitalize">
            {params?.toolName?.replace(/-/g, ' ')} Tool
          </h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Tool Interface</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This is a dedicated page for the {params?.toolName} tool. 
              The tool functionality is integrated into the main homepage for better user experience.
            </p>
            <Link href="/">
              <Button data-testid="button-use-tool-homepage">
                Use Tool on Homepage
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
