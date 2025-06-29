const projects = [
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio built with React and Tailwind CSS",
    image: "/projects/project1.jpg",
    link: "https://miro.medium.com/v2/resize:fit:2000/0*NlrgaScR9urwZJjL.jpg",
    technologies: ["React", "Tailwind", "Vite"]
  },
  {
    title: "HandPhone App",
    description: "Mobile-first web application with modern UI/UX design",
    image: "/projects/project2.jpg",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Rw3omCr83mr-h1_7aFC56g_JhXygcDEybjB8QmsXVxwhbQWVFxIk3yffvV5DUdH2DQA&usqp=CAU",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Blog CMS",
    description: "Content management system with rich text editor and media support",
    image: "/projects/project3.jpg",
    link: "https://www.cloudways.com/blog/wp-content/uploads/best-blogging-cms-platforms.jpg",
    technologies: ["Node.js", "Express", "MySQL"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-standar text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-blue-600 glow-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a 
              key={project.title} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="border border-blue-600/30 bg-gradient-to-br from-black/50 to-gray-900/30 rounded-2xl overflow-hidden backdrop-blur-sm card-hover relative">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.link}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white bg-blue-600 px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-600/30 group-hover:bg-blue-600/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
