const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#222224] p-4 md:p-8 space-y-6 rounded-2xl border border-[var(--border)]">
      <div className="flex items-start gap-6">
        <div className="size-20">
          <img src={icon} alt={title} className="size-full object-contain" />
        </div>
        <div className="space-y-3 mt-2">
          <h4 className="text-lg md:text-xl font-bold">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
