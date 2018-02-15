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
import { FOOD_CATEGORY_VALUE } from '../../constants/categoriesTypes';


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
      value: 0,
    };
  }

  handleChange = () => {
    this.props.history.pushState({},"","category/" + FOOD_CATEGORY_VALUE);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
          >
          <Tab label="Food" icon={<PhoneIcon />}/>
            <Tab label="Sport" icon={<FavoriteIcon />} />
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
        {/* {value === 0}
        {value === 1 && <Route path='/' component={ProductPage} />}
        {value === 2 && <Link to={"/category/" + {value}}/>}
        {value === 3 && <Link to={"/category/" + {value}}/>}
        {value === 4 && <Link to={"/category/" + {value}}/>}
        {value === 5 && <Link to={"/category/" + {value}}/>}
        {value === 6 && <Link to={"/category/" + {value}}/>}
        {value === 7 && <Link to={"/category/" + {value}}/>}
        {value === 8 && <Link to={"/category/" + {value}}/>}
        {value === 9 && <Link to={"/category/" + {value}}/>}
        {value === 10 && <Link to={"/category/" + {value}}/>}
        {value === 11 && <Link to={"/category/" + {value}}/>} */}
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