
const PaginationControls = ({currentPage, totalPages, onPageChange, onPrev, onNext, }) => {
  
  const goToStart = () => onPageChange(1);
  const goToEnd = () => onPageChange(totalPages);

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 pt-6 text-white">
      {/* Start Button */}
      <button
        onClick={goToStart}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-md border-gray-600 hover:bg-gray-700 disabled:opacity-50"
      >
        Start
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-md border-gray-600 hover:bg-gray-700 disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 border rounded-md border-gray-600 ${
            currentPage === i + 1 ? 'bg-[var(--primary)] text-black font-bold' : 'hover:bg-gray-700'
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded-md border-gray-600 hover:bg-gray-700 disabled:opacity-50"
      >
        Next
      </button>

      {/* End Button */}
      <button
        onClick={goToEnd}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded-md border-gray-600 hover:bg-gray-700 disabled:opacity-50"
      >
        End
      </button>
    </div>
  );
};

export default PaginationControls;
