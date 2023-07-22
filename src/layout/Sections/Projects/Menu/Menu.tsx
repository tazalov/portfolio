import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

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
              <span>{el.text.charAt(0)}</span>
              {el.text.slice(1)}
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  padding-bottom: 20px;
  & ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

const ListItem = styled.li`
  padding: 5px 10px;
`;

const Link = styled.a`
  font-size: 25px;
  span {
    color: ${theme.colors.accent};
  }
`;
