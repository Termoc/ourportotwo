import { FaPython, FaNode, FaReact } from "react-icons/fa"
import { SiMysql } from "react-icons/si"

const skills = [
  { name: "React", icon: <FaReact />, color: "text-cyan-400", bgColor: "bg-cyan-400/10" },
  { name: "Node.js", icon: <FaNode />, color: "text-green-400", bgColor: "bg-green-400/10" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-400", bgColor: "bg-yellow-400/10" },
  { name: "SQL", icon: <SiMysql />, color: "text-orange-400", bgColor: "bg-orange-400/10" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technical <span className="text-blue-600 glow-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="group relative border border-blue-600/30 bg-gradient-to-br from-black/50 to-gray-900/30 p-8 rounded-2xl backdrop-blur-sm card-hover text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${skill.bgColor}`}></div>
              
              <div className="relative z-10">
                <div className={`text-7xl mb-6 ${skill.color} group-hover:scale-110 transition-all duration-500 drop-shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.name}
                </h3>
                <div className="w-12 h-0.5 bg-blue-600/50 mx-auto group-hover:bg-blue-400 group-hover:w-16 transition-all duration-300"></div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border border-blue-400/0 group-hover:border-blue-400/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-300">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['JavaScript', 'TypeScript', 'MongoDB', 'Express.js', 'Git', 'Docker', 'AWS', 'Tailwind CSS'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-blue-600/50 hover:text-blue-300 hover:bg-blue-600/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
