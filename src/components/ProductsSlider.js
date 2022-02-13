import React from "react";
import ProductDetail from "./ProductDetail";
import Product from "./Product";
import BlackChair from "../recursos/Silla negra.png";
import BlackTable from "../recursos/Mesa negra.png";
import styled from "styled-components";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const SideItem = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const ProductsSlider = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -600))}>
            <SideItem>
              <ProductDetail
                tittle="Shell Dining Chair"
                designer="Michael W.Dreeben"
              />
              <Product img={BlackChair} />
            </SideItem>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Move(0, 600), Sticky())}>
            <SideItem>
              <ProductDetail
                tittle="Dunes Anthrazite Black"
                designer="Jasper K.Thomas"
              />
              <Product img={BlackTable} />
            </SideItem>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default ProductsSlider;
