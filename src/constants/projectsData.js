// src/data/projectsData.js
import GPP from '../assets/projects/gpp.png';
import Helperlog from '../assets/projects/helperlog.png';
import GHSE from '../assets/projects/ghse.png';
import Finarch from '../assets/projects/finarch.png';

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
    description: 'A logistics dashboard for managing shipments, tracking parcels, and updating delivery statuses.',
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

export default projects;
