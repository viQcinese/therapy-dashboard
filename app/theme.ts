import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

const Link: ComponentStyleConfig = {
  baseStyle: { },
  sizes: {},
  variants: {
    nav: {
      fontWeight: 600,
      color: 'gray.800',
      _hover: {
        textDecoration: 'none',
        color: 'gray.600'
      }
    },
    internal: {
      fontWeight: 600,
      _hover: {
        textDecoration: 'none',
        color: 'green.600'
      }
    }
  },
  defaultProps: {
    size: '',
    variant: 'internal',
    colorScheme: '',
  },
}

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bgColor: 'gray.50',
        color: 'gray.900',
        lineHeight: 'tall',
      },
    },
  },
  components: { Link }
})

