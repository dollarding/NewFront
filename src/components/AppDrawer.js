import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

const AppDrawer = ({isOpen, onDrawerRequest}) => {
  const requestToggle = (open) => {
    onDrawerRequest(open);
  };

  const closeDrawer = () => {
    onDrawerRequest(false);
  };
  return (
    <div>
      <Drawer
        docked={false}
        open={isOpen}
        onRequestChange={requestToggle}>
        <MenuItem linkbutton="true"
        containerElement={<Link to="/" />}
        primaryText="דף הבית" onClick={closeDrawer}/>
        <MenuItem linkbutton="true"
        containerElement={<Link to="/terms" />}
        primaryText="תקנון" onClick={closeDrawer}/>
      </Drawer>
    </div>
  );
};

// AppDrawer.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onDrawerRequest: PropTypes.func.isRequired
// };

export default AppDrawer;