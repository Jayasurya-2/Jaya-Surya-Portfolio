
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Github, Linkedin, Mail, Code2 } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-400">
                <Zap className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-medium">Fresher Developer</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent block">
                  Jaya Surya Puralasetti
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                 Enthusiastic Software Developer with hands-on experience in Java, JavaScript, RESTful APIs, and database systems. 
                 Adept at building full-stack web applications, integrating third-party APIs, and solving real-world problems. 
                 Eager to contribute to agile teams and deliver impactful solutions through clean, maintainable code.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Jayasurya-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300">
                  <Github className="w-6 h-6" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/jaya-surya-puralasetti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </Button>
              </a>
              <a
                href="mailto:jayasuryapuralasetti@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-float group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/PJS Profile (2).jpg.png"
                  alt="Jaya Surya Puralasetti"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-medium animate-pulse">
                Open to work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
