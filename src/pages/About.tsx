import { Mail, Linkedin, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/chill_me_cropped.jpg';
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
  ];

  const experiences = [
    {
      title: 'Designer and App-Developer',
      company: 'NTNU',
      period: '2025',
      description: 'Designed and developed a mobile application (DigiBirth) for treatment of postpartum trauma symptoms'
    },
    {
      title: 'UX Design Intern',
      company: 'MoreScope',
      period: 'Summer 2024',
      description: 'Worked with an interdisciplinary team to create new features in the MoreScope platform related to the EU-taxonomy'
    },
    {
      title: 'UX Design Intern',
      company: 'Circle K',
      period: 'Summer 2023',
      description: 'Led explorative UX research project for mobile app development strategy'
    },
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
                  This spring I graduated with a masters degree in Industrial Design from NTNU in Trondheim, 
                  with specialization in interaction and service design. Recently, I have begun a one year
                  master program in Sustainable Development at Uppsala University in Sweden to gain a new 
                  perspective on how to create sustainable solutions.
                  My approach to design is deeply rooted in empathy and understanding. I believe 
                  that great design starts with truly understanding the people we're designing for, 
                  their needs, challenges, and aspirations. What motivates me the most about design is breaking 
                  down complex challenges into manageable parts and finding creative, user friendly and 
                  innovative solutions.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                Alongside my studies, I enjoy balancing an active and social lifestyle. I like to 
                think of myself as a positive and open-minded person, eager to embrace new experiences
                and ideas both as a designer and as an individual.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out if you’d like to learn more about me or my projects!
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <a href="mailto:lisa.hanevold@gmail.com" className="flex items-center">
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
              Skills and Expertise
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
                    <a href="mailto:lisa.hanevold@gmail.com" className="text-muted-foreground hover:text-portfolio-accent transition-colors">
                      lisa.hanevold@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-portfolio-accent mr-3" />
                    <a href="tel:+4791314509" className="text-muted-foreground hover:text-portfolio-accent transition-colors">
                      +47 913 14 509
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
                    UX Design Projects
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Service Design Projects
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Strategic Design Projects
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    User Research & Testing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Project Management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
        
          {/*<div className="text-center bg-card rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-playfair font-bold text-portfolio-primary mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborative projects. 
              Whether you need UX design, service design, or strategic design expertise, 
              I'd love to hear about your project.
            </p>
            <Button asChild size="lg">
              <a href="mailto:lisa.hanevold@gmail.com">
                Start a Conversation
              </a>
            </Button>
          </div>*/}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;