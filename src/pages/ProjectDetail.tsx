import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-portfolio-light to-background">
        <Navigation />
        <div className="pt-24 section-spacing">
          <div className="container text-center">
            <h1 className="text-4xl font-playfair font-bold text-portfolio-primary mb-4">
              Project Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-portfolio-light to-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Header */}
        <div className="container">
          <Button 
            asChild 
            variant="ghost" 
            className="mb-8 text-portfolio-accent hover:text-portfolio-primary"
          >
            <Link to="/projects">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="container mb-12">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-4xl">
          <div className="space-y-12 mb-16">
            {/* Project Header */}
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-sm font-medium text-portfolio-accent uppercase tracking-wide">
                  {project.category}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-portfolio-primary">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {project.longDescription}
              </p>
              
              {/* Project Details - Integrated */}
              <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-border/50">
                <div className="flex items-center text-sm">
                  <User className="w-4 h-4 text-portfolio-accent mr-2" />
                  <span className="text-muted-foreground font-medium">Role:</span>
                  <span className="ml-2 text-portfolio-primary">{project.role}</span>
                </div>
                
                {project.duration && (
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-portfolio-accent mr-2" />
                    <span className="text-muted-foreground font-medium">Duration:</span>
                    <span className="ml-2 text-portfolio-primary">{project.duration}</span>
                  </div>
                )}
                
                {project.client && (
                  <div className="flex items-center text-sm">
                    <span className="text-muted-foreground font-medium">Client:</span>
                    <span className="ml-2 text-portfolio-primary">{project.client}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Sections */}
            {project.challenges && (
              <div className="space-y-6">
                <h2 className="text-3xl font-playfair font-bold text-portfolio-primary">
                  Challenges
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {project.challenges.map((challenge, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {challenge}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.solutions && (
              <div className="space-y-6">
                <h2 className="text-3xl font-playfair font-bold text-portfolio-primary">
                  Solutions & Approach
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {project.solutions.map((solution, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {solution}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {project.outcomes && (
              <div className="space-y-6">
                <h2 className="text-3xl font-playfair font-bold text-portfolio-primary">
                  Outcomes & Impact
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {project.outcomes.map((outcome, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {outcome}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Next Project */}
          <div className="border-t border-border pt-12 pb-16">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-semibold text-portfolio-primary mb-8">
                Explore More Projects
              </h3>
              <Button asChild>
                <Link 
                  to="/projects"
                  onClick={() => {
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                >
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;