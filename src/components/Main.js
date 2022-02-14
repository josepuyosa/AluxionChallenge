import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import ProductsSlider from "./ProductsSlider";
import FooterMenu from "./FooterMenu";
import DarkNav from "./DarkNav";
import Sidebar from "./Sidebar";
import styled from "styled-components";
const MenuContainer = styled.div`
  position: absolute;
  background-color: #000;
  height: 100%;
  width: 100%;
`;
const ButtonDetail = styled.button`
  position: fixed;

  bottom: 10rem;
  height: 5rem;
  margin: 0 16rem 32rem;
  padding: 1.2rem 1rem;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border: 1px sol;
`;
const Main = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleOpenMenuIcon = () => {
    setMenuIsOpen(true);
  };
  const toggleCloseMenuIcon = () => {
    setMenuIsOpen(false);
  };
  return (
    <>
      {menuIsOpen ? (
        <>
          <MenuContainer>
            <DarkNav closeMenu={toggleCloseMenuIcon} />
            <Sidebar />
          </MenuContainer>
        </>
      ) : (
        <>
          {" "}
          <Nav openMenu={toggleOpenMenuIcon} />
          <ProductsSlider />
          <ButtonDetail>Product Details</ButtonDetail>
          <FooterMenu />
        </>
      )}
    </>
  );
};

export default Main;
