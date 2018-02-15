import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as benefitActions from '../../actions/benefitsActions';


class DetailedBenefit extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            benefit: Object.assign({}, this.props.benefit),
        };
    }

    render() {
        return (
            <div>
                <h1>Im Detailed Benefit</h1>
                <h2>{this.state.benefit.couponName}</h2>
            </div>
        );
    }
}

DetailedBenefit.propTypes = {
    benefit: PropTypes.object.isRequired
};

function getBenefitById(benefits, id){
    const benefit = benefits.filter(benefit => benefit._id == id);
    if (benefit.length) return benefit[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const benefitId = ownProps.match.params.id; // from the path '/benefit/:id'
    let benefit = {id:"", watchHref:"", title:"", authorId:"", length:"", category:""};
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailedBenefit);