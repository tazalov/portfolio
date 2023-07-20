import styled from "styled-components";

export const SectionTitle = styled.h2`
  color: red;
  position: relative;
  display: inline-block;
  &:after {
    content: "";
    width: 50vw;
    height: 2px;
    background-color: red;
    position: absolute;
    left: 105%;
    bottom: 30%;
  }
`;
