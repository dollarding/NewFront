import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BenefitCard from '../benefits/BenefitCard';
import GridList, { GridListTile } from 'material-ui/GridList';
import benefitImage from '../../img/benefit.jpg';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'LightSteelBlue',
        height: '80%',
        padding: 4
    },
    gridList: {
        maxWidth: 1500,
        height: 450,
    },
    gridListTile :{
        hover: {
            margin: '12px 12px 12px 12px'
        }
    } 
};


class CategoryPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoryList: []
        };
    }


    componentWillMount () {
        return this.filterBenefitsByCategory(this.props);
    }


    componentWillReceiveProps(nextProps){
        return this.filterBenefitsByCategory(nextProps);
    }

    filterBenefitsByCategory = (currentProps) => {
        const category = currentProps.match.params.id;
        const categoryList = this.props.benefits.filter( (item) =>
        item.categories.some((x) => x === category));
        return this.setState({categoryList: categoryList});  
    }

    render() {
        return (
        <div style={styles.root}>
            <GridList
            cols = {6}
            cellHeight={200}
            padding={6}
            style={styles.gridList}
            >
                {this.state.categoryList.map(benefit =>(
                    <GridListTile style={styles.gridListTile}
                    key={benefit._id}
                    >
                        <img src={benefitImage} alt={benefit.CouponName}/>
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
    })
};

function mapStateToProps(state) {
    return {
        benefits: state.benefits
    };
}

export default connect(mapStateToProps,)(CategoryPage);
