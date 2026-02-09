import me from "../assets/me.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="page home">
      {/* HERO SECTION */}
      <div className="home-wrapper">
        {/* LEFT SIDE */}
        <div className="home-text">
          <span className="home-eyebrow">Portfolio</span>

          <h1>
            Hi, I'm Mahabali Shakti Singh
          </h1>

          <p className="home-role">
            Frontend & React Developer
          </p>

          <p className="home-desc">
            I design and develop modern, fast, and responsive web
            applications with clean code and great user experience.
          </p>

          <div className="home-stats">
            <div>
              <h3>5+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>Fresher</h3>
              <p>Experience</p>
            </div>

            <div>
              <h3>5+</h3>
              <p>Skills</p>
            </div>
          </div>

          <div className="home-buttons">
            <button onClick={() => navigate("/contact")}>
              Hire Me
            </button>

            {/* ✅ NEW DOWNLOAD BUTTON (Replaces View Projects) */}
            <a href="/resume.pdf" download="Mahabali_Singh_Resume.pdf" style={{ textDecoration: 'none' }}>
              <button className="outline-btn">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="home-photo">
          <img src={me} alt="Mahabali" />
        </div>
      </div>
    </section>
  );
}

export default Home;