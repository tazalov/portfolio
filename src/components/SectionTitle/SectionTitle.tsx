import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const SectionTitle = styled.h2`
  color: ${theme.colors.primaryFont};
  position: relative;
  margin: 20px 0;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  span {
    color: ${theme.colors.accent};
  }
`;
