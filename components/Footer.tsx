import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl">
              <span>Nelsa</span>
              <span className="text-gray-400"> Project Consultants LLP</span>
            </div>
            <p className="text-gray-400">
              Leading real estate project management consultancy with over 20 years of excellence 
              in delivering exceptional projects across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Development Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Construction Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feasibility Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Due Diligence</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News & Updates</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nelsaprojects.com</span>
              </div>
              <div className="text-sm">
                123 Business District,<br />
                Mumbai - 400001,<br />
                Maharashtra, India
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Nelsa Project Consultants LLP. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
