import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";
import { projects } from "@/lib/data";

const Projects = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <a href="/" className="text-lg font-semibold">← Back to Portfolio</a>
            </Button>
            <h1 className="text-2xl font-bold">All Projects</h1>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            All Projects & Work
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore all my projects, from web applications to educational platforms.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:border-primary overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300 text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2 line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group-hover:bg-primary/10 transition-colors -ml-4"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        View Project →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 