
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey and passion for technology
          </p>
        </div>
        
        <Card className="bg-gray-800/70 border-gray-700 backdrop-blur-sm hover:bg-gray-800/90 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  As a recent Computer Science graduate, I'm passionate about creating 
                  digital solutions that make a difference. My journey started with curiosity 
                  about how websites work and has evolved into a deep love for coding and 
                  problem-solving.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I enjoy learning new technologies, building projects, and collaborating 
                  with others. I'm excited to begin my career and contribute to innovative 
                  projects while continuously growing my skills.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Open Source', 'AI/ML'].map((interest) => (
                      <Badge key={interest} className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors duration-300">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Goals</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Build impactful web applications</li>
                    <li>• Contribute to open-source projects</li>
                    <li>• Master full-stack development</li>
                    <li>• Learn cloud technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
