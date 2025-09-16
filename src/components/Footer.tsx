import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* ARC Description */}
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
              Pioneering the future of automotive excellence through innovative engineering and uncompromising performance.
            </p>
          </div>

          {/* Vehicle & Company Links */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold font-display text-foreground mb-4">Vehicle</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors cursor-target">Performance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors cursor-target">Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors cursor-target">Technology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors cursor-target">Customization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-display text-foreground mb-4 cursor-target">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                {/* ✅ About Us same tab me open hoga */}
                <li>
                  <a 
                    href="/about.html" 
                    className="hover:text-primary transition-colors cursor-target"
                  >
                    About Us
                  </a>
                </li>
                <li><a href="#" className="hover:text-primary transition-colors cursor-target">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors cursor-target">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors cursor-target">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Team Members */}
          <div className="space-y-6">
            <h4 className="font-semibold font-display text-foreground mb-4">Meet the Creators of ARC</h4>
            
            {/* Member 1 */}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-medium">Saksham Wadhankar | Founder</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" aria-label="Instagram" onClick={() => window.open('https://instagram.com/saksham_wadhankar', '_self')} className="cursor-target">
                  <Instagram size={18} />
                </Button>
                <Button variant="outline" size="icon" aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/saksham-wadhankar-b0775329a', '_self')} className="cursor-target">
                  <Linkedin size={18} />
                </Button>
                <Button variant="outline" size="icon" aria-label="Twitter" onClick={() => window.open('https://twitter.com/Sakshamwadhanka', '_self')} className="cursor-target">
                  <Twitter size={18} />
                </Button>
              </div>
            </div>

            {/* Member 2 */}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-medium">Om Rai | CEO</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" aria-label="Instagram" onClick={() => window.open('https://instagram.com/omrai_profile', '_self')} className="cursor-target">
                  <Instagram size={18} />
                </Button>
                <Button variant="outline" size="icon" aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/omrai_profile', '_self')} className="cursor-target">
                  <Linkedin size={18} />
                </Button>
                <Button variant="outline" size="icon" aria-label="Twitter" onClick={() => window.open('https://twitter.com/omrai_profile', '_self')} className="cursor-target">
                  <Twitter size={18} />
                </Button>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
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
    </footer>
  );
};

export default Footer;
