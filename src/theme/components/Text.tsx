import { StyleFunctionProps } from "@chakra-ui/styled-system";

export const TextStyle = {
  baseStyle: () => ({
    fontSize: { base: "16px", lg: "1.2vw" },
  }),

  size: {},
  variants: {
    mutedCenter: (props: StyleFunctionProps) => ({
      color: props.theme.colors.muted,
      textAlign: "center",
    }),
    normalBold: (props: StyleFunctionProps) => ({
      fontWeight: "600",
    }),
    smallBoldNormal: (props: StyleFunctionProps) => ({
      fontWeight: "bold",
      fontSize: { base: "16px", lg: "1.15vw" },
    }),
    nav: (props: StyleFunctionProps) => ({
      fontSize: { base: "16px", lg: "1.1vw" },
    }),
    whiteBoldNormal: (props: StyleFunctionProps) => ({
      fontWeight: "bold",
      textAlign: "center",
      color: props.theme.colors.white,
    }),

    smallLight: {
      fontWeight: "300",
      fontSize: { base: "8px", lg: "1vw" },
    },
  },
  defaultProps: {},
};
