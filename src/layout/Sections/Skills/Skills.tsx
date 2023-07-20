import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Skill } from "./Skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>#skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill
          iconId={"react"}
          title={"react"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"
          }
        />
        <Skill
          iconId={"ts"}
          title={"typescript"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"
          }
        />
        <Skill
          iconId={"redux"}
          title={"redux&toolkit"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"
          }
        />
        <Skill
          iconId={"styled"}
          title={"styled component"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"
          }
        />
        <Skill
          iconId={"css"}
          title={"css3"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"
          }
        />
        <Skill
          iconId={"code"}
          title={"html5"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"
          }
        />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #5298b0;
  min-height: 100vh;
`;
