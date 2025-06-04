import { FaBriefcase, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
      <hr className="mb-3" />
      <ol className="relative border-s border-[var(--border)] dark:border-gray-70">
        {/* Job 1 - Associate Software Developer */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center size-8 bg-[var(--border)] rounded-full -start-4 ">
            <FaBriefcase  className='text-[var(--primary)]'/>
          </span>
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-lg font-semibold">Associate Software Developer</h3>
            <h4 className='text-sm'>Sep 2024 – Present</h4>
          </div>
          <p className="block mb-2 text-sm font-normal leading-none">
            CodeMiners IT & Consultancy · Lahore, Pakistan
          </p>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Worked independently on client-side development tasks and collaborated effectively within a dynamic team.</li>
            <li>Handled front-end logic, UI implementation, and ensured seamless user experience across projects.</li>
            <li>Contributed to the successful delivery of web applications by writing clean, maintainable, and efficient code.</li>
            <li>Integrated and consumed REST APIs & WebSockets to handle dynamic data and enhance application functionality.</li>
          </ul>
        </li>

        {/* Job 2 - Intern */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center size-8 bg-[var(--border)] rounded-full -start-4 ">
            <FaBriefcase  className='text-[var(--primary)]'/>
          </span>
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-lg font-semibold ">Frontend Developer Intern</h3>
            <h4 className='text-sm'>Nov 2023 – Apr 2024</h4>
          </div>
          <p className="block mb-2 text-sm font-normal leading-none">Alpha Rages · Lahore, Pakistan</p>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Utilized HTML, CSS, and JavaScript to develop dynamic and interactive templates</li>
            <li>Collaborate with design and marketing teams to implement responsive and userfriendly interfaces.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
