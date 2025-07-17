
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Smart Classroom Management System',
      description: 'A role-based web application built to enhance online education by providing tailored dashboards for Students, Faculty, and Admins. This system empowers faculty to manage courses, students to engage with learning content and assessments, and admins to oversee the platform—all in one place.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/Jayasurya-2/Smart-Classroom-Management-System#',
      liveUrl: 'https://github.com/Jayasurya-2/Smart-Classroom-Management-System/blob/main/README.md'
    },
    {
      title: 'Tour Buddy',
      description: 'TourBuddy is a smart travel assistant designed to make trip planning simple and enjoyable. With real-time destination suggestions and an embedded chatbot, it helps users discover, plan, and navigate their travels effortlessly.',
      tech: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/Jayasurya-2/Tour-Buddy',
      liveUrl: 'https://github.com/Jayasurya-2/Tour-Buddy/blob/main/README.md'
    },
    {
      title: 'Fees Management System',
      description: 'A productivity app for managing tasks and projects with features like drag-and-drop, categories, and progress tracking.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      githubUrl: 'https://github.com/Jayasurya-2/CVIP-PHASE1-Fees-Management-System',
      liveUrl: 'https://github.com/Jayasurya-2/CVIP-PHASE1-Fees-Management-System'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website showcasing projects and skills with modern design and smooth animations.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800/70 border-gray-700 backdrop-blur-sm overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-gray-900/80 text-white hover:bg-gray-800 backdrop-blur-sm"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-blue-500/80 hover:bg-blue-600 text-white backdrop-blur-sm"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
