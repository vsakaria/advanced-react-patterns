import React from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";
import Hero from "./Hero";

const App = () => (
  <ThemeContext.Consumer>
    {({ setValue }) => (
      <Hero>
        <Button onClick={setValue}>
          Theme Switcher
        </Button>
      </Hero>
    )}
  </ThemeContext.Consumer>
);

export default App;
