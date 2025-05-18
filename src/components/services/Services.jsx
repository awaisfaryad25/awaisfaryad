
import ServiceCard from './ServiceCard'; 
import service from '../../constants/serviceData';

const Services = () => {


  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-12 font-sans space-y-4 md:space-y-8 bg-[#1d1d1e] rounded-2xl border border-[var(--border)]">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-3 md:mb-4">Services</h2>
        <h3>What I'm doing</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
        {service.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
