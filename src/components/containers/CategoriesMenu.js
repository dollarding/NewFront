import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import * as categories from '../../constants/categoriesTypes';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


import Restaurant from "../../svg/restaurants.svg";
import Spa from "../../svg/spa.svg";
import Pnay from "../../svg/fashion.svg";
import Tayarut from "../../svg/tourism.svg";
import Shows from "../../svg/shows.svg";
import Animals from "../../svg/animals.svg";
import Electronic from "../../svg/electronic.svg";
import Kids from "../../svg/kids.svg";
import Sport from "../../svg/sport.svg";
import ForHome from "../../svg/home.svg";

const styles = {
  root: {
    overflowX: 'auto',
    overflowY: 'hidden',
    width: '100%',
    backgroundColor: 'rgba(50, 52, 50, 0.6392156862745098)',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: '35%'
  },
  buttons:{
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
      alignItems:'flex-start',
      textAlign:'center'
  },
  title: {
    fontSize: '.8em',
     color: 'white',
      lineHeight:'1'
  },
  category: {
    display: 'flex',
    flexDirection: 'column'
  },
  image :{
    height: 'auto',
    width: '100%'
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
        <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.FOOD_CATEGORY_VALUE]}>
          <img className={classes.image} src={Restaurant}/>
          <Typography component="p" className={classes.title}>
            מסעדות
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.OPTIC_CATEGORY_VALUE]}>
          <img className={classes.image} src={Spa}/>
          <Typography component="p" className={classes.title}>
            מסעדות
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.CULTURE_CATEGORY_VALUE]}>
          <img className={classes.image} src={Pnay}/>
          <Typography component="p" className={classes.title}>
            פנאי ובילוי
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.TOURISM_CATEGORY_VALUE]}>
          <img className={classes.image} src={Tayarut}/>
          <Typography component="p" className={classes.title}>
            תיירות
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.PROFESSIONALS_CATEGORY_VALUE]}>
          <img className={classes.image}src={Shows}/>
          <Typography component="p" className={classes.title}>
            הצגות והופעות
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.OFFICE_CATEGORY_VALUE]}>
          <img className={classes.image} src={Animals}/>
          <Typography component="p" className={classes.title}>
            חיות
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.ElECTRONICS_CATEGORY_VALUE]}>
          <img className={classes.image} src={Electronic}/>
          <Typography component="p" className={classes.title}>
            חשמל 
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.KIDS_CATEGORY_VALUE]}>
          <img className={classes.image} src={Kids}/>
          <Typography component="p" className={classes.title}>
            ילדים
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.SPORT_CATEGORY_VALUE]}>
          <img className={classes.image} src={Sport}/>
          <Typography component="p" className={classes.title}>
            ספורט
          </Typography>
          </Button>
          <Button  classes={{label: classes.category}} component={Link} to={"/category/" + categories.CATEGORIES_DICT[categories.FOR_HOME_CATEGORY_VALUE]}>
          <img className={classes.image} src={ForHome}/>
          <Typography component="p" className={classes.title}>
            לבית
          </Typography>
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