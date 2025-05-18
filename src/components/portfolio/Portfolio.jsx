
import ProjectCard from './ProjectCard';
import projects from '../../constants/projectsData';

const Portfolio = () => {

  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-8 font-sans space-y-8 bg-[#1d1d1e] rounded-2xl border border-[var(--border)]">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-2 md:mb-4">
          My Portfolio
        </h2>
        <h3 className="text-white text-lg">Projects I've built for my clients</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
