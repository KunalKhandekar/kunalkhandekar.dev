export const Banner = () => {
  return (
    <div
      className="
      relative 
      bg-gradient-to-b from-gray-50 via-gray-50/95 to-transparent 
      dark:from-[#0a0f1c] dark:via-[#0a0f1c]/95 dark:to-transparent
      overflow-hidden transition-colors duration-500 py-20 px-6 max-[800px]:py-12
    "
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center animate-fadeInUp">
        {/* Heading */}
        <h1
          className="text-4xl max-[800px]:text-3xl font-extrabold 
          bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 
          dark:from-white dark:via-gray-200 dark:to-white 
          bg-clip-text text-transparent leading-snug tracking-tight font-sans"
        >
          Notes from My Dev Journey
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-[800px]:mt-3 text-lg max-[800px]:text-sm text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          Sharing insights, coding experiments, and lessons learned along the
          way — with the hope that it helps fellow developers.
        </p>
      </div>
    </div>
  );
};
