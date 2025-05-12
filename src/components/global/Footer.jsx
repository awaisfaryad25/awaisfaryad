import wolf from '../../assets/footer/wolf.svg';
import footerBG from '../../assets/footer/footerBG.svg';

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={footerBG}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full md:max-w-[85%] mx-auto px-8 pt-16 pb-8">
          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-bold text-[var(--primary)]">Awais Wolf</h3>
              <img src={wolf} alt="Wolf Logo" className="h-12" />
            </div>
          </div>

          {/* Download & Services */}
          <div>
            <strong className="text-white">Download</strong>
            <ul className="mt-2">
              <li className="my-1"><a className="text-white hover:underline" href="">Desktop App</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">Mac App</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">Linux App</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">Other</a></li>
            </ul>
            <strong className="mt-4 block text-white">Services</strong>
            <ul className="mt-2">
              <li className="my-1"><a className="text-white hover:underline" href="">Design</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">Development</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">Content</a></li>
            </ul>
          </div>

          {/* Products & Company */}
          <div>
            <strong className="text-white">Products</strong>
            <ul className="mt-2">
              <li className="my-1"><a className="text-white hover:underline" href="">Web</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">App</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">Software</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">Ecommerce</a></li>
            </ul>
            <strong className="mt-4 block text-white">Company</strong>
            <ul className="mt-2">
              <li className="my-1"><a className="text-white hover:underline" href="">Privacy Policy</a></li>
              <li className="my-1"><a className="text-white hover:underline" href="">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <strong className="text-white">Get In Touch</strong>
            <div className="mt-2 text-white">
              {/* Add contact details or form */}
              <p>Email: example@email.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
          </div>
        </div>

        <hr className="my-0 w-4/5 mx-auto border-gray-600" />
        <div className="text-center py-4 text-white">
          <span>© 2025 Awais Faryad. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
