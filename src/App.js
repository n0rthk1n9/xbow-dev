import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      Hello World{' '}
      <span role="img" aria-label="rocket">
        🚀
      </span>
    </div>
  );
}

export default App;
