import React from 'react';

const Header = () => (
  <header className="fixed-top bg-transparent" style={{ borderBottom: '1px solid #ffffff' }}>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="w-100">
          <span style={{ color: 'limegreen', fontSize: '1.5rem', marginRight: '6px' }}>&lt;&gt;</span>
          <a className="navbar-brand fw-bold text-white fs-4" href="#">Pratik Yesankar</a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
