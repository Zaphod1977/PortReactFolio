import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    currentPage, setCurrentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#About" onClick={() => setCurrentPage("About")}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Portfolio" href="#Portfolio" onClick={() => setCurrentPage("Portfolio")}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Contact" href="#Contact" onClick={() => setCurrentPage("Contact")}>
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Resume" href="#Resume" onClick={() => setCurrentPage("Resume")}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
