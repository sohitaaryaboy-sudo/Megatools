import { Link } from "wouter";

export function Footer() {
  const toolLinks = [
    "YouTube Downloader",
    "Instagram Downloader", 
    "TikTok Downloader",
    "Title Generator",
    "Hashtag Generator"
  ];

  const companyLinks = [
    "About Us",
    "Contact", 
    "Privacy Policy",
    "Terms of Service",
    "DMCA"
  ];

  const supportLinks = [
    "Help Center",
    "FAQ",
    "Report Bug", 
    "Feature Request",
    "API Documentation"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6" data-testid="link-footer-home">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <i className="fas fa-tools text-primary-foreground"></i>
              </div>
              <h3 className="text-xl font-bold">MegaToolsX</h3>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              The ultimate social media tools platform. 23+ free tools for content creators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-background transition-colors" data-testid="link-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors" data-testid="link-instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors" data-testid="link-youtube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors" data-testid="link-discord">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Popular Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {toolLinks.map((tool, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-background transition-colors"
                    data-testid={`link-footer-tool-${index}`}
                  >
                    {tool}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-background transition-colors"
                    data-testid={`link-footer-company-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-background transition-colors"
                    data-testid={`link-footer-support-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 MegaToolsX. All rights reserved. Built with ❤️ for creators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
