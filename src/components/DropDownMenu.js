import React from "react";
import styled from "styled-components";
import DropDownItem from "./DropDownItem";

const HoverItem = styled.div``;
const DropText = styled.a`
  display: block;
  list-style: none;
  margin-top: 2.5rem;
  margin-left: -188rem;
  font-weight: 200;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
// const HideItem

const DropDownMenu = () => {
  return (
    <HoverItem>
      <DropDownItem>
        <DropText>Furniture</DropText>
        <DropText>Lighting</DropText>
        <DropText>Accesories</DropText>
      </DropDownItem>
    </HoverItem>
  );
};

export default DropDownMenu;
