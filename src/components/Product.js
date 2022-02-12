import React from "react";
import styled from "styled-components";

const SideRightItem = styled.div`
  width: 50%;
  @media (min-width: 1024px) {
    width: 60%;
  }
`;
const Product = () => {
  return <SideRightItem>Product</SideRightItem>;
};

export default Product;
