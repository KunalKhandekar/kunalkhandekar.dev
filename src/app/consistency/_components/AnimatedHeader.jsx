const AnimatedHeader = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-[rgb(13,17,23)] dark:via-gray-900 dark:to-[#0D1117] overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.05)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.1)_50%,transparent_75%)]" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[240px] flex flex-col md:flex-row items-center justify-between py-8 md:py-12">
          <div className="flex-1 text-center md:text-left z-20 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                My Consistency Journey
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Learn in Public
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl md:text-xl max-w-2xl leading-relaxed">
              Daily updates, small wins, experiments, and lessons — showing how
              consistent effort leads to growth.
            </p>
          </div>
          <div className="relative flex-shrink-0 w-full md:w-auto md:ml-8">
            <div className="relative w-full max-w-md mx-auto md:w-80 h-48 md:h-56">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full shadow-lg shadow-purple-500/25 animate-pulse">
                <div
                  className="absolute inset-2 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>

              <div
                className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50" />
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/50" />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full shadow-lg shadow-green-400/50" />
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-400/50" />
              </div>

              <div
                className="absolute top-4 right-4 w-12 h-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg transform rotate-12 animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              >
                <div className="p-1">
                  <div className="w-full h-1 bg-green-500 dark:bg-green-400 rounded mb-1" />
                  <div className="w-3/4 h-1 bg-blue-500 dark:bg-blue-400 rounded mb-1" />
                  <div className="w-1/2 h-1 bg-purple-500 dark:bg-purple-400 rounded" />
                </div>
              </div>
              <div
                className="absolute bottom-4 left-4 w-10 h-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg transform -rotate-12 animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              >
                <div className="p-1">
                  <div className="w-full h-1 bg-cyan-500 dark:bg-cyan-400 rounded mb-1" />
                  <div className="w-2/3 h-1 bg-pink-500 dark:bg-pink-400 rounded mb-1" />
                  <div className="w-4/5 h-1 bg-yellow-500 dark:bg-yellow-400 rounded" />
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50 50 Q 100 20 150 80 Q 200 140 120 180"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M 150 50 Q 100 80 50 120 Q 20 160 80 180"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </svg>

              <div
                className="absolute top-8 left-8 w-2 h-2 bg-gray-800 dark:bg-white rounded-full animate-ping"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute top-16 right-12 w-1 h-1 bg-purple-600 dark:bg-purple-400 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute bottom-12 right-8 w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-8 left-16 w-1 h-1 bg-pink-600 dark:bg-pink-400 rounded-full animate-ping"
                style={{ animationDelay: "3s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white dark:from-[#0D1117] to-transparent" />
    </div>
  );
};
export default AnimatedHeader;
