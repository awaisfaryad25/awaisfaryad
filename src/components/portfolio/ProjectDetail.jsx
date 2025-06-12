import { useParams, Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../../constants/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className=" my-20">
      <div className=" my-20 max-w-[85%] mx-auto px-4 py-12 md:px-8 font-sans bg-[#1d1d1e] rounded-2xl border border-[var(--border)] text-white text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-4">Project Not Found</h2>
        <p className="text-gray-200 mb-6">The project you're looking for does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
        >
          Back to Portfolio
        </Link>
      </div>
      </div>
    );
  }

  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-8 font-sans bg-[#1d1d1e] rounded-2xl border border-[var(--border)] text-white space-y-8">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-2">{project.title}</h2>
        <p className="text-gray-200 text-lg">Project Details</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl object-contain"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)]">Description</h3>
            <p className="text-gray-200">{project.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)]">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-[#2e2e30] px-3 py-1 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.link && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--primary)]">Project Link</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#2e2e30] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
              >
                <FaExternalLinkAlt className="mr-2" /> Visit Project
              </a>
            </div>
          )}
          <Link
            to="/"
            className="inline-flex items-center bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;