import styled, { css } from 'styled-components'
import { theme } from '../../../styles/Theme'

type FlexWrapperPT = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  relative?: boolean
  content?: string
}

export const FlexWrapper = styled.div<FlexWrapperPT>`
  min-height: 100%;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  align-content: ${props => props.content || 'stretch'};
  ${props =>
    props.relative &&
    css`
      position: relative;
    `};
  @media ${theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
