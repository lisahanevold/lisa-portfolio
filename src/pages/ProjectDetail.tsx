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
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-portfolio-accent uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-portfolio-primary mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {project.challenges && (
                <div className="bg-card rounded-2xl p-8 shadow-md">
                  <h3 className="text-2xl font-playfair font-semibold text-portfolio-primary mb-4 flex items-center">
                    <Target className="mr-2 w-5 h-5 text-portfolio-accent" />
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.solutions && (
                <div className="bg-card rounded-2xl p-8 shadow-md">
                  <h3 className="text-2xl font-playfair font-semibold text-portfolio-primary mb-4">
                    Solutions & Approach
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.outcomes && (
                <div className="bg-card rounded-2xl p-8 shadow-md">
                  <h3 className="text-2xl font-playfair font-semibold text-portfolio-primary mb-4">
                    Outcomes & Impact
                  </h3>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-md sticky top-24">
                <h3 className="text-xl font-playfair font-semibold text-portfolio-primary mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-portfolio-accent mr-2" />
                    <span className="text-sm text-muted-foreground font-medium">Role:</span>
                    <span className="text-sm ml-2">{project.role}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-portfolio-accent mr-2" />
                    <span className="text-sm text-muted-foreground font-medium">Year:</span>
                    <span className="text-sm ml-2">{project.year}</span>
                  </div>
                  
                  {project.duration && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-portfolio-accent mr-2" />
                      <span className="text-sm text-muted-foreground font-medium">Duration:</span>
                      <span className="text-sm ml-2">{project.duration}</span>
                    </div>
                  )}
                  
                  {project.client && (
                    <div className="flex items-start">
                      <span className="text-sm text-muted-foreground font-medium mt-1">Client:</span>
                      <span className="text-sm ml-2 mt-1">{project.client}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Next Project */}
          <div className="border-t border-border pt-12 pb-16">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-semibold text-portfolio-primary mb-8">
                Explore More Projects
              </h3>
              <Button asChild>
                <Link to="/projects">
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