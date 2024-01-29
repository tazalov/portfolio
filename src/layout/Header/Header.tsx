import styled from 'styled-components'
import { Icon } from '../../components/Icon/Icon'
import { Container, FlexWrapper } from '../../components/styled'
import { theme } from '../../styles/Theme'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'center'} align={'center'}>
          <SocialLink href={'mailto:tazalov9@gmail.com'} target={'_blank'}>
            <Icon iconId={'email'} width={'50px'} height={'50px'} viewBox={'0 0 50 50'} />
          </SocialLink>
          <SocialLink href={'https://t.me/tazalov9'} target={'_blank'}>
            <Icon iconId={'telegram'} width={'50px'} height={'50px'} viewBox={'0 0 50 50'} />
          </SocialLink>
          <SocialLink href={'https://www.linkedin.com/in/tazalov/'} target={'_blank'}>
            <Icon iconId={'linkedIn'} width={'50px'} height={'50px'} viewBox={'0 0 50 50'} />
          </SocialLink>
          <SocialLink href={'https://github.com/tazalov'} target={'_blank'}>
            <Icon iconId={'gitHub'} width={'50px'} height={'50px'} viewBox={'0 0 50 50'} />
          </SocialLink>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.primaryBg};
  z-index: 10000;
  height: 75px;
  padding: 5px;
`

const SocialLink = styled.a`
  padding: 5px;
  & svg {
    color: ${theme.colors.secondaryAccent};
    transition: all 0.3s linear;
    &:hover {
      color: ${theme.colors.thirdAccent};
    }
  }
`
