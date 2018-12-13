const COLOR_BLUE = '#07c';
const COLOR_GREEN = '#3f714c';
const COLOR_BACKGROUND = '#f6f6ff';

const theme = {
  colors: {
    blue: COLOR_BLUE,
    green: COLOR_GREEN,
    background: COLOR_BACKGROUND
  },
  buttons: {
    primary: {
      color: COLOR_BLUE,
      border: `3px solid ${COLOR_BLUE}`,
      ':hover': {
        backgroundColor: COLOR_BLUE,
        color: "white"
      }
    },
    secondary: {
      color: COLOR_GREEN,
      border: `3px solid ${COLOR_GREEN}`,
      ':hover': {
        backgroundColor: COLOR_GREEN,
        color: "white"
      }
    }
  },
  space: [0, 4, 8, 16, 24, 32, 48, 56]
}

export default theme;
