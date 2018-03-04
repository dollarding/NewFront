import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import Input from 'material-ui/Input';
import Send from 'material-ui-icons/Send';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const styles = theme => ({
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
    justifyContent: 'space-around',
    backgroundImage: 'url("../img/footer.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'round'
  },
  buttons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  followUs:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '15%',
    justifySelf: 'flex-end',
    height: '45%',
    alignSelf: 'center'
  },
  contactUsContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30%',
    justifySelf: 'flex-end',
    height: '33%',
    alignSelf: 'center'
  },
  contactUs:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  textStyle: {
    direction: 'rtl',
    marginRight: '4%'
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  input:{
    direction: 'rtl'
  }
});

const Footer = ({classes}) => (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
      <div className={classes.contactUsContainer}>
      <h1 className={classes.textStyle}>הרשמה לקבלת הטבות</h1>
      <div className={classes.contactUs}>
      <Button className={classes.button} variant="raised" color="secondary">
      <Send className={classes.leftIcon}/>
        שלח
      </Button>
      <Input
        placeholder='הזינו דו"אל'
        inputProps={{
          'aria-label': 'Description',
        }}
        className={classes.input}
      />
      </div>
      </div>
      <div className={classes.followUs}>
        <h1 className={classes.textStyle}>עקבו אחרינו</h1>
        <div className={classes.buttons}>
          <Button  size="small" component={Link} to={""}>
              <img className={classes.button} src="../../img/facebook.png"/>
          </Button>
          <Button  size="small" component={Link} to={""}>
              <img className={classes.button} src="../../img/twitter.png"/>
          </Button>
          <Button  size="small" component={Link} to={""}>
              <img className={classes.button} src="../../img/instagram.png"/>
          </Button>
        </div>
      </div>
      </AppBar>
    </div>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);