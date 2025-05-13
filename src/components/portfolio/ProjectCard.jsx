// components/ProjectCard.jsx

const ProjectCard = ({ project }) => {
  return (
    <div className=" text-white  hover:scale-[1.02] transition duration-300 group overflow-hidden">
      <div className="w-full rounded-2xl overflow-hidden">
        <img src={project.image} alt={project.title} className="size-full object-contain transform group-hover:scale-105 transition duration-300"/>
      </div>
      <div className="p-4 md:px-6">
        <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
        <div className="flex flex-wrap gap-2 ">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-[#2e2e30] px-3 py-1 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
