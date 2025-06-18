
const projects = [
  {
    title: "Portfolio Website",
    image: "/projects/project1.jpg",
    link: "https://miro.medium.com/v2/resize:fit:2000/0*NlrgaScR9urwZJjL.jpg"
  },
  {
    title: "HandPhone?",
    image: "/projects/project2.jpg",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Rw3omCr83mr-h1_7aFC56g_JhXygcDEybjB8QmsXVxwhbQWVFxIk3yffvV5DUdH2DQA&usqp=CAU",
  },
  {
    title: "Blog CMS",
    image: "/projects/project3.jpg",
    link: "https://www.cloudways.com/blog/wp-content/uploads/best-blogging-cms-platforms.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-standar text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="border border-blue-600 bg-transparent rounded-lg overflow-hidden shadow hover:shadow-xl transition group hover:scale-105 duration-300">
                <img
                  src={project.link}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
