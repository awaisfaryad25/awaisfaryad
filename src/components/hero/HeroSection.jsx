import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import m from '../../assets/hero/m.svg';
import banner from '../../assets/hero/herobanner.png';
import profile from '../../assets/hero/heroProfile.png';
import Button from '../global/Button';

const socials = [
  { href: 'https://facebook.com/awaisfaryad', icon: <FaFacebookF /> },
  { href: 'https://instagram.com/awaiswolf', icon: <FaInstagram /> },
  { href: 'https://linkedin.com/in/awaisfaryad', icon: <FaLinkedinIn /> },
  { href: 'https://github.com/awaisfaryad25', icon: <FaGithub /> },
];

const HeroSection = () => (
  <div className="relative w-full overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})`, clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 65%)',}}
    />

    <div className="size-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white py-20">
      {/* Left Section */}
      <div className="pt-12">
        <h1 className="relative text-9xl font-[Times_New_Roman] drop-shadow-[3px_3px_4px_#000000]">
          <img src={m} alt="" className="absolute top-0 -left-4" /> awais
        </h1>
        <h1 className="text-8xl leading-[5rem] font-semibold text-[var(--primary)]">FARYAD</h1>
        <div className="md:text-lg space-y-2 mt-8">
          <p>A passionate FrontEnd Developer in React Js based In Lahore, PAK.</p>
          <p>
            Aspiring Software Developer with 6 months of experience developing web applications.
            I thrive on tackling challenges and pushing boundaries through creativity and innovation.
          </p>
        </div>

        <div className="flex items-center gap-3 mt-8">
          <Button title="Hire Me" />
          <hr className="h-1 w-60 border-gray-400" />
          <div className="flex items-center gap-4">
            {socials.map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank"
                className="p-2 bg-[var(--secondary)]/30 border border-[var(--primary)] rounded-full"
              >
                <span className="text-[var(--primary)] text-xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex justify-center md:justify-end">
        <div className="w-[27rem]">
          <img src={profile} alt="Profile" className="size-full object-fill" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
