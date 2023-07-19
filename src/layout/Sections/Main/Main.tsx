import React from "react";
import photo from "../../../assets/img/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import styled from "styled-components";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={"space-around"} align={"center"}>
        <div>
          <StyledH1>Elias is a web designer and front-end developer</StyledH1>
          <StyledH2>
            He crafts responsive websites where technologies meet creativity
          </StyledH2>
        </div>
        <img src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #c44848;
`;

const StyledH1 = styled.h1`
  color: white;
`;

const StyledH2 = styled.h2`
  color: white;
`;
