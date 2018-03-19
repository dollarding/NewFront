import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import BenefitTabs from './BenefitSelectionTabs';
//import { Link } from 'react-router-dom';

const styles = {
    root: {
        display: 'flex',
        alignItems:'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '100%',
        width: '40%',
        justifyContent: 'space-around',
        direction: 'rtl'
    },
    title:{
        fontSize: '-webkit-xxx-large'
    },
    cell: {
        display: 'flex',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        direction: 'rtl',
        width: '100%'
    },
    button:{
        backgroundColor:"#199147",
        width: '50%',
        color: 'white'
      }
};

const BenefitPageDescription = ({classes, benefit}) =>{
    return (
    <div className={classes.root}>
        <h1>{benefit.couponName}</h1>
        <p>{benefit.couponDescription}</p>
        <p>{benefit.MarketingStatement}</p>
        <div className={classes.cell}>
        <b><font className={classes.title} color="#199147" size="3">&#8362;{benefit.cellPrice}</font></b>
        <font color="grey" size="2"><del>&#8362;{benefit.tariff}</del></font>
        <Button color="primary" className={classes.button}>
          לחצו למימוש להטבה
          </Button>
        </div>
        <BenefitTabs/>
        <p><font size="1">{benefit.smallLetters}</font></p>
    </div>
    );
};


BenefitPageDescription.propTypes = {
    classes: PropTypes.array.isRequired,
    benefit: PropTypes.array.isRequired
};

export default withStyles(styles)(BenefitPageDescription);