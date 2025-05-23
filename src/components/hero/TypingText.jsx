import { Typewriter } from 'react-simple-typewriter';

const TypingText = () => {
  return (
    <h3 className="text-3xl md:text-5xl text-[var(--primary)] font-bold text-shadow-lg/30 tracking-wider">
      <Typewriter
        words={['Frontend Developer', 'React.js Developer', 'Software Developer']}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h3>
  );
};

export default TypingText;
