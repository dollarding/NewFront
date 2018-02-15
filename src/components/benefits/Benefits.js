import React from 'react';
import PropTypes from 'prop-types';
import BenefitCard from './BenefitCard';
//import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile} from 'material-ui/GridList';
import benefitImage from '../../img/benefit.jpg';
//import IconButton from 'material-ui/IconButton';
//import StarBorderIcon from 'material-ui-icons/StarBorder';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'LightSteelBlue',
        hight: '80%',
        padding: 4
    },
    gridList: {
        maxWidth: 1500,
        height: 600,
    },
    gridListTile :{
        hover: {
            margin: '12px 12px 12px 12px'
        }
    } 
};


const Benefits = (props) =>{
    return (
    <div style={styles.root}>
        <GridList
        cols = {6}
        cellHeight={200}
        padding={6}
        style={styles.gridList}
        >
            {props.benefits.map(benefit =>(
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
};


Benefits.propTypes = {
     benefits: PropTypes.array.isRequired
};

export default Benefits;