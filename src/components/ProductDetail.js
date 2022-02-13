import React from "react";
import styled from "styled-components";

const SideLeftItem = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
const ProductDesigner = styled.h2`
  display: block;
  text-align: start;
  margin-bottom: 2rem;
`;
const Description = styled.p`
  display: block;
  text-align: start;
`;
const ProductName = styled.h1`
  display: block;
  text-align: start;
`;

const ProductDetail = ({ tittle, designer }) => {
  return (
    <SideLeftItem>
      <ProductDesigner>{designer}</ProductDesigner>
      <ProductName>{tittle}</ProductName>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        molestiae nostrum tenetur mollitia, ratione saepe ipsum cupiditate!
      </Description>
    </SideLeftItem>
  );
};

export default ProductDetail;
