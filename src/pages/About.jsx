function About() {
  return (
    <section className="page">
      <div className="about-card">
        <div className="about-header">
          {/* <span className="about-eyebrow">Profile</span> */}
          <h1>About Me</h1>
          {/* <h2>Hi, I'm Mahabali Shakti Singh</h2> */}
        </div>

        <div className="about-divider" />

        <div className="about-grid">
          <div className="about-copy">
            <div className="about-highlight">
              <h3>Who I Am</h3>
              <ul className="about-list">
                <li>
                  I'm a self-motivated developer focused on building scalable
                  and user-friendly web applications. I'm constantly learning
                  new technologies and improving my problem-solving skills.
                </li>
                <li>
                    I'm a passionate Frontend & React Developer who loves building
                    modern, fast, and user-friendly websites.
                </li>

                <li>
                  I started my journey with HTML, CSS, and JavaScript and moved
                  to React to create powerful web applications.
                </li>

                <li>
                  I focus on writing clean, scalable, and maintainable code with
                  great design and performance.
                </li>

                <li>
                  My goal is to become a Full Stack Developer and work on
                 meaningful real-world projects.
                </li>
              </ul>
            </div>

          </div>

          <div className="about-panel">
            <h3>My Skills</h3>

            <div className="about-skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>PHP</span>
              <span>WordPress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
