import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import benefitImage from '../../img/benefit.jpg';
import BenefitCardDetails from './BenefitCardDetails';

const styles = {
      root: {
      display: 'flex',
      alignItems:'flex-end',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: '99%',
      justifyContent: 'space-around'
  },
  image: {
    width: '100%',
    height: 90
  },
  title:{
    direction: 'rtl',
    fontSize: '1vw'
  },
  cellPrice: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'initial',
    justifyContent: 'center',

  },
  cardAction: {
    height: '28%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  cardContent:{
    height: '12%',
    width: '92%',
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding:4
  },
  button:{
    backgroundColor:"#199147",
    width: '80%',
    color: 'white',
        '&:hover': {
            background: '#1bc15b'
          }
  }
};
  
const BenefitCard = ({classes, benefit}) => (
        <Link to={"/benefit/"+ benefit._id} style={{textDecoration: 'none'}}>
        <Card className={classes.root}>
        <CardMedia
          title={benefit.couponName}
        >
          <img className={classes.image} src={benefitImage}/>
        </CardMedia>
        <CardContent className={classes.cardContent}>
        <div className={classes.cellPrice}>
            <font color="#199147" size="2">&#8362;מ-{benefit.cellPrice}</font>
        <font color="grey" size="1"><del>&#8362;{benefit.tariff}</del></font>
        </div>       
          <Typography component="p" className={classes.title}>
            {benefit.couponName}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button size="small" color="secondary" className={classes.button}>
          לחצו להטבה
          </Button>
          <BenefitCardDetails data={benefit}/>
        </CardActions>
      </Card>
        </Link>
    );

BenefitCard.propTypes = {
  classes: PropTypes.object.isRequired,
    benefit: PropTypes.object
};

export default withStyles(styles)(BenefitCard);