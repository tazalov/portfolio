import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

export type MenuItemT = {
  id: number;
  text: string;
};

type MenuPT = {
  items: MenuItemT[];
};

export const HeaderMenu = (props: MenuPT) => {
  return (
    <StyledHeaderMenu>
      {/*      <Link
        activeClass="active"
        spy={true}
        hashSpy={true}
        offset={50}
        duration={500}
        delay={1000}
        isDynamic={true}
        onSetActive={this.handleSetActive}
        onSetInactive={this.handleSetInactive}
        ignoreCancelEvents={false}
        spyThrottle={500}
      >
        Your name
      </Link>*/}
      <ul>
        {props.items.map((el) => (
          <ListItem key={el.id}>
            <MyLink to={`${el.text}`} smooth={true}>
              <span>#</span>
              {el.text}
            </MyLink>
          </ListItem>
        ))}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
  & ul {
    display: flex;
    gap: 30px;
  }
`;

const ListItem = styled.li`
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

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
`;
