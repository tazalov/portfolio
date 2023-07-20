import React from "react";
import styled from "styled-components";

type MenuPT = {
  items: string[];
};

export const Menu = (props: MenuPT) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((el) => (
          <li>
            <a href={"#1"}>{el}</a>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  & ul {
    display: flex;
    gap: 30px;
  }
`;
