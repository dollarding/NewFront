import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import BenefitsSearch from './containers/BenefitsSearch';
import CategoriesMenu from './containers/CategoriesMenu';
import DollardingLogo from '../img/logo.png';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'SkyBlue',
    zDepth: 2,
  },
  flex: {
    flex: 1,
  },
  appBar:{
    width: '100%',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: 'url("../img/HeaderBackground.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'round'
  },
  upperHeader:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    flex: 0.6,
    alignItems: 'center'
  },
  button:{
    height: '78%',
    width: '18%',
  }
};

const Header = ({classes}) => (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <div className={classes.upperHeader}>
      <Button className={classes.button} component={Link} to={"/"}>        
        <img src={DollardingLogo} />
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