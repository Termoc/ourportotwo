const About = () => {
  return (
    <section id="about" className="py-24 bg-standar text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-blue-600 glow-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Main Background Card */}
          <div className="lg:col-span-2 border border-blue-600/30 rounded-3xl bg-gradient-to-br from-black/50 to-gray-900/30 p-8 mb-8 card-hover backdrop-blur-sm">
            <h3 className="text-3xl font-semibold text-blue-300 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Background
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              I'm a passionate full stack developer with a love for clean code, responsive design, and fast user experiences.
              I enjoy building both front-end interfaces and back-end APIs that are scalable and efficient.
              When I'm not coding, I explore design trends and improve my dev workflow.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="border border-blue-600/30 rounded-2xl bg-gradient-to-br from-black/40 to-gray-900/20 p-6 grid-item backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <h4 className="text-xl font-semibold text-blue-300">Experience</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                1+ years of building full stack apps with React, Node.js, and MongoDB.
              </p>
            </div>

            <div className="border border-blue-600/30 rounded-2xl bg-gradient-to-br from-black/40 to-gray-900/20 p-6 grid-item backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <h4 className="text-xl font-semibold text-blue-300">Education</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Self-taught developer with a background in UI design and JavaScript.
              </p>
            </div>
          </div>

          <div className="border border-blue-600/30 rounded-2xl bg-gradient-to-br from-black/40 to-gray-900/20 p-6 grid-item backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <h4 className="text-xl font-semibold text-blue-300">Interests</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Web performance, accessibility, and modern UI animations.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Performance', 'Accessibility', 'UI/UX', 'Animations'].map((interest) => (
                <span 
                  key={interest}
                  className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
