import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#d81e5b",
    secondary: "#8a4efc",
    light: "#eee",
    lightAlt: "#61759b",
    dark: "#131a26",
    darkAlt: "#202b3e",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}> {children} </ThemeProvider>
);

export default Theme;
