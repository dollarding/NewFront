import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email';
import Sms from '@material-ui/icons/Sms';
import DollardingIconButton from './buttons/DollardingIconButton';
//import IconButton from '@material-ui/core/IconButton';
//import PhotoCamera from '@material-ui/core-icons/PhotoCamera';

const styles = theme => ({
  title: {
    direction: 'rtl'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    justifySelf: 'center',
    alignSelf: 'center'
  },
  smsContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '70%',
    justifySelf: 'center',
    alignSelf: 'center'
  },
  icon: {
    marginRight: theme.spacing.unit
  },
  button: {
    width: '45%'
  }

});


class GetBenefitDialog extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      dialogContentDescriptor: 0
    };

    this.getDialogContent = this.getDialogContent.bind(this);
  }

  setEmailContent = () => {
    this.setState({dialogContentDescriptor: 2});
  }

  setSmsContent = () => {
    this.setState({dialogContentDescriptor: 1});
  }

  handleDialogClose = () => {
    this.setState({dialogContentDescriptor: 0});
    this.props.handleClose();
  }

  getDialogContent (dialogContentDescriptor) {
    const { classes, handleSend, phoneNumber, mailAdress, handleEmailSend, errors, isValid} = this.props;
    switch(dialogContentDescriptor){
      case 0:
      return (
        <Fragment>
      <DialogContent className={classes.content}>
      <DollardingIconButton label="Email" className={classes.button} onClick={this.setEmailContent} children={<Email className={classes.icon}/>} />
      <DollardingIconButton label="Sms" className={classes.button} onClick={this.setSmsContent} children={<Sms className={classes.icon} />} />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleDialogClose} color="secondary">
          סגור
        </Button>
      </DialogActions>
      </Fragment>
      );
      case 1:
      return (
        <Fragment>
        <DialogContent className={classes.smsContent}>
        <TextField
        className={classes.title}
        value={phoneNumber}
        placeholder="הזן מספר טלפון"
        autoFocus
        margin="dense"
        id="sms"
        type="sms"
        fullWidth
        errorText={errors['sms']}
        onChange={this.props.onChange}
        />
        </DialogContent>
              <DialogActions>
              <Button onClick={this.handleDialogClose} color="secondary">
                סגור
              </Button>
              <Button disabled={!isValid} onClick={handleSend} color="secondary">
                שלח
              </Button>
            </DialogActions>
        </Fragment>
      );
      case 2:
      return (
        <Fragment>
        <DialogContent className={classes.smsContent}>
        <TextField
        className={classes.title}
        value={mailAdress}
        placeholder="הזן כתובת מייל"
        autoFocus
        margin="dense"
        id="email"
        type="email"
        errorText={errors['email']}
        fullWidth
        onChange={this.props.onMailChange}
        />
        </DialogContent>
              <DialogActions>
              <Button onClick={this.handleDialogClose} color="secondary">
                סגור
              </Button>
              <Button disabled={!isValid} onClick={handleEmailSend} color="secondary">
                שלח
              </Button>
            </DialogActions>
        </Fragment>
      );
    }

  }

  render()
  {
    const {open, classes} = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleDialogClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle className={classes.title} id="form-dialog-title">
          מקבלים את ההטבה בחינם!
          <br />
          בחרו לאן לשלוח לכם?
          </DialogTitle>
          {this.getDialogContent(this.state.dialogContentDescriptor)}
        </Dialog>
      </div>
    );
  }
}

GetBenefitDialog.propTypes = {
    handleClickOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    handleSend: PropTypes.func.isRequired,
    handleEmailSend: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    mailAdress: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    onMailChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    isValid: PropTypes.bool.isRequired
};

export default withStyles(styles)(GetBenefitDialog);

