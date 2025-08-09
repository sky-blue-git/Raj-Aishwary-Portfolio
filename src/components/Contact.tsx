import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raj.singh@email.com",
      href: "mailto:raj.singh@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 83196 15454",
      href: "tel:+918319615454"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rajsingh",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rajsingh",
      color: "hover:text-primary"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/rajsingh",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-accent bg-clip-text text-transparent">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-elegant p-8 rounded-2xl">
            <h3 className="font-space text-2xl font-bold text-foreground mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-muted border-border focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-muted border-border focus:border-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={6}
                  className="bg-muted border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elegant p-8 rounded-2xl">
              <h3 className="font-space text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {info.label}
                      </div>
                      <a 
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-elegant p-8 rounded-2xl">
              <h4 className="font-space text-xl font-bold text-foreground mb-6">
                Follow me
              </h4>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(social.href, '_blank')}
                    className={`hover:scale-110 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </Button>
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                Feel free to connect with me on social media. I regularly share insights 
                about web development, programming tips, and tech industry trends.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;