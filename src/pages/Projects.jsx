const projects = [
  {
    name: "InnerBalance",
    tech: "React",
    desc: "A minimalist wellness dashboard featuring fluid UI and distraction-free layouts.",
    link: "https://innerbalance0.netlify.app/"
  },
  {
    name: "MealShare",
    tech: "MERN",
    desc: "A full-stack community platform with secure authentication and real-time data syncing.",
    link: "https://mealshare0.netlify.app/"
  },
  {
    name: "Todo App",
    tech: "JavaScript",
    desc: "A high-performance task manager leveraging native JS for seamless DOM manipulation.",
    link: "https://todo-by-mahabali.netlify.app/"
  },
  {
    name: "Portfolio Website",
    tech: "React + Vite",
    desc: "A luxury-inspired digital showroom blending bold typography with smooth transitions.",
    link: "#"
  },
  {
    name: "CRUD System",
    tech: "PHP + MySQL",
    desc: "A robust administrative engine focused on asynchronous data handling and validation.",
    link: "https://crud-php-using-ajax.netlify.app/"
  },
  {
    name: "Signup Page",
    tech: "React",
    desc: "A pixel-perfect authentication interface emphasizing accessible design and form logic.",
    link: "https://signup-page-using-reactjs.netlify.app/"
  },
  {
    name: "Netflix Cards",
    tech: "JavaScript",
    desc: "A dynamic content gallery exploring interactive hover effects and responsive grid layouts.",
    link: "https://clonebymahabalii.netlify.app/"
  }
];

function Projects() {
  return (
    <section className="page projects">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p className="projects-sub">
          A focused set of projects that highlight clean UX, performance,
          and modern stacks.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <a 
            key={project.name} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-card"
          >
            <div className="project-meta">
              <h3>{project.name}</h3>
              <span className="project-tag">{project.tech}</span>
            </div>
            <p>{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;