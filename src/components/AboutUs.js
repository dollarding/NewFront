import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import PlayStore from '../svg/play-store.svg';
import AppStore from '../svg/app-store.svg';

const styles = {
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
      button:{
        width: '65%'
  }
};


const AboutUs = ({classes}) => {
    
    return(
        <div className={classes.aboutUsContainer}>
        <h1 className={classes.textStyle}>חברה</h1>
        <a className={classes.link} href="http:\\google.com">אודות</a>
        <a className={classes.link} href="">תקנון</a>
        <Button size="small" >
        הורדת אפליקציה
        {/* <img  className={classes.button} src="../../img/store.png"/> */}

        </Button>
      </div>
    );
};

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);