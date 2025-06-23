import React from 'react'

function resume() {
  return (
    <section id="resume" className="resume section">

 
  <div className="container section-title" >
    <h2>Resume</h2>
    <p>Computer Science undergraduate passionate about full-stack development and hands-on project-based learning. Experienced in modern web technologies, with strong communication and teamwork abilities. Teaching Assistant in C Programming at Darshan University.</p>
  </div>

  <div className="container">
    <div className="row">

      
      <div className="col-lg-6" >
        <h3 className="resume-title">Summary</h3>
        <div className="resume-item pb-0">
          <h4>Drashti Rathod</h4>
          <p><em>Motivated and detail-oriented Computer Science undergraduate with a strong foundation in programming, full-stack development, and web technologies. Passionate about building real-world projects and contributing to impactful applications.</em></p>
          <ul>
            <li>Tirupati Park-1, 150ft Ring Road, Rajkot, Gujarat</li>
            <li>+91 90543 61323</li>
            <li>drashtirathod77@gmail.com</li>
          </ul>
        </div>

        <h3 className="resume-title">Education</h3>
        <div className="resume-item">
          <h4>B.Tech in Computer Science & Engineering</h4>
          <h5>2023 - Present</h5>
          <p><em>Darshan University, Rajkot, Gujarat</em></p>
          <p>Current CGPA: 8.58<br/>
          Relevant Coursework: C Programming, Data Structures, DBMS, Java, Python, Web Development, Digital Fundamentals</p>
        </div>
      </div>

      
      <div className="col-lg-6" >
        <h3 className="resume-title">Professional Experience</h3>

        <div className="resume-item">
          <h4>Teaching Assistant - C Programming</h4>
          <h5>Present</h5>
          <p><em>Darshan University, Rajkot, Gujarat</em></p>
          <ul>
            <li>Assist faculty in conducting lab sessions and mentoring students in C Programming fundamentals.</li>
            <li>Help peers debug, structure code, and understand logic-based problem-solving.</li>
            <li>Review and evaluate practical assignments and coding exercises.</li>
          </ul>
        </div>

        <h3 className="resume-title">Academic Projects</h3>

        <div className="resume-item">
          <h4>E-Commerce Website (MEAN Stack)</h4>
          <h5>2024</h5>
          <p><em><a href="https://github.com/drashti2023/Organic_App-Project.git" target="_blank">GitHub Link</a></em></p>
          <ul>
            <li>Built a full-stack Angular + Node.js e-commerce app with user authentication using JWT and product CRUD.</li>
            <li>Integrated MongoDB and RESTful APIs for a complete backend solution.</li>
          </ul>
        </div>

        <div className="resume-item">
          <h4>Blog Web App (MERN Stack)</h4>
          <h5>2023</h5>
          <p><em><a href="https://github.com/drashti2023/Blog-Project.git" target="_blank">GitHub Link</a></em></p>
          <ul>
            <li>Created a blog platform with login/authentication, CRUD post management, and MongoDB storage.</li>
            <li>Used React for frontend, Express.js for backend, with JWT-based session handling.</li>
          </ul>
        </div>

        <div className="resume-item">
          <h4>Tourism Website Clone</h4>
          <h5>2023</h5>
          <p><em><a href="https://github.com/drashti2023/Tourism-website-clone.git" target="_blank">GitHub Link</a></em></p>
          <ul>
            <li>Built a responsive tourism website using HTML, CSS, and Bootstrap, replicating NGO features.</li>
            <li>Implemented carousel, booking form UI, and mobile-responsive layout.</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</section>

  )
}

export default resume