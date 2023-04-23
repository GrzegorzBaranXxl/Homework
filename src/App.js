import React from 'react';
import { Profile } from './components/Profile';
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.App}>
      <Profile />
    </div>
  );
}

export default App;
