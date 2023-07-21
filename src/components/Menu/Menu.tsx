import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export type MenuItemT = {
  id: number;
  text: string;
};

type MenuPT = {
  items: MenuItemT[];
};

export const Menu = (props: MenuPT) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((el) => (
          <ListItem key={el.id}>
            <Link href={"#1"}>
              <FirstLetterSpan>{el.text.charAt(0)}</FirstLetterSpan>
              <span>{el.text.slice(1)}</span>
            </Link>
          </ListItem>
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

const FirstLetterSpan = styled.span`
  color: ${theme.colors.accent};
`;

const ListItem = styled.li``;

const Link = styled.a`
  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
