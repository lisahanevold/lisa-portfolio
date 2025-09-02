import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'UX Design', 'Service Design', 'Strategic Design', 'UX/UI Design'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-portfolio-light to-background">
      <Navigation />
      
      <div className="pt-24 section-spacing">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-portfolio-primary mb-4">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my work spanning UX design, service design, and strategic design 
              across various industries and contexts.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-portfolio-primary text-white shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-portfolio-accent hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;