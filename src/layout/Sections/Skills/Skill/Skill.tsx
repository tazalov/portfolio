import React from "react";
import { Icon } from "../../../../components/Icon/Icon";
import styled from "styled-components";

type SkillPT = {
  iconId: string;
  title: string;
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
`;
const SkillTitle = styled.h3`
  text-transform: uppercase;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  max-width: 140px;
`;
