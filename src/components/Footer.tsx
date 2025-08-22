import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
const Footer = () => {
  return <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent">
                ARC
              </div>
              <div className="text-sm text-muted-foreground">
                Archon Roadster Creation
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pioneering the future of automotive excellence through innovative 
              engineering and uncompromising performance.
            </p>
            <Button variant="premium" size="lg">
              Schedule Test Drive
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold font-display text-foreground mb-4">Vehicle</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Performance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Customization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-display text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold font-display text-foreground mb-4">Stay Connected</h4>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on ARC development and exclusive access to events.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" aria-label="Instagram">
                <Instagram size={18} />
              </Button>
              <Button variant="outline" size="icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </Button>
              <Button variant="outline" size="icon" aria-label="Twitter">
                <Twitter size={18} />
              </Button>
              <Button variant="outline" size="icon" aria-label="YouTube">
                <Youtube size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 Archon Motors. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;