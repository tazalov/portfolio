import React from "react";
import photo from "../../../assets/img/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import styled, { keyframes } from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { SectionSubtitle } from "../../../components/SectionSubtitle/SectionSubtitle";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";

export const Main = () => {
  return (
    <StyledMain id={"home"}>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <MainText>
            <SectionTitle>
              <pre>
                <span>const</span> <code>dev</code> = <span>&#123;</span>
                <br />
                {"  "}
                <i>name:</i> 'Iliya Tazalov',
                <br />
                {"  "}
                <i>direction:</i> 'front-end',
                <br />
                {"  "}
                <i>about:</i> 'one you need'
                <br />
                <span>
                  &#125;;
                  <Cursor>|</Cursor>
                </span>
              </pre>
            </SectionTitle>
            <SectionSubtitle>
              /* He will do any tasks for you.
              <br />
              He will even fix bugs left by other
              <br />
              developers as long as his heart beats. */
            </SectionSubtitle>
          </MainText>
          <MainPhoto>
            <img src={photo} alt="" />
          </MainPhoto>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  position: relative;
  @media ${theme.media.tablet} {
    min-height: 90vh;
  }
  @media ${theme.media.mobile} {
    min-height: 80vh;
  }
`;

const MainText = styled.div``;

const MainPhoto = styled.div`
  position: relative;
  z-index: 2;
  img {
    max-width: 400px;
    height: auto;
    width: 100%;
    border-radius: 50%;
  }
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Cursor = styled.abbr`
  color: ${theme.colors.primaryFont};
  animation: ${blinkAnimation} 1s infinite;
`;
