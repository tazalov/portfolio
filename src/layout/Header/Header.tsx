import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/Logo/Logo";
import { Menu } from "../../components/Menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #64ec64;
  display: flex;
  justify-content: space-between;
`;
