import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./MobileMenu/MobileMenu";

const menuItems = [
  { id: 1, text: "#home" },
  { id: 2, text: "#skills" },
  { id: 3, text: "#projects" },
  { id: 4, text: "#contacts" },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <HeaderMenu items={menuItems} />
          <MobileMenu items={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.primaryBg};
  z-index: 10000;
`;
