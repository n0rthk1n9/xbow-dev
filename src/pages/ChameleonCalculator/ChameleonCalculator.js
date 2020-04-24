import React from 'react';

import { IPhoneX } from '../../components/UI/IPhoneX/IPhoneX';
import classes from './ChameleonCalculator.module.css';

function ChameleonCalculator() {
  return (
    <React.Fragment>
      <div className={classes.ChameleonCalculator}>
        For Support of my App Chameleon Calculator, just send me an E-Mail at:
        <a href="mailto:chameleon.calculator@gmail.com">
          {' '}
          chameleon.calculator@gmail.com
        </a>
      </div>
      <IPhoneX />
    </React.Fragment>
  );
}

export { ChameleonCalculator };
