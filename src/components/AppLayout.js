import React from 'react';
import PropTypes from 'prop-types';


class AppLayout extends React.Component {
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

AppLayout.propTypes = {
    children: PropTypes.array.isRequired
};

export default AppLayout;