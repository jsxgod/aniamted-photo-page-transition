import React, { useEffect, useState } from "react";

const HamburgerRail = (props) => {
  const [documentHeight, setDocumentHeight] = useState("100vh");

  useEffect(() => {
    setDocumentHeight(document.documentElement.offsetHeight);
  }, []);

  return (
    <div className="hamburger-rail" style={{ height: documentHeight }}>
      {props.children}
    </div>
  );
};

export default HamburgerRail;
