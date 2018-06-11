import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import Send from 'material-ui-icons/Send';


const styles = theme => ({
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
    height: 48,
    width: 48,
    backgroundColor: '#199147',
    '&:hover': {
        background: '#1bc15b'
      }
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  input:{
    direction: 'rtl',
    color: 'white'
  },
});


const ContactUs = ({classes}) => (
        <div className={classes.contactUsContainer}>
        <h1 className={classes.textStyle}>הרשמה לקבלת הטבות</h1>
        <div className={classes.contactUs}>
        <Button className={classes.button} variant="raised" color="primary">
          שלח
          <Send className={classes.rightIcon}/>
        </Button>
        <Input
          placeholder="הזינו כתובת מייל"
          inputProps={{
            'aria-label': 'Description',
          }}
          className={classes.input}
          classes={{
            inkbar: classes.inputInkbar,
          }}
        />
        </div>
        </div>
);

ContactUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactUs);