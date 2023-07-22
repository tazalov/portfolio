import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle/SectionSubtitle";
import { font } from "../../../styles/Common";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <SectionTitle>
          <span>&lt;</span>blockquote<span>&gt;</span>
        </SectionTitle>
        <SloganText>
          A person has not yet been born who could not become a programmer.
        </SloganText>
        <SectionTitle>
          <span>&lt;/</span>blockquote<span>&gt;</span>
        </SectionTitle>
        <Copyright>© Igor Yudintsev</Copyright>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  position: relative;
`;

const SloganText = styled.p`
  ${font({ weight: 400, Fmax: 30, Fmin: 18 })}
  padding-left: 40px;
`;

const Copyright = styled(SectionSubtitle)`
  max-width: 100%;
  text-align: right;
`;
