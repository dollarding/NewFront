import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import Facebook from "../svg/facebook.svg";
import Twitter from "../svg/twitter.svg";
import Instagram from "../svg/instagram.svg";


const styles = {
    followUsContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '20%',
        justifySelf: 'flex-end',
        height: '35%',
        alignSelf: 'center',
        //minWidth: 250
      },
      textStyle: {
        direction: 'rtl',
        marginRight: '4%',
        fontSize: '2.5vw'
      },
      buttons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      button: {
        backgroundColor:"#3e3e3e",
        color: 'white',
        '&:hover': {
            background: "transparent"
          },
        padding: '9px 8px',
        minWidth: 42
      },
      img: {
        marginTop: -15
      }
};


const FollowUs = ({classes}) => {
    const imgs = [Instagram, Twitter, Facebook];

    return(
    <div className={classes.followUsContainer}>
    <h1 className={classes.textStyle}>עקבו אחרינו</h1>
    <div className={classes.buttons}>
        {imgs.map(mySvg =>
        (<Button className={classes.button} key={mySvg} variant="fab" size="small" >
        <img className={classes.img} src={mySvg}/>
        </Button>)
        )}

    </div>
  </div>
    );
};

FollowUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowUs);
