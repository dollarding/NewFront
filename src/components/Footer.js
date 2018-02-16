import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const styles = {
  root: {
    width: '100%',
    backgroundColor: 'SkyBlue',
    zDepth: 2,
  },
  flex: {
    flex: 1,
    minHeight: '75px'
  }
};

const Footer = ({classes}) => (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.flex}>
          <Typography variant="title" color="inherit">
            NewDeals Footer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);