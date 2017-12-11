import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

/**
|--------------------------------------------------
| Scenes
|--------------------------------------------------
*/

import Signin from './scenes/Signin';

/**
|--------------------------------------------------
| Root
|--------------------------------------------------
*/

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={Signin} />
    </div>
  </Router>
);

export default Root;