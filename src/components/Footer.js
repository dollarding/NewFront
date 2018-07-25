import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ContactUs from './ContactUs';
import FollowUs from './FollowUs';
import AboutUs from './AboutUs';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const styles = theme => ({
  root: {
    width: '100%',
    height: '42%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    zDepth: 2,
  },
  flex: {
    flex: 1,
    minHeight: '75px'
  },
  appBar:{
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#282c2cde',
  },
  textStyle: {
    direction: 'rtl',
    marginRight: '4%'
  },
  image: {
    margin: theme.spacing.unit,
    height: 60
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },

});

const Footer = ({classes}) => (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
      <ContactUs />
      <FollowUs />
      <AboutUs />
      </AppBar>
    </div>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
