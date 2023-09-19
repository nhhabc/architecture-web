import { fontMontserrat } from '@/app/fonts';
import { colors } from './colors';
import { extendTheme, useBreakpointValue } from "@chakra-ui/react";

const baseTheme = extendTheme({
  colors,
  components: {
    Button: {
      variants: {
        "default-revert": {
          fontSize: "16px",
          fontWeight: 500,
          textTransform: "uppercase",
          color: "#223B5F",
          borderRadius: "3px",
          bgColor: "white",
          p: "8px 25px",
          transition: "0.3s",
          w: "fit-content",
          _hover: {color: "white", bgColor: "#374e6f"}
        },
        "default": {
          fontSize: "16px",
          textTransform: "uppercase",
          bgColor: "global.primary",
          fontWeight: 500,
          color: "white",
          w: "fit-content",
          borderRadius: 4,
          padding: "5px 20px",
          transition: "all .3s",
          cursor: "pointer",
          _hover: {
            bgColor: "white",
            color: "global.primary"
          }
        }
      }
    }
  },
  styles: {
    global: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const isMobileBreakpoint = useBreakpointValue({ base: true, lg: false });
      return {
        "html, body": {
          boxSizing: "border-box",
          fontFamily: fontMontserrat.style.fontFamily,
          color: "ast.3",
          bgColor: "ast.4",
          overflowX: "hidden",
        },
      };
    },
  },
})

export default baseTheme;