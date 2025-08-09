import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "Sleek and efficient task manager with intuitive UI.",
      image: "src/assets/coffee-house-project.jpg",
      tech: ["React", "Tailwind", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Two",
      description: "Real-time collaborative code sharing platform.",
      image: "src/assets/job-portal-project.jpg",
      tech: ["Next.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Three",
      description: "AI chatbot with natural conversation flow.",
      image: "src/assets/job-portal-project.jpg",
      tech: ["Python", "OpenAI API", "Flask"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Four",
      description: "E-commerce with advanced search & secure checkout.",
      image: "src/assets/coffee-house-project.jpg",
      tech: ["React", "Redux", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Five",
      description: "Portfolio website with premium UI design.",
      image: "src/assets/coffee-house-project.jpg",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Six",
      description: "Chat application with end-to-end encryption.",
      image: "src/assets/coffee-house-project.jpg",
      tech: ["React Native", "Firebase", "Socket.io"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-elegant rounded-xl hover:shadow-elegant transition-all duration-300 min-w-[300px] max-w-[300px] snap-center flex-shrink-0 group hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-primary transition-colors duration-300 group/link"
                  >
                    <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform duration-300" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-primary transition-colors duration-300 group/link"
                  >
                    <ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform duration-300" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
