import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

import './App.css';



function App() {
  const [currentPage, setCurrentPage] = useState(
    "splash"
  );

  const switchPage = (page) => {
    switch (page) {
      case "Splash":
        return <p>splash page coming soon</p>;
      case "About":
        return <About></About>;
      case "Portfolio":
        return <Portfolio currentPage={currentPage}></Portfolio>;
      case "Contact":
        return <ContactForm></ContactForm>;
      case "Resume":
        return <Resume></Resume>;
      default:
        return <p>splash page coming soon</p>;
    };
  }

  return (
    <div>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      {switchPage(currentPage)}
    </div>
  );
}

export default App;



