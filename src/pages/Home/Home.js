import React from 'react';

import { Emoji } from '../../components/UI/Emoji/Emoji';
import { Card } from '../../components/UI/Card/Card';
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.Home}>
      <Card>
        <span>Hello World</span>
        <Emoji symbol="🚀" label="rocket" />
      </Card>
      <Card>
        <span>automatic deployment working</span>
        <Emoji symbol="😍" label="heart_eyed_face" />
        <p>Leon stinkt</p>
      </Card>
    </div>
  );
}

export { Home };
