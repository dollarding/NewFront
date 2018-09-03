import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import  CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';

import benefitImage from '../../img/benefit.jpg';
import { GET_ALL_BENEFITS } from '../../constants/apiUrls';
import BenefitPageDescription from '../containers/BenefitPageDescription';
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
    progress:{
        margin: theme.spacing.unit *2
    }
});

class FinalBenefitPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: true
        };

        this.activateBenefit = this.activateBenefit.bind(this);
    }

    componentWillMount(){
        this.loadFinalBenefit(this.props.match.params.id);
    }

    loadFinalBenefit = (benefitId) => {
        return fetch(GET_ALL_BENEFITS + '/' + benefitId)
        .then(resp => resp.json()).then(benefit => {
            this.setState({benefit: benefit.coupon, fetching:false});
        }).catch((error) => {
          throw (error);
        });
    }

    activateBenefit(event) {
        event.preventDefault();
        const { benefit } = this.state;
        if (benefit.haveCode){
            console.log(benefit.codeNumber);
            //dialog enter code
        }
        this.backToHomePage();
    }

    backToHomePage = () => {
        this.props.history.push('/');
    }

    render() {
        const {classes} = this.props;
        const {benefit} = this.state;

        if (this.state.fetching)
        {
            return (
            <div className={classes.root}>
            <CircularProgress className={classes.progress} color="primary" size={80} />
            </div>
            );
        }
        return (
            <div className={classes.root}>
            <div className={classes.benefitImage}>
            <img className={classes.image} src={benefitImage} />
            <div className={classes.shareButtons}>
            <Button className={classes.button} variant="raised" color="primary" component={Link} to={"https://www.facebook.com/sharer/sharer.php?u=http://www.Dollarding.co.il/benefit/" + benefit._id}>
            שתפו דרך פייסבוק
        <img src={FacebookLogo} className={classes.leftIcon}/>
        </Button>
        <Button className={classes.button} variant="raised" color="primary"  component={Link} to={"whatsapp://send?text=http://newdeals.co.il/benefit/" + benefit._id}>
        שתפו דרך ווצאפ
        <img src={WhatsAppLogo} className={classes.leftIcon} />
        </Button>
            </div>
            </div>
            <BenefitPageDescription onBenefitClick={this.activateBenefit} buttonTitle="לחצו למימוש הטבה" benefit={benefit} />
          </div>
        );
    }
}

FinalBenefitPage.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }),
    history: PropTypes.shape({
        push: PropTypes.func
    }),
};

export default compose (
    withRouter,
    withStyles(styles, { name: 'FinalBenefitPage' }),
)(FinalBenefitPage);
