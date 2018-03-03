import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import EmailButton from './containers/buttons/EmailButton';
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
    zDepth: 2,
  },
  flex: {
    flex: 1,
    minHeight: '75px'
  },
  appBar:{
    width: '100%',
    height: 300,
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundImage: 'url("../img/footer.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'round'
  }
};

const Footer = ({classes}) => (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Dollarding Footer
          </Typography>
        </Toolbar>
        <EmailButton/>
      </AppBar>
    </div>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);