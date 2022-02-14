import React from "react";
import styled from "styled-components";
const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-left: 14rem;
  font-weight: 600;
  font-size: 2rem;
  padding: 2rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
const NavItem = (props) => {
  return (
    <Ul>
      {props.link}
      <div>{props.children}</div>
    </Ul>
  );
};

export default NavItem;
