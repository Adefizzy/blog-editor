import { StyleFunctionProps } from '@chakra-ui/styled-system';

export const formLabelStyle = {
  baseStyle: (props: StyleFunctionProps) => ({
    fontSize: { base: '14px', lg: '1.1vw' },
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color:  props.theme.colors.muted,
  }),

  defaultProps: {
    size: 'md',
    variant: 'normal',
    colorScheme: (props: StyleFunctionProps) => props.theme.colors.primary,
  },
};
