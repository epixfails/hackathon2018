import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

const MenuItem = styled.li`
  font-size: 25px;
  padding: 20px;

  &:after {
    display: block;
    opacity: ${({ activelink }) => (activelink ? '1' : '0')};
    content: '';
    position: relative;
    bottom: -10px;
    width: 100%;
    height: 2px;
    background: #fff;
    transition: all ease-in 0.2s;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const menuItems = [
  {
    title: 'Профиль',
    path: '/profile',
  },
  {
    title: 'Книжная полка',
    path: '/books',
  },
  {
    title: 'Сделки',
    path: '/deal',
  },
  {
    title: 'Поиск',
    path: '/search',
  },
];

const Navigation = ({
  match: {
    params: { page },
  },
}) => {
  return (
    <Wrapper>
      {menuItems.map(item => (
        <MenuItem
          key={item.title}
          activelink={page === item.path.replace('/', '')}
        >
          <StyledLink to={item.path}>{item.title}</StyledLink>
        </MenuItem>
      ))}
    </Wrapper>
  );
};

export const NavigationPanel = withRouter(Navigation);
