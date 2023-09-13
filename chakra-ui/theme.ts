import { colors } from './colors';
import { extendTheme, useBreakpointValue } from "@chakra-ui/react";

const baseTheme = extendTheme({
  colors,
  styles: {
    global: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const isMobileBreakpoint = useBreakpointValue({ base: true, lg: false });
      return {
        "html, body": {
          boxSizing: "border-box",
          // fontSize: isMobileBreakpoint ? "sm" : "md",
          fontFamily: `Arial`,
          color: "ast.3",
          bgColor: "ast.4",
        },
      };
    },
  },
})

export default baseTheme;