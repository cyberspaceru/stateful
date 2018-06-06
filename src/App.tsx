// External
import * as React from 'react';
// Material UI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// Material UI -> Colors
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
// Local
import Index from './pages/Index';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Index/>
      </MuiThemeProvider>
    );
  }
}

export default App;
