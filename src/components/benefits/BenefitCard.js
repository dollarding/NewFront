import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const BenefitCard = ({benefit}) => (
    <div>
    <Card>
        <Link to={"/benefit/"+ benefit._id} style={{textDecoration: 'none'}}>
        <CardTitle titleStyle={{textOverflow: 'ellipsis', numberOfLines: 1}} title={benefit.couponName} subtitle={benefit.businessName} />
        <CardText>
            cellPrice - {benefit.cellPrice} <br/>
             taarif - {benefit.tariff}  <br/>
             views - {benefit.views}  <br/>
             clicks - {benefit.clicks}  <br/>
        </CardText>
        </Link>
        <CardActions>
            <FlatButton backgroundColor="DodgerBlue  " hoverColor="DarkTurquoise " fullWidth={true} labelStyle={{color:'white'}} label="לחצו להטבה" />
        </CardActions>
    </Card>
    </div>
    );

// BenefitCard.propTypes = {
//     benefit: PropTypes.object
// };

export default BenefitCard;