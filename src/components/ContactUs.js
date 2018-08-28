import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import Send from 'material-ui-icons/Send';
import Typography from 'material-ui/Typography';



const styles = {
  contactUsContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30%',
    justifySelf: 'flex-end',
    height: '40%',
    alignSelf: 'center'
  },
  contactUs:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '35%',
    alignSelf: 'center'
  },
  textStyle: {
    direction: 'rtl',
    marginRight: '4%',
    fontSize: '1em'
  },
  button: {
    backgroundColor: '#97641f',
    width: '25%',
    height: '90%%',
    '&:hover': {
        background: '#b07524'
      }
  },
  buttonRoot: {
    minWidth: 45
  },
  rightIcon: {
    marginLeft: '12%',
    width: '33%',
  },
  input:{
    direction: 'rtl',
    color: 'white',
    width: '50%',
    height: '100%',
    fontSize: '1em'
  },
};


const ContactUs = ({classes}) => (
        <div className={classes.contactUsContainer}>
        <h1 className={classes.textStyle}>הרשמה לקבלת הטבות</h1>
        <div className={classes.contactUs}>
        <Button classes={{ root: classes.buttonRoot }} className={classes.button} variant="raised" color="primary">
        <Typography component="p" style={{fontSize: '1em', color: 'white'}}>
            שלח
          </Typography>
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