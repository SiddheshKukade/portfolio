import React from "react";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} />
      </div>
      <ul>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}></a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
