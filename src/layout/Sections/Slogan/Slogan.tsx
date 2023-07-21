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
            <span>&lt;blockquote&gt;</span>
            <br />
            <pre>
              {"  "}A person has not yet been born who could not become a
              programmer.
            </pre>
            <span>&lt;/blockquote&gt;</span>
          </SectionTitle>
          <SectionSubtitle>© Igor Yudintsev</SectionSubtitle>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.div`
  min-height: 20vh;
`;
