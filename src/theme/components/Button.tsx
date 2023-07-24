import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const ButtonStyle = {   
  size: {
    sm: {
      padding: 4,
    },
    md: {
      padding: { base: 12, lg: 6 },
    },
  },
  variants: {
    normal: (props: StyleFunctionProps) => ({
      bg: props.theme.colors.primary,
      color: '#fff',
      ':hover': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      ':focus': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      ':disabled': {
        bg: props.theme.colors.muted,
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        }
      }
    }),
    noBg: (props: StyleFunctionProps) => ({
      bg:'#EDF2F7',
      ':hover': {
        boxShadow: 'md',
      },
    }),
    secondary: (props: StyleFunctionProps) => {
      return {
      bg:  '#fff',
      border: `1px solid ${props.theme.colors.primary}`,
      outline: 'red',
      color: props.theme.colors.primary,
      ':hover': {
        boxShadow: 'md',
      },
    }},
    half: (props: StyleFunctionProps) => ({
        bg: props.theme.colors.primary,
        color: '#fff',
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        },
        width: '50%'
      }),
    full: (props: StyleFunctionProps) => ({
        bg: props.theme.colors.primary,
        color: '#fff',
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        },
        width: '100%'
      }),
  },
  defaultProps: {
    size: 'md',
    variant: 'normal'
  },
};
