import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App.jsx';
import Home from './Home.jsx';
import SlideIntro from './SlideIntro.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="slide-1" component={SlideIntro} />
    </Route>
  </Router>
), document.getElementById('app'));
