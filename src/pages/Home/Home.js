import React, { useEffect } from 'react';
import {  AppStoreButton } from "react-mobile-app-button";

import { Emoji } from '../../components/UI/Emoji/Emoji';
import { Card } from '../../components/UI/Card/Card';

import cosmoPicIcon from '../../assets/cosmopic.webp';
import gameSheetIcon from '../../assets/gamesheeticon.webp';
import streaksIcon from '../../assets/streaksicon.webp';
import chameleonCalculatorIcon from '../../assets/chameleoncalculatoricon.webp';
import githubIcon from '../../assets/github.webp';
import mastodonIcon from '../../assets/mastodon.webp';

import classes from './Home.module.css';

const apps = [
  {
    name: 'Cosmo Pic',
    icon: cosmoPicIcon,
    url: 'https://apps.apple.com/',
  },
  {
    name: 'Game Sheet',
    icon: gameSheetIcon,
    url: 'https://apps.apple.com/de/app/game-sheet/id6446234019?l=en',
  },
  {
    name: 'Streaks Track',
    icon: streaksIcon,
    url: 'https://apps.apple.com/de/app/streaks-track/id1610940278?l=en',
  },
  {
    name: 'Chameleon Calculator',
    icon: chameleonCalculatorIcon,
    url: 'https://apps.apple.com/de/app/chameleon-calculator/id1508721476?l=en',
  },
];

function Home() {
  useEffect(() => {
    apps.forEach((app) => {
      const img = new Image();
      img.src = app.icon;
    });
  }, []);

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
        <p>I ❤️ developing apps for  platforms</p>
      </Card>
      <Card>
        {apps.map((app) => (
          <div key={app.name} className={classes.Apps}>
            <img
              width="50"
              height="50"
              src={app.icon}
              alt={`${app.name} Icon`}
              loading="lazy"
            />
            <AppStoreButton
              url={app.url}
              theme={"dark"}
              linkProps={{ title: `${app.name} on iOS` }}
            />
          </div>
        ))}
      </Card>
      <Card>
        <div className={classes.Social}>
          <a
            href="https://github.com/n0rthk1n9"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes.Github}
              width="50"
              height="50"
              src={githubIcon}
              alt="GitHub Icon"
              loading="lazy"
            />
          </a>
          <a
            href="https://mastodon.social/@n0rthk1n9"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="50"
              height="50"
              src={mastodonIcon}
              alt="Mastodon Icon"
              loading="lazy"
            />
          </a>
        </div>
      </Card>
    </div>
  );
}

export { Home };
