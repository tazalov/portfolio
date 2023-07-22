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
            <Tab>{el.text}</Tab>
          </ListItem>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  & ul {
    display: flex;
    justify-content: flex-start;
  }
`;

type ListItemPT = {
  active: boolean;
};

const ListItem = styled.li<ListItemPT>`
  padding: 5px 10px;
  border-radius: 10px 10px 0 0;
  background-color: #ffa001;
  position: relative;
  z-index: 1;
  ${(props) =>
    props.active &&
    css`
      /*border: 1px solid ${theme.colors.secondaryFort};*/
      border-bottom: 0;
      margin-bottom: -1px;
      background-color: #ffca28;
      z-index: 2;
      &:before {
        background-color: #ffca28;
        bottom: 0;
        clip-path: path("M 6,0 A 10,10 0 0 0 16,10 H 0 V 0 Z");
        content: "";
        height: 10px;
        right: -10px;
        position: absolute;
        width: 16px;
        z-index: 1;
      }
      &:not(:first-child) {
        &:after {
          background-color: #ffca28;
          bottom: 0;
          clip-path: path("M 10,0 A 10,10 0 0 1 0,10 H 16 V 0 Z");
          content: "";
          height: 10px;
          left: -10px;
          position: absolute;
          width: 16px;
          z-index: -1;
        }
      }
    `};
  ${(props) =>
    !props.active &&
    css`
      &:before {
        background-color: #ffa001;
        bottom: 0;
        clip-path: path("M 6,0 A 10,10 0 0 0 16,10 H 0 V 0 Z");
        content: "";
        height: 10px;
        right: -10px;
        position: absolute;
        width: 16px;
        z-index: -1;
      }
    `}
`;
const Tab = styled.button`
  ${font({ lineHeight: 1.2, weight: 600, color: "black", Fmax: 25, Fmin: 14 })}
`;
