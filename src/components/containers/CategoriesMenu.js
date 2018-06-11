import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import * as categories from '../../constants/categoriesTypes';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%',
    backgroundImage: 'url("../../img/CategoriesBackground.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'round',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: '35%'
  },
  buttons:{
    width: '78%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button :{
    height: 80
  },
  fabButton:{
    //minWidth: 40,
    //height: 51,
    //width: 51,
    backgroundColor:"#3e3e3e",
    color: 'white',
    '&:hover': {
        background: "#727272"
      }
  }
};

class CategoriesMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* {"/category/" + categories.FASHION_CATEGORY_VALUE} */}
        {/* {"/category/" + categories.GENERAL_CATEGORY_VALUE} */}
        {/* {"/category/" + categories.GIFTS_CATEGORY_VALUE} */}
        <div className={classes.buttons}>
        <Button size="small" component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.FOOD_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/מסעדות.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.OPTIC_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/ספא.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.CULTURE_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/פנאי.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.TOURISM_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/תיירות.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.PROFESSIONALS_CATEGORY_VALUE]}>
          <img className={classes.button}src="../../img/categories/הופעות.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.OFFICE_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/חיות.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.ElECTRONICS_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/חשמל.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.KIDS_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/ילדים.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.SPORT_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/כושר.png"/>
          </Button>
          <Button component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.FOR_HOME_CATEGORY_VALUE]}>
          <img className={classes.button} src="../../img/categories/לבית.png"/>
          </Button>
          </div>
      </div>
    );
  }
}

CategoriesMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
      benefits: state.benefits,
      routing: state.routing
  };
}

export default compose(
  withStyles(styles, { name: 'CategoriesMenu' }),
  connect(mapStateToProps, null)
)(CategoriesMenu);