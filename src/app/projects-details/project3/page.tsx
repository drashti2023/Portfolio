import React from 'react'

function project3() {
  return (
<>
   
<div className="page-title dark-background">
  <div className="container d-lg-flex justify-content-between align-items-center">
    <h1 className="mb-2 mb-lg-0">Project Details</h1>
    <nav className="breadcrumbs">
      <ol>
        <li><a href="/projects">Project</a></li>
        <li className="current">Project Details</li>
      </ol>
    </nav>
  </div>
</div>

<section id="portfolio-details" className="portfolio-details section">
  <div className="container" >
    <div className="row gy-4">
      <div className="col-lg-8">
        <div id="projectCarousel3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/img/portfolio/blog-1.png" className="d-block w-100" alt="Blog Screenshot 1"/>
            </div>
            <div className="carousel-item">
              <img src="/assets/img/portfolio/blog-2.png" className="d-block w-100" alt="Blog Screenshot 2"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: Full Stack Web Application</li>
            <li><strong>Client</strong>: Personal Project</li>
            <li><strong>Project date</strong>: January 2024</li>
            <li><strong>Project URL</strong>: <a href="https://github.com/drashti2023/Blog-Project.git" target="_blank">GitHub Repository</a></li>
          </ul>
        </div>
        <div className="portfolio-description">
          <h2>Blog Web App (MERN Stack)</h2>
          <p>
            Developed a dynamic blogging platform using the MERN stack (MongoDB, Express.js, React, Node.js).
            Users can register, log in with JWT authentication, and perform full CRUD operations on blog posts.
            Integrated RESTful APIs on the backend with responsive React UI on the frontend, styled using modern component-based architecture.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

</>  )
}

export default project3