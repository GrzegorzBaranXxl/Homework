import React from 'react';
import { Profile } from './components/Profile';
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.App}>
        <div className={classes.Inner}>
          <Profile />
        </div>
    </div>
  );
}

export default App;
