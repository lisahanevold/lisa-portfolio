import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Scroll to top"
    >
      <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-portfolio-primary/10">
        <ChevronUp 
          className="w-5 h-5 text-portfolio-primary transition-colors duration-300 group-hover:text-portfolio-accent" 
        />
      </div>
    </button>
  );
};

export default ScrollToTop;
