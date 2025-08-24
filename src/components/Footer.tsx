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
              At ARC, we are shaping the future of automotive excellence with innovative engineering and cutting-edge technology. Every vehicle reflects our commitment to performance, precision, and design. Our mission is to deliver an unmatched driving experience that inspires and excites
            </p>
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
            <h4 className="font-semibold font-display text-foreground mb-4">Meet the Creators of ARC</h4>
    
            <p className="text-muted-foreground mb-6">
              Saksham Wadhankar | Founder

            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" aria-label="Instagram" onClick={() => window.open('https://instagram.com/saksham_wadhankar', '_blank')}>
                <Instagram size={18} />
              </Button>
              <Button variant="outline" size="icon" aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/saksham-wadhankar-b0775329a', '_blank')}>
                <Linkedin size={18} />
              </Button>
              <Button variant="outline" size="icon" aria-label="Twitter" onClick={() => window.open('https://twitter.com/archonmotors', '_blank')}>
                <Twitter size={18} />
              </Button>
            </div>
            <p className="text-muted-foreground mb-6">
            </p>
            <p className="text-muted-foreground mb-6">

              Om Rai |  CEO
            </p>
                        <div className="flex space-x-4">
              <Button variant="outline" size="icon" aria-label="Instagram" onClick={() => window.open('https://instagram.com/saksham_wadhankar', '_blank')}>
                <Instagram size={18} />
              </Button>
              <Button variant="outline" size="icon" aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/saksham-wadhankar-b0775329a', '_blank')}>
                <Linkedin size={18} />
              </Button>
              <Button variant="outline" size="icon" aria-label="Twitter" onClick={() => window.open('https://twitter.com/archonmotors', '_blank')}>
                <Twitter size={18} />
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