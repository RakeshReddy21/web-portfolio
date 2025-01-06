import React, { useEffect, useState } from "react";
import "./App.css";
import "./port.css";
import person from "./assests/favicon.png";
import photo from "./assests/imgg.avif";
import skillsData from "./assests/skills.json";
import projectsData from "./assests/projects.json";
import narayana from "./assests/educat/images.png";
import school from "./assests/educat/unnamed.png";
import image from "./assests/educat/NEW ARCH.jpg";
import contact from "./assests/educat/contact1.png";
import '@fortawesome/fontawesome-free/css/all.min.css';




function Portfolio() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setSkills(skillsData); // Load skills data
    setProjects(projectsData); // Load projects data
  }, []);

  return (
    <div>
      <header>
        <a href="/" class="logo">
          <i class="fab fa-node-js"></i> Rakesh Reddy
        </a>

        <div id="menu" class="fas fa-bars"></div>
        <nav class="navbar">
          <ul>
            <li>
              <a class="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div id="particles-js"></div>

        <div className="content">
          <h2>
            Hi There,
            <br /> I'm Konda Rakeswar <span>Reddy</span>
          </h2>
          <p>
            I am Into React Developer<span className="typing-text"></span>
          </p>
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
        </div>
        <div className="image">
          <img src={person} alt="profile" />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="heading">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="row">
          <div className="image">
            <img src={photo} alt="about" />
          </div>
          <div className="content">
            <h3>I'm Rakesh Reddy</h3>
            <span className="tag">Software Engineer</span>
            <p>
              I am a Software Engineer based in Hyderabad, India. I am very
              passionate about improving my coding skills & developing
              applications & websites. I build WebApps and Websites using MERN
              Stack. Working for myself to improve my skills. Love to build
              Full-Stack clones.
            </p>

            <div className="box-container">
              <div className="box">
                <p>
                  <span> email : </span> reddykr21@gmail.com
                </p>
                <p>
                  <span> place : </span> Hyderabad, India
                </p>
              </div>
            </div>

            <div className="resumebtn">
              <a
                href="https://drive.google.com/file/d/1rbsi4KDd_8Nk34gwqdrDxvVfnGEaNe4T/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
        </h2>

        <div className="container">
          <div className="row" id="skillsContainer">
            {skills.map((skill, index) => (
              <div className="bar" key={index}>
                <div className="info">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- experience section starts --> */}
      <section class="experience" id="education">
        <h2 class="heading">
          <i class="fas fa-briefcase"></i> Education{" "}
        </h2>

        <div class="timeline">
          <div class="container right">
            <div class="content">
              <div class="tag">
                <h2>Sathyabama University</h2>
              </div>
              <div class="desc">
                <h3>
                  Bachelor of Engineering in Electronics and Communication
                </h3>
                <p>2020 - 2024</p>
                <p>CGPA: 8.81</p>
                <img src={image} alt="" className="edu"></img>
              </div>
            </div>
          </div>

          <div class="container left">
            <div class="content">
              <div class="tag">
                <h2>Narayana Jr College</h2>
              </div>
              <div class="desc">
                <h3>MPC</h3>
                <p>2018 - 2020</p>
                <p>CGPA: 8.86</p>
                <img src={narayana} alt="" className="edu"></img>
              </div>
            </div>
          </div>

          <div class="container right">
            <div class="content">
              <div class="tag">
                <h2>Montessori EM High School</h2>
              </div>
              <div class="desc">
                <h3>10th</h3>
                <p>2017 - 2018</p>
                <p>CGPA: 9.30</p>
                <img src={school} alt="" className="edu"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- experience section ends --> */}

      {/* Projects Section */}
      <section className="work" id="work">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Projects <span></span>
        </h2>

        <div className="box-container">
          {projects.map((project, index) => (
            <div className="box" key={index}>
              <img
                className="image"
                src={require(`./assests/projects/${project.image}.png`)}
                alt={project.name}
              />
              <div className="content">
                <h3 style={{ fontSize: "14px" }}>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="links">
                  <a
                    href={project.links.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <span>View</span>
                    <i className="fas fa-eye"></i>
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <span style={{ textAlign: "end" }}>Code</span>
                    <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section class="contact" id="contact">
        <h2 class="heading">
          <i class="fas fa-headset"></i> Get in <span>Touch</span>
        </h2>

        <div class="container">
          <div class="content">
            <div class="image-box">
              <img draggable="false" src={contact} alt=""></img>
            </div>
            <form id="contact-form">
              <div class="form-group">
                <div class="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                  <i class="fas fa-user"></i>
                </div>
                <div class="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="field">
                  <input type="text" name="phone" placeholder="Phone"></input>
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="message">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <i class="fas fa-comment-dots"></i>
                </div>
              </div>
              <div class="button-area">
                <button type="submit">
                  Submit <i class="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
