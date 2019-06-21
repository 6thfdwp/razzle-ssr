import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default props => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
};
