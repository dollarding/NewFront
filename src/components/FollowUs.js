import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';


const styles = {
    followUsContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '15%',
        justifySelf: 'flex-end',
        height: '45%',
        alignSelf: 'center',
        //minWidth: 250
      },
      textStyle: {
        direction: 'rtl',
        marginRight: '4%'
      },
      buttons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      button: {
        //minWidth: 40,
        height: 51,
        width: 51,
        backgroundColor:"#3e3e3e",
        color: 'white',
        '&:hover': {
            background: "#727272"
          }
      },
      img: {
        marginTop: -15
      }
};


const FollowUs = ({classes}) => {
    const imgs = ["../../img/instagram.png", "../../img/twitter.png", "../../img/facebook.png"];
    
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