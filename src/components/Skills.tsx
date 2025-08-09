import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: ["React", "Next.js", "Vue.js", "Node.js", "Express.js", "Redux", "Zustand"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "Webpack", "Vite", "Docker", "AWS", "Firebase", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Design & UI/UX",
      icon: "🎨",
      skills: ["Tailwind CSS", "Styled Components", "Figma", "Adobe XD", "Responsive Design", "Accessibility"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card-elegant p-6 rounded-xl hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-space text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;