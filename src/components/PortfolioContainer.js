import React, { useState } from "react";
import Navigator from "./Navigator";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function PortfolioContainer() {
  const handlePageChange = (page) => setNavState(page);
  const [navState, setNavState] = useState("about");

  const renderMain = () => {
    switch (navState) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      default:
        return (
          <div>
            <p>Error: hit default</p>
          </div>
        );
    }
  };
  return (
    <>
      <Navigator
        navState={navState}
        handlePageChange={handlePageChange}
      ></Navigator>
      {renderMain()}
      <Footer />
    </>
  );
}

export default PortfolioContainer;
