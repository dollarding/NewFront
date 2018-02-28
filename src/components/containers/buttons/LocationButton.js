import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationOn from 'material-ui-icons/LocationOn';
import IconButton from 'material-ui/IconButton';


class LocationButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            benefits: this.props.benefits
        };
    }
    
    filterByLocation = (event) => {

    };

    render() {
        return (
            <IconButton
            iconclassname="material-icons"
            tooltip="סנן לפי מיקומך"
            onClick={this.filterByLocation}
          >
            <LocationOn/>
        </IconButton>
        );
    }
}

LocationButton.propTypes = {
    benefits: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        benefits: state.benefits
      };
}

export default connect(
    mapStateToProps,
)(LocationButton);

