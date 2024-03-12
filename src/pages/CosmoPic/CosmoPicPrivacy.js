import React from 'react';
import { useModeSelector } from 'use-light-switch';

import classes from '../Privacy/Privacy.module.css';

function CosmoPicPrivacy() {
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
        <h1>Cosmo Pic app Privacy Policy</h1>{' '}
        <p>
            I built the Cosmo Pic app as
            a Freemium app.
        </p>
        <p><strong>Information Collection and Use</strong></p>
        <p>
          I do not collect any information with this app. Apple collects crash logs and analytics not linked to you as a person but I don't sell or give them to third parties.
        </p>
        <div>
          <p>
            The app does use a third-party API that may collect
            information used to identify you.
          </p>
          <p>
            Link to the privacy policy of third-party service providers used
            by the app
          </p>
          <ul>
            <li>
              <a href="https://www.nasa.gov/privacy/" target="_blank" rel="noopener noreferrer">NASA APIs</a>
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
          <p>This policy is effective as of 2024-03-12</p>
          <p><strong>Contact Me</strong></p>
          <p>
            If you have any questions or suggestions about my
            Privacy Policy, do not hesitate to contact me at cosmopic@xbow.dev.
          </p>
      </div>
    </React.Fragment>
  );
}

export { CosmoPicPrivacy };
