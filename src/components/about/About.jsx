
import profile from '../../assets/about/about.png'
import Button from '../global/Button'

const About = () => {
  return (
    <>
      <div className="max-w-[85%] mx-auto p-4 md:px-12 font-sans space-y-4 md:space-y-8 bg-[#1d1d1e] rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 md:py-12">
          <div className="">
            <div className="w-ful max-w-60 md:max-w-80 mx-auto">
              <img src={profile} alt="" className='size-full object-cover '/>
            </div>
          </div>
          <div className="space-y-4">
            <p><span className='texy-lg  md:text-3xl text-[var(--primary)]'>-</span> About Me</p>
            <h3 className='text-xl md:text-4xl'>
              <span className=' font-semibold'>Who is</span> 
              <span className='text-[var(--primary)]'> Awais Faryad?</span> 
            </h3>
            <p>
              Aspiring Software Developer with 1 Year of experience developing web applications, 
              I have contributed to projects across industries such as Construction Management, 
              Tourism, Solar Systems, Cleaning Management, Shipment Management, Custom Dashboards, 
              CRM solutions, and Responsive Single-Page Applications (SPAs). 
              I thrive on tackling challenges and pushing the boundaries of web development 
              through creativity and innovation.
            </p>
            <Button title="Download CV" downloadLink="/documents/Awais-Faryad.pdf" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About