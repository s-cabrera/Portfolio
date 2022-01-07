import React, { useState } from 'react';
import Header from "./Header";
import AboutMe from "./AboutMe";
import ProjectContainer from "./ProjectContainer";
import Resume from "./Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <ProjectContainer />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
