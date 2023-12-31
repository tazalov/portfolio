import styled from 'styled-components'
import { Container, SectionSubtitle, SectionTitle } from '../../../components/styled'
import { font } from '../../../styles/Common'

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <SectionTitle>
          <span>&lt;</span>
          <code>blockquote</code>
          <span>&gt;</span>
        </SectionTitle>
        <SloganText>A person has not yet been born who could not become a programmer.</SloganText>
        <SectionTitle>
          <span>&lt;/</span>
          <code>blockquote</code>
          <span>&gt;</span>
        </SectionTitle>
        <Copyright>/* © Igor Yudintsev */</Copyright>
      </Container>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  position: relative;
`

const SloganText = styled.p`
  ${font({ weight: 400, Fmax: 30, Fmin: 18 })}
  padding-left: 40px;
`

const Copyright = styled(SectionSubtitle)`
  max-width: 100%;
  text-align: right;
`
