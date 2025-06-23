import React from 'react'

function project1() {
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
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-8">
        <div id="projectCarousel1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/img/portfolio/ecommerce-1.png" className="d-block w-100" alt="E-commerce Screenshot 1"/>
            </div>
            <div className="carousel-item active">
              <img src="/assets/img/portfolio/ecommerce-2.png" className="d-block w-100" alt="E-commerce Screenshot 2"/>
            </div>
            <div className="carousel-item">
              <img src="/assets/img/portfolio/ecommerce-3.png" className="d-block w-100" alt="E-commerce Screenshot 3"/>
            </div>
            <div className="carousel-item">
              <img src="/assets/img/portfolio/ecommerce-4.png" className="d-block w-100" alt="E-commerce Screenshot 4"/>
            </div>
            <div className="carousel-item">
              <img src="/assets/img/portfolio/ecommerce-5.png" className="d-block w-100" alt="E-commerce Screenshot 5"/>
            </div>
            <div className="carousel-item">
              <img src="/assets/img/portfolio/ecommerce-6.png" className="d-block w-100" alt="E-commerce Screenshot 6"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: Full Stack Web Development</li>
            <li><strong>Client</strong>: Academic Project</li>
            <li><strong>Project date</strong>: March 2024</li>
            <li><strong>Project URL</strong>: <a href="https://github.com/drashti2023/Organic_App-Project.git" target="_blank">GitHub Repository</a></li>
          </ul>
        </div>
        <div className="portfolio-description">
          <h2>Organic Website (MEAN Stack)</h2>
          <p>
            Developed a fully functional e-commerce website using the MEAN stack (MongoDB, Express.js, Angular, Node.js).
            Includes secure user authentication, dynamic product management, and responsive frontend with Angular. 
            MongoDB is used for storing user and product data, while Express.js handles API routing.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default project1