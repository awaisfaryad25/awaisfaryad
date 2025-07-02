// src/data/projectsData.js
import { projectImages } from './projectImages';
const projects = [
  {
    id: 1,
    title: 'Inspired Edibles',
    description: 'Food Blog platform with rich content and user interaction.',
    tech: ['Next Js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    image: projectImages.InspiredEdibles.main,
    link: 'www.tradetoday.io',
    extraDetails: [
      'Interactive blog platform with markdown support and rich text editor for food content creation.',
      'User engagement through likes, comments, and threaded replies on each blog post.',
      'Dynamic blog listing with filters by tags, authors, and popular categories.',
      'Reading time estimation and SEO-friendly URLs using slugs for better visibility.',
      'Admin dashboard to manage blog posts, moderate comments, and view engagement analytics.'
    ],
    webImages: projectImages.InspiredEdibles.webImages,
    adminImages: projectImages.InspiredEdibles.adminImages,
  },
  {
    id: 2,
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
    id:3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
