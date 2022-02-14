import React from "react";
import styled from "styled-components";

const ContainerItems = styled.div`
  margin-top: 6rem;
  background-color: #000;
`;
const Button = styled.a`
  display: block;
  list-style: none;
  margin-left: 14rem;
  font-weight: 600;
  font-size: 2rem;
  padding: 2rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
const Sidebar = () => {
  return (
    <ContainerItems>
      <Button>Collection</Button>
      <Button>Design</Button>
      <Button>CraftmanShip</Button>
      <Button>Ethics</Button>
    </ContainerItems>
  );
};

export default Sidebar;
