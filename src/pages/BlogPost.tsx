import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import { useParams, useNavigate } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Link, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { getPostBySlug, allPosts } from "@/lib/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [toc, setToc] = useState<{ id: string; level: number; text: string }[]>([]);
  const [activeId, setActiveId] = useState("");

  const currentPost = getPostBySlug(slug || "");
  const MdxComponent = currentPost?.content;

  useEffect(() => {
    if (!MdxComponent) return;
    
    // Function to build TOC from headings
    const buildToc = () => {
      const headings = document.querySelectorAll('.prose h2, .prose h3, .prose h4');
      const tocItems: { id: string; level: number; text: string }[] = [];
      headings.forEach((heading) => {
        if (heading.id && heading.textContent) {
          tocItems.push({
            id: heading.id,
            level: parseInt(heading.tagName.substring(1)),
            text: heading.textContent,
          });
        }
      });
      setToc(tocItems);
    };

    // Build TOC after the component has rendered
    const timeoutId = setTimeout(buildToc, 100);

    return () => clearTimeout(timeoutId);
  }, [MdxComponent]);

  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    toc.forEach((item) => {
      const elem = document.getElementById(item.id);
      if (elem) observer.observe(elem);
    });

    return () => {
      toc.forEach((item) => {
        const elem = document.getElementById(item.id);
        if (elem) observer.unobserve(elem);
      });
    };
  }, [toc]);

  if (!currentPost || !MdxComponent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate('/blogs')}>Back to All Posts</Button>
        </div>
      </div>
    );
  }
  
  const currentIndex = allPosts.findIndex(post => post.slug === slug);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/blogs')}>
              ← Back to All Posts
            </Button>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16 px-4">
        <div className="max-w-7xl flex gap-12">
          {/* Table of Contents */}
          <aside className="hidden md:block w-1/5 sticky top-24 self-start">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      className={`transition-colors ${
                        activeId === item.id 
                          ? 'text-primary font-semibold' 
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="w-full md:w-4/5">
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentPost.featured 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {currentPost.featured && "★ "}
                  {currentPost.category}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{currentPost.date}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{currentPost.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                {currentPost.title}
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {currentPost.excerpt}
              </p>
            </header>

            {/* Article Body */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <MdxComponent />
                </div>
              </CardContent>
            </Card>

            {/* Share Section and Navigation */}
            <div className="mt-12 flex justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <span className="text-lg font-semibold">Share</span>
              <Button variant="outline" size="icon" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')} className="hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${currentPost.title}`, '_blank')} className="hover:bg-[#1DA1EE] hover:text-white hover:border-[#1DA1EE]">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${currentPost.title}`, '_blank')} className="hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast({ title: "Link Copied!", description: "The post URL has been copied to your clipboard." });
              }}>
                <Link className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-12 flex justify-between">
              <Button variant="outline" onClick={() => navigate('/blogs')} className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                ← Back to All Posts
              </Button>
              <div className="flex gap-2">
                {prevPost && (
                  <Button variant="outline" onClick={() => navigate(`/blogs/${prevPost.slug}`)}>
                    ← Previous
                  </Button>
                )}
                {nextPost && (
                  <Button variant="outline" onClick={() => navigate(`/blogs/${nextPost.slug}`)}>
                    Next →
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
