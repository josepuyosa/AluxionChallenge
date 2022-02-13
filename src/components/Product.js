import React from "react";
import styled from "styled-components";

const SideRightItem = styled.div`
  display: block;
  width: 60%;
  overflow: hidden;
  margin-left: 70rem;
  padding-right: 28rem;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
const Image = styled.img``;
const Product = ({ img }) => {
  return (
    <SideRightItem>
      <Image src={img} alt="" />
    </SideRightItem>
  );
};

export default Product;
