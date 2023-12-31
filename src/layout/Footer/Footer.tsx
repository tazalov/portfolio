import styled from 'styled-components'
import { Icon } from '../../components/Icon/Icon'
import { Container, SectionTitle } from '../../components/styled'
import { theme } from '../../styles/Theme'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialBlock>
          <Bracket>
            <span>const</span> socialLinks =<span>[</span>
          </Bracket>
          <SocialLink href={'mailto:tazalov9@gmail.com'}>
            <Icon iconId={'email'} width={'30px'} height={'30px'} viewBox={'0 0 50 50'} />
          </SocialLink>
          <SocialLink href={'https://github.com/tazalov'}>
            <Icon iconId={'gitHub'} width={'30px'} height={'30px'} viewBox={'0 0 50 50'} />
          </SocialLink>
          <SocialLink href={'mailto:tazalov9@gmail.com'}>
            <Icon iconId={'linkedIn'} width={'30px'} height={'30px'} viewBox={'0 0 50 50'} />
          </SocialLink>
          <SocialLink href={'https://t.me/tazalov9'}>
            <Icon iconId={'telegram'} width={'30px'} height={'30px'} viewBox={'0 0 50 50'} />
          </SocialLink>

          <Bracket>
            <span>];</span>
          </Bracket>
        </SocialBlock>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 20px;
  font-size: 20px;
`

const SocialBlock = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`

const SocialLink = styled.a`
  padding: 5px;
`

const Bracket = styled(SectionTitle)`
  margin: 0;
  @media ${theme.media.tablet} {
    display: none;
  }
`
