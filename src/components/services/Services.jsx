
import ServiceCard from './ServiceCard'; 
import web from '../../assets/services/web.svg';
import dev from '../../assets/services/dev.svg';
import uiux from '../../assets/services/uiux.svg';
import app from '../../assets/services/app.svg';

const Services = () => {
  const serviceData = [
    {
      icon: web,
      title: 'Web Design',
      description: "Web development is the building and maintenance of websites. it's the work that..."
    },
    {
      icon: dev,
      title: 'Web Development',
      description: "Web development is the building and maintenance of websites. it's the work that..."
    },
    {
      icon: uiux,
      title: 'UI/UX',
      description: "Web development is the building and maintenance of websites. it's the work that..."
    },
    {
      icon: app,
      title: 'Mobile Apps',
      description: "Web development is the building and maintenance of websites. it's the work that..."
    }
  ];

  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-12 font-sans space-y-4 md:space-y-8 bg-[#1d1d1e] rounded-2xl border border-[var(--border)]">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-3 md:mb-4">Services</h2>
        <h3>What I'm doing</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
