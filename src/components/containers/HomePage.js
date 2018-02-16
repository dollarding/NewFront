import React from "react";
import PropTypes from 'prop-types';
import Benefits from '../benefits/Benefits';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as benefitsActions from '../../actions/benefitsActions';

class HomePage extends React.Component {
  
      constructor(props, context) {
          super(props, context);
      }

      render() {
        const {benefits} = this.props;
        return (
          <div>
          <Benefits benefits={benefits}/>
          </div>
        );
    }
  }

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  benefits: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    benefits: state.benefits
  };
}

function mapDispatchToProps(dispatch){
  return {
      actions : bindActionCreators(benefitsActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);