import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import { MdLaptopMac } from 'react-icons/md';        // Mac-style laptop icon
// import { RiLaptopLine } from 'react-icons/ri';   
import { BiLaptop } from 'react-icons/bi';            // Basic laptop shape

const Experience = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
      <hr className="mb-3" />
      <ol className="relative border-s border-[var(--secondary)] dark:border-gray-70">
        {/* Job 1 - Associate Software Developer */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center size-8 bg-[var(--secondary)] rounded-full -start-4 ">
            <FaLaptopCode  className='text-[var(--primary)]'/>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Associate Software Developer
          </h3>
          <p className="block mb-2 text-sm font-normal leading-none">
            Sep 2024 – Present · CodeMiners IT & Consultancy · Lahore, Pakistan
          </p>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Work independently and in team to handle client-side logic.</li>
            <li>Develop responsive and dynamic web applications across devices.</li>
          </ul>
        </li>

        {/* Job 2 - Intern */}
        <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center size-8 bg-[var(--secondary)] rounded-full -start-4 ">
            <FaLaptopCode  className='text-[var(--primary)]'/>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Frontend Developer Intern
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Nov 2023 – Apr 2024 · Alpha Rages · Lahore, Pakistan
          </time>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Develop dynamic and interactive templates with HTML, CSS, JavaScript.</li>
            <li>Collaborated with design and marketing teams.</li>
          </ul>
        </li>

      </ol>
    </div>
  );
};

export default Experience;
