import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Icon } from "../../../components/Icon/Icon";
import { Slider } from "../../../components/Slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";

export const Feedback = () => {
  return (
    <StyledFeedback>
      <SectionTitle>#feedback</SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon
          iconId={"quotes"}
          width={"42"}
          height={"29"}
          viewBox={"0 0 42 29"}
        />
        <Slider />
      </FlexWrapper>
    </StyledFeedback>
  );
};

const StyledFeedback = styled.section`
  min-height: max-content;
  background-color: #955aa6;
`;
