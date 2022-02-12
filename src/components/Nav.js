import React from "react";
import openIcon from "../recursos/openMenuIcon.svg";
import styled from "styled-components";
const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 36px;
  height: 36px;
  border: solid;
  border-width: 1px;
  border-color: #ccc;
  padding: 5px;
  padding-top: 8px;
  cursor: pointer;
`;
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 12rem;
  justify-content: space-between;
  padding: 6rem 16rem 6rem 16rem;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
`;
const Nav = () => {
  return (
    <>
      <NavBar>
        <Logo>mater</Logo>
        <MenuIcon>
          <img src={openIcon} alt="" />
        </MenuIcon>
      </NavBar>
    </>
  );
};

export default Nav;