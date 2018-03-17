import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import benefitImage from '../../img/benefit.jpg';
import compose from 'recompose/compose';

import * as benefitActions from '../../actions/benefitsActions';

const styles = {
    root: {
        display: 'flex',
        alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '100%',
        minHeight: 550,
        justifyContent: 'space-around'
    },
    image: {
        height: 380,
        width: 460
    }
};

class BenefitPage extends React.Component { 
    // componentWillReceiveProps(nextProps){
    //     this.setState({benefit: getBenefitById(this.props.benefits)})
    // }

    render() {
        const {classes, benefit} = this.props;
        return (
            <div className={classes.root}>
            <h1>{benefit.couponName}</h1>
            <img className={classes.image} src={benefitImage} />
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