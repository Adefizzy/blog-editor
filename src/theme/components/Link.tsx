import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const LinkStyle = {
  baseStyle: () => ({
    marginBottom: '2',
  }),

  size: {
   
  },
  variants: {
    normal: (props: StyleFunctionProps) => ({
        fontWeight: 'normal',
        '_activeLink': {
            color: props.theme.colors.primary,
            fontWeight: 'bold',
        },
        '_hover': {
          color: props.theme.colors.primary,
            textDecoration:'none',
        }
    }),
  
  },
  defaultProps: {
    variant: 'normal'
  },
};
