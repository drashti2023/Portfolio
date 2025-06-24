import React from 'react'

function about() {
  return (
    <>
    {/* Skills Section */}
    <section id="about" className="about section">

     
      <div className="container section-title" >
        <h2>About</h2>
        <p>I am a dedicated Full Stack Developer and Computer Science undergraduate with a strong passion for cybersecurity. I love building dynamic web applications from front to back, and I am always exploring the world of ethical hacking, secure development practices, and digital defense strategies. Whether it is crafting a clean UI or securing a backend API, I enjoy solving problems through code and continuously learning new technologies.
       </p>
      </div>

      <div className="container">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/my-profile-img.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 content">
            <h2>Full Stack Developer &amp; Cybersecurity Enthusiast.</h2>
            <p className="fst-italic py-3">
             I specialize in building scalable, secure, and user-friendly web applications. Additionally, I work as a <strong>Teaching Assistant in C Programming</strong> at Darshan University, where I help guide fellow students in mastering core programming concepts.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>23 August 2005</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.drashtirathod.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9054361323</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Rajkot, Gujarat, India</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Undergraduate</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>drashtirathod77@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I believe technology should be powerful, efficient, and secure. I am currently honing my skills in full stack
              development and diving deeper into ethical hacking and cybersecurity tools. I am open to freelance work,
              collaborations, or any opportunities that allow me to grow as a developer and cybersecurity professional.
           </p>
          </div>
        </div>

      </div>
    {/* Stats section */}
    </section>

      <section id="stats" className="stats section">
        <div className="container">
          <div className="row gy-4">

            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-code-slash"></i>
                <span data-purecounter-start="0" data-purecounter-end="40" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Projects Completed</strong> <span>Full-stack &amp; academic</span></p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-shield-lock"></i>
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Security Labs</strong> <span>CTFs &amp; challenges</span></p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-journal-code"></i>
                <span data-purecounter-start="0" data-purecounter-end="800" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Hours of Coding</strong> <span>Front-end / back-end</span></p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-people"></i>
                <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>Team Projects</strong> <span>Hackathons &amp; collabs</span></p>
              </div>
            </div>

          </div>
        </div>
        </section>

    {/* Skills Section */}
    <section id="skills" className="skills section light-background">
  <div className="container section-title">
    <h2>Skills</h2>
    <p>I build secure, high-quality full-stack applications and thrive in collaborative, fast-moving teams.</p>
  </div>

  <div className="container">
    <div className="row skills-content">

      {/* Left Column */}
      <div className="col-lg-6">
        {[
          { skill: "HTML", value: 95 },
          { skill: "CSS", value: 90 },
          { skill: "JavaScript / TypeScript", value: 85 },
          { skill: "Java", value: 70 },
          { skill: "Python", value: 80 }
        ].map(({ skill, value }, i) => (
          <div className="progress mb-4" key={i}>
            <span className="skill d-flex justify-content-between fw-bold">
              {skill} <i className="val">{value}%</i>
            </span>
            <div className="progress-bar-wrap bg-light rounded" style={{ height: "10px", overflow: "hidden" }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${value}%`, height: "100%" }}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="col-lg-6">
        {[
          { skill: "Angular", value: 90 },
          { skill: "Node.js / Express", value: 85 },
          { skill: "MongoDB", value: 60 },
          { skill: "Git & GitHub", value: 70 },
          { skill: "VS Code & Postman", value: 75 }
        ].map(({ skill, value }, i) => (
          <div className="progress mb-4" key={i}>
            <span className="skill d-flex justify-content-between fw-bold">
              {skill} <i className="val">{value}%</i>
            </span>
            <div className="progress-bar-wrap bg-light rounded" style={{ height: "10px", overflow: "hidden" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${value}%`, height: "100%" }}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ---------- Soft Skills Block ---------- */}
    <div className="row mt-4">
      <div className="col-12">
        <h3 className="mb-3">Soft Skills</h3>
        <ul className="list-unstyled d-flex flex-wrap gap-3">
          {[
            "Problem-solving",
            "Communication",
            "Teamwork",
            "Time management",
            "Adaptability"
          ].map((skill, i) => (
            <li key={i} className="badge bg-dark-subtle text-dark-emphasis p-2 px-3 rounded-pill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default about