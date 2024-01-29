import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

type LinkPT = {
  demo?: boolean
}

export const Link = styled.a<LinkPT>`
  text-align: center;
  padding: 8px;
  margin-right: 5px;
  transition: all 0.3s ease;
  border: 1px solid ${props => (props.demo ? theme.colors.accent : theme.colors.secondaryFort)};
  color: ${props => (props.demo ? theme.colors.accent : theme.colors.secondaryFort)};
  &:hover {
    background-color: ${props =>
      props.demo ? theme.colors.accentOpacity : theme.colors.secondaryFortOpacity};
  }
`
