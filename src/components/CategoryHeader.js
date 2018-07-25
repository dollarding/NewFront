import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '98%'

  },
  button: {
    margin: theme.spacing.unit,
    color: '#199147',
  },
});

const CategoryHeader = ({classes, title}) => (
    <div className={classes.root}>
        <Button color="primary" className={classes.button} component={Link} to={"/category/" + title}>
         <KeyboardArrowLeft/> ראה עוד
        </Button>
        <h1>{title}</h1>
    </div>
);

CategoryHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    //category: PropTypes.string.isRequired,

};

export default withStyles(styles)(CategoryHeader);
