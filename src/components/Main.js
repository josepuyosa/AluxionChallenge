import React from "react";
import Nav from "./Nav";
import ProductDetail from "./ProductDetail";
import Product from "./Product";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;
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
