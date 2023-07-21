import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle/SectionSubtitle";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper justify={"center"} direction={"column"}>
          <SectionTitle>
            <span>&lt;</span>blockquote<span>&gt;</span>
            <br />
            <pre>
              {"  "}A person has not yet been born who could not become a
              programmer.
            </pre>
            <span>&lt;/</span>blockquote<span>&gt;</span>
          </SectionTitle>
          <Copyright>© Igor Yudintsev</Copyright>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  position: relative;
`;

const Copyright = styled(SectionSubtitle)`
  max-width: 100%;
  text-align: right;
`;
