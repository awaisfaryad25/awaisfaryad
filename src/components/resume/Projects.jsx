import { FaProjectDiagram, FaLink } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';

const projects = [
  {
    icon: <FaProjectDiagram />,
    title: 'Trade Today',
    description: 'AI-powered crypto insights platform',
    link: 'https://tradetoday.io/',
    details: 'Engineered TradeToday, an AI-driven web app delivering real-time crypto market insights to empower users with smarter trading opportunities.',
  },
  {
    icon: <AiFillFolderOpen />,
    title: 'Code Miner',
    description: 'Official company website',
    link: 'https://codeminer.co/',
    details: 'Designed and developed official website for Code Miner, the company I work for, highlighting its software services, projects, and providing an interface for client communication.',
  },
  {
    icon: <AiFillFolderOpen />,
    title: 'GHS&E',
    description: 'Greenhouse Solar and Electrical',
    link: 'https://ghse.com.au/',
    details: 'Built a web app for GHS%E, a solar installation company, with service listings, project showcases, inquiry forms, and an admin panel for managing services and client requests.',
  },
  {
    icon: <AiFillFolderOpen />,
    title: 'Helper Log',
    description: 'Super Admin Panel',
    link: 'https://helperlog.helpoutweb.com/',
    details: 'Contributed to a shipment management dashboard, implementing Manifest, PO, and Invoice management, along with Agent/Runner modules and secure Super Admin',
  },
  {
    icon: <AiFillFolderOpen />,
    title: 'GPP',
    description: 'GhoomoPhiroo Pakistan',
    link: 'http://www.ghoomophiroo.com/',
    details: 'Built a user-friendly tourist web application for exploring and booking travel experiences across Pakistan, featuring trip bookings, lucky draw systems, destination management, and an admin panel for seamless backend operations.',
  },
  {
    icon: <AiFillFolderOpen />,
    title: 'Finarch',
    description: 'Architectural Web App',
    link: 'http://www.finarch.co',
    details: 'Developed a responsive and feature-rich architectural web app with dynamic data management, interactive components, and a seamless user experience.',
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <hr className="mb-3" />
      <ol className="relative border-s border-[var(--border)] dark:border-gray-70">
        {projects.map((project, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center size-8 text-[var(--primary)] bg-[var(--border)] rounded-full -start-4">
              {project.icon}
            </span>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm underline">
                <FaLink />
              </a>
            </div>
            <p className="text-sm mb-1">{project.description}</p>
            {project.details && (
              <ul className='text- '>
                <li>{project.details}</li>
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;
