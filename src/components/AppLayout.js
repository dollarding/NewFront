import React from 'react';
import PropTypes from 'prop-types';

const style = {
    overflow: 'hidden',
    overflowY: 'auto',
    height: '100%'

};

class AppLayout extends React.Component {
    render () {
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

AppLayout.propTypes = {
    children: PropTypes.array.isRequired
};

export default AppLayout;