import React from 'react';

import classes from './Emoji.module.css';

export const Emoji = props => (
  <span
    className={classes.Emoji}
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </span>
);
