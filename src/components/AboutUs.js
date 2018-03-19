import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AppStoreIcon from '../svg/app-store.svg';
import PlayStoreIcon from '../svg/play-store.svg';

const styles = theme => ({
    aboutUsContainer:{
        marginTop: "3%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '30%',
        justifySelf: 'flex-end',
        height: '50%',
        alignSelf: 'center'
      },
      textStyle: {
        direction: 'rtl'
      },
      link:{
        direction: 'rtl',
        color: 'white'
      },
      button: {
        height: 48,
        width: 220,
        backgroundColor: '#199147'
      },
      leftIcon: {
        marginRight: theme.spacing.unit*2,
        width: 22,
        height: 30,
        fill: 'white',
        color: 'white'
      }
});


const AboutUs = ({classes}) => {
    
    return(
        <div className={classes.aboutUsContainer}>
        <h1 className={classes.textStyle}>חברה</h1>
        <a className={classes.link} href="http:\\google.com">אודות</a>
        <a className={classes.link} href="">תקנון</a>
        <Button className={classes.button} variant="raised" color="primary">
        <img src={PlayStoreIcon} className={classes.leftIcon}/>
        <img src={AppStoreIcon} className={classes.leftIcon}/>
        הורדת אפליקציה
        </Button>
      </div>
    );
};

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);