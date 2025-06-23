import React from 'react';

function Projects() {
  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title">
        <h2>Projects</h2>
        <p>
          Here are some of my key projects demonstrating full-stack and frontend web development skills, built with modern technologies like MEAN and MERN stacks.
        </p>
      </div>

      <div className="container">
        {/* Tabs Navigation */}
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          {['All', 'HTML & CSS', 'MEAN', 'MERN', 'Others'].map((label, idx) => (
            <li className="nav-item" role="presentation" key={idx}>
              <button
                className={`nav-link ${idx === 0 ? 'active' : ''}`}
                id={`${label.toLowerCase().replace(/ & | /g, '-')}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#${label.toLowerCase().replace(/ & | /g, '-')}`}
                type="button"
                role="tab"
                aria-selected={idx === 0}
                tabIndex={-1}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tabs Content */}
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
            <div className="row gy-4">
              <ProjectCard id="all-p1" title="Tourism Website Clone" category="HTML & CSS" img="/assets/img/portfolio/tourism-1.png" link="/projects-details/project2" />
              <ProjectCard id="all-p2" title="MEAN Stack E-Commerce" category="MEAN" img="/assets/img/portfolio/ecommerce-1.png" link="/projects-details/project1" />
              <ProjectCard id="all-p3" title="Blog Web App" category="MERN" img="/assets/img/portfolio/blog-1.png" link="/projects-details/project3" />
            </div>
          </div>

          <div className="tab-pane fade" id="html-css" role="tabpanel" aria-labelledby="html-css-tab">
            <div className="row gy-4">
              <ProjectCard id="html-p1" title="Tourism Website Clone" category="HTML & CSS" img="/assets/img/portfolio/tourism-1.png" link="/projects-details/project2" />
            </div>
          </div>

          <div className="tab-pane fade" id="mean" role="tabpanel" aria-labelledby="mean-tab">
            <div className="row gy-4">
              <ProjectCard id="mean-p2" title="MEAN Stack E-Commerce" category="MEAN" img="/assets/img/portfolio/ecommerce-1.png" link="/projects-details/project1" />
            </div>
          </div>

          <div className="tab-pane fade" id="mern" role="tabpanel" aria-labelledby="mern-tab">
            <div className="row gy-4">
              <ProjectCard id="mern-p3" title="Blog Web App" category="MERN" img="/assets/img/portfolio/blog-1.png" link="/projects-details/project3" />
            </div>
          </div>

          <div className="tab-pane fade" id="others" role="tabpanel" aria-labelledby="others-tab">
            <div className="row gy-4">
              {/* Add others if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  id: string;
  title: string;
  category: string;
  img: string;
  link: string;
};

// Reusable card + unique modal
function ProjectCard({ id, title, category, img, link }: ProjectCardProps) {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-content h-100">
          <img src={img} className="img-fluid" alt={`${title} Screenshot`} />
          <div className="portfolio-info">
            <h4>{title}</h4>
            <p>{category}</p>
            <a
              href="#"
              className="preview-link"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${id}`}
              aria-label={`Zoom view of ${title}`}
            >
              <i className="bi bi-zoom-in"></i>
            </a>
            <a href={link} className="details-link">
              <i className="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Zoom View */}
      <div
        className="modal fade"
        id={`modal-${id}`}
        tabIndex={-1}
        aria-labelledby={`modal-${id}-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={img} className="img-fluid rounded" alt={title} />
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
