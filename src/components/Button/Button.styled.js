import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button(
  ({
    backgroundColor,
    borderRadius,
    disabled,
    flex,
    theme: {
      palette,
      palette: { black, primary, readableColor, white },
    },
  }) => {
    const background = palette[backgroundColor] || primary;
    return {
      alignItems: 'center',
      backgroundColor: background,
      border: 'none',
      borderRadius: borderRadius ? '0.5rem' : 0,
      color: readableColor(background),
      cursor: 'pointer',
      display: 'flex',
      flex,
      fontWeight: 700,
      height: '2rem',
      justifyContent: 'center',
      lineHeight: '2rem',
      opacity: disabled ? 0.5 : 1,
      outline: 'none',
      padding: '0 0.75rem',
      pointerEvents: disabled ? 'none' : 'all',
      userSelect: 'none',
      '@media (hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: darken(0.05, background),
        },
      },
    };
  },
);
