import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type ProjectPT = {
  title: string;
  text: string;
  img: string;
  tech: string;
};

export const Project = (props: ProjectPT) => {
  return (
    <StyledProject>
      <ProjectImg src={props.img} alt="img" />
      <ProjectTech>{props.tech}</ProjectTech>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectText>{props.text}</ProjectText>
      <Link>#demo</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 30%;
  max-width: 350px;
  margin: 10px;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid ${theme.colors.secondaryFort};
  text-align: left;
  z-index: 2;
`;

const ProjectImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border: 1px solid ${theme.colors.secondaryFort};
`;

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  padding: 8px;
`;

const ProjectText = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 8px;
  color: ${theme.colors.secondaryFort};
  line-height: 32px;
`;

const ProjectTech = styled(ProjectText)`
  border-bottom: 1px solid ${theme.colors.secondaryFort};
`;

const Link = styled.a``;
