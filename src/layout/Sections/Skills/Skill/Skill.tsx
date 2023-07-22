import React from "react";
import { Icon } from "../../../../components/Icon/Icon";
import styled from "styled-components";
import { font } from "../../../../styles/Common";

type SkillPT = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPT) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        width={"100px"}
        height={"100px"}
        viewBox={"0 0 32 32"}
      />
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  text-align: center;
  margin: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 135px;
  height: 135px;
  padding: 5px;
`;
const SkillTitle = styled.h3`
  ${font({ weight: 600, Fmax: 20, Fmin: 18 })}
  text-transform: uppercase;
  padding: 10px;
  max-width: 140px;
`;
