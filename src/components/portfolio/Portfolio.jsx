import GPP from '../../assets/projects/gpp.png'  
import Helperlog from '../../assets/projects/helperlog.png'

const Portfolio = () => {
const projects = [
  {
    id: 1,
    title: "GPP (Ghoomo Phiroo Pakistan)",
    description: "A travel and booking platform offering destination browsing, user login, and online payments.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    image: GPP,
    link: "#",
  },
  {
    id: 2,
    title: "HelperLog",
    description: "A logistics dashboard for managing shipments, tracking parcels, and updating delivery statuses.",
    tech: ["React", "Node.js", "MongoDB"],
    image: Helperlog,
    link: "#",
  },
  {
    id: 3,
    title: "GHS&E",
    description: "A solar installation service website showcasing packages, inquiry forms, and company portfolio.",
    tech: ["React", "Tailwind", "Vite"],
    image: "https://via.placeholder.com/400x200",
    link: "#",
  },
];

  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-8 font-sans space-y-8 bg-[#1d1d1e] rounded-2xl">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-2 md:mb-4">My Portfolio</h2>
        <h3 className="text-white text-lg">Projects I’ve built for my clients</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#222224]  rounded-2xl text-white shadow-lg hover:scale-[1.02] transition duration-300">
            <div className="w-full h-60 mb-2">
              <img src={project.image} alt={project.title} className="size-full object-fill rounded-t-xl "/>
            </div>
            <div className="p-4 md:p-6">
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-[#2e2e30] px-3 py-1 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-[var(--primary)] text-black px-4 py-2 text-sm rounded-lg font-medium hover:bg-opacity-90 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
