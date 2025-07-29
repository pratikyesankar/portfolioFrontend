import React from 'react';

const Contact = ({ contacts }) => (
  <section id="contact" style={{ marginTop: '25vh' }}>
    <h1 className="mb-3">Connect</h1>
    <h1 className="fs-4 mb-3 fw-bold text-secondary">Let's collaborate on something amazing together.</h1>
    <div className="bg-success mb-5" style={{ height: '4px', width: '80px' }}></div>

    <div className="row">
      {contacts.map((contact, idx) => (
        <div className="col-md-6 mb-3" key={idx}>
          <div className="contact-card p-4 h-100 rounded text-white d-flex align-items-center gap-3" style={{ minHeight: '120px' }}>
            <div className="contact-icon">
              {contact.type === 'Email' ? <i className="bi bi-envelope-fill fs-3 text-success"></i> : null}
              {contact.type === 'GitHub' ? <i className="bi bi-github fs-3 text-success"></i> : null}
              {contact.type === 'LinkedIn' ? <i className="bi bi-linkedin fs-3 text-success"></i> : null}
              {contact.type === 'Twitter' ? <i className="bi bi-twitter fs-3 text-success"></i> : null}
            </div>
            <div>
              <h5 className="mb-1">{contact.type}</h5>
              <a href={contact.link} className="text-decoration-none text-light" target="_blank">{contact.label}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Contact;