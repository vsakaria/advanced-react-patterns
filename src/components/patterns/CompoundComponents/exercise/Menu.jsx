import React from "react";
import SideMenu from "react-burger-menu";

import useWidth, { LARGE } from "../../Hooks/exercise_bonus/useWidth";
import FloatingMenuBtn from "../../../FloatingMenuBtn";

const Menu = ({ isOpen, children, pageWrapId, toggleMenu }) => {
  const width = useWidth();

  return (
    <div>
      {width === LARGE ? "" : <FloatingMenuBtn toggleMenu={toggleMenu} />}
      <SideMenu.slide
        disableCloseOnEsc
        isOpen={isOpen}
        pageWrapId={pageWrapId || "page-wrap"}
      >
        {children}
      </SideMenu.slide>
    </div>
  );
};

export default Menu;
