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
        alignSelf: 'center'
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
        height: 48,
        width: 48
      },
};


const FollowUs = ({classes}) => {
    const imgs = ["../../img/instagram.png","../../img/twitter.png","../../img/facebook.png"];
    
    return(
    <div className={classes.followUsContainer}>
    <h1 className={classes.textStyle}>עקבו אחרינו</h1>
    <div className={classes.buttons}>
        {imgs.map(img => 
        (<Button key={img} className={classes.button} size="small" >
        <img className={classes.button} src={img}/>
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