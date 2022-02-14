import * as React from "react";
import styled from "styled-components";
import { useScrollBy } from "react-use-window-scroll";

const FooterFixed = styled.div`
  position: fixed;
  bottom: 0rem;
  height: 8rem;
  width: 100%;
  background: #fff;
  border-top: 1px solid #edf2f6;
`;
const ListItems = styled.ul`
  display: flex;
  list-style: none;
`;
const ListItem = styled.li`
  margin-left: 12rem;
  transition: all 3s;
`;
const NumItem = styled.p`
  margin: 0;
  text-align: left;
`;
const Button = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;
const FooterMenu = () => {
  const scrollBy = useScrollBy();
  return (
    <FooterFixed>
      <ListItems>
        <ListItem>
          <NumItem>01</NumItem>
          <Button
            onClick={() =>
              scrollBy({ top: -1000, left: 0, behavior: "smooth" })
            }
          >
            Shell Dining Chair
          </Button>
        </ListItem>
        <ListItem>
          <NumItem>02</NumItem>
          <Button
            onClick={() => scrollBy({ top: 1000, left: 0, behavior: "smooth" })}
          >
            Dunes Anthrazite Black
          </Button>
        </ListItem>
      </ListItems>
    </FooterFixed>
  );
};

export default FooterMenu;
