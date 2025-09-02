import { useState } from 'react';
import { Mail, Linkedin, MessageCircle, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me an email',
      contact: 'lisa@example.com',
      action: 'mailto:lisa@example.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect on LinkedIn',
      contact: 'linkedin.com/in/lisahanevold',
      action: 'https://linkedin.com/in/lisahanevold'
    },
    {
      icon: MessageCircle,
      title: 'Let\'s Chat',
      description: 'Schedule a conversation',
      contact: 'Available for calls',
      action: 'mailto:lisa@example.com?subject=Let\'s Schedule a Call'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-portfolio-light to-background">
      <Navigation />
      
      <div className="pt-24 section-spacing">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-portfolio-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborative projects. 
              Let's discuss how we can work together to create meaningful design solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-playfair font-semibold text-portfolio-primary mb-6">
                  Ways to Reach Me
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <a 
                        href={method.action}
                        className="flex items-center space-x-4 text-left"
                        target={method.action.startsWith('http') ? '_blank' : undefined}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-portfolio-light rounded-lg flex items-center justify-center">
                            <method.icon className="w-6 h-6 text-portfolio-accent" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-portfolio-primary">
                            {method.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {method.description}
                          </p>
                          <p className="text-sm text-portfolio-accent font-medium">
                            {method.contact}
                          </p>
                        </div>
                      </a>
                    </Card>
                  ))}
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

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <h2 className="text-2xl font-playfair font-semibold text-portfolio-primary mb-6">
                  Send Me a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-portfolio-primary mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-portfolio-primary mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-portfolio-primary mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-portfolio-primary mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-portfolio-primary hover:bg-portfolio-accent text-white py-3"
                  >
                    {isLoading ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;