import React from 'react';

const Alert = ({error}) =>
  <div className="alert alert-danger" role="alert">
    Error: {error}. Please click on Logo button and refresh the page.
  </div>

export default Alert
