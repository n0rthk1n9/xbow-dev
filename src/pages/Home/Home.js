import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';

import { Emoji } from '../../components/UI/Emoji/Emoji';
import { Card } from '../../components/UI/Card/Card';

import gameSheetIcon from '../../assets/gamesheeticon.png';
import streaksIcon from '../../assets/streaksicon.png';
import chameleonCalculatorIcon from '../../assets/chameleoncalculatoricon.png';
import githubIcon from '../../assets/github.png';
import mastodonIcon from '../../assets/mastodon.png';
import classes from './Home.module.css';

function Home() {
  const gameSheetUrl =
    'https://apps.apple.com/de/app/game-sheet/id6446234019?l=en';
    const streaksUrl =
    'https://apps.apple.com/de/app/streaks-track/id1610940278?l=en';
    const chameleonCalculatorUrl =
    'https://apps.apple.com/de/app/chameleon-calculator/id1508721476?l=en';
  return (
    <div className={classes.Home}>
      <Card>
        <h2>
          Hi, my name is Jan
          <Emoji symbol="👋" label="waving_hand" />
        </h2>
        <h3>📍 Hamburg ⚓️, Germany 🇩🇪</h3>
      </Card>
      <Card>
        <span>I ❤️ developing apps for  plattforms</span>
      </Card>
      <Card>
        <div className={classes.Apps} style={{marginBottom: '10px'}}>
          <img
            width="50"
            height="50"
            src={gameSheetIcon}
            alt="Game Sheet Icon"
            style={{ marginRight: '20px', borderRadius: '5px' }}
          />
          <MobileStoreButton
            store="ios"
            url={gameSheetUrl}
            linkProps={{ title: 'Game Sheet on iOS' }}
            width={150}
            height={50}
          />
        </div>
        <div className={classes.Apps} style={{marginBottom: '10px'}}>
          <img
            width="50"
            height="50"
            src={streaksIcon}
            alt="Streaks Track Icon"
            style={{ marginRight: '20px', borderRadius: '5px' }}
          />
          <MobileStoreButton
            store="ios"
            url={streaksUrl}
            linkProps={{ title: 'Streaks Track on iOS' }}
            width={150}
            height={50}
          />
        </div>
        <div className={classes.Apps}>
          <img
            width="50"
            height="50"
            src={chameleonCalculatorIcon}
            alt="Chameleon Calculator Icon"
            style={{ marginRight: '20px', borderRadius: '5px' }}
          />
          <MobileStoreButton
            store="ios"
            url={chameleonCalculatorUrl}
            linkProps={{ title: 'Chameleon Calculator on iOS' }}
            width={150}
            height={50}
          />
        </div>
      </Card>
      <Card>
        <a href="https://github.com/n0rthk1n9" target="_blank" rel="noreferrer">
          <img
            width="50"
            height="50"
            src={githubIcon}
            alt="GitHub Icon"
            style={{ marginRight: '10px' }}
          />
        </a>
        <a href="https://mastodon.social/@n0rthk1n9" target="_blank" rel="noreferrer">
          <img
            width="50"
            height="50"
            src={mastodonIcon}
            alt="GitHub Icon"
          />
        </a>
      </Card>
    </div>
  );
}

export { Home };
