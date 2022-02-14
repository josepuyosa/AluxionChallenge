import React from "react";
import OpenMenuIcon from "./OpenMenuIcon";
const Nav = ({ openMenu }) => {
  return (
    <>
      <OpenMenuIcon open={openMenu} />
    </>
  );
};

export default Nav;
