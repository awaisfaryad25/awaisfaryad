import { useState, useEffect } from "react";
import qoutes from '../../assets/feedback/qoutes.svg'

const ClientSlider = () => {
  const clientData = [
    {
      id: 1, name: "Jasmine Sandal", role: "Frontend Dev",
      image: "https://img.freepik.com/free-photo/business-woman-posing-street_23-2148213512.jpg?t=st=1725877935~exp=1725881535~hmac=236bf1f4fe181ebd430e1b30d14acbe440ddd0ec43a4c8dcb4b23f8a3686fe81&w=826",
      comment: "I appreciate Your work and the way of design very impressive. I will contect you soon for my further projects. Their customer service is second to none. The product quality is consistently outstanding.",
    },
    {
      id: 2, name: "Elena Martia", role: "Graphic Designing",
      image: "https://img.freepik.com/premium-photo/woman-black-jacket-is-standing-front-building_1165411-6606.jpg?uid=R156125114&ga=GA1.1.55140716.1719488327&semt=ais_hybrid",
      comment: "Their customer service is second to none. The product quality is consistently outstanding. Their customer service is second to none. The product quality is consistently outstanding.",
    },
    {
      id: 3, name: "IsaBella John", role: "Content Writing",
      image: "https://img.freepik.com/free-photo/reporter-sea_23-2148568138.jpg?t=st=1725878085~exp=1725881685~hmac=0e6064cad19e92b7505b55ed8b1495b19b20dc89c4390d38cc202bb1dc282ed0&w=360",
      comment: "Great client, excellent communication and every task had clear instructions. Their customer service is second to none. The product quality is consistently outstanding.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === clientData.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [clientData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {clientData.map((feedback) => (
          <div className="flex min-w-full" key={feedback.id}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:w-[70%] lg:w-[55%] mx-auto">
              <div className="bg-[var(--secondary)] w-full md:col-span-2 lg:col-span-3 colLeft p-4 md:p-8 rounded-t-lg md:rounded-l-lg md:rounded-r-none">
                <div className="h-[260px] md:size-[260px] m-auto box-content">
                  <img className="object-cover size-full" style={{ borderRadius: "0.5rem 3rem" }} src={feedback.image} alt="" />
                </div>
                <div className=" p-4 md:p-8">
                  <h4 className="text-lg font-bold">{feedback.name}</h4>
                  <span>{feedback.role}</span>
                </div>
              </div>
              <div className="w-full lg:col-span-2 p-4 md:p-8 bg-[#222224] text-start rounded-b-lg md:rounded-r-lg md:rounded-l-none">
                <div className="">
                  <p>{feedback.comment}</p>
                </div>
                <div className="flex justify-end">
                  <img src={qoutes} alt="quote icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {clientData.map((_, index) => (
          <button key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 w-6 cursor-pointer transition-colors duration-300 ease-in-out ${
              index === currentSlide ? "bg-[var(--secondary)]" : "bg-[#222224]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
