import React from 'react';

import classes from './Button.module.scss';

export const DivButton = props => {
  return <div onClick={props.onClick} className={classes.Button} >{props.children}</div>;
};

export const Button = props => {
  return <button className={classes.Button} type={props?.type}>{props?.children}</button>;
};
