import React, { useState } from "react";
import Navigator from "./Navigator";

function PortfolioContainer() {
  const [navState, setNavState] = useState("about");
  const handlePagechange = (page) => setNavState(page);
  return (
    <Navigator
      currentPage={navState}
      handlePagechange={handlePagechange}
    ></Navigator>
  );
}

export default PortfolioContainer;
