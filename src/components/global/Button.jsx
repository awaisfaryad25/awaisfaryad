
const Button = ({ title, downloadLink, className = "" }) => {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = downloadLink.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`px-5 py-1.5 font-bold md:font-semibold shadow-lg rounded-md bg-[var(--secondary)] border border-[var(--primary)] cursor-pointer ${className}`}
    >
      <span className="text-shadow-lg/30">{title}</span>
    </button>
  );
};

export default Button;
