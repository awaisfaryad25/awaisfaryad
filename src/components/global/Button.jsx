
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
      className={`px-5 py-2.5 font-semibold rounded-md bg-[var(--secondary)] ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
