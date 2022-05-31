import React, { useState } from "react";
import Navigator from "./Navigator";

function PortfolioContainer() {
  const handlePageChange = (page) => setNavState(page);
  const [navState, setNavState] = useState("about");

  const renderMain = () => {
    switch (navState) {
      case "about":
        break;
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
    </>
  );
}

export default PortfolioContainer;
