import React from "react";
import photo from "../../../assets/img/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import styled, { keyframes } from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { AbsoluteIcon } from "../../../components/AbsoluteIcon";
import { Icon } from "../../../components/Icon/Icon";
import { SectionSubtitle } from "../../../components/SectionSubtitle/SectionSubtitle";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <MainText>
            <StyledH1>
              <pre>
                <span>const</span> dev = <span>&#123;</span>
                <br />
                {"  "}
                <span>name:</span> 'Iliya Tazalov',
                <br />
                {"  "}
                <span>direction:</span> 'front-end',
                <br />
                {"  "}
                <span>about:</span> 'one you need'
                <br />
                <span>
                  &#125;;
                  <Cursor>|</Cursor>
                </span>
              </pre>
            </StyledH1>
            <SectionSubtitle>
              He will do any tasks for you.
              <br />
              He will even fix bugs left by other
              <br />
              developers as long as his heart beats.
            </SectionSubtitle>
          </MainText>
          <MainPhoto>
            <img src={photo} alt="" />
            {/*            <AbsoluteIcon top={"0"} left={"-10%"}>
              <Icon
                iconId={"logo"}
                width={"156"}
                height={"156"}
                viewBox={"0 0 156 156"}
              />
            </AbsoluteIcon>*/}
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
    max-width: 378px;
    height: auto;
    width: 100%;
  }
`;

const StyledH1 = styled.h1`
  ${font({ weight: 600, lineHeight: "60px", Fmax: 40, Fmin: 18 })}
  margin-bottom: 32px;
  span {
    color: ${theme.colors.accent};
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
