import React, { useState } from 'react';
import InputField from '../../components/global/InputField';
import Button from '../../components/global/Button';
import Map from './Map';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-12 font-sans space-y-4 md:space-y-8 bg-[#1d1d1e] rounded-2xl">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-3 md:mb-4">Contact Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-[#222224] p-4 md:p-8 space-y-6 rounded-2xl">
          <div className='space-y-2'>
            <h5 className="text-[var(--primary)] font-semibold">Get in touch</h5>
            <h4 className="text-white text-lg md:text-2xl font-bold">Let's Chat, Reach out to Us</h4>
            <p className="text-gray-400 text-sm md:text-base">
              Have a question or feedback? We're here to help. Send us a message and we'll respond within 24 hours.
            </p>
          </div>
          <form className="space-y-4">
            <InputField
              label="First Name" name="firstName" value={formData.firstName}
              placeholder="Enter your first name" onChange={handleChange}
            />
            <InputField
              label="Email" name="email" type="email" value={formData.email} 
              placeholder="Enter your email" onChange={handleChange}
            />
            <InputField
              label="Message" name="message" value={formData.message}
              placeholder="Your message..." onChange={handleChange} isTextArea={true}
            />
            <Button title="Send Message"  />
          </form>
        </div>
        <div className="bg-[#222224] p-4 md:p-8 space-y-6 rounded-2xl">
          <div className="bg-[#2c2c2e] p-4 rounded-3xl">
            <Map />
          </div>
          <div className="bg-[#2c2c2e] p-4 rounded-3xl space-y-4">
            <div className="py-3 px-6 rounded-2xl space-y-2 bg-[var(--secondary)]">
              <h4 className='font-medium'>Email</h4>
              <a href="mailto:awaisfaryad25@gmail.com" className='hover:underline'>awaisfaryad25@gmail.com</a>
            </div>
            <div className="py-3 px-6 rounded-2xl space-y-2 bg-[var(--secondary)]">
              <h4 className='font-medium'>Phone Number</h4>
              <a href="tel:+923012525017" className="hover:underline">+92 301 2525017</a>
            </div>
            <div className="py-3 px-6 rounded-2xl bg-[var(--secondary)]">
              <h4 className='font-medium'>Address</h4>
              <address className='hover:underline'>Wapda Town, Lahore</address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
