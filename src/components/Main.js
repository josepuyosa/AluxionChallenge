import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import ProductsSlider from "./ProductsSlider";
import FooterMenu from "./FooterMenu";
import DarkNav from "./DarkNav";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Transition, animated, useSpring } from "react-spring";

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
  border: 1px solid;
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
          <DarkNav closeMenu={toggleCloseMenuIcon} />
          <MenuContainer>
            <Transition
              items={menuIsOpen}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              reverse={menuIsOpen}
              delay={600}
              onRest={() =>
                this.setState({
                  menuIsOpen: !menuIsOpen,
                })
              }
            >
              {({ opacity }, styles, item) =>
                item && (
                  <animated.div
                    style={
                      (styles,
                      {
                        opacity: opacity.to({
                          range: [0.0, 1.0],
                          output: [0, 1],
                        }),
                      })
                    }
                  >
                    {<Sidebar />}
                  </animated.div>
                )
              }
            </Transition>
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
