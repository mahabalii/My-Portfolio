const projects = [
  {
    name: "InnerBalance",
    tech: "React",
    desc: "A focused productivity app with crisp UI and responsive layouts.",
    link: "https://innerbalance0.netlify.app/"
  },
  {
    name: "MealShare",
    tech: "MERN",
    desc: "A focused productivity app with crisp UI and responsive layouts.",
    link: "https://mealshare0.netlify.app/"
  },
  {
    name: "Todo App",
    tech: "JavaScript",
    desc: "A focused productivity app with crisp UI and responsive layouts.",
    link: "https://todo-by-mahabali.netlify.app/"
  },
  {
    name: "Portfolio Website",
    tech: "React + Vite",
    desc: "A luxury-inspired personal site with smooth sections and bold typography.",
    link: "#"
  },
  {
    name: "CRUD System",
    tech: "PHP + MySQL",
    desc: "A clean admin workflow with validated forms and fast data handling.",
    link: "https://crud-php-using-ajax.netlify.app/"
  },
    {
    name: "Signup Page",
    tech: "HTML + CSS",
    desc: "A luxury-inspired personal site with smooth sections and bold typography.",
    link: "https://signup-page-using-reactjs.netlify.app/"
  },
  {
    name: "Netflix Cards",
    tech: "JavaScript",
    desc: "A clean admin workflow with validated forms and fast data handling.",
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