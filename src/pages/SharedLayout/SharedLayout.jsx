import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header, NavList, StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
