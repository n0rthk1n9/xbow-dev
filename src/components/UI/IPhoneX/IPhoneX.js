import React from 'react';
import classNames from 'classnames';

import classes from './IPhoneX.scss';

function IPhoneX() {
  let IPhoneX = classNames(classes.device, classes.iphoneX);
  console.log(IPhoneX);
  return (
    <div className={IPhoneX}>
      <div className={classes.notch}>
        <div className={classes.camera}></div>
        <div className={classes.speaker}></div>
      </div>
      <div className={classes.topBar}></div>
      <div className={classes.sleep}></div>
      <div className={classes.bottomBar}></div>
      <div className={classes.volume}></div>
      <div className={classes.overflow}>
        <div className={[classes.shadow, classes.shadowTr]}></div>
        <div className={[classes.shadow, classes.shadowTl]}></div>
        <div className={[classes.shadow, classes.shadowBr]}></div>
        <div className={[classes.shadow, classes.shadowBl]}></div>
      </div>
      <div className={classes.innerShadow}></div>
      <div className={classes.screen}></div>
    </div>
  );
}

export { IPhoneX };
