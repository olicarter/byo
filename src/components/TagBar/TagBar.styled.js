import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const TagBar = styled.div(() => ({
  alignItems: 'center',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  overflowX: 'scroll',
}));

export const Nav = styled.nav(() => ({}));

export const NavItems = styled.ul(() => ({
  display: 'flex',
  margin: 0,
  padding: '0.5rem',
}));

export const NavItem = styled.li(() => ({
  flexShrink: 0,
  listStyle: 'none',
  margin: 0,
  padding: 0,
}));

export const Tag = styled(RouterLink)(
  ({
    active,
    theme: {
      palette: { black, grey, orange },
    },
    to,
  }) => ({
    get color() {
      if (active) return orange;
      if (to) return black;
      return grey;
    },
    display: 'flex',
    fontSize: '1rem',
    fontWeight: 700,
    padding: '0.5rem',
    textDecoration: 'none',
    userSelect: 'none',
    '@media (hover: hover) and (pointer: fine)': {
      ':hover': {
        color: to ? orange : grey,
      },
    },
  }),
);
