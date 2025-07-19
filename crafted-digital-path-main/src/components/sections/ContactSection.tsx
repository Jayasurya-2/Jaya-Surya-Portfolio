
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss opportunities or potential collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-gray-800/70 border-gray-700 backdrop-blur-sm hover:bg-gray-800/90 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  I'm actively looking for entry-level opportunities and would love to 
                  hear about exciting projects or roles where I can contribute and grow.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">jayasuryapuralasetti@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-white font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300">
                      <a
                        href="https://github.com/Jayasurya-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center"
                      >
                        <Github className="w-5 h-5" />
                      </a></Button>
                    <Button variant="outline" size="icon" className="border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300">
                      <a
                        href="https://www.linkedin.com/in/jaya-surya-puralasetti/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="/JayaSuryaPuralasetti.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Resume"
                        download
                      >
                        <Download className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
