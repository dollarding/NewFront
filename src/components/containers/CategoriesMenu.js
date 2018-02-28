import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import * as categories from '../../constants/categoriesTypes';

import HomeIcon from 'material-ui-icons/Home';
import FaceIcon from 'material-ui-icons/Face';
import CardGiftcardIcon from 'material-ui-icons/CardGiftcard';
import DirectionsRunIcon from 'material-ui-icons/DirectionsRun';
import ContactMailIcon from 'material-ui-icons/ContactMail';
import DevicesIcon from 'material-ui-icons/Devices';
import RestaurantIcon from 'material-ui-icons/Restaurant';
import PublicIcon from 'material-ui-icons/Public';
import PersonOutlineIcon from 'material-ui-icons/PersonOutline';
import FlightIcon from 'material-ui-icons/Flight';
import AppsIcon from 'material-ui-icons/Apps';
import RemoveRedEyeIcon from 'material-ui-icons/RemoveRedEye';
import StyleIcon from 'material-ui-icons/Style';
import PeopleIcon from 'material-ui-icons/People';


const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

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
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Everything" icon={<PublicIcon />} to={"/"} component={Link}/>
            <Tab label="Culture" icon={<PeopleIcon />} to={"/category/" + categories.CULTURE_CATEGORY_VALUE} component={Link}/>
            <Tab label="Electronics" icon={<DevicesIcon />} to={"/category/" + categories.ElECTRONICS_CATEGORY_VALUE} component={Link}/>
            <Tab label="Fashion" icon={<StyleIcon />} to={"/category/" + categories.FASHION_CATEGORY_VALUE} component={Link}/>
            <Tab label="Food" icon={<RestaurantIcon />} to={"/category/" + categories.FOOD_CATEGORY_VALUE} component={Link}/>
            <Tab label="For Home" icon={<HomeIcon />} to={"/category/" + categories.FOR_HOME_CATEGORY_VALUE} component={Link}/>
            <Tab label="General" icon={<AppsIcon />} to={"/category/" + categories.GENERAL_CATEGORY_VALUE} component={Link}/>
            <Tab label="Gifts" icon={<CardGiftcardIcon />} to={"/category/" + categories.GIFTS_CATEGORY_VALUE} component={Link}/>
            <Tab label="Kids" icon={<FaceIcon />} to={"/category/" + categories.KIDS_CATEGORY_VALUE} component={Link}/>            
            <Tab label="Office" icon={<ContactMailIcon />} to={"/category/" + categories.OFFICE_CATEGORY_VALUE} component={Link}/>
            <Tab label="Optic" icon={<RemoveRedEyeIcon />} to={"/category/" + categories.OPTIC_CATEGORY_VALUE} component={Link}/>            
            <Tab label="Professionals" icon={<PersonOutlineIcon />} to={"/category/" + categories.PROFESSIONALS_CATEGORY_VALUE} component={Link}/>
            <Tab label="Sport" icon={<DirectionsRunIcon />} to={"/category/" + categories.SPORT_CATEGORY_VALUE} component={Link}/>
            <Tab label="Tourism" icon={<FlightIcon />} to={"/category/" + categories.TOURISM_CATEGORY_VALUE} component={Link}/>
          </Tabs>
        </AppBar>
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