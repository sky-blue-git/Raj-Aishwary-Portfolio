import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, MapPin } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.png';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden particles">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Avatar */}
          <div className="relative inline-block animate-bounce-in">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary mx-auto hover-lift">
              <img 
                src={developerAvatar} 
                alt="Raj Aishwary Pratap Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 fade-in">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg animate-slide-in-left">Hello, I'm</p>
              <h1 className="font-space text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">
                  Raj Aishwary
                </span>
                <br />
                <span className="text-foreground text-shadow">Pratap Singh</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl md:text-3xl text-muted-foreground font-medium">
                FullStack Developer & Competitive programmer
              </h2>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Bengaluru, India</span>
              </div>
            </div>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Passionate full-stack developer with expertise in React Native and React.js, creating exceptional digital experiences and building scalable, modern web and mobile solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button 
                variant="hero" 
                size="hero"
                onClick={() => scrollToSection('#projects')}
                className="group"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="glass" 
                size="hero"
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://github.com/sky-blue-git', '_blank')}
                className="hover:text-background hover:scale-110 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://www.linkedin.com/in/raj-aishwary', '_blank')}
                className="hover:text-background hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection('#about')}
          className="rounded-full"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;