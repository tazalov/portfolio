import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { Icon } from "../../components/Icon/Icon";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify={"center"} align={"center"} relative>
          <Bracket>
            <span>const</span> socialLinks =<span>[</span>
          </Bracket>
          <SocialLink>
            <Icon
              iconId={"email"}
              width={"30px"}
              height={"30px"}
              viewBox={"0 0 30px 30px"}
            />
          </SocialLink>
          ,
          <SocialLink>
            <Icon
              iconId={"gitHub"}
              width={"30px"}
              height={"30px"}
              viewBox={"0 0 30px 30px"}
            />
          </SocialLink>
          ,
          <SocialLink>
            <Icon
              iconId={"linkedIn"}
              width={"30px"}
              height={"30px"}
              viewBox={"0 0 30px 30px"}
            />
          </SocialLink>
          ,
          <SocialLink>
            <Icon
              iconId={"telegram"}
              width={"30px"}
              height={"30px"}
              viewBox={"0 0 30px 30px"}
            />
          </SocialLink>
          <Bracket>
            <span>];</span>
          </Bracket>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 20px;
  font-size: 20px;
`;

const SocialLink = styled.a`
  padding: 5px;
`;

const Bracket = styled(SectionTitle)`
  margin: 0;
`;
