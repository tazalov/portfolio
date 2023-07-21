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
    <StyledHeaderMenu>
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
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
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
  font-size: 32px;
  font-weight: 500;
  color: ${theme.colors.secondaryFort};
  transition: all 0.3s ease;
  &:hover {
    color: ${theme.colors.primaryFont};
  }
`;
