import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withStyles } from 'material-ui/styles';
//import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import benefitImage from '../../img/benefit.jpg';
import compose from 'recompose/compose';

import BenefitPageDescription from '../containers/BenefitPageDescription';
import * as benefitActions from '../../actions/benefitsActions';
import FacebookLogo from '../../svg/facebook-logo.svg';
import WhatsAppLogo from '../../svg/whatsapp-logo.svg';

const styles = theme => ({
    root: {
        display: 'flex',
        marginTop: '8%',
        alignItems:'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '80%',
        minHeight: 470,
        justifyContent: 'space-around'
    },
    image: {
        width: '100%'
    },
    benefitImage:{
        display: 'flex',
        alignItems:'center',
        flexDirection: 'column',
        width: '40%',
        justifyContent: 'space-between'
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
        justifyContent: 'space-between'
    },
});

class BenefitPage extends React.Component { 
    // componentWillReceiveProps(nextProps){
    //     this.setState({benefit: getBenefitById(this.props.benefits)})
    // }

    render() {
        const {classes, benefit} = this.props;
        return (
            <div className={classes.root}>
            <BenefitPageDescription benefit={benefit}/>
            <div className={classes.benefitImage}>
            <img className={classes.image} src={benefitImage} />
            <div className={classes.shareButtons}>
            <Button className={classes.button} variant="raised" color="primary">
            שתפו דרך פייסבוק
        <img src={FacebookLogo} className={classes.leftIcon}/>
        </Button>
        <Button className={classes.button} variant="raised" color="primary">
        שתפו דרך ווצאפ
        <img src={WhatsAppLogo} className={classes.leftIcon}/>
        </Button>
            </div>
            </div>
          </div>
        );
    }
}

BenefitPage.propTypes = {
    benefit: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
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
        benefit
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