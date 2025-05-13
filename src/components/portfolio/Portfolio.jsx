import ProjectCard from './ProjectCard';
import GPP from '../../assets/projects/gpp.png';
import Helperlog from '../../assets/projects/helperlog.png';
import GHSE from '../../assets/projects/ghse.png';
import Finarch from '../../assets/projects/finarch.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'GPP (Ghoomo Phiroo Pakistan)',
      description: 'A travel and booking platform offering destination browsing, user login, and online payments.',
      tech: ['React', 'Node.js', 'Tailwind CSS'],
      image: GPP,
      link: '#',
    },
    {
      id: 2,
      title: 'HelperLog',
      description:'A logistics dashboard for managing shipments, tracking parcels, and updating delivery statuses.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: Helperlog,
      link: '#',
    },
    {
      id: 3,
      title: 'GHS&E',
      description: 'A solar installation service website showcasing packages, inquiry forms, and company portfolio.',
      tech: ['React', 'Tailwind', 'Vite'],
      image: GHSE,
      link: '#',
    },
        {
      id: 4,
      title: 'Finarch',
      description: 'A solar installation service website showcasing packages, inquiry forms, and company portfolio.',
      tech: ['React', 'Tailwind', 'Vite'],
      image: Finarch,
      link: '#',
    },
  ];

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
