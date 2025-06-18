// components/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../../constants/projectsData';
import { FaArrowLeft } from 'react-icons/fa6';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="">
        <div className="my-20 max-w-[85%] mx-auto px-4 py-12 md:px-8 font-sans bg-[#1d1d1e] rounded-2xl border border-[var(--border)] text-white text-center">
          <h2 className="text-xl font-bold text-[var(--primary)] mb-4">Project Not Found</h2>
          <p className="text-gray-200 mb-6">The project you're looking for does not exist.</p>
          <Link to="/#portfolio" className="text-3xl text-white p-2"><FaArrowLeft /></Link>
        </div>
      </div>
    );
  }

  const getFullUrl = (url) => {
    if (!url.match(/^https?:\/\//)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className="max-w-[85%] mx-auto px-4 py-6 my-20 md:px-8 font-sans bg-[#1d1d1e] rounded-2xl border border-[var(--border)] text-white space-y-8">
      <div className="flex items-center justify-between">
        <Link to="/#portfolio" className="text-3xl text-white p-2"><FaArrowLeft /></Link>
        <h2 className="text-2xl font-bold text-[var(--primary)] mb-2">{project.title}</h2>
        {project.link && (
          <div>
            <a href={getFullUrl(project.link)} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center bg-[#2e2e30] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
            >
              <FaExternalLinkAlt className="mr-2" /> Visit Project
            </a>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-8">
        <img src={project.image} alt={project.title} className="w-full rounded-2xl object-contain" />
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)]">Description</h3>
            <p className="text-gray-200">{project.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)]">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-[#2e2e30] px-3 py-1 text-xs rounded-full">{tech}</span>
              ))}
            </div>
          </div>

          {project.webImages && project.webImages.length > 0 && (
            <div className='text-center'>
              <h2 className="text-2xl font-semibold text-[var(--primary)] mb-2">Web Screenshots</h2>
              <div className="space-y-8 gap-4">
                {project.webImages.map((image, index) => (
                  <img key={index} src={image} alt={project.title} className="w-full object-contain" />
                ))}
              </div>
            </div>
          )}
          {project.adminImages && project.adminImages.length > 0 && (
            <div className='text-center'>
              <h2 className="text-2xl font-semibold text-[var(--primary)] mb-2">Admin Screenshots</h2>
              <div className="space-y-8 gap-4">
                {project.adminImages.map((image, index) => (
                  <img key={index} src={image} alt={project.title} className="w-full object-contain" />
                ))}
              </div>
            </div>
          )}
          {project.extraDetails && project.extraDetails.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-[var(--primary)]">Additional Details</h3>
              <ul className="text-gray-200 list-disc list-inside">
                {project.extraDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;