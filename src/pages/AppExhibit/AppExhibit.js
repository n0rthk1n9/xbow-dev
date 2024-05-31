import React from 'react';
import { useModeSelector, Mode, useLightSwitch } from 'use-light-switch';

import icon from '../../assets/appexhibit.webp';
import classes from './AppExhibit.module.css';
import { AppStoreButton } from 'react-mobile-app-button';

function AppExhibit() {
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
        className={classes.AppExhibitSupport}
        style={{
          color: selected.color,
          backgroundColor: selected.backgroundColor,
        }}
      >
        <div className={classes.MobileStoreButtonWrapper}>
          <p>
            <strong>
              To download App Exhibit, just press the download at the App Store
              button underneath
            </strong>
          </p>
          <div style={{ display: 'flex' }}>
            <img
              width="50"
              height="50"
              src={icon}
              alt="App Exhibit Icon"
              style={{ marginRight: '20px', borderRadius: '5px' }}
            ></img>
            <AppStoreButton
              url={iOSUrl}
              theme={selected.storeButtonTheme}
              linkProps={{ title: 'App Exhibit on iOS' }}
            />
          </div>
        </div>
        <div className={classes.DownloadProblems}>
          <strong>
            I tried to download the App Exhibit App onto my device but it didn't
            work, what should I do?
          </strong>
          <p>If you have problems downloading App Exhibit here are some tips:</p>
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
            App Exhibit again.
          </p>
          <ul>
            <li>
              Check your internet connection. To get the best experience, try to
              connect to a Wifi Network and start the download of App Exhibit
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
            <li>Restart your iPhone and try to download App Exhibit again</li>
          </ul>
          <p>
            If this advice does not solve your problems, please contact me at:{' '}
            <a
              href="mailto:appexhibit@xbow.dev"
              className={
                mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
              }
            >
              appexhibit@xbow.dev
            </a>
          </p>
        </div>
        <div className={classes.WhereToGetUpdates}>
          <strong>
            Where do I find the newest version of the App Exhibit App?
          </strong>
          <ul>
            <li>
              Just open the <strong>App Store</strong> App on your iPhone and
              search for "App Exhibit". If a new update is available it will show
              an "Update" button on the App Store page of the app.
            </li>
            <li>
              The other way is to simply just tap on the App Store button on top
              of this support page to directly open the App Store page of the
              App Exhibit App
            </li>
          </ul>
        </div>
        <div className={classes.Bugs}>
          <strong>
            There is something wrong with the App Exhibit App on my phone, I
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
                href="mailto:appexhibit@xbow.dev"
                className={
                  mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
                }
              >
                appexhibit@xbow.dev
              </a>{' '}
              with a description what happened and what you think should happen.
              Thanks in advance for your help!
            </li>
          </ul>
        </div>
        <div className={classes.Features}>
          <strong>
            What is the App Exhibit App capable of doing in general?
          </strong>
          <ol>
            <li>
                Instant Sharing: Generate QR codes for your apps to share them instantly with others. No need for lengthy explanations or searching through the App Store.
            </li>
            <li>
                Offline Access: All your app data is stored securely on your device, ensuring you have access anytime, anywhere, without the need for an internet connection.
            </li>
            <li>
                Enhanced Visibility: Show your apps’ screenshots and descriptions, and provide a direct link to the App Store for instant access.
            </li>
            <li>
                Quick Setup: Simple and intuitive setup process. Add your apps in just a two steps and start sharing right away.
            </li>
            <li>
                Secure and Private: Your data stays on your device, ensuring privacy and security without relying on external servers.
            </li>
          </ol>
        </div>
        <div className={classes.Thanks}>
          Thank you for using my app App Exhibit. This means a lot to me. If you
          still have problems of any kind or you have suggestions on expanding
          it, don't hesitate to contact me at:{' '}
          <a
            href="mailto:appexhibit@xbow.dev"
            className={
              mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
            }
          >
            appexhibit@xbow.dev
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppExhibit };
