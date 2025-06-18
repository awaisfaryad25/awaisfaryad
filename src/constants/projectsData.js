// src/data/projectsData.js
import TradeToday from '../assets/tradeToday/tradetoday.png';
import TradeLanding from '../assets/tradeToday/tradeLandingPage.png'
import TradeAdminHome from '../assets/tradeToday/tradeAdminHome.png'
import TradeAdminMarket from '../assets/tradeToday/tradeAdminMarket.png'
import TradeAdminPredict from '../assets/tradeToday/tradeAdminPredict.png'

import CodeMiner from '../assets/projects/codeminer.png';
import GPP from '../assets/projects/gpp.png';
import Helperlog from '../assets/projects/helperlog.png';
import GHSE from '../assets/projects/ghse.png';
import Finarch from '../assets/projects/finarch.png';
import Branddekho from '../assets/projects/branddekho.png';
import GPS from '../assets/projects/gps.png';
import Rungley from '../assets/projects/rungley.png';

const projects = [
  {
    id: 1,
    title: 'TradeToday',
    description: 'AI-powered crypto insights platform',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    image: TradeToday,
    link: '#',
    extraDetails: [
      'Real-time market data integration with WebSocket for live crypto price updates.',
      'Custom AI algorithms for predictive market trends and user insights.',
      'Responsive dashboard with advanced charting tools.'
    ],
    webImages: [TradeLanding, ],
    adminImages: [TradeAdminHome, TradeAdminMarket, TradeAdminPredict]
  },
  {
    id:2,
    title: 'Code Miner',
    description: 'Official company website',
    tech: ['Wordpress', 'css',],
    image: CodeMiner,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 3,
    title: 'GPP (Ghoomo Phiroo Pakistan)',
    description: 'A travel and booking platform offering destination browsing, user login, and online payments.',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    image: GPP,
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
    image: Helperlog,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 5,
    title: 'GHS&E',
    description: 'A solar installation service website showcasing packages, inquiry forms, and company portfolio.',
    tech: ['React', 'Tailwind', 'Vite'],
    image: GHSE,
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
    image: Finarch,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },
  {
    id: 7,
    title: 'Branddekho.Ai',
    description: '',
    tech: ['React', 'Tailwind', 'Vite'],
    image: Branddekho,
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
    image: GPS,
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
    image: Rungley,
    link: '#',
    extraDetails: [],
    webImages: [],
    adminImages: []
  },

];

export default projects;
