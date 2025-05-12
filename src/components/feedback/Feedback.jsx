import ClientSlider from "./ClientSlider"

const Feedback = () => {
  return (
    <div className="max-w-[85%] mx-auto px-4 py-12 md:px-12 font-sans space-y-4 md:space-y-8 bg-[#1d1d1e] rounded-2xl">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[var(--primary)] mb-3 md:mb-4">Feedback</h2>
        <h3>What People Say About Me</h3>
      </div>
      <div className="">
        <ClientSlider />
      </div>
    </div>
  )
}

export default Feedback