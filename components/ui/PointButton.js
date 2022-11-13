import React from 'react';

import classes from './PointButton.module.scss';

const PointButton = props => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default PointButton;
