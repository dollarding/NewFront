import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';


class DollardingIconButton extends Component {

    render() {
        const { onClick, label, className } = this.props;
        return (
            <Button className={className} onClick={onClick} color="secondary" variant="raised" size="medium" tooltip="Send">
                {this.props.children}
                {label}
            </Button>
        );
    }
}

DollardingIconButton.propTypes ={
    children: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default DollardingIconButton;