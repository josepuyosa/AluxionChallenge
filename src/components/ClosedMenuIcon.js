import React from "react";
import ClosedIcon from "../recursos/closedMenuIcon.svg";
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
  background-color: #000;
  position: -webkit-sticky; // required for Safari
  position: sticky;
  top: 0; // required as well.
  display: flex;
  align-items: center;
  height: 12rem;
  justify-content: space-between;
  padding: 6rem 16rem 6rem 16rem;
`;
const Logo = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 1.8rem;
`;
const ClosedMenuIcon = ({ close }) => {
  return (
    <>
      <NavBar>
        <Logo>mater</Logo>
        <MenuIcon>
          <img onClick={close} src={ClosedIcon} alt="" />
        </MenuIcon>
      </NavBar>
    </>
  );
};

export default ClosedMenuIcon;
