import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";

import { ThemeDark, ThemeWhite } from "./Components/Ui/themes";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { ThemeButton } from "./Components/Ui";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };
  return (
    <ThemeProvider theme={theme ? ThemeWhite : ThemeDark}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        <SwitchTheme theme={theme} />
      </ThemeButton>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
