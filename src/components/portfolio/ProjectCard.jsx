// components/ProjectCard.jsx

import { FaEye, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="text-white hover:scale-[1.02] transition duration-300 group overflow-hidden rounded-2xl ">
      <div className="w-full rounded-2xl overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="size-full object-contain transform group-hover:scale-105 transition duration-300"
        />
        {/* Overlay with icons on image hover */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
          <a
            href={`/project/${project.id}`}
            className="inline-flex items-center bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
            title="View Detail"
          >
            <FaEye className="text-lg" />
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#2e2e30] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
              title="Visit Project"
            >
              <FaExternalLinkAlt className="text-lg" />
            </a>
          )}
        </div>
      </div>
      <div className="p-4 md:px-6 space-y-3">
        <div className="">
          <h4 className="text-lg font-semibold">{project.title}</h4>
          <p className="text-sm text-gray-200">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
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

