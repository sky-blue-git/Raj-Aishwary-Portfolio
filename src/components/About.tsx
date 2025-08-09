import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 items-center">
          <div className="slide-up">
            <h3 className="font-space text-2xl font-semibold text-foreground mb-4">
              Crafting Digital Experiences
            </h3>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                With a Bachelor's in Computer Science Engineering from LPU and valuable internship 
                experiences at top companies like Unacademy and Jupiter.Money, I've developed a deep 
                understanding of modern web development practices.
              </p>
              <p>
                My journey in competitive programming has sharpened my problem-solving skills, 
                achieving Top 2% on LeetCode and Expert level on Codeforces. I believe in writing 
                clean, efficient code that not only works but is also maintainable and scalable.
              </p>
              <p>
                I'm constantly learning and adapting to new technologies, always striving to 
                deliver exceptional user experiences through thoughtful design and robust functionality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
