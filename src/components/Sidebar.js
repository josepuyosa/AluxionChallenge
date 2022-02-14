import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import DropDownMenu from "./DropDownMenu";
const ContainerItems = styled.div`
  margin-top: 6rem;
  background-color: #000;
`;
const Sidebar = () => {
  return (
    <ContainerItems>
      <NavItem link="Collection">
        <DropDownMenu></DropDownMenu>
      </NavItem>
      <NavItem link="Desing"></NavItem>
      <NavItem link="Craftmanship"></NavItem>
      <NavItem link="Ethics"></NavItem>
    </ContainerItems>
  );
};

export default Sidebar;
