import { useState, useEffect, useRef } from 'react';

const Carousel = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 200); 
    resetTimer();
  };
  

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 200);
    resetTimer();
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 200);
    resetTimer();
  };

  // Auto slide functionality
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, interval);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left arrow - positioned outside content */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 sm:-ml-4 lg:-ml-8"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Carousel content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 lg:py-8 px-8 sm:px-12 lg:px-4">
        {/* Content - appears first on mobile/medium, left on large */}
        <div className="w-full lg:w-1/2 px-2 lg:px-4 lg:pr-8 flex flex-col justify-center order-1">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6 leading-tight transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {slides[currentSlide].title}
          </h1>

          <p
            className={`text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {slides[currentSlide].description}
          </p>

          {/* Slide indicators */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentSlide ? 'bg-[#821b1f] scale-110' : 'bg-[#b98a32]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image - appears below content on mobile/medium, right on large */}
        <div className="w-full lg:w-1/2 h-40 sm:h-48 md:h-64 lg:h-[350px] xl:h-[400px] relative rounded-lg sm:rounded-xl overflow-hidden order-2">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </div>

      {/* Right arrow - positioned outside content */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 sm:-mr-4 lg:-mr-8"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;