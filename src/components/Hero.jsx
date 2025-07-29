import React from 'react';

const Hero = () => (
  <section className="pt-5 mt-custom">
    <h1 className="mb-4 fw-bolder" style={{ fontSize: '5rem' }}>Pratik Yesankar</h1>  
    <p className="mb-4 text-secondary fw-bold fs-3 position-relative d-inline-block">
      <p className="mb-3">full stack dev</p>
      <div className="bg-success mb-4" style={{ height: '4px', width: '80px' }}></div>
    </p>
    <section className="mb-5 col-md-6 fs-4 text-secondary">
      <p>Passionate full-stack developer crafting intuitive digital experiences with modern technologies.</p>
      <p>Specializing in React, Node.js, and MongoDB to build scalable and user-centered applications.</p>
    </section>
    <section className="my-4">
      <a href="#contact" className="btn btn-success text-white me-3">Contact Me</a> 
      <a
        href="https://drive.google.com/file/d/1lDPcGi9y3RsFKC2YgCigxXhCcFcSVOdE/view?usp=sharing"
        target="_blank"
        className="btn"
        style={{
          backgroundColor: '#000',
          color: '#888',
          border: '1px solid #888',
          textDecoration: 'none'
        }}
      >
        Resume
      </a>
    </section>
  </section>
);

export default Hero;
