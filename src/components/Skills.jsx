import { FaPython, FaNode, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/30",
    gradientColor: "cyan-400",
  },
  {
    name: "Node.js",
    icon: <FaNode />,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
    gradientColor: "green-400",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
    gradientColor: "yellow-400",
  },
  {
    name: "SQL",
    icon: <SiMysql />,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
    gradientColor: "orange-400",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-black text-white px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technical{" "}
            <span className="text-blue-600 glow-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative border ${skill.borderColor} bg-gradient-to-br from-black/50 to-gray-900/30 p-8 rounded-2xl backdrop-blur-sm card-hover text-center overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${skill.bgColor}`}
              />

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-20 h-20 mb-6 rounded-2xl ${skill.bgColor} border ${skill.borderColor} flex items-center justify-center group-hover:scale-110 transition-all duration-500`}
                >
                  <div className={`text-4xl ${skill.color} drop-shadow-lg`}>
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.name}
                </h3>

                <div className="w-full bg-gray-800/50 rounded-full h-1.5 mb-3">
                  <div
                    className={`h-1.5 rounded-full bg-gradient-to-r from-${skill.gradientColor} to-blue-400 transition-all duration-1000 group-hover:w-full`}
                    style={{ width: "85%" }}
                  />
                </div>

                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Advanced
                </span>
              </div>

              {/* Hover border glow */}
              <div
                className={`absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-all duration-300 ${skill.borderColor.replace(
                  "/30",
                  "/50"
                )}`}
              />
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-300 flex items-center justify-center gap-3">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Also familiar with
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "MongoDB",
              "Express.js",
              "Git",
              "Docker",
              "AWS",
              "Tailwind CSS",
            ].map((tech, index) => (
              <div
                key={tech}
                className="group border border-gray-700/30 bg-gradient-to-br from-black/30 to-gray-900/20 rounded-xl p-4 text-center hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300 cursor-default backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
                  {tech}
                </span>
                <div className="w-full h-0.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="border border-blue-600/30 bg-gradient-to-br from-black/50 to-gray-900/30 rounded-2xl p-8 backdrop-blur-sm card-hover inline-block">
            <p className="text-gray-400 mb-4">Interested in working together?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
            >
              <span>Let's Talk</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
