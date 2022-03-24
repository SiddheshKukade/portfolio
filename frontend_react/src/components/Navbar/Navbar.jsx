import React, { useState } from "react";
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home" style={{ userSelect: "none", MozUserSelect: "-moz-none", WebkitTapHighlightColor: "transparent" }}>
          <img src={images.logonew} alt="logo" title="Siddhesh Bhupendra Kukade" /></a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`} style={{ userSelect: "none", MozUserSelect: "-moz-none", WebkitTapHighlightColor: "transparent" }}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* HiX is cross button closes the page */}

            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  {/* used set toggle in <a> tag because we have to close the menu after clicking the button */}
                  {/* //  used item  to differnciate above links */}

                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
