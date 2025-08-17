import { CalendarDays, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import unacademy_logo from '@/assets/unacademy_logo.png';

const Experience = () => {
  const experiences = [
    {
      company: "Unacademy",
      position: "SDE Intern",
      duration: "Apr 2025 - Jul 2025",
      location: "Bengaluru, India",
      type: "Internship",
      description: [
        "Migrated internal dashboards from Retool to Appsmith by replicating frontend functionality and adapting queries, contributing to an estimated INR 7L/month cost reduction in platform usage.",
        "Developed dynamic and modular pages for Atlas, Unacademy’s internal platform, to manage role-based access control, Hagrid workspaces, and group hierarchies efficiently."
      ],
      technologies: ["Next.js", "TypeScript", "JavaScript", "Redux", "MySQL", "Retool", "Appsmith", "REST APIs"],
      color: "primary",
      logo: unacademy_logo
    },
    {
      company: "Jupiter.Money",
      position: "SDE Intern",
      duration: "Nov 2023 - Nov 2024",
      location: "Bengaluru, India",
      type: "Internship",
      description: [
        "Revamped the debit card (DC) landing page and associated screens, resulting in a 15% reduction in loading time and enhancing the user experience with a more streamlined, responsive UI.",
        "Collaborated extensively with the frontend team on the Jupiter 3.0 app reskin project, ensuring a consistent and engaging user experience across multiple screens.",
        "Created a Collect Request Popup feature that ensures users see payment requests immediately upon app launch, resulting in an 8% increase in funnel conversion rates.",
        "Led the switch migration from FIS to Federal debit cards, implementing Federal’s API to allow for higher international transaction limits, resulting in a 9% increase in success rate. Created multiple screens as part of the development process and contributed significantly to the overall feature flow.",
        "Overhauled the bank transfer and self transfer flows, optimizing the entire process to enhance speed and efficiency, resulting in faster page loading times. Implemented design improvements in line with the new theme of the Jupiter app, creating a more intuitive experience for users."
      ],
      technologies: ["React Native", "typeScript", "JavaScript", "Git", "Github"],
      color: "accent",
      logo: 'src/assets/jupiter_money_logo.png'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="card-elegant p-8 rounded-xl hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex flex-col gap-4">
                
                {/* Logo + Title Row */}
                <div className="flex items-center gap-4">
                  <img 
                    src={exp.logo} 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm" 
                    alt={`${exp.company} logo`}
                  />
                  <div>
                    <h3 className="font-space text-2xl font-bold text-foreground">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold bg-gradient-accent bg-clip-text text-transparent">
                      {exp.company}
                    </h4>
                  </div>
                  <span className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
                    exp.color === 'primary' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-accent/20 text-accent'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        exp.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`}></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
