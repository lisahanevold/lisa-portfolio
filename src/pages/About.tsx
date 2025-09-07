import { Mail, Linkedin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/lisa-hero.jpg';
import Footer from '@/components/Footer';

const About = () => {
  const skills = [
    'User Experience (UX) Design',
    'Service Design',
    'Strategic Design',
    'User Research',
    'Design Thinking',
    'Prototyping',
    'Stakeholder Engagement',
    'Cross-cultural Design',
    'Healthcare Design',
    'Educational Technology'
  ];

  const experiences = [
    {
      title: 'UX Designer',
      company: 'Circle K',
      period: 'Summer 2022',
      description: 'Led explorative UX research project for mobile app development strategy'
    },
    {
      title: 'Strategic Design Consultant',
      company: 'Laerdal Medical Inc.',
      period: '2022',
      description: 'Conducted strategic research for improving simulation-based medical education in the U.S.'
    },
    {
      title: 'Service Design Researcher',
      company: 'NTNU',
      period: '2022',
      description: 'Developed comprehensive service solutions for improving student well-being and campus experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-portfolio-light to-background">
      <Navigation />
      
      <div className="pt-24 section-spacing">
        <div className="container">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-portfolio-primary mb-4">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm Lisa, a designer with expertise within UX, service and strategic design. 
                  I have worked on projects in different fields of design with a focus on 
                  solving problems and creating the best possible user experience.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  My approach to design is deeply rooted in empathy and understanding. I believe 
                  that great design starts with truly understanding the people we're designing for, 
                  their needs, challenges, and aspirations. This human-centered approach has guided 
                  me through diverse projects spanning healthcare, education, retail, and technology.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Whether I'm adapting healthcare solutions for different cultural contexts, 
                  developing strategic roadmaps for medical technology companies, or designing 
                  services to improve student well-being, I always strive to create meaningful 
                  and impactful solutions that make a real difference in people's lives.
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <a href="mailto:lisa.hanevold@example.com" className="flex items-center">
                    <Mail className="mr-2 w-4 h-4" />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/lisahanevold" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Linkedin className="mr-2 w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/20 to-portfolio-accent/20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Lisa Hanevold"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-portfolio-primary mb-8 text-center">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-card rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-portfolio-primary font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-portfolio-primary mb-8 text-center">
              Recent Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-portfolio-primary">
                        {exp.title}
                      </h3>
                      <p className="text-portfolio-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-portfolio-primary mb-8 text-center">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-playfair font-semibold text-portfolio-primary mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-portfolio-accent mr-3" />
                    <a href="mailto:lisa.hanevold@example.com" className="text-muted-foreground hover:text-portfolio-accent transition-colors">
                      lisa.hanevold@example.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 text-portfolio-accent mr-3" />
                    <a 
                      href="https://linkedin.com/in/lisahanevold" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-portfolio-accent transition-colors"
                    >
                      linkedin.com/in/lisahanevold
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-playfair font-semibold text-portfolio-primary mb-4">
                  What I Can Help With
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    UX/UI Design Projects
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Service Design Consulting
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Strategic Design Planning
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    User Research & Testing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Design Team Collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-playfair font-bold text-portfolio-primary mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborative projects. 
              Whether you need UX design, service design, or strategic design expertise, 
              I'd love to hear about your project.
            </p>
            <Button asChild size="lg">
              <a href="mailto:lisa.hanevold@example.com">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;