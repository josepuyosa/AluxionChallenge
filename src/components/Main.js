import React from "react";
import Nav from "./Nav";
import ProductsSlider from "./ProductsSlider";
import FooterMenu from "./FooterMenu";
import styled from "styled-components";

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
  return (
    <>
      <Nav />
      <ProductsSlider />

      <ButtonDetail>Product Details</ButtonDetail>
      <FooterMenu />
    </>
  );
};

export default Main;
