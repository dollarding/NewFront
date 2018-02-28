import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Email from 'material-ui-icons/Email';
import IconButton from 'material-ui/IconButton';

class EmailButton extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <IconButton tooltip="Send Mail">
                <Email/>
            </IconButton>
        );
    }
}

export default EmailButton;