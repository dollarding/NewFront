import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import benefitImage from '../../img/benefit.jpg';
import compose from 'recompose/compose';

import BenefitPageDescription from '../containers/BenefitPageDescription';
import * as benefitActions from '../../actions/benefitsActions';
import FacebookLogo from '../../svg/facebook-logo.svg';
import WhatsAppLogo from '../../svg/whatsapp-logo.svg';
import GetBenefitDialog from '../containers/GetBenefitDialog';
import {CircularProgress} from 'material-ui/Progress';

const styles = theme => ({
    root: {
        display: 'flex',
        marginTop: '8%',
        alignItems:'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '95%',
        height: '80%',
        minHeight: 470,
        //minWidth: 810,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%'
    },
    benefitImage:{
        display: 'flex',
        alignItems:'center',
        flexDirection: 'column',
        height: 360,
        width: '40%',
        justifyContent: 'space-around',
        //minWidth: 380
    },
      leftIcon: {
        marginLeft: theme.spacing.unit*2
      },
      shareButtons:{
        display: 'flex',
        alignItems:'center',
        width: '70%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //minWidth: 350
    },
    button:{
        //minWidth: 100
    },
    anchor: {
        textDecoration: 'none'
    },
    progressContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        minHeight: 470,
    },
    progress: {
        margin: theme.spacing.unit * 2,
        alignSelf: 'center',
        justifySelf: 'center'
    }
    
});

class BenefitPage extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            phoneNumber: "",
            mailAdress: "",
            isValid: false,
            errors : {},
            snackbarOpen: props.smsSent
          };
        
        this.handleSend = this.handleSend.bind(this);
        this.handleEmailSend = this.handleEmailSend.bind(this);
        
    }

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
        this.setState({ open: false , phoneNumber: "", mailAdress: ""});
    };
    
    handleSnackbarClose = () => {
        this.setState({snackbarOpen: false});
    };

    onChange = (event) => {
          let { errors } = this.state;
          const phoneNumber = event.target.value;
          const isValid = phoneNumber !== "";
          if (!isValid){
              errors['sms'] = 'phone number is not valid!';
          } 
          this.setState({phoneNumber, isValid, errors});
    }

    onMailChange = (event) => {
        let { errors } = this.state;  
        const mailAdress = event.target.value;
        const isValid = mailAdress !== "";
        if (!isValid){
            errors['email'] = 'email adress is not valid!';
        } 
        this.setState({mailAdress, isValid, errors});
  }

    handleSend(){
        const { benefit } = this.props;
        this.props.actions.sendSMS("972" + this.state.phoneNumber.slice(1,), benefit.codeNumber, benefit._id);
        
        this.handleClose();
        this.setState({snackbarOpen: true});
    }

    handleEmailSend(){
        const { benefit } = this.props;
        this.props.actions.sendEmail(this.state.mailAdress, benefit._id, benefit.couponName);        
        this.handleClose();
        this.setState({snackbarOpen: true});
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({benefit: getBenefitById(this.props.benefits)})
    // }

    render() {
        const {classes, benefit} = this.props;
        if (benefit === null){
            return (          
            <div className={classes.progressContainer}> 
            <CircularProgress className={classes.progress} color="primary" size={80} />
            </div> );
        }
        return (
            <div className={classes.root}>
            <Snackbar
            className={classes.snackbar}
            open={this.state.snackbarOpen}
            autoHideDuration={600}
            onClose={this.handleSnackbarClose}
            contentstyle={{
                'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">ההטבה בדרך אליך!</span>} />
            <GetBenefitDialog 
            handleEmailSend={this.handleEmailSend}
            mailAdress={this.state.mailAdress}
            phoneNumber={this.state.phoneNumber}
            onChange={this.onChange}
            handleClickOpen={this.handleClickOpen} 
            handleClose={this.handleClose} 
            open={this.state.open} 
            onMailChange={this.onMailChange}
            handleSend={this.handleSend}
            errors={this.state.errors}
            isValid={this.state.isValid} />
            <div className={classes.benefitImage}>
            <img className={classes.image} src={benefitImage} />
            <div className={classes.shareButtons}>
            <a className={classes.anchor} href={"http://www.facebook.com/sharer/sharer.php?u=http://www.Dollarding.co.il"}>
            <Button className={classes.button} variant="raised" color="primary">
            שתפו דרך פייסבוק
        <img src={FacebookLogo} className={classes.leftIcon}/>
        </Button>
        </a>
        <a className={classes.anchor} href={"whatsapp://send?text=http://newdeals.co.il/benefit/" + benefit._id}>
        <Button className={classes.button} variant="raised" color="primary">
        שתפו דרך ווצאפ
        <img src={WhatsAppLogo} className={classes.leftIcon}/>
        </Button>
        </a>
            </div>
            </div>
            <BenefitPageDescription onBenefitClick={this.handleClickOpen} buttonTitle="לחצו לקבלת הטבה" benefit={benefit}/>            
          </div>
        );
    }
}

BenefitPage.propTypes = {
    benefit: PropTypes.object,
    classes: PropTypes.object.isRequired,
    smsSent: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
        sendSMS: PropTypes.func,
        sendEmail: PropTypes.func
    })
};

function getBenefitById(benefits, id){
    const benefit = benefits.filter(benefit => benefit._id == id);
    if (benefit.length) return benefit[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const benefitId = ownProps.match.params.id; // from the path '/benefit/:id'
    let benefit = {};
    if (benefitId){
        benefit = getBenefitById(state.benefits, benefitId);
        }
    return {
        benefit,
        smsSent: state.smsSent
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(benefitActions, dispatch)
    };
}
export default compose(
    withStyles(styles, { name: 'BenfeitPage' }),
    connect(mapStateToProps, mapDispatchToProps))(BenefitPage);