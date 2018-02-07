import React from 'react';
import BenefitCard from './BenefitCard';
import {GridList, IconButton, GridTile} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: 'LightSteelBlue'
    },
    gridList: {
      maxwidth: 1500,
      height: 600,
      overflowY: 'auto',
    },
};

const Benefits = ({benefits}) =>{
    return (
    <div style={styles.root}>
        <GridList
        cols = {4}
        cellHeight={240}
        padding={6}
        style={styles.gridList}
        >
            {benefits.map(benefit =>(
                <GridTile
                key={benefit._id}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                    <BenefitCard key={benefit._id} benefit={benefit}/>
                </GridTile>
            ))}
        </GridList>
    </div>
    );
};


// Benefits.propTypes = {
//      benefits: PropTypes.array.isRequired
// };

export default Benefits;