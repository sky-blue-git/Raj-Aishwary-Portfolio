import { Github, ExternalLink } from "lucide-react";
import coffee_house from '@/assets/coffee-house.png';
import my_portfolio from '@/assets/my-portfolio.png'
import quick_eats from '@/assets/quick-eats-project.png'
import job_portal from '@/assets/job-portal-project.jpg';
import job_hunt from '@/assets/jobhunt-project.png';
import drive_pro from '@/assets/drivepro-project.png'

const Projects = () => {
  const projects = [
    {
      title: "DrivePro",
      description: "AI-powered car test-drive booking platform with image-based search, dynamic booking flows, and admin dashboard.",
      image: drive_pro,
      tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Arcjet", "Google Gemini AI", "Clerk"],
      github: "https://github.com/sky-blue-git/DrivePro",
      live: "#",
    },
    {
      title: "JobHunt",
      description: "A full-stack MERN job portal with dual authentication, advanced job filters, real-time application tracking, and Cloudinary integration.",
      image: job_hunt,
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Cloudinary"],
      github: "https://github.com/sky-blue-git/JobHunt",
      live: "https://job-portal-frontend-zxea.onrender.com/",
    },
    {
      title: "Coffee House",
      description: "A coffee ordering app to browse coffees and beans, view details, manage cart and favorites, track orders, and with payment methods.",
      image: coffee_house,
      tech: ["React Native", "TypeScript", "Zustand"],
      github: "https://github.com/sky-blue-git/Coffee-House",
      live: "https://drive.usercontent.google.com/download?id=1B_J5yt9C3rRSPXnmB2ysgCrE3uSWyXEJ&export=download&authuser=0",
    },
    {
      title: "QuickEats",
      description: "Modern, responsive single‑page portfolio featuring dark mode, smooth animations, project showcase, and EmailJS contact, deployed on Vercel.",
      image: quick_eats,
      tech: ["React.Js", "TypeScript", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "My Portfolio",
      description: "Modern, responsive single‑page portfolio featuring dark mode, smooth animations, project showcase, and EmailJS contact, deployed on Vercel.",
      image: my_portfolio,
      tech: ["React.Js", "TypeScript", "Tailwind"],
      github: "https://github.com/sky-blue-git/Raj-Aishwary-Portfolio",
      live: "https://raj-aishwary-portfolio.vercel.app/",
    }
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
                <p className="text-muted-foreground text-sm mt-2">
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
