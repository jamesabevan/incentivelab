const Video = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-gray-900 uppercase tracking-wide mb-4"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            THE DESIGN RULES IN ACTION
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            Watch 2-3 of the most powerful rules explained with real examples.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-900 group cursor-pointer">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#961065]/80 to-gray-900/90"></div>

          {/* Pattern Background - Rule Numbers */}
          <div className="absolute inset-0 opacity-5 overflow-hidden">
            <div
              className="absolute top-4 left-8 text-[200px] text-white"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              01
            </div>
            <div
              className="absolute bottom-4 right-8 text-[200px] text-white"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              03
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] text-white"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              07
            </div>
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulse Animation */}
              <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 animate-ping"></div>

              {/* Button */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <svg
                  className="w-10 h-10 md:w-14 md:h-14 text-[#961065] ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Video Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-gray-900/80 to-transparent">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="px-3 py-1 bg-[#00CED1] text-gray-900 text-xs uppercase tracking-wider rounded-full"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Featured
              </span>
              <span
                className="text-white/60 text-sm"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                12 min watch
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl text-white uppercase"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              WHY YOUR BEST REPS ARE LEAVING
            </h3>
            <p
              className="text-white/70 mt-2 text-sm md:text-base"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Rule 01 & Rule 05 in action — real examples from a £50M revenue team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
