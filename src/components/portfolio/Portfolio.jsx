import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../constants/projectsData';
import PaginationControls from '../global/PaginationControls';

const PROJECTS_PER_PAGE = 4;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageClick = (page) => setCurrentPage(page);
  const handlePrev = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-8 font-sans space-y-8 bg-[#1d1d1e] rounded-2xl border border-[var(--border)]">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-2 md:mb-4">
          My Portfolio
        </h2>
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
