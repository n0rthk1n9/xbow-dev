import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';

import icon from '../../assets/icon.png';
import classes from './ChameleonCalculator.module.css';

function ChameleonCalculator() {
  const iOSUrl =
    'https://apps.apple.com/de/app/chameleon-calculator/id1508721476?l=en';
  return (
    <React.Fragment>
      <div className={classes.ChameleonCalculatorSupport}>
        <div className={classes.MobileStoreButtonWrapper}>
          <p>
            <strong>
              To download Chameleon Calculator, just press the download at the
              App Store button underneath
            </strong>
          </p>
          <div>
            <img
              width="100"
              height="100"
              src={icon}
              alt="Chameleon Calculator Icon"
            ></img>
            <MobileStoreButton
              store="ios"
              url={iOSUrl}
              linkProps={{ title: 'Chameleon Calculator on iOS' }}
              width={150}
            />
          </div>
        </div>
        <div className={classes.DownloadProblems}>
          <strong>
            I tried to download the Chameleon Calculator App onto my device but
            it didn't work, what should I do?
          </strong>
          <p>
            If you have problems downloading Chameleon Calculator here are some
            tips:
          </p>
          <ul>
            <li>Check how much storage you have left on your iPhone / iPad:</li>
            <ol>
              <li>
                Tap on <strong>Settings</strong> on your home screen and after
                that on <strong>General</strong>
              </li>
              <li>Tap on iPhone / iPad Storage</li>
            </ol>
          </ul>
          <p>
            If there is less than 100 MB of space available you can try deleting
            other apps to free up some space. After that just try to download
            Chameleon Calculator again.
          </p>
          <ul>
            <li>
              Check your internet connection. To get the best experience, try to
              connect to a Wifi Network and start the download of Chameleon
              Calculator again.
            </li>
            <li>Cancel the download and restart it.</li>
            <li>
              Check Apples{' '}
              <a href="https://support.apple.com/en-us/HT207165">
                advice on how to detect errors when downloading apps
              </a>
              .
            </li>
            <li>
              Restart your iPhone and try to download Chameleon Calculator again
            </li>
          </ul>
          <p>
            If this advice does not solve your problems, please contact me at:{' '}
            <a href="mailto:chameleon.calculator@gmail.com">
              chameleon.calculator@gmail.com
            </a>
          </p>
        </div>
        <div className={classes.WhereToGetUpdates}>
          <strong>
            Where do I find the newest version of the Chameleon Calculator App?
          </strong>
          <ul>
            <li>
              Just open the <strong>App Store</strong> App on your iPhone and
              search for "Chameleon Calculator". If a new update is available it
              will show an "Update" button on the App Store page of the app.
            </li>
            <li>
              The other way is to simply just tap on the App Store button on top
              of this support page to directly open the App Store page of the
              Chameleon Calculator App
            </li>
          </ul>
        </div>
        <div className={classes.Bugs}>
          <strong>
            There is something wrong with the Chameleon Calculator App on my
            phone, I think it has a bug, what should I do?
          </strong>
          <ul>
            <li>
              First, try to update your App as described in the first point of
              the FAQ
            </li>
            <li>
              If the error persists, please contact me at:{' '}
              <a href="mailto:chameleon.calculator@gmail.com">
                chameleon.calculator@gmail.com
              </a>{' '}
              with a description what happened and what you think should happen.
              Thanks in advance for your help!
            </li>
          </ul>
        </div>
        <div className={classes.Features}>
          <strong>
            What is the Chameleon Calculator App capable of doing in general?
          </strong>
          <ol>
            <li>
              Do standard calculations with two operands using standard
              operations such as addition, substraction, multiplication,
              division, percentage and negation.
              <ul>
                <li>
                  After you press the equal sign, the result of the current
                  calculation is displayed and the current calculation is
                  finished.
                </li>
                <li>
                  You can select two operands which are integer values or
                  floating point numbers or mix them as you like.
                </li>
                <li>
                  After you press the equal sign, the result of the current
                  calculation is displayed and the current calculation is
                  finished.
                </li>
                <li>
                  When you press another operation button after a calculation is
                  finished, the result of the past calculation is automatically
                  set as the first operand for the new calculation
                </li>
                <li>
                  When you press a number button after a calculation is
                  finished, a new calculation starting with the number you
                  pressed, as the first operand is started instantly. The result
                  of the past calculation is deleted on this action.
                </li>
                <li>
                  Past calulculation results are <strong>NOT</strong> saved.
                </li>
              </ul>
            </li>
            <li>
              Choose from three different themes to get a different look for
              your calculator.
              <ul>
                <li>
                  To select a theme just press one of the buttons with the theme
                  name on it between the display and the number pad of the
                  calculator.
                </li>
                <li>
                  The colors and theme name on the buttons give you an
                  impression of what the theme is going to look like.
                </li>
                <li>
                  The theme you last selected before you close the app gets
                  saved and will be automatically active upon restart of the
                  app.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className={classes.Thanks}>
          Thank you for using my app Chameleon Calculator. This means a lot to
          me. If you still have problems of any kind or you have suggestions on
          expanding it, don't hesitate to contact me at:{' '}
          <a href="mailto:chameleon.calculator@gmail.com">
            chameleon.calculator@gmail.com
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export { ChameleonCalculator };
