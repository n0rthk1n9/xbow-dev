import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import { useModeSelector, Mode, useLightSwitch } from 'use-light-switch';

import icon from '../../assets/gamesheeticon.png';
import classes from './GameSheet.module.css';

function GameSheet() {
  const selected = useModeSelector({
    light: { color: '#000000', backgroundColor: '#FFFFFF' },
    dark: { color: '#FFFFFF', backgroundColor: '#000000' },
    unset: { color: '#000000', backgroundColor: '#FFFFFF' },
  });

  const mode = useLightSwitch();

  const iOSUrl =
    'https://apps.apple.com/de/app/game-sheet/id6446234019?l=en';
  return (
    <React.Fragment>
      <div
        className={classes.GameSheetSupport}
        style={{
          color: selected.color,
          backgroundColor: selected.backgroundColor,
        }}
      >
        <div className={classes.MobileStoreButtonWrapper}>
          <p>
            <strong>
              To download Game Sheet, just press the download at the
              App Store button underneath
            </strong>
          </p>
          <div style={{ display: 'flex' }}>
            <img
              width="50"
              height="50"
              src={icon}
              alt="Game Sheet Icon"
              style={{ marginRight: '20px', borderRadius: '5px' }}
            ></img>
            <MobileStoreButton
              store="ios"
              url={iOSUrl}
              linkProps={{ title: 'Game Sheet on iOS' }}
              width={150}
              height={50}
            />
          </div>
        </div>
        <div className={classes.DownloadProblems}>
          <strong>
            I tried to download the Game Sheet App onto my device but
            it didn't work, what should I do?
          </strong>
          <p>
            If you have problems downloading Game Sheet here are some
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
            Game Sheet again.
          </p>
          <ul>
            <li>
              Check your internet connection. To get the best experience, try to
              connect to a Wifi Network and start the download of Game Sheet again.
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
            <li>
              Restart your iPhone and try to download Game Sheet again
            </li>
          </ul>
          <p>
            If this advice does not solve your problems, please contact me at:{' '}
            <a
              href="mailto:rabble-oceans05@icloud.com"
              className={
                mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
              }
            >
              rabble-oceans05@icloud.com
            </a>
          </p>
        </div>
        <div className={classes.WhereToGetUpdates}>
          <strong>
            Where do I find the newest version of the Game Sheet App?
          </strong>
          <ul>
            <li>
              Just open the <strong>App Store</strong> App on your iPhone and
              search for "Game Sheet". If a new update is available it
              will show an "Update" button on the App Store page of the app.
            </li>
            <li>
              The other way is to simply just tap on the App Store button on top
              of this support page to directly open the App Store page of the
              Game Sheet App
            </li>
          </ul>
        </div>
        <div className={classes.Bugs}>
          <strong>
            There is something wrong with the Game Sheet App on my
            phone, I think it has a bug, what should I do?
          </strong>
          <ul>
            <li>
              First, try to update your App as described in the first point of
              the FAQ
            </li>
            <li>
              If the error persists, please contact me at:{' '}
              <a
                href="mailto:rabble-oceans05@icloud.com"
                className={
                  mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
                }
              >
                rabble-oceans05@icloud.com
              </a>{' '}
              with a description what happened and what you think should happen.
              Thanks in advance for your help!
            </li>
          </ul>
        </div>
        <div className={classes.Features}>
          <strong>
            What is the Game Sheet App capable of doing in general?
          </strong>
          <ol>
            <li>
                Game Sheet is an app for tracking the scores of your favorite dice game involving rolling six dice to achieve specific combinations.
            </li>
            <li>
              Add a new player to track it's points by tapping the "+" button in the top right corner.
            </li>
            <li>
              Edit the points of a player by tapping on the player item in the list of the main screen.
            </li>
            <li>
              In the resulting detail screen of the respective player you can now choose to change whatever kinds of points you like.
            </li>
            <li>
              Totals and all individual points get get calculated, saved and synced via iCloud to all of your devices the app is installed on automatically.   
            </li>
            <li>
              To delete a player just swipe to delete on the respective player in the players list.
            </li>
          </ol>
        </div>
        <div className={classes.Thanks}>
          Thank you for using my app Game Sheet. This means a lot to
          me. If you still have problems of any kind or you have suggestions on
          expanding it, don't hesitate to contact me at:{' '}
          <a
            href="mailto:rabble-oceans05@icloud.com"
            className={
              mode === Mode.Dark ? classes.LinkDark : classes.LinkLight
            }
          >
            rabble-oceans05@icloud.com
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export { GameSheet };
