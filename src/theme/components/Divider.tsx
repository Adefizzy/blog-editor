import { StyleFunctionProps } from '@chakra-ui/styled-system';

const Divider = {
  // Styles for the base style
  baseStyle: (props: StyleFunctionProps) => {
    return {
      borderColor: 'gray.300',
      margin: '0 auto',
    };
  },
  // Styles for the size variations
  sizes: {
    sm: {
      maxWidth: '90%',
    },
    md: {
      maxWidth: '100%',
    },
  },
  // Styles for the visual style variations
  variants: {
    brand: (props: StyleFunctionProps) => {
      return {
        borderColor: '#A3E92A',
        borderWidth: '4px',
      };
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    size: 'sm',
  },
};

export default Divider;
