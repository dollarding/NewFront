import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import BenefitsSearch from './containers/BenefitsSearch';
import CategoriesMenu from './containers/CategoriesMenu';
import DollardingLogo from '../img/logo.png';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import '../styles/style.css';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    height: '45%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  flex: {
    flex: 1,
  },
  upperHeader:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: '2%'
  }
};

const Header = ({classes}) => (
    <div className={classes.root}>

      <AppBar position="static" className="header">
        <div className={classes.upperHeader}>
      <Button disableRipple={true} component={Link} to={"/"}>
        <img className="avigdor" src={DollardingLogo} />
        </Button>
        <BenefitsSearch />
        </div>
        <CategoriesMenu/>
      </AppBar>

    </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
