import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import BenefitTabs from './BenefitSelectionTabs';
//import { Link } from 'react-router-dom';

const styles = {
    root: {
        display: 'flex',
        alignItems:'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '100%',
        width: '45%',
        justifyContent: 'space-around',
        direction: 'rtl'
    },
    cellPrice:{
        fontSize: '-webkit-xxx-large'
    },
    title:{
        fontSize: '2vw'
    },
    smallLetters:{
        fontSize: '1vw'
    },
    buttonTitle:{
        fontSize: '1vw',
        color: 'white'
    },
    businessDescription: {
        display: 'flex',
        flexDirection: 'column',
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
        color: 'white',
        '&:hover': {
            background: '#1bc15b'
          }
      }
};

const BenefitPageDescription = ({classes, benefit, buttonTitle, onBenefitClick}) =>{
    return (
    <div className={classes.root}>
        <h1>{benefit.couponName}</h1>
        <Typography component="p" className={classes.title}>
            {benefit.couponDescription}
          </Typography>
          <br/>
          <Typography component="p" className={classes.title}>
            {benefit.MarketingStatement}
          </Typography>
          <br/>
        <div className={classes.businessDescription}>
        <div className={classes.cell}>
        <b><font className={classes.cellPrice} color="#199147" size="3">&#8362;{benefit.cellPrice}</font></b>
        <font color="grey" size="2"><del>&#8362;{benefit.tariff}</del></font>
        <Button onClick={onBenefitClick} color="primary" className={classes.button}>
        <Typography component="p" className={classes.buttonTitle}>
            {buttonTitle}
          </Typography>
        </Button>
        </div>
        <BenefitTabs benefit={benefit}/>
        </div>
        <Typography component="p" className={classes.smallLetters}>
            {benefit.smallLetters}
          </Typography>
    </div>
    );
};


BenefitPageDescription.propTypes = {
    classes: PropTypes.object.isRequired,
    benefit: PropTypes.object.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onBenefitClick: PropTypes.func.isRequired
};

export default withStyles(styles)(BenefitPageDescription);