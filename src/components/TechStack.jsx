 import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaBootstrap, FaLock, FaLeaf, FaCog, FaTrain, FaServer, FaVial, FaUniversalAccess, FaTachometerAlt } from 'react-icons/fa';
import { SiMongodb, SiVercel } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { VscTools } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";

const icons = {
  React: <FaReact />,
  DevTools: <VscTools />,
  Bootstrap: <FaBootstrap />,
  "Node.js": <FaNodeJs />,
  Express: <FaServer />,
  JWT: <FaLock />,
  MongoDB: <SiMongodb />,
  Mongoose: <FaLeaf />,
  Python: <FaPython />,
  Railway: <FaTrain />,
  Vercel: <SiVercel />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  "CI/CD": <FaCog />,
  VsCode: <TbBrandVscode />,
  JavaScript: <IoLogoJavascript />,
  Testing: <FaVial />,
  Accessibility: <FaUniversalAccess />,
  Performance: <FaTachometerAlt />
};

const TechStack = ({ techStacks }) => (
  <section className="mb-5" style={{ marginTop: '30vh' }}>
    <h2 className="mb-5" style={{ fontSize: '3rem' }}>Tech Stack</h2>
    <p className="fs-4 mb-3 fw-bold text-secondary">Technologies and tools I work with</p>
    <div className="bg-success mb-4" style={{ height: '4px', width: '80px' }}></div>

    <div className="row">
      {techStacks.map((tech, idx) => (
        <div key={idx} className="col-md-3 d-flex align-items-center fs-1 gap-2 text-light mb-5">
          {icons[tech.name] || null}
          <span className="fs-5">{tech.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
