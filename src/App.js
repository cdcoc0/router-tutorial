import React from 'react';
import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Intro</Link>
        </li>
        <li>
          <Link to="/profile/chopkiri">Chopkiri</Link>
        </li>
        <li>
          <Link to="/profile/honggildong">Honggildong</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;