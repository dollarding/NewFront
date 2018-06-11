import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BenefitCard from '../benefits/BenefitCard';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import compose from 'recompose/compose';
import * as categories from '../../constants/categoriesTypes';


//TODO: add componentWillReceiveProps
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: '#e0e0e0',
        padding: 4,
        minHeight: 470
    },
    gridList: {
        maxWidth: '100%',
        justifyContent: 'flex-end',
        width: '100%',
        overflowY: 'inherit',
        height: '100%',
        padding: 4
    },
    gridListTile :{
        padding: '4px !important;',
        height: '240px !important;',
        width: '16.6667%  !important;',
        justifySelf:"center !important",
        '&:hover': {
            height: '235px !important;',
            width: '16.3667%  !important;',
            borderColor:'#1bc15b'
          },        
    } 
};


class CategoryPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoryList: [],
            categoryTitle: ""
        };
    }


    componentWillMount () {
        return this.filterBenefitsByCategory(this.props);
    }


    componentWillReceiveProps(nextProps){
        return this.filterBenefitsByCategory(nextProps);
    }

    filterBenefitsByCategory = (currentProps) => {
        const category = this.getKeyByValue(categories.CATEGORIES_DICT, currentProps.match.params.id);
        const categoryList = this.props.benefits.filter( (item) =>
        item.categories.some((x) => x === category));
        return this.setState({categoryList: categoryList, categoryTitle: currentProps.match.params.id});  
    }

    getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    }

    render() {
        const {classes} = this.props;
        return (
        <div className={classes.root}>
            <h1> {this.state.categoryTitle}</h1>
            <GridList
            cols = {6}
            cellHeight={200}
            padding={6}
            className={classes.gridList}
            >
                {this.state.categoryList.map(benefit =>(
                    <GridListTile className={classes.gridListTile}
                    key={benefit._id}
                    >
                        <BenefitCard key={benefit._id} benefit={benefit}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
        );
    }
}

CategoryPage.propTypes = {
    benefits: PropTypes.array.isRequired,
    match: PropTypes.shape( {
      params: PropTypes.shape( {
        id: PropTypes.string
      })
    }),
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        benefits: state.benefits
    };
}

export default compose(
    withStyles(styles, { name: 'CategoryPage' }),
connect(mapStateToProps,))(CategoryPage);
