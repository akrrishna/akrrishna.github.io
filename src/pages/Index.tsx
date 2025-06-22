import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center">
            {/* Left: Portfolio Title */}
            <div className="text-xl font-bold">Portfolio</div>

            {/* Right: Nav Items */}
            <div className="ml-auto flex items-center space-x-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="/projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="/blogs" className="text-sm hover:text-primary transition-colors">Blog</a>
            </div>

            {/* Extreme Right: Theme Toggle */}
            <div className="ml-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              {/* Animated Greeting */}
              <div className="animate-fade-in">
                <div className="text-6xl md:text-8xl font-bold mb-4">
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>H</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>i</span>
                  <span className="inline-block animate-bounce text-primary" style={{ animationDelay: '0.2s' }}>!</span>
                </div>
              </div>
              
              {/* Name and Roles with Typewriter Effect */}
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  I am <span className="text-primary">Krishna</span>
                </h1>
                <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
                  <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
                    <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Teacher</span>
                    <span className="mx-4">•</span>
                    <span className="inline-block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-pulse">Web Developer</span>
                    <span className="mx-4">•</span>
                    <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Content Writer</span>
                  </div>
                </div>
              </div>

              {/* Creative Code Block Animation */}
              <div className="animate-fade-in bg-card border rounded-lg p-6 max-w-md mx-auto font-mono text-sm" style={{ animationDelay: '1.5s' }}>
                <div className="text-muted-foreground mb-2">// Building digital experiences</div>
                <div className="text-primary">const Krishna = {`{`}</div>
                <div className="ml-4 space-y-1">
                  <div><span className="text-accent">skills:</span> <span className="text-muted-foreground">['Coding', 'Teaching', 'Blogging'],</span></div>
                  <div><span className="text-accent">passion:</span> <span className="text-green-500">'Creating & Sharing Knowledge',</span></div>
                  <div><span className="text-accent">mission:</span> <span className="text-blue-500">'Code. Teach. Write. Repeat.'</span></div>
                </div>
                <div className="text-primary">{`};`}</div>
                <div className="mt-2 text-muted-foreground animate-pulse">█</div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '2s' }}>
                <Card className="text-center p-4 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-primary/5">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary animate-pulse">2+</div>
                    <div className="text-sm text-muted-foreground">Years Teaching</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-accent/5">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary animate-pulse" style={{ animationDelay: '0.2s' }}>10+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-primary/5">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary animate-pulse" style={{ animationDelay: '0.4s' }}>15+</div>
                    <div className="text-sm text-muted-foreground">Articles Written</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Featured Blogs */}
      <FeaturedBlogs />

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground">
            © 2024 Krishna Neupane. 
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Linkdln</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
