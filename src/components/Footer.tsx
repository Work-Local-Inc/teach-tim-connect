import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Footer = () => {
  return <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
              <span className="text-lg font-bold text-foreground">Tim The Teacher</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering adult learners with decades of teaching experience in technical, 
              professional, and life skills development.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary text-muted-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary text-muted-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Tim
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Training Services
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Educational Blog
              </Link>
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Free Resources
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground">Corporate Training</span>
              <span className="text-sm text-muted-foreground">Technical Skills</span>
              <span className="text-sm text-muted-foreground">Communication Skills</span>
              <span className="text-sm text-muted-foreground">Industry Certifications</span>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get weekly educational content and training tips.
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="text-sm bg-background border-border text-foreground" />
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>tim@worklocal.ca</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tim The Teacher. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;