import styled from 'styled-components';
import { darken } from 'polished';

export const FloatingButtonWrapper = styled.div(() => ({
  backdropFilter: 'blur(1rem)',
  bottom: 0,
  left: 0,
  padding: '1rem 0 21px',
  position: 'sticky',
  right: 0,
  width: '100%',
  zIndex: 1,
}));

export const FloatingButton = styled.button(
  ({
    backgroundColor,
    borderRadius,
    disabled,
    flex,
    theme: {
      palette,
      palette: { primary, readableColor },
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
      fontSize: '1rem',
      fontWeight: 700,
      height: '3rem',
      justifyContent: 'center',
      lineHeight: '2rem',
      opacity: disabled ? 0.66 : 1,
      outline: 'none',
      padding: '0 0.75rem',
      pointerEvents: disabled ? 'none' : 'all',
      transitionDuration: '100ms',
      userSelect: 'none',
      width: '100%',
      '@media (hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: darken(0.05, background),
        },
      },
    };
  },
);
