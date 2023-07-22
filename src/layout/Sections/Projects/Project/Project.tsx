import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Link } from "../../../../components/Link/Link";

type ProjectPT = {
  title: string;
  text: string;
  img: string;
  tech: string;
  demoLink: string;
  codeLink: string;
};

export const Project = (props: ProjectPT) => {
  return (
    <StyledProject>
      <ProjectImg src={props.img} alt="img" />
      <ProjectTech>{props.tech}</ProjectTech>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectText>{props.text}</ProjectText>
      <Buttons>
        <Link href={props.demoLink} target={"_blank"} demo>
          &lt;demo/&gt;
        </Link>
        <Link href={props.codeLink} target={"_blank"}>
          &lt;code/&gt;
        </Link>
      </Buttons>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: white;
  text-align: left;
  z-index: 2;
  padding: 10px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 40px 40px 0;
    border-style: solid;
    border-color: ${theme.colors.secondaryFort} #ffca28;
  }
`;

const ProjectImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

const ProjectTitle = styled.h4`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 600;
  padding: 8px;
  color: black;
`;

const ProjectText = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 8px;
  color: ${theme.colors.secondaryFort};
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  margin-top: auto;
  padding: 5px;
`;

const ProjectTech = styled(ProjectText)`
  border-bottom: 1px solid ${theme.colors.secondaryFort};
  border-top: 1px solid ${theme.colors.secondaryFort};
`;
