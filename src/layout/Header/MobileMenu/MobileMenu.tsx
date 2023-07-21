import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

export type MenuItemT = {
  id: number;
  text: string;
};

type MenuPT = {
  items: MenuItemT[];
};

export const MobileMenu = (props: MenuPT) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <MobileMenuWrapper isOpen={true}>
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
      </MobileMenuWrapper>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: ${theme.colors.secondaryBg};
  display: none;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 40px;
    bottom: 50px;
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      transform: translateY(-10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0) rotate(45deg);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      transform: translateY(10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0) rotate(-45deg);
        `}
    }
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
