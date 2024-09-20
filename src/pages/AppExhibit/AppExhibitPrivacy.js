import React from 'react';
import { useModeSelector } from 'use-light-switch';

import classes from '../Privacy/Privacy.module.css';

function AppExhibitPrivacy() {
  const selected = useModeSelector({
    light: { color: '#000000', backgroundColor: '#FFFFFF' },
    dark: { color: '#FFFFFF', backgroundColor: '#000000' },
    unset: { color: '#000000', backgroundColor: '#FFFFFF' },
  });

  return (
    <React.Fragment>
      <div
        className={classes.Privacy}
        style={{
          color: selected.color,
          backgroundColor: selected.backgroundColor,
          height: "100vH"
        }}
      >
        <h1>App Exhibit app Privacy Policy</h1>{' '}
        <p>
            I built the App Exhibit app as
            a Freemium app.
        </p>
        <p><strong>Information Collection and Use</strong></p>
        <p>
          I don't store any user-identifiable data anywhere outside your device.
        </p>
        <div>
          <p>
            The app does use third-party APIs that may collect
            information used to identify you.
          </p>
          <p>
            Link to the privacy policy of third-party service providers used
            by the app
          </p>
          <ul>
            <li>
              <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">iTunes API</a>
            </li>
            <li>
              <a href="https://freemiumkit.app/" target="_blank" rel="noopener noreferrer">FreemiumKit</a>
            </li>
            </ul>
          </div>
          <p>
            I may update my Privacy Policy from
            time to time. Thus, you are advised to review this page
            periodically for any changes. I will
            notify you of any changes by posting the new Privacy Policy on
            this page.
          </p>
          <p>This policy is effective as of 2024-09-20</p>
          <p><strong>Contact Me</strong></p>
          <p>
            If you have any questions or suggestions about my
            Privacy Policy, do not hesitate to contact me at appexhibit@xbow.dev.
          </p>
      </div>
    </React.Fragment>
  );
}

export { AppExhibitPrivacy };
