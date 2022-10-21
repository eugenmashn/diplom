import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {themeGlobal} from "./Theme";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={themeGlobal}>
              <CssBaseline />

          </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
