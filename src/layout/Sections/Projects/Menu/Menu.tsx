import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../styles/Theme";
import { FilterT, TabT } from "../Projects";
import { font } from "../../../../styles/Common";

type MenuPT = {
  filter: FilterT;
  tabItems: TabT[];
  changeFilter: (value: FilterT) => void;
};

export const Menu = (props: MenuPT) => {
  return (
    <StyledMenu>
      <ul>
        {props.tabItems.map((el) => (
          <ListItem
            key={el.id}
            onClick={() => props.changeFilter(el.text)}
            active={el.text === props.filter}
          >
            <Tab>
              <span>#</span>
              {el.text}
            </Tab>
          </ListItem>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  position: relative;
  z-index: 2;
  & ul {
    display: flex;
    justify-content: center;
  }
`;

type ListItemPT = {
  active: boolean;
};

const ListItem = styled.li<ListItemPT>`
  padding: 5px 10px;
  background-color: ${theme.colors.primaryBg};
  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${theme.colors.secondaryFort};
      border-bottom: 0;
      margin-bottom: -1px;
    `}
`;

const Tab = styled.button`
  ${font({ lineHeight: 1.2, Fmax: 25, Fmin: 14 })}
  span {
    color: ${theme.colors.accent};
  }
`;
