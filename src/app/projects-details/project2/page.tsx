import React from 'react'

function project2() {
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
        <div id="projectCarousel2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/img/portfolio/tourism-1.png" className="d-block w-100" alt="Tourism Screenshot 1"/>
            </div>
            <div className="carousel-item">
              <img src="/assets/img/portfolio/tourism-2.png" className="d-block w-100" alt="Tourism Screenshot 2"/>
            </div>
            <div className="carousel-item">
              <img src="/assets/img/portfolio/tourism-3.png" className="d-block w-100" alt="Tourism Screenshot 3"/>
            </div>
            <div className="carousel-item">
              <img src="/assets/img/portfolio/tourism-4.png" className="d-block w-100" alt="Tourism Screenshot 4"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: Frontend Web Development</li>
            <li><strong>Client</strong>: Invincible NGO (Clone)</li>
            <li><strong>Project date</strong>: November 2023</li>
            <li><strong>Project URL</strong>: <a href="https://github.com/drashti2023/Tourism-website-clone.git" target="_blank">GitHub Repository</a></li>
          </ul>
        </div>
        <div className="portfolio-description">
          <h2>Tourism Website Clone</h2>
          <p>
            Built a responsive tourism website clone for an NGO using HTML, CSS, and Bootstrap. 
            Features include interactive destination carousels, detailed package sections, and inquiry form integration. 
            Designed for optimal display on mobile, tablet, and desktop screens.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default project2