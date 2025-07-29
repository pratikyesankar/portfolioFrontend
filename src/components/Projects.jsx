import React from 'react';

const Projects = ({ projects }) => (
  <section className="mb-5" style={{ marginTop: '40vh' }}>
    <h2 className="text-white mb-3 fw-bold fs-1">Projects</h2>
    <p className="fs-4 mb-3 fw-bold text-secondary">Building solutions that solve real-world problems</p>
    <div className="bg-success mb-4" style={{ height: '4px', width: '80px' }}></div>

    <div className="row">
      {projects.map((proj, idx) => (
        <div className="col-md-4 mb-4 project-card" key={idx}>
          <div className="card h-100 bg-dark text-white border-0">
            <img src={proj.image} className="card-img-top" alt="Project preview"
              style={{ objectFit: 'cover', height: '200px', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }} />
            <div className="card-body">
              <h5 className="card-title fw-bold">{proj.title}</h5>
              <p className="card-text text-secondary">{proj.description}</p>
              <div className="mb-2 d-flex flex-wrap gap-2">
                {proj.tags?.map((tag, tagIdx) => (
                  <span key={tagIdx} className="badge bg-secondary text-white">{tag}</span>
                ))}
              </div>
              <a href={proj.demoLink} className="btn btn-outline-light me-2" target="_blank">Demo</a>
              <a href={proj.codeLink} className="btn btn-outline-light" target="_blank">Code</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
