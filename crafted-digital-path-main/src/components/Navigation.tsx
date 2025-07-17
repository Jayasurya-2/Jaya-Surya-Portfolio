
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code2, User, GraduationCap, FolderOpen, Zap, Phone } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Jaya Surya</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', icon: <User className="w-4 h-4" /> },
              { name: 'About', icon: <User className="w-4 h-4" /> },
              { name: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
              { name: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
              { name: 'Skills', icon: <Zap className="w-4 h-4" /> },
              { name: 'Contact', icon: <Phone className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-blue-400 hover:scale-105 ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-gray-300'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
