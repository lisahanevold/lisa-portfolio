import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectCard = ({ id, title, description, image, category }: ProjectCardProps) => {
  const handleClick = () => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <Link to={`/project/${id}`} className="group block h-full" onClick={handleClick}>
      <div className="project-card h-full flex flex-col">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-portfolio-accent uppercase tracking-wide">
              {category}
            </span>
            <ArrowRight className="w-4 h-4 text-portfolio-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-playfair font-semibold text-portfolio-primary mb-2 group-hover:text-portfolio-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;