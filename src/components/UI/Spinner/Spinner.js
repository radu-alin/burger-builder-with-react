import React from 'react';

import './Spinner.scss';

const Spinner = ({ center }) => {
  console.log('Spinner');
  let classes = center ? 'loader center' : 'loader';

  return <div className={classes}></div>;
};

export default Spinner;
