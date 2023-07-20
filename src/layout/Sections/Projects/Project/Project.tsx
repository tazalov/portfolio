import React from "react";
import styled from "styled-components";

type ProjectPT = {
  title: string;
  text: string;
  img: string;
};

export const Project = (props: ProjectPT) => {
  return (
    <StyledProject>
      <ProjectImg src={props.img} alt="img" />
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectText>{props.text}</ProjectText>
      <Link>#demo</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 10px;
  background-color: #706767;
  color: white;
`;
const ProjectImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
const ProjectTitle = styled.h3`
  text-transform: uppercase;
`;
const ProjectText = styled.p``;

const Link = styled.a``;
