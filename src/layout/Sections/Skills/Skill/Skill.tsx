import React from "react";
import { Icon } from "../../../../components/Icon/Icon";
import styled from "styled-components";

type SkillPT = {
  iconId: string;
  title: string;
  text: string;
};

export const Skill = (props: SkillPT) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        width={"70"}
        height={"70"}
        viewBox={"0 0 50 50"}
      />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.text}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  text-align: center;
  width: 30%;
  margin: 10px;
  padding: 10px;
  background-color: #706767;
  color: white;
`;
const SkillTitle = styled.h3`
  text-transform: uppercase;
`;
const SkillText = styled.p``;
