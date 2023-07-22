import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const SectionTitle = styled.h2`
  color: ${theme.colors.primaryFont};
  ${font({ weight: 600, Fmax: 40, Fmin: 18 })}
  margin: 20px 0;
  span {
    color: ${theme.colors.accent};
  }
`;
