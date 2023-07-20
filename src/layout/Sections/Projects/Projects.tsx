import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Menu } from "../../../components/Menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Project } from "./Project/Project";
import anynft from "../../../assets/img/project_logo.webp";

const menuItems = [
  { id: 1, text: "#landing" },
  { id: 2, text: "#react" },
  { id: 3, text: "#SPA" },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>#projects</SectionTitle>
      <Menu items={menuItems} />
      <FlexWrapper wrap={"wrap"} justify={"center"}>
        <Project
          title={"ANY NFT"}
          text={
            '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"'
          }
          img={anynft}
        />
        <Project
          title={"Car repair"}
          text={
            '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"'
          }
          img={anynft}
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: #7c52b0;
  min-height: 100vh;
`;
