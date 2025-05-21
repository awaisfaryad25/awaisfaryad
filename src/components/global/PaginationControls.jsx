
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight  } from "react-icons/md";


const PaginationControls = ({currentPage, totalPages, onPageChange, onPrev, onNext, }) => {
  
  const goToStart = () => onPageChange(1);
  const goToEnd = () => onPageChange(totalPages);

  return (
    <div className="p-[2px] flex justify-center items-center flex-wrap w-full max-w-xs mx-auto rounded-full gap-2 p- text-white bg-[var(--bgSecondary)] border border-[var(--border)] shadow-md">
      {/* Start Button */}
      <button onClick={goToStart} disabled={currentPage === 1}
        className="text-3xl text-[var(--primary)] disabled:opacity-50"
      >
        <MdKeyboardDoubleArrowLeft/>
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="text-3xl text-[var(--primary)] disabled:opacity-50"
      >
        <MdKeyboardArrowLeft/>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-[8px] py-[2px] border text-sm rounded-full border-[var(--border)] ${
            currentPage === i + 1 ? 'bg-[var(--primary)] text-black font-bold' : 'hover:bg-[var(--secondary)]'
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="text-3xl text-[var(--primary)] disabled:opacity-50"
      >
        <MdKeyboardArrowRight/>
      </button>

      {/* End Button */}
      <button onClick={goToEnd} disabled={currentPage === totalPages}
        className="text-3xl text-[var(--primary)] disabled:opacity-50"
      >
        <MdKeyboardDoubleArrowRight/>
      </button>
    </div>
  );
};

export default PaginationControls;
