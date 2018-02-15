import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
//const titleStyle = {direction: 'rtl', fontStyle: 'italic', fontSize: '20px', textOverflow: 'ellipsis', numberOfLines: 1};

// const styles = theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//   });
  
const BenefitCard = (props) => (
        <Link to={"/benefit/"+ props.benefit._id} style={{textDecoration: 'none'}}>
        <GridListTileBar
              title={props.benefit.couponName}
              subtitle={<span>{props.benefit.businessName}<br/></span>}
              actionIcon={
                <IconButton>
                  <InfoIcon />
                </IconButton>
              }
            />
        </Link>
    );

BenefitCard.propTypes = {
    benefit: PropTypes.object
};

export default BenefitCard;