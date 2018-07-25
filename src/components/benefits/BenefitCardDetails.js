import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LocationSVG from '../../svg/location.svg';
import BagSVG from '../../svg/supermarket-bag.svg';
import EyeSVG from '../../svg/eye.svg';


const styles = {
      root: {
      display: 'flex',
      alignItems:'center',
      flexDirection: 'row',
      width: '100%',
      height:50,
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
  },
  image: {
    width: '100%',
    height: 90
  }
};

const BenefitCardDetails = ({classes, data}) => (
    <div className={classes.root}>
    <p>
        <font color="black" size="1">{data.views}</font>
    </p>
    <img src={EyeSVG} />
    <p>
        <font color="black" size="1">{data.clicks}</font>
    </p>
    <img src={BagSVG}/>
    <p>
        <font color="black" size="1">{data.businessName}</font>
    </p>
    <img src={LocationSVG}/>
    </div>
    );

BenefitCardDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(BenefitCardDetails);
