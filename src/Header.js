import React from "react";
import Brand from "./Brand";
import SocialLinks from "./SocialLinks";
import "./Header.css";

const Header = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <a href="/">
            <Brand />
          </a>
        </div>
        <div className="col">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
