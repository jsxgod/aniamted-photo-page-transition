import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, HamburgerButton, SvgArrow } from "../components";
const NavBar = ({ showBackArrow }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [hide, setHide] = useState(false);
  return (
    <>
      <motion.div
        className="navbar"
        exit={hide ? { opacity: 0 } : {}}
        transition={{
          duration: 0.3,
        }}
      >
        <Menu opened={menuOpened} />
        <div className="navbar-container">
          <div className="logo">
            <Link to="/" onClick={() => setHide(true)}>
              MODEL AGENCY
            </Link>
          </div>
          <div className="navbar-menu">
            {showBackArrow && <SvgArrow />}
            <HamburgerButton
              menuOpened={menuOpened}
              stateChanger={setMenuOpened}
              useMainVariants={false}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
