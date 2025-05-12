import web from '../../assets/services/web.svg'
import dev from '../../assets/services/dev.svg'
import uiux from '../../assets/services/uiux.svg'
import app from '../../assets/services/app.svg'

const Services = () => {
  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-12 font-sans space-y-4 md:space-y-8 bg-[#1d1d1e] rounded-2xl">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-3 md:mb-4">Services</h2>
        <h3>What i'm doing</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-[#222224] p-4 md:p-8 space-y-6 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="size-20 ">
              <img src={web} alt="" className="size-full object-contain"/>
            </div>
            <div className="  space-y-3 mt-2">
              <h4 className="text-lg md:text-xl font-bold">Web Design</h4>
              <p> Web development is the building and maintenance of websites. it's the work that...</p>
            </div>
          </div>
        </div>
        <div className="bg-[#222224] p-4 md:p-8 space-y-6 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="size-20 ">
              <img src={dev} alt="" className="size-full object-contain"/>
            </div>
            <div className="  space-y-3 mt-2">
              <h4 className="text-lg md:text-xl font-bold">Web Development</h4>
              <p> Web development is the building and maintenance of websites. it's the work that...</p>
            </div>
          </div>
        </div>
        <div className="bg-[#222224] p-4 md:p-8 space-y-6 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="size-20 ">
              <img src={uiux} alt="" className="size-full object-contain"/>
            </div>
            <div className="  space-y-3 mt-2">
              <h4 className="text-lg md:text-xl font-bold">UI/UX</h4>
              <p> Web development is the building and maintenance of websites. it's the work that...</p>
            </div>
          </div>
        </div>
        <div className="bg-[#222224] p-4 md:p-8 space-y-6 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="size-20 ">
              <img src={app} alt="" className="size-full object-contain"/>
            </div>
            <div className="  space-y-3 mt-2">
              <h4 className="text-lg md:text-xl font-bold">Mobile Apps</h4>
              <p> Web development is the building and maintenance of websites. it's the work that...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services