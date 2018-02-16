import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';
import { FOOD_CATEGORY_VALUE, OPTIC_CATEGORY_VALUE } from '../../constants/categoriesTypes';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
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
            <Tab label="Everything" icon={<FavoriteIcon />} to={"/"} component={Link}/>
            <Tab label="Food" icon={<PhoneIcon />} to={"/category/" + FOOD_CATEGORY_VALUE} component={Link}/>
            <Tab label="Optic" icon={<FavoriteIcon />} to={"/category/" + OPTIC_CATEGORY_VALUE} component={Link}/>
            <Tab label="Electronics" icon={<PersonPinIcon />} />
            <Tab label="For Home" icon={<HelpIcon />} />
            <Tab label="Item Five" icon={<ShoppingBasket />} />
            <Tab label="Item Six" icon={<ThumbDown />} />
            <Tab label="Item Seven" icon={<ThumbUp />} />
            <Tab label="Item Eight" icon={<ShoppingBasket />} />
            <Tab label="Item Nine" icon={<ShoppingBasket />} />
            <Tab label="Item Ten" icon={<ShoppingBasket />} />
            <Tab label="Item Eleven" icon={<ShoppingBasket />} />
            <Tab label="Item Twelve" icon={<ShoppingBasket />} />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

CategoriesMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object
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