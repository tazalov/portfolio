import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Menu } from "./Menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Project } from "./Project/Project";
import anynft from "../../../assets/img/project_logo.webp";
import { Container } from "../../../components/Container";
import { AbsoluteIcon } from "../../../components/AbsoluteIcon";
import { Icon } from "../../../components/Icon/Icon";
import { theme } from "../../../styles/Theme";

export type TabT = {
  id: number;
  text: FilterT;
};

const tabItems: TabT[] = [
  { id: 1, text: "landing" },
  { id: 2, text: "react" },
  { id: 3, text: "spa" },
  { id: 4, text: "all" },
];

export type FilterT = "landing" | "react" | "spa" | "all";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      tech: "react, redux, html,css",
      photo: "asd",
      title: "ANY NFT",
      text: "text",
      tabName: "landing",
    },
    {
      id: 5,
      tech: "react, redux, html,css",
      photo: "asd",
      title: "ANY NFT",
      text: "text",
      tabName: "react",
    },
    {
      id: 6,
      tech: "react, redux, html,css",
      photo: "asd",
      title: "ANY NFT",
      text: "text",
      tabName: "react",
    },
    {
      id: 10,
      tech: "react, spa",
      photo: "asd",
      title: "ANY NFT",
      text: "text",
      tabName: "spa",
    },
    {
      id: 11,
      tech: "react, spa",
      photo: "asd",
      title: "social",
      text: "text",
      tabName: "spa",
    },
    {
      id: 12,
      tech: "react, spa",
      photo: "asd",
      title: "network",
      text: "text",
      tabName: "spa",
    },
  ];
  const [filter, setFilter] = useState<FilterT>("all");
  let filteredProjects = projects;

  switch (filter) {
    case "landing": {
      filteredProjects = projects.filter((el) => el.tabName === "landing");
      break;
    }
    case "react": {
      filteredProjects = projects.filter((el) => el.tabName === "react");
      break;
    }
    case "spa": {
      filteredProjects = projects.filter((el) => el.tabName === "spa");
      break;
    }
    default: {
      filteredProjects = projects;
      break;
    }
  }

  const changeFilter = (value: FilterT) => {
    setFilter(value);
  };

  return (
    <StyledProjects id={"projects"}>
      <Container>
        <SectionTitle>
          <span>&lt;</span>Projects<span>&gt;</span>
        </SectionTitle>
        <Menu tabItems={tabItems} changeFilter={changeFilter} filter={filter} />
        <BorderWrapper wrap={"wrap"} justify={"center"} relative>
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
          {filteredProjects.map((el) => (
            <Project
              key={el.id}
              tech={el.tech}
              title={el.title}
              text={el.text}
              img={anynft}
            />
          ))}
        </BorderWrapper>
        <SectionTitle>
          <span>&lt;/</span>Projects<span>&gt;</span>
        </SectionTitle>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

const BorderWrapper = styled(FlexWrapper)`
  border: 1px solid ${theme.colors.secondaryFort};
`;
