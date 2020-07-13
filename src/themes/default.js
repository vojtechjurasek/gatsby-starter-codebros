const colors = {
  text: '#261A0D',
  background: '#fff',
  primary: '#EEAA33',
  secondary: '#261A0D',
  green: '#1AB220',
  muted: '#f6f6f9',
  gray: '#dddddf',
  highlight: 'hsla(205, 100%, 40%, 0.125)',
}

const light = {
  colors,
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body:
      '"Work Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    heading:
      '"Work Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [0, 14, 16, 18, 21, 24, 28, 32, 36, 42, 48],
  fontWeights: {
    body: 'normal',
    heading: 'bold',
    bold: 'bold',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    hero: {
      title: {
        mb: 4,
        color: 'white',
        fontSize: 9,
      },
      subtitle: {
        mb: 5,
        color: 'white',
        fontSize: 5,
      },
    },
    tile: {
      title: {
        color: 'white',
        fontSize: 6,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
  },
  variants: {
    header: {
      py: 3, // remove after menu is created
      position: 'fixed',
      width: '100%',
      maxWidth: '75rem',
      top: [0, 0, 4],
      left: '50%',
      bg: 'white',
      borderBottomColor: 'primary',
      borderBottomStyle: 'solid',
      borderBottomWidth: 4,
      transform: 'translateX(-50%)',
      zIndex: 100,
    },
    footer: {
      py: 5,
      bg: 'secondary',
      color: 'white',
      address: {
        fontSize: 3,
        lineHeight: 1.75,
      },
    },
    hero: {
      minHeight: '100vh',
      bg: 'secondary',
      body: {
        pt: ['10rem', '10rem', '16rem'],
        height: 'auto',
      },
      text: {
        maxWidth: ['100%', '100%', '60%'],
      },
    },
    link: {
      primary: {
        px: 5,
        py: 3,
        bg: 'primary',
        borderRadius: '0 0 0 2rem',
        color: 'text',
        fontFamily: 'body',
        fontSize: 5,
        fontWeight: 'bold',
        outline: 'none',
        textDecoration: 'none',
      },
    },
    tiles: {
      maxWidth: '120rem',
      flexDirection: ['column', 'row'],
      alignItems: 'stretch',
      justifyContent: 'stretch',
    },
    tile: {
      flexBasis: '50%',
      flexGrow: 1,
      textDecoration: 'none',
      iconWrapper: {
        p: 3,
        bg: 'primary',
        borderRadius: 'circle',
      },
      icon: {
        width: '4rem',
        height: '4rem',
      },
      body: {
        py: 5,
        px: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      },
    },
    'tile-primary': {
      variant: 'variants.tile',
      // bg: 'primary',
    },
    'tile-green': {
      variant: 'variants.tile',
      // bg: 'green',
    },
  },
  buttons: {
    primary: {
      px: 5,
      py: 3,
      bg: 'primary',
      borderRadius: '0 0 0 2rem',
      color: 'text',
      fontFamily: 'body',
      fontSize: 5,
      fontWeight: 'bold',
      outline: 'none',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    root: {
      pt: [0, 0, 4],
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    strong: {
      fontWeight: 'bold',
    },
  },
}

export default light
