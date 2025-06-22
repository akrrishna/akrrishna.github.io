import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { projects } from "@/lib/data";

const FeaturedProjects = () => {
  const navigate = useNavigate();
  
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Here are some of the projects I've worked on so far. I'm continuously learning and excited to share more as I grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="blog-card animate-fade-in group cursor-pointer transition-all duration-300 hover:border-primary"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 transition-colors">
                    View Project →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="animate-fade-in hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            style={{ animationDelay: '0.8s' }}
            onClick={() => navigate('/projects')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
