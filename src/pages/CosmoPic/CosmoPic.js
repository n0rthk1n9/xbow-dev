import React from 'react';
import { useModeSelector, Mode, useLightSwitch } from 'use-light-switch';

import icon from '../../assets/cosmopic.webp';
import classes from './CosmoPic.module.css';
import { AppStoreButton } from 'react-mobile-app-button';

function CosmoPic() {
  const selected = useModeSelector({
    light: { color: '#000000', backgroundColor: '#FFFFFF', storeButtonTheme: 'light' },
    dark: { color: '#FFFFFF', backgroundColor: '#000000', storeButtonTheme: 'dark' },
    unset: { color: '#000000', backgroundColor: '#FFFFFF', storeButtonTheme: 'light' },
  });

  const mode = useLightSwitch();

  const iOSUrl = 'https://apps.apple.com/';
  return (
    <React.Fragment>
      <div
        className={classes.CosmoPicSupport}
        style={{
          color: selected.color,
          backgroundColor: selected.backgroundColor,
        }}
      >
        <div className={classes.MobileStoreButtonWrapper}>
          <p>
            <strong>
              To download Cosmo Pic, just press the download at the App Store
              button underneath
            </strong>
          </p>
          <div style={{ display: 'flex' }}>
            <img
              width="50"
              height="50"
              src={icon}
              alt="Cosmo Pic Icon"
              style={{ marginRight: '20px', borderRadius: '5px' }}
            ></img>
            <AppStoreButton
              url={iOSUrl}
              theme={selected.storeButtonTheme}
              linkProps={{ title: 'Cosmo Pic on iOS' }}
            />
          </div>
        </div>
        <div className={classes.DownloadProblems}>
          <strong>
            I tried to download the Cosmo Pic App onto my device but it didn't
            work, what should I do?
          </strong>
          <p>If you have problems downloading Cosmo Pic here are some tips:</p>
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
            Cosmo Pic again.
          </p>
          <ul>
            <li>
              Check your internet connection. To get the best experience, try to
              connect to a Wifi Network and start the download of Cosmo Pic
              again.
            </li>
            <li>Cancel the download and restart it.</li>
            <li>
              Check Apples{' '}
              <a
                href="https://support.apple.com/en-us/HT207165"
                className={
                  mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
                }
              >
                advice on how to detect errors when downloading apps
              </a>
              .
            </li>
            <li>Restart your iPhone and try to download Cosmo Pic again</li>
          </ul>
          <p>
            If this advice does not solve your problems, please contact me at:{' '}
            <a
              href="mailto:cosmopic@xbow.dev"
              className={
                mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
              }
            >
              cosmopic@xbow.dev
            </a>
          </p>
        </div>
        <div className={classes.WhereToGetUpdates}>
          <strong>
            Where do I find the newest version of the Cosmo Pic App?
          </strong>
          <ul>
            <li>
              Just open the <strong>App Store</strong> App on your iPhone and
              search for "Cosmo Pic". If a new update is available it will show
              an "Update" button on the App Store page of the app.
            </li>
            <li>
              The other way is to simply just tap on the App Store button on top
              of this support page to directly open the App Store page of the
              Cosmo Pic App
            </li>
          </ul>
        </div>
        <div className={classes.Bugs}>
          <strong>
            There is something wrong with the Cosmo Pic App on my phone, I
            think it has a bug, what should I do?
          </strong>
          <ul>
            <li>
              First, try to update your App as described in the first point of
              the FAQ
            </li>
            <li>
              If the error persists, please contact me at:{' '}
              <a
                href="mailto:cosmopic@xbow.dev"
                className={
                  mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
                }
              >
                cosmopic@xbow.dev
              </a>{' '}
              with a description what happened and what you think should happen.
              Thanks in advance for your help!
            </li>
          </ul>
        </div>
        <div className={classes.Features}>
          <strong>
            What is the Cosmo Pic App capable of doing in general?
          </strong>
          <ol>
            <li>
              You can look at the Astronomy Picture of the day by NASA.
            </li>
            <li>
              You can save a picture as a favorite to look at it again later.
            </li>
            <li>
              You can look at the former Astronomy Pictures of the day until provided by NASA.
            </li>
          </ol>
        </div>
        <div className={classes.Thanks}>
          Thank you for using my app Cosmo Pic. This means a lot to me. If you
          still have problems of any kind or you have suggestions on expanding
          it, don't hesitate to contact me at:{' '}
          <a
            href="mailto:cosmopic@xbow.dev"
            className={
              mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
            }
          >
            cosmopic@xbow.dev
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export { CosmoPic };
