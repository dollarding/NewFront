/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import AppDrawer from './AppDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Routes from '../routes';
import AppLayout from './AppLayout';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={open:false};
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({open: !prevState.open}));
  };

  requestToggleDrawer = (isOpen) => {
    this.setState({open:isOpen});
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppLayout>
          <Header onDrawerClick={this.toggleDrawer}/>
          <AppDrawer  isOpen={this.state.open} onDrawerRequest={this.requestToggleDrawer}/>
          <Routes/>
          </AppLayout>
        </MuiThemeProvider>
        </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
