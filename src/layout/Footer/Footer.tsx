import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { Icon } from "../../components/Icon/Icon";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialBlock>
          <Bracket>
            <span>const</span> socialLinks =<span>[</span>
          </Bracket>
          <SocialLink>
            <Icon
              iconId={"email"}
              width={"30px"}
              height={"30px"}
              viewBox={"0 0 50 50"}
            />
          </SocialLink>
          <SocialLink>
            <Icon
              iconId={"gitHub"}
              width={"30px"}
              height={"30px"}
              viewBox={"0 0 50 50"}
            />
          </SocialLink>
          <SocialLink>
            <Icon
              iconId={"linkedIn"}
              width={"30px"}
              height={"30px"}
              viewBox={"0 0 50 50"}
            />
          </SocialLink>
          <SocialLink>
            <Icon
              iconId={"telegram"}
              width={"30px"}
              height={"30px"}
              viewBox={"0 0 50 50"}
            />
          </SocialLink>

          <Bracket>
            <span>];</span>
          </Bracket>
        </SocialBlock>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 20px;
  font-size: 20px;
`;

const SocialBlock = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  padding: 5px;
`;

const Bracket = styled(SectionTitle)`
  margin: 0;
  @media ${theme.media.tablet} {
    display: none;
  }
`;
