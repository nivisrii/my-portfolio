import React from "react";
import './style.css';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare,
  FaReact, FaGitAlt, FaAws
} from "react-icons/fa";
import {
  SiSpringboot, SiDjango, SiFlask, SiMysql, SiPostgresql, SiSqlite
} from "react-icons/si";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Portfolio() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container dark gradient-bg" style={{ background: 'linear-gradient(135deg,#0f0f20, #0f0f20)' }}>
      <nav className="navbar glass" style={{ borderBottom: '2px solid #00f2ff', boxShadow: '0 2px 10px rgba(0, 242, 255, 0.2)' }}>
        <h1 className="logo">Nivi Srivastava</h1>
        <ul className="nav-links">
          {/* <li><a href="#about">About</a></li> */}
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* <header className="header hero">
        <h2>Software Engineer and Web Developer</h2>
        <p>Innovative, curious, and always evolving—I'm Nivi, transforming ideas into reality.</p>
      </header> */}
    <div className="hero-section">
  <div className="hero-content">
    <div className="text">
    <h1>Hi, I'm</h1>
    <h1><span className="typing-name">Nivi Srivastava</span></h1>
      <h2><i>Software Engineer and Web Developer </i></h2>
      <h2><i></i></h2>
      {/* <p><em>Innovative, curious, and always evolving—I'm Nivi</em></p> */}
      <div className="buttons">
        {/* <button className="contact-btn">Let's Connect</button> */}
  {/* Mailbox icon */}
  <div className="icon-container">
  <a 
    href="mailto:nivi13sri@gmail.com" 
    className="icon-link" 
    title="Send Email"
  >
    <FaEnvelope />
  </a>

  <a href="https://www.linkedin.com/in/nivi-srivastava-b0aa5a221/" 
     target="_blank" 
     rel="noopener noreferrer" 
     className="icon-link">
    <FaLinkedin />
  </a>
  
  <a href="https://github.com/nivisrii/" 
     target="_blank" 
     rel="noopener noreferrer" 
     className="icon-link">
    <FaGithub />
  </a>
</div>
</div>
    </div>

    <div className="image">
      <img src="/NiviPic.jpg" alt="Nivi Srivastava" />
    </div>
  </div>
</div>

<section id="about" class="about-card-section" >
  <div class="about-card">
    <h2 class="aboutme">About Me</h2>
    <p>
    I’m Nivi Srivastava, a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning. As a dedicated and detail-oriented Software Developer, I specialize in Java, Python, ReactJS, and Spring Boot, with a strong foundation in full-stack web development.
</p>
<p>I’ve worked on diverse projects like the Smart Student ID Generator and Smart Contact Manager, and I’m certified in AWS Cloud, Web Development, and Problem Solving. I enjoy building scalable, user-friendly applications and continuously enhancing my technical skill set.

I’m now seeking opportunities where I can contribute to innovative development teams and grow as a technology professional.</p>
  </div>
</section>


<section id="skills" className="section fade-in glass" data-aos="fade-up">
  <h2>Technical Skills</h2>
  <div className="skills-scroll">
    <div className="skills-track">
      <div className="marquee">
        <div className="marquee-content">
          {[
            { icon: <FaJava />, name: "Java" },
            { icon: <FaPython />, name: "Python" },
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
            { icon: <FaJsSquare />, name: "JavaScript" },
            { icon: <FaReact />, name: "React" },
            { icon: <SiSpringboot />, name: "Spring Boot" },
            { icon: <SiDjango />, name: "Django" },
            { icon: <SiFlask />, name: "Flask" },
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <FaAws />, name: "AWS" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <SiSqlite />, name: "SQLite3" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
          ].map(({ icon, name }, index) => (
            <div key={index} className="skill-item">
              {icon}
              <span className="skill-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* <section id="experience" className="section fade-in glass" data-aos="fade-up">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3 class="front">Front-End Developer Intern</h3>
          <h5 class="ci">CodeXIntern</h5>
          <h3 class="date">Oct, 2024 – Oct, 2024</h3>
          <ul className="bullets">
            <li class="cont">Developed responsive interfaces using <b><i>HTML, CSS, JavaScript</i></b></li>
            <li class="cont">Debugged backend logic, resulting in <b><i>30% performance</i></b> improvement</li>
          </ul>
        </div>
      </section> */}

      {/* <section id="projects" className="section fade-in glass" data-aos="fade-up">
  <h2>My Projects</h2>
  <div className="project-grid">
    <div className="project-card" >
      <h3>📌 Personal Portfolio Website</h3>
      <p>A sleek ReactJS-based portfolio to showcase my skills, education, projects, and achievements with animations and a modern UI.</p>
      <div className="tech-tags">
        <FaReact title="ReactJS" /> <FaCss3Alt title="CSS3" /> <FaGitAlt title="Git" />
      </div>
    </div>
    <div className="project-card" >
      <h3>📞 Smart Contact Manager</h3>
      <p>Full-stack contact management app with authentication, CRUD operations, and SQLite3 integration using Spring Boot.</p>
      <div className="tech-tags">
        <SiSpringboot title="Spring Boot" /> <SiSqlite title="SQLite3" /> <FaJava title="Java" />
      </div>
    </div>
    <div className="project-card">
      <h3>🏠 Land Registry Fraud Detection</h3>
      <p>Blockchain-based system for preventing tampering and fraud in land records, ensuring secure and immutable property documentation.</p>
      <div className="tech-tags">
        <FaReact title="React" /> <FaAws title="AWS" /> <FaGitAlt title="Git" />
      </div>
    </div>
  </div>
</section> */}

<section id="projects" className="section fade-in glass" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
  <h2>My Projects</h2>
  <div className="project-vertical" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    
    {/* Project 1 */}
    <div className="project-card" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="0" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src="myport.png" alt="Portfolio Project" className="project-image" style={{ width: '600px', height: '400px' }} />
      <div className="project-details">
        <h3 className="proname">Personal Portfolio Website</h3>
        <p className="cont">A sleek ReactJS-based portfolio to showcase my skills, education, projects, and achievements with animations and a modern UI.</p>
        <div className="tech-tags">
          <FaReact title="ReactJS" /> <FaCss3Alt title="CSS3" /> <FaGitAlt title="Git" />
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="150" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src="smartcontact.png" alt="Smart Contact Manager" className="project-image" style={{ width: '600px', height: '400px' }} />
      <div className="project-details">
        <h3 className="proname">Smart Contact Manager</h3>
        <p className="cont">Full-stack contact management app with authentication, CRUD operations, and SQLite3 integration using Spring Boot.</p>
        <div className="tech-tags">
          <SiSpringboot title="Spring Boot" /> <SiSqlite title="SQLite3" /> <FaJava title="Java" />
        </div>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="300" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src="land.jpeg" alt="Land Registry Fraud Detection" className="project-image" style={{ width: '600px', height: '400px' }} />
      <div className="project-details">
        <h3 className="proname">Land Registry Fraud Detection</h3>
        <p className="cont">Blockchain-based system for preventing tampering and fraud in land records, ensuring secure and immutable property documentation.</p>
        <div className="tech-tags">
          <FaReact title="React" /> <FaAws title="AWS" /> <FaGitAlt title="Git" />
        </div>
      </div>
    </div>

  </div>
</section>


      <section id="education" className="section fade-in glass" data-aos="fade-up">
        <h2>Education & Experience</h2>
        <div className="timeline-alternating">
        <div className="timeline-entry right">
            <div className="timeline-content">
            <h3 class="front">Front-End Developer Intern</h3>
            <span><i>CodeXIntern</i></span>
          {/* <h5 class="ci">CodeXIntern</h5> */}
          <ul className="bullets">
            <li class="cont">Developed responsive interfaces using <b><i>HTML, CSS, JavaScript</i></b></li>
            <li class="cont">Debugged backend logic, resulting in <b><i>30% performance</i></b> improvement</li>
          </ul>
          <span> Oct, 2024 – Oct, 2024</span>
            </div>
          </div>
          <div className="timeline-entry left">
            <div className="timeline-content">
              <h4>B.Tech - Pranveer Singh Institute of Technology, Kanpur</h4>
              <p class="cont">CSE: <i>Artificial Intelligence and Machine Learning</i></p>
              <span>2021 – 2025</span>
            </div>
          </div>
          <div className="timeline-entry right">
            <div className="timeline-content">
              <h4>Intermediate - <i>Lucknow Public School</i>, Lucknow</h4>
              <span>CBSE | 2021</span>
            </div>
          </div>
          <div className="timeline-entry left">
            <div className="timeline-content">
              <h4>High School - <i>Lucknow Public School</i>, Lucknow</h4>
              <span>CBSE | 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section fade-in glass" data-aos="fade-up">
        <h2 class="cert">Certifications & Achievements</h2>
        <ul className="bullets">
          <li class="certificate">AWS Cloud Practitioner Essentials – <i>Amazon Web Services</i></li>
          <li class="certificate">SQL and Relational Databases 101 – <i>IBM</i></li>
          <li class="certificate">Responsive Web Development – <i>freeCodeCamp</i></li>
          <li class="certificate">5-Star Problem Solving – <i>HackerRank</i></li>
          <li class="certificate">TechExpo Finalist 2024</li>
        </ul>
      </section> */}

      {/* <section className="section fade-in glass" data-aos="fade-up">
        <h2 class="pos">Positions of Responsibility</h2>
        <h3 class="front">Head of Cultural Club</h3>
        <h3 class="date">PSIT | 2023-24</h3>
        <h5 class="led">Led and organized various cultural events promoting creativity and teamwork.</h5>
      </section> */}

      <section id="contact" className="contact fade-in glass" data-aos="fade-up">
        <div className="contact-grid centered-grid">
          <div className="contact-info">
            <h2 class="connect">Let's Connect</h2>
            <p class="id">Mail</p>
            <p class="email">nivi13sri@gmail.com</p>
            <p class="add">Address</p>
            <p class="address">Lucknow, Uttar Pradesh, India</p>
            {/* <a href="mailto:nivi13sri@gmail.com">nivi13sri@gmail.com</a> */}
            {/* <p class="linkedin"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nivi-srivastava-b0aa5a221" target="_blank" rel="noreferrer">nivi-srivastava</a></p> */}
            {/* <a className="resume-btn" href="/NiviSrivastava_Resume.pdf" download>
              📄 Download Resume
            </a> */}
          </div>
          <form 
  className="contact-form form-padding" 
  action="https://formspree.io/f/mzzenlyp" 
  method="POST"
>
  <label htmlFor="name"></label>
  <input 
    type="text" 
    id="name" 
    name="name" 
    placeholder="Your Name" 
    required 
  />

  <label htmlFor="email"></label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="Your Email" 
    required 
  />

  <label htmlFor="message"></label>
  <textarea 
    id="message" 
    name="message" 
    rows="2" 
    placeholder="Your Message" 
    required 
  ></textarea>

  <button type="submit">Send</button>
</form>

        </div>
      </section>
    </div>
  );
}
