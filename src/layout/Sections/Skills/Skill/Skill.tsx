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
  z-index: 2;
`;
const SkillTitle = styled.h4`
  ${font({ weight: 600, lineHeight: 1.2, Fmax: 20, Fmin: 14 })}
  text-transform: uppercase;
  max-width: 140px;
  margin-top: 10px;
`;
