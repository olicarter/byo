import styled from 'styled-components';
import { transparentize } from 'polished';

export const TextInput = styled.input(
  ({
    theme: {
      palette: { black, white },
    },
  }) => ({
    background: white,
    border: 'none',
    borderBottom: '2px solid',
    borderColor: transparentize(0.66, black),
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1,
    outline: 'none',
    padding: '0.25rem 0',
    ':focus': {
      borderColor: black,
    },
    '@media (hover: hover) and (pointer: fine)': {
      ':hover': {
        borderColor: black,
      },
    },
  }),
);
