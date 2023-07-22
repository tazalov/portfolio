import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const SectionSubtitle = styled.h3`
  ${font({
    weight: 400,
    color: `${theme.colors.secondaryFort}`,
    Fmax: 20,
    Fmin: 14,
  })}
  width: 100%;
  margin: 20px 0;
`;
