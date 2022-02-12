import React from "react";
import styled from "styled-components";

const SideLeftItem = styled.div`
  text-align: center;
  width: 50%;
  @media (min-width: 1024px) {
    width: 40%;
  }
`;
const ProductDetail = () => {
  return (
    <>
      <SideLeftItem>
        <h2>Tittle</h2>
        <h1>Product</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          molestiae nostrum tenetur mollitia, ratione saepe ipsum cupiditate!
          Vel at eaque unde? Perspiciatis exercitationem reprehenderit tempore.
          Molestiae rem architecto perferendis! Tempora.
        </p>
        <button>Product Details</button>
      </SideLeftItem>
      ;
    </>
  );
};

export default ProductDetail;
