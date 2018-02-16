/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import Header from './Header';
import Routes from '../routes';
import AppLayout from './AppLayout';
import CategoriesMenu from './containers/CategoriesMenu';
import Footer from './Footer';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppLayout>
          <Header/>
          <CategoriesMenu history={history}/>
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
