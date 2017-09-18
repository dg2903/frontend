import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppRoutes from "./AppRoutes";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const App = () => (
  <MuiThemeProvider>
    <AppRoutes/>
  </MuiThemeProvider>
)

export default App;
