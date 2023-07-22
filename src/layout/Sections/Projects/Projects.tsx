import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Menu } from "./Menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Project } from "./Project/Project";
import anynft from "../../../assets/img/project_logo.webp";
import { Container } from "../../../components/Container";
import { AbsoluteIcon } from "../../../components/AbsoluteIcon";
import { Icon } from "../../../components/Icon/Icon";

const menuItems = [
  { id: 1, text: "#landing" },
  { id: 2, text: "#react" },
  { id: 3, text: "#SPA" },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>
          <span>&lt;</span>Projects<span>&gt;</span>
        </SectionTitle>
        <Menu items={menuItems} />
        <FlexWrapper wrap={"wrap"} justify={"center"} relative>
          {/*          <AbsoluteIcon top={"0"} left={"-5%"}>
            <Icon
              iconId={"logo"}
              width={"156"}
              height={"156"}
              viewBox={"0 0 156 156"}
            />
          </AbsoluteIcon>
          <AbsoluteIcon bottom={"-10%"} right={"-10%"}>
            <Icon
              iconId={"square"}
              width={"86"}
              height={"86"}
              viewBox={"0 0 86 86"}
            />
          </AbsoluteIcon>
          <AbsoluteIcon bottom={"-10%"} right={"-10%"}>
            <Icon
              iconId={"square-big"}
              width={"186"}
              height={"186"}
              viewBox={"0 0 186 186"}
            />
          </AbsoluteIcon>*/}
          <Project
            tech={"React, Redux, Styled component"}
            title={"ANY NFT"}
            text={
              '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur"'
            }
            img={anynft}
          />
          <Project
            tech={"HTML, CSS, Java Script"}
            title={"Car repair"}
            text={
              '"Lorem ipsum dolor sit amet, consectetur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"'
            }
            img={anynft}
          />
          <Project
            tech={"Angular, JavaScript, redux-form"}
            title={"Social network"}
            text={
              '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur consequuntur ipsum nobis repellat rerum similique sit. Placeat, sunt tempore?"'
            }
            img={anynft}
          />
        </FlexWrapper>
        <SectionTitle>
          <span>&lt;/</span>Projects<span>&gt;</span>
        </SectionTitle>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
