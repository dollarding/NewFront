import React from "react";
import PropTypes from 'prop-types';
import Benefits from '../benefits/Benefits';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as benefitsActions from '../../actions/benefitsActions';
import {CircularProgress} from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';

const styles = theme => ({
  root:{
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

class HomePage extends React.Component {
  
      constructor(props, context) {
          super(props, context);
      }

      render() {
        const {benefits, classes} = this.props;
        if (benefits.length === 0){
          return (
          <div className={classes.root}> 
          <CircularProgress className={classes.progress} color="primary" size={80} />
          </div> );
        }
        return (
          <div>
          <Benefits benefits={benefits}/>
          </div>
        );
    }
  }

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  benefits: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
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


export default compose(
  withStyles(styles, { name: 'HomePage' }),
  connect(mapStateToProps, mapDispatchToProps))(HomePage);