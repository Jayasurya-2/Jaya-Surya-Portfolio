
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Star, Award, Palette, Database, Settings, Globe, Server, Wrench, Terminal } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'User Interface & Experience Design',
      skills: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Server-side Logic & APIs',
      skills: ['Java','Restful APIs']
    },
    {
      title: 'Database Technologies',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Data Storage & Management',
      skills: ['MySQL', 'SQL Queries', 'PostgreSQL']
    },
    {
      title: 'Development Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      description: 'Development & Productivity Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Webpack', 'Vite', 'Postman', 'Chrome DevTools']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'Web Standards & Protocols',
      skills: ['HTTP/HTTPS', 'WebSockets', 'Web APIs', 'Local Storage', 'Session Storage', 'Cookies', 'CORS', 'WebPack']
    },
    {
      title: 'Version Control & Deployment',
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-teal-500 to-green-500',
      description: 'Code Management & Hosting',
      skills: ['Git', 'GitHub Actions', 'Netlify', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-gray-800/70 border-gray-700 backdrop-blur-sm hover:bg-gray-800/90 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-gray-400 text-sm">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      className="bg-gray-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Section */}
        <div className="text-center">
          <Card className="bg-gray-800/70 border-gray-700 backdrop-blur-sm hover:bg-gray-800/90 hover:border-blue-500/50 transition-all duration-300 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h3 className="text-3xl font-bold text-white">Continuous Learning</h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                I believe in staying current with technology trends and continuously expanding my skillset. 
                Here's what I'm exploring and planning to master next.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center justify-center">
                    <Star className="w-5 h-5 mr-2" />
                    Currently Learning
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['React', 'Spring', 'Spring Boot'].map((tech) => (
                      <Badge key={tech} className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
                        📚 {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center justify-center">
                    <Award className="w-5 h-5 mr-2" />
                    Future Goals
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['AI/ML', 'React Native', 'DevOps'].map((tech) => (
                      <Badge key={tech} className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300">
                        🎯 {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
