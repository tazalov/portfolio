import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

export const SectionTitle = styled.h2`
  color: ${theme.colors.primaryFont};
  ${font({ weight: 600, Fmax: 40, Fmin: 18 })}
  margin: 20px 0;
  span {
    color: ${theme.colors.accent};
  }
  code {
    color: ${theme.colors.secondaryAccent};
  }
  i {
    color: ${theme.colors.thirdAccent};
  }
`
