import React from "react";
import styled from "styled-components";
import { Skill } from "./Skill/Skill";
import { Container } from "../../../components/Container";
import { AbsoluteIcon } from "../../../components/AbsoluteIcon";
import { Icon } from "../../../components/Icon/Icon";
import { theme } from "../../../styles/Theme";
import { SectionSubtitle } from "../../../components/SectionSubtitle/SectionSubtitle";
import { Cursor } from "../Main/Main";
import { font } from "../../../styles/Common";
import { GridWrapper } from "../../../components/GridWrapper/GridWrapper";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SkillArray>
          <span>const</span> skillsArray = <span>[</span>
        </SkillArray>
        <GridWrapper countCol={6} widthCol={"1fr"} autoRows={"1fr"}>
          <Skill iconId={"react"} title={"react"} />
          <Skill iconId={"redux"} title={"redux & toolkit"} />
          <Skill iconId={"styled"} title={"styled component"} />
          <Skill iconId={"ts"} title={"typescript"} />
          <Skill iconId={"yarn"} title={"yarn"} />
          <Skill iconId={"git"} title={"git"} />
          <Skill iconId={"tests"} title={"tests"} />
          <Skill iconId={"code"} title={"html5"} />
          <Skill iconId={"css"} title={"css3"} />
          <Skill iconId={"js"} title={"java script"} />
        </GridWrapper>
        <SkillArray>
          <span>
            ];<Cursor>|</Cursor>
          </span>
        </SkillArray>
        <SectionSubtitle>P.S. The list may be incomplete.</SectionSubtitle>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  ${font({ weight: 600, Fmax: 40, Fmin: 18 })}
`;

const SkillArray = styled.div`
  span {
    color: ${theme.colors.accent};
  }
`;

{
  /*            <AbsoluteIcon bottom={"-5%"} right={"-5%"}>
 <Icon
 iconId={"dots"}
 width={"86"}
 height={"86"}
 viewBox={"0 0 86 86"}
 />
 </AbsoluteIcon>
 <AbsoluteIcon top={"5%"} left={"15%"}>
 <Icon
 iconId={"x"}
 width={"108"}
 height={"107"}
 viewBox={"0 0 108 107"}
 />
 </AbsoluteIcon>*/
}
