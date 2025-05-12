import { FaProjectDiagram } from 'react-icons/fa';
import { BsFillFolderFill } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import { AiFillFolderOpen } from 'react-icons/ai';
import { VscFolderActive } from 'react-icons/vsc';
import { GoProject } from 'react-icons/go';


const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <hr className='mb-3'/>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Trade Today:</strong> AI-powered crypto insights platform. [<a href="https://tradetoday.io/" className="text-blue-500">Visit</a>]</li>
        <li><strong>Code Miner:</strong> Official company website. [<a href="https://codeminer.co/" className="text-blue-500">Visit</a>]</li>
        <li><strong>GHS&E:</strong> Solar installation service site. [<a href="https://ghse.com.au/" className="text-blue-500">Visit</a>]</li>
        <li><strong>Helper Log:</strong> Shipment management dashboard. [<a href="https://helperlog.helpoutweb.com/" className="text-blue-500">Visit</a>]</li>
        <li><strong>GhoomoPhiroo Pakistan:</strong> Travel and booking app. [<a href="https://ghoomophiroo.com/" className="text-blue-500">Visit</a>]</li>
        <li><strong>Finarch:</strong> Architectural web app. [<a href="https://finarch.co/" className="text-blue-500">Visit</a>]</li>
      </ul>
    </div>
  )
}

export default Projects