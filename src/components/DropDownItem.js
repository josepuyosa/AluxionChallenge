import React from "react";
import styled from "styled-components";

const DropItem = styled.li`
  color: #fff;
  list-style: none;
`;

const DropDownItem = (props) => {
  return <DropItem>{props.children}</DropItem>;
};

export default DropDownItem;
