import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Skill } from "./Skill/Skill";
import { Container } from "../../../components/Container";
import { AbsoluteIcon } from "../../../components/AbsoluteIcon";
import { Icon } from "../../../components/Icon/Icon";
import { theme } from "../../../styles/Theme";
import { SectionSubtitle } from "../../../components/SectionSubtitle/SectionSubtitle";
import { Cursor } from "../Main/Main";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper wrap={"wrap"} align={"center"} content={"center"} relative>
          <FlexWrapper
            wrap={"wrap"}
            align={"center"}
            content={"flex-start"}
            relative
          >
            <AbsoluteIcon bottom={"-5%"} right={"-5%"}>
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
            </AbsoluteIcon>
            <SkillArray>
              <span>const</span> skillsArray = <span>[</span>
            </SkillArray>
            <Skill iconId={"react"} title={"react"} />,
            <Skill iconId={"redux"} title={"redux & toolkit"} />,
            <Skill iconId={"styled"} title={"styled component"} />,
            <Skill iconId={"ts"} title={"typescript"} />,
            <Skill iconId={"js"} title={"java script"} />,
            <Skill iconId={"tests"} title={"tests"} />,
            <Skill iconId={"code"} title={"html5"} />,
            <Skill iconId={"css"} title={"css3"} />
            <SkillArray>
              <span>
                ];<Cursor>|</Cursor>
              </span>
            </SkillArray>
          </FlexWrapper>
          <SectionSubtitle>P.S. The list may be incomplete.</SectionSubtitle>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 80vh;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
  display: flex;
`;

const SkillArray = styled.div`
  span {
    color: ${theme.colors.accent};
  }
`;
