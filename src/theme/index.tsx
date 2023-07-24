import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { ButtonStyle as Button } from "./components/Button";
import { InputStyle as Input } from "./components/Input";
import { formLabelStyle as FormLabel } from "./components/FormLabel";
import { TextStyle as Text } from "./components/Text";
import { LinkStyle as Link } from "./components/Link";
import Divider from "./components/Divider";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  colors: {
    primary: "#0A7227",
    secondary: "#124D0B",
    muted: "#64748b",
    lightGreen: '#E7F1E9',
    accent: "#FFAF0F",
    gray1: "#FAFAFA",
    gray2: "#F5F5F5",
    gray3: "#BDBDBD",
  },
  components: {
    Button,
    Input,
    FormLabel,
    Divider,
    Text,
    Link,
  },

  textStyles: {
    normal: {
      fontSize: { base: "16px", lg: "1.2vw" },
    },
  },

  layerStyles: {
    card: {
      backgroundColor: "white",
      borderRadius: "md",
    },
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        fontSize: ["sm", "md"],
        color: props.theme.colors.gray[600],
        lineHeight: "tall",
        backgroundColor: "gray2",
        fontFamily: `'Open Sans', sans-serif`,
      },
    }),
  },
});

export default theme;
