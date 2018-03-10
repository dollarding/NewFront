/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import Header from './Header';
import Routes from '../routes';
import AppLayout from './AppLayout';
import Footer from './Footer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8d8d8d',
      main: '#606060',
      dark: '#363636',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#5fd25e',
      main: '#20a02f',
      dark: '#007000',
      contrastText: '#ffffff',
    },
  },
});


const appStyle = {
  overflow: 'hidden',
  height: 663,
  overflowY: 'auto'
};

class App extends React.Component {
  render() {
    return (
      <div style={appStyle}>
        <MuiThemeProvider theme={theme}>
          <AppLayout>
          <Header/>
          <Routes/>
          <Footer/>
          </AppLayout>
        </MuiThemeProvider>
        </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object
};

export default App;
