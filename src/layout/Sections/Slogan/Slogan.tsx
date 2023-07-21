import React from "react";
import styled from "styled-components";
import { Quote } from "./Quote";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <FlexWrapper direction={"column"} align={"flex-end"}>
        <Quote
          text={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          }
        />
        <Quote text={"tazaaal"} author />
      </FlexWrapper>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 50vh;
`;
