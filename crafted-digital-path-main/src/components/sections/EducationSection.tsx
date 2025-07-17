
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and information Technology',
      institution: 'Marri Laxman Reddy Institute of Technology and Management',
      period: '2021 - 2025',
      grade: 'CGPA: 7.7/10',
      description: 'Specialized in software development, Data structures, algorithms, and web technologies.',
      icon: <GraduationCap className="w-10 h-10" />
    },
    {
      degree: 'Higher Secondary (Science)',
      institution: 'Sasi Junior College',
      period: '2019 - 2021',
      grade: 'Percentage: 84%',
      description: 'Focused on Mathematics, Physics, and Computer Science fundamentals.',
      icon: <GraduationCap className="w-10 h-10" />
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400">My academic background and achievements</p>
        </div>
        
        <div className="space-y-6">
          {education.map((item, index) => (
            <Card key={index} className="bg-gray-800/70 border-gray-700 backdrop-blur-sm hover:bg-gray-800/90 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{item.degree}</h3>
                      <Badge variant="outline" className="border-blue-500/30 text-blue-300 w-fit">
                        {item.period}
                      </Badge>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{item.institution}</p>
                    <p className="text-green-400 font-medium mb-3">{item.grade}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;