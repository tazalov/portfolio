import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const SectionSubtitle = styled.h2`
  ${font({
    weight: 400,
    lineHeight: "25px",
    color: `${theme.colors.secondaryFort}`,
    Fmax: 18,
    Fmin: 12,
  })}
  width: 100%;
  margin: 20px 0;
`;
