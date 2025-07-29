 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [techStacks, setTechStacks] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsRes = await axios.get('https://port-folio-backend-pi.vercel.app/projects');
        const techstackRes = await axios.get('https://port-folio-backend-pi.vercel.app/techstacks');
        const contactRes = await axios.get('https://port-folio-backend-pi.vercel.app/contacts');
        setProjects(projectsRes.data);
        setTechStacks(techstackRes.data);
        setContacts(contactRes.data);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <Header />
      <Hero />
      <Projects projects={projects} />
      <TechStack techStacks={techStacks} />
      <Contact contacts={contacts} />
      <Footer />
    </div>
  );
};

export default App;
