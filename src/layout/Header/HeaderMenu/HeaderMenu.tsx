import { Link } from 'react-scroll'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

export type MenuItemT = {
  id: number
  text: string
}

type MenuPT = {
  items: MenuItemT[]
}

export const HeaderMenu = ({ items }: MenuPT) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {items.map(el => (
          <ListItem key={el.id}>
            <MyLink to={`${el.text}`} smooth={true}>
              <span>#</span>
              {el.text}
            </MyLink>
          </ListItem>
        ))}
      </ul>
    </StyledHeaderMenu>
  )
}

const StyledHeaderMenu = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
  & ul {
    display: flex;
    gap: 30px;
  }
`

const ListItem = styled.li`
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`

const MyLink = styled(Link)`
  font-size: 25px;
  font-weight: 500;
  color: ${theme.colors.secondaryFort};
  transition: all 0.3s ease;
  &:hover {
    color: ${theme.colors.primaryFont};
  }
  span {
    color: ${theme.colors.accent};
  }
`
