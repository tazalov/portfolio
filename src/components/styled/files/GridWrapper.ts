import styled, { css } from 'styled-components'
import { theme } from '../../../styles/Theme'

type GridTemplatePT = {
  autoRows?: string
  autoCol?: string
  countCol?: number
  widthCol?: string
  gap?: string
}

export const GridWrapper = styled.div<GridTemplatePT>`
  display: grid;
  gap: ${props => props.gap || '10px'};
  ${props =>
    props.countCol &&
    css`
      grid-template-columns: repeat(${props.countCol}, ${props.widthCol});
    `}
  margin: 0 auto;
  max-width: fit-content;
  @media ${theme.media.tablet} {
    ${props =>
      props.countCol &&
      css`
        grid-template-columns: repeat(calc(${props.countCol} / 2), ${props.widthCol});
      `}
  }
  @media ${theme.media.mobile} {
    ${props =>
      props.countCol &&
      css`
        grid-template-columns: repeat(calc(${props.countCol} / 3), ${props.widthCol});
      `}
  }
`
