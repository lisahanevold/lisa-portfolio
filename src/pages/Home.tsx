import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import Navigation from '@/components/Navigation';
import { projects } from '@/data/projects';
import heroImage from '@/assets/lisa-hero.jpg';
import Footer from '@/components/Footer';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-portfolio-light to-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="space-y-2">
                <p className="text-portfolio-accent font-medium tracking-wide">
                  Designer & Problem Solver
                </p>
                <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-portfolio-primary leading-tight">
                  Hi, I'm{' '}
                  <span className="text-gradient">Lisa</span>
                </h1>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                A designer with expertise within UX, service and strategic design. 
                I have worked on projects in different fields of design with a focus 
                on solving problems and creating the best possible user experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={scrollToProjects}
                  className="bg-portfolio-primary hover:bg-portfolio-accent text-white px-8 py-6 text-base font-medium"
                >
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-8 py-6 text-base"
                >
                  <Link to="/about">
                    About Me
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/20 to-portfolio-accent/20 rounded-2xl blur-3xl"></div>
                <img 
                  src={heroImage} 
                  alt="Lisa Hanevold - UX Designer"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToProjects}
            className="text-portfolio-accent hover:text-portfolio-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-portfolio-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of the projects I have worked on so far, spanning UX design, 
              service design, and strategic design across various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`transition-all duration-700 delay-${index * 100} h-full`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.7s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-8 py-3"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;