import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../constants/projectsData';
import PaginationControls from '../global/PaginationControls';

const Portfolio = ({id}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(3);
      } else {
        setProjectsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageClick = (page) => setCurrentPage(page);
  const handlePrev = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  return (
    <div id={id} className="max-w-[85%] mx-auto px-4 py-12 md:px-8 font-sans space-y-8 bg-[#1d1d1e] rounded-2xl border border-[var(--border)]">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-2 md:mb-4">My Portfolio</h2>
        <h3 className="text-white text-lg">Projects I've built for my clients</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageClick}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Portfolio;
