// src/data/projectsData.js
import { projectImages } from './projectImages';
const projects = [
  {
    id: 1,
    title: 'TradeToday',
    description: 'AI-powered crypto insights platform',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    image: projectImages.TradeToday.main,
    link: 'www.tradetoday.io',
    extraDetails: [
      'Real-time market data integration with WebSocket for live crypto price updates.',
      'Custom AI algorithms for predictive market trends and user insights.',
      'Responsive dashboard with advanced charting tools.'
    ],
    webImages: projectImages.TradeToday.webImages,
    adminImages: projectImages.TradeToday.adminImages,
  },
  {
    id:2,
    title: 'Code Miner',
    description: 'Official company website',
    tech: ['Wordpress', 'css',],
    image: projectImages.CodeMiner.main,
    link: 'codeminer.co',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 3,
    title: 'GPP (Ghoomo Phiroo Pakistan)',
    description: 'A travel and booking platform offering destination browsing, user login, and online payments.',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    image: projectImages.GPP.main,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 4,
    title: 'HelperLog',
    description: 'A logistics dashboard for managing shipments, tracking parcels, and updating delivery statuses.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: projectImages.Helperlog.main,
    link: 'helperlog.helpoutweb.com',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 5,
    title: 'GHS&E',
    description: 'A solar installation service website showcasing packages, inquiry forms, and company portfolio.',
    tech: ['React', 'Tailwind', 'Vite'],
    image: projectImages.GHSE.main,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 6,
    title: 'Finarch',
    description: 'A solar installation service website showcasing packages, inquiry forms, and company portfolio.',
    tech: ['React', 'Tailwind', 'Vite'],
    image: projectImages.Finarch.main,
    link: 'finarch.co',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 7,
    title: 'Branddekho.Ai',
    description: '',
    tech: ['React', 'Tailwind', 'Vite'],
    image: projectImages.Branddekho.main,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 8,
    title: 'GPS',
    description: '',
    tech: ['React', 'Tailwind', 'Vite'],
    image: projectImages.GPS.main,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 9,
    title: 'Rungley',
    description: '',
    tech: ['React', 'Tailwind', 'Vite'],
    image: projectImages.Rungley.main,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },

];

export default projects;
