import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';

import { Calculator } from './components/Calculator';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { ThemeButton } from './components/ThemeButton';

import { themes } from './themes';

class App extends Component {
  render() {
    return (
      <ThemeSwitcher themes={themes} defaultTheme="default">
        {(theme, selectNextTheme) => (
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <Calculator />,
              <ThemeButton onClick={selectNextTheme}>Switch theme</ThemeButton>
            </React.Fragment>
          </ThemeProvider>
        )}
      </ThemeSwitcher>
    );
  }
}

export default App;
