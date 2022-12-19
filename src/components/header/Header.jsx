import React from "react";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <h6><span>Keyword explorer</span>  &gt; Keyword Overview</h6>
      <h5>Keyword : <span>Shopping in barcelona</span></h5>
      <p className="dtabase">
        Database: United States 🚩
      </p>
    </div>
  );
}

export default Header;
