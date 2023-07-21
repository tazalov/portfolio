import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export type MenuItemT = {
  id: number;
  text: string;
};

type MenuPT = {
  items: MenuItemT[];
};

export const HeaderMenu = (props: MenuPT) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((el) => (
          <ListItem key={el.id}>
            <Link href={"#1"}>
              <FirstLetterSpan>{el.text.charAt(0)}</FirstLetterSpan>
              {el.text.slice(1)}
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

export const FirstLetterSpan = styled.span`
  color: ${theme.colors.accent};
`;

const ListItem = styled.li`
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Link = styled.a`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${theme.colors.secondaryFort};
  transition: all 0.3s ease;
  &:hover {
    color: ${theme.colors.primaryFont};
  }
`;
