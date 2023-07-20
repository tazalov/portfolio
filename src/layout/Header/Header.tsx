import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/Logo/Logo";
import { Menu } from "../../components/Menu/Menu";

const menuItems = ["#home", "#skills", "#projects", "#contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu items={menuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #64ec64;
  display: flex;
  justify-content: space-between;
`;
