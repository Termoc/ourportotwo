
const About = () => {
  return (
    <section id="about" className="py-20 bg-standar text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="border border-blue-600 rounded-2xl bg-black p-5 mb-10">
            <h1 className="text-2xl font-semibold text-white mb-2">Background</h1>
            <p className="text-md leading-relaxed text-gray-300">
              I'm a passionate full stack developer with a love for clean code, responsive design, and fast user experiences.
              I enjoy building both front-end interfaces and back-end APIs that are scalable and efficient.
              When I'm not coding, I explore design trends and improve my dev workflow.
            </p>
          </div>
          <div className="border border-blue-600 rounded-2xl bg-black p-5">
            <h1 className="text-2xl font-semibold text-blue-300 mb-2">Experience</h1>
            <p className="text-gray-300">1+ years of building full stack apps with React, Node.js, and MongoDB.</p>
          </div>
          <div className="border border-blue-600 rounded-2xl bg-black p-5">
            <h1 className="text-2xl font-semibold text-blue-300 mb-2">Education</h1>
            <p className="text-gray-300">Self-taught developer with a background in UI design and JavaScript.</p>
          </div>
          <div className="border border-blue-600 rounded-2xl bg-black p-5">
            <h1 className="text-2xl font-semibold text-blue-300 mb-2">Interests</h1>
            <p className="text-gray-300">Web performance, accessibility, and modern UI animations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
