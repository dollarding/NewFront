import React from 'react';
import AppBar from 'material-ui/AppBar';
//import blueA700 from 'material-ui/styles/colors';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = ({onDrawerClick}) => (
  <AppBar
    title="NewBenefits"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonClick={onDrawerClick}
  />
);

export default Header;