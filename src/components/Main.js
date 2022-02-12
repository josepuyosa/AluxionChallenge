import React from "react";
import Nav from "./Nav";
import ProductDetail from "./ProductDetail";
import Product from "./Product";
import styled from "styled-components";

const SideItem = styled.nav`
  display: flex;
  margin-top: 3rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const Main = () => {
  return (
    <>
      <Nav />
      <SideItem>
        <ProductDetail />
        <Product />
      </SideItem>
    </>
  );
};

export default Main;
