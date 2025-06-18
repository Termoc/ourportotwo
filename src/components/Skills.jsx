import { FaPython, FaNode, FaReact } from "react-icons/fa"
import { SiMysql } from "react-icons/si"

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <SiMysql /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Technical <span className="text-blue-600">Skills</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="border border-blue-600 bg-transparent p-6 rounded-lg shadow hover:shadow-lg transition duration-300 items-center text-center flex flex-col hover:scale-105">
              <div className="text-7xl mb-2 items-center text-center">{skill.icon}</div>
              <p className="text-lg font-light">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
