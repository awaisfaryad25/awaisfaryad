import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt , FaGlobe   } from "react-icons/fa";
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

const Resume = () => {
  return (
    <div className="max-w-[85%] mx-auto p-4 md:px-12 font-sans space-y-4 md:space-y-8 bg-[#1d1d1e] rounded-2xl">
      <section className="text-center mb-8">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-3 md:mb-8">My Resume</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-2" >M. Awais Faryad</h1>
        <p className="text-lg md:text-xl">React.js Developer</p>
        <div className="mt-4 space-x- flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-center ">
          <p className="flex items-center gap-2">
            <FaEnvelope/> 
            <a href="mailto:awaisfaryad25@gmail.com" className="">awaisfaryad25@gmail.com</a>
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt/> 
            <a href="tel:03012525017" className="0">03012525017</a>
          </p>
          <p className="flex items-center gap-2">  <FaMapMarkerAlt /> Wapda Town, Lahore</p>
          <p className="flex items-center gap-2">
            <FaGlobe/> 
            <a href="https://awaisfaryad.vercel.app" target="_blank">awaisfaryad.vercel.app</a>
          </p>
        </div>
      </section>
      <section className="">
        <h2 className="text-2xl font-semibold mb-2">Profile</h2>
        <hr className='mb-3'/>
        <p>
          Resourceful professional with successful track record in developing innovative web designs and features.
          Possesses solid knowledge of Front-end Technologies like React.js and Next.js with ability to quickly learn new technologies.
          Demonstrated success in identifying and resolving complex code issues.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <hr className='mb-3'/>
        <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-8">
          <h3 className='text-xl font-semibold mb-2'>COMSATS University Islamabad</h3>
          <p>2018 – 2022</p>
        </div>
        <p className='text-lg'>BS in Computer Science</p>
      </section>
      
      <section className=" space-y-6">
        <Skills/>
        <Experience/>
        <Projects/>
      </section>

    </div>
  );
};

export default Resume;
