import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BenefitCard from '../benefits/BenefitCard';
import {GridList , GridTile} from 'material-ui';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'LightSteelBlue'
    },
    gridList: {
        maxWidth: 1500,
        height: 600,
        overflowY: 'auto'
    }
};


class CategoryPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoryList: []
        };
    }
    componentWillMount () {
        console.log("Category Page will mount");
        event.preventDefault();
        const category = this.props.match.params.id;
        const {benefits} = this.props;
        const categoryList = benefits.filter( (item) => item.categories.some((x) => x === category));
        return this.setState({categoryList: categoryList});
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList
                cols = {4}
                cellHeight={240}
                padding={6}
                style={styles.gridList}
                >
                    {this.state.categoryList.map(benefit =>(
                        <GridTile
                        key={benefit._id}
                        >
                            <BenefitCard key={benefit._id} benefit={benefit}/>
                        </GridTile>
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
        benefits: state.benefits,
        routing: state.routing
    };
}

export default connect(mapStateToProps,)(CategoryPage);
