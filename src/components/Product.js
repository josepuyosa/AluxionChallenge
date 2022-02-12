import React from "react";
import BlackChair from "../recursos/Silla negra.png";
import styled from "styled-components";

const SideRightItem = styled.div`
  width: 60%;
  @media (min-width: 1024px) {
    width: 70%;
  }
`;
const Image = styled.img`
  margin-left: 10rem;
`;
const Product = () => {
  return (
    <SideRightItem>
      <Image src={BlackChair} alt="" />
    </SideRightItem>
  );
};

export default Product;
