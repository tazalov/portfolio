import styled from 'styled-components'
import { Container, FlexWrapper } from '../../components/styled'
import { theme } from '../../styles/Theme'
import { HeaderMenu } from './HeaderMenu/HeaderMenu'
import { MobileMenu } from './MobileMenu/MobileMenu'

const menuItems = [
  { id: 1, text: 'home' },
  { id: 2, text: 'skills' },
  { id: 3, text: 'projects' },
  { id: 4, text: 'contacts' },
]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'center'} align={'center'}>
          <HeaderMenu items={menuItems} />
          <MobileMenu items={menuItems} />
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
  height: 50px;
  padding: 5px;
`
