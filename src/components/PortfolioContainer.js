import React, { useState } from "react";
import Navigator from "./Navigator";

function PortfolioContainer() {
  const handlePageChange = (page) => setNavState(page);
  const [navState, setNavState] = useState("about");
  return (
    <Navigator
      navState={navState}
      handlePageChange={handlePageChange}
    ></Navigator>
  );
}

export default PortfolioContainer;
