import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <SlideText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </SlideText>
          <SlideName>@ivan ivanow</SlideName>
        </Slide>
      </FlexWrapper>
      <SliderPagination>
        <span> </span>
        <span> </span>
        <span> </span>
      </SliderPagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid rgba(255, 255, 255);
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Slide = styled.div`
  text-align: center;
`;
const SlideText = styled.p``;
const SlideName = styled.span``;
const SliderPagination = styled.span`
  & span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: red;
    margin: 5px;
    border-radius: 50%;
  }
`;
