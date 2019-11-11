import React from 'react';

import { Emoji } from './components/UI/Emoji/Emoji';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <span>Hello World</span>
      <Emoji symbol="🚀" label="rocket" />
    </div>
  );
}

export default App;
