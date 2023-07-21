import React from "react";
import photo from "../../../assets/img/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { AbsoluteIcon } from "../../../components/AbsoluteIcon";
import { Icon } from "../../../components/Icon/Icon";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={"space-around"} align={"center"}>
          <MainText>
            <StyledH1>
              Tazalov is a <span>front-end developer</span>
            </StyledH1>
            <StyledH2>
              He crafts responsive websites where technologies meet creativity
            </StyledH2>
          </MainText>
          <MainPhoto>
            <img src={photo} alt="" />
            <AbsoluteIcon top={"0"} left={"-10%"}>
              <Icon
                iconId={"logo"}
                width={"156"}
                height={"156"}
                viewBox={"0 0 156 156"}
              />
            </AbsoluteIcon>
            <AbsoluteIcon bottom={"-10%"} right={"-10%"}>
              <Icon
                iconId={"dots"}
                width={"84"}
                height={"84"}
                viewBox={"0 0 84 84"}
              />
            </AbsoluteIcon>
          </MainPhoto>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 60vh;
  display: flex;
  position: relative;
`;

const MainText = styled.div`
  max-width: 650px;
  width: 100%;
  margin-right: 20px;
  padding: 0 20px;
`;
const MainPhoto = styled.div`
  position: relative;
  z-index: 2;
  img {
    max-width: 350px;
  }
`;

const StyledH1 = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;
  span {
    color: ${theme.colors.accent};
  }
`;

const StyledH2 = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  color: ${theme.colors.secondaryFort};
  max-width: 400px;
  width: 100%;
`;
