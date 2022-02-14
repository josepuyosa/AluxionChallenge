import React from "react";
import ClosedMenuIcon from "./ClosedMenuIcon";
const Nav = ({ closeMenu }) => {
  return (
    <>
      <ClosedMenuIcon close={closeMenu} />
    </>
  );
};

export default Nav;
