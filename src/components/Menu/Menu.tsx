import React from "react";
import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href={"#1"}>#home</a>
        </li>
        <li>
          <a href={"#1"}>#skills</a>
        </li>
        <li>
          <a href={"#1"}>#works</a>
        </li>
        <li>
          <a href={"#1"}>#contacts</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  & ul {
    display: flex;
    gap: 30px;
  }
`;
