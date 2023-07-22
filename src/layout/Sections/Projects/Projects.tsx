import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Menu } from "./Menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Project } from "./Project/Project";
import anynft from "../../../assets/img/anynft.webp";
import carrepair from "../../../assets/img/carrepair.webp";
import portfolio from "../../../assets/img/photo.webp";
import social from "../../../assets/img/social.webp";
import { Container } from "../../../components/Container";

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
      tech: "html, css, js, adaptive",
      photo: anynft,
      title: "ANY NFT",
      text: "Excellent landing page, own design. It was developed on gulp.",
      tabName: "landing",
      demoLink: "https://tazalov.github.io/anynft/",
      codeLink: "https://github.com/tazalov/anynft",
    },
    {
      id: 2,
      tech: "html, css, js, no-adaptive",
      photo: carrepair,
      title: "CAR REPAIR",
      text: "Layout according to the finished layout. Without adaptive.",
      tabName: "landing",
      demoLink: "https://tazalov.github.io/carrepair",
      codeLink: "https://github.com/tazalov/carrepair",
    },
    {
      id: 20,
      tech: "react, typescript, styled components",
      photo: portfolio,
      title: "PORTFOLIO",
      text: "The landing page is developed on React. You see him now.",
      tabName: "react",
      demoLink: "#1",
      codeLink: "https://github.com/tazalov/portfolio",
    },
    {
      id: 40,
      tech: "react, redux, styled & class component, formik, axios, websocket, typescript",
      photo: social,
      title: "SOCIAL NETWORK",
      text: "The API is unfinished, everything that is possible has been implemented.Use: free@samuraijs.com:free",
      tabName: "spa",
      demoLink: "https://tazalov.github.io/samurai_social",
      codeLink: "https://github.com/tazalov/samurai_social",
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
          <span>import </span>
          <i>p</i>
          <span> from </span>
          <code>'../Projects'</code>
          <span>;</span>
        </SectionTitle>
        <Menu tabItems={tabItems} changeFilter={changeFilter} filter={filter} />
        <BorderWrapper wrap={"wrap"} justify={"flex-start"} relative>
          {filteredProjects.map((el) => (
            <Project
              key={el.id}
              tech={el.tech}
              title={el.title}
              text={el.text}
              img={el.photo || anynft}
              demoLink={el.demoLink}
              codeLink={el.codeLink}
            />
          ))}
        </BorderWrapper>
        <SectionTitle></SectionTitle>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

const BorderWrapper = styled(FlexWrapper)`
  background-color: #ffca28;
  border-radius: 0 10px 10px 10px;
  padding: 20px;
`;
