import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './css/presentation.css';

import App from './js/App.jsx';
import Home from './js/Home.jsx';
import SlideIntro from './js/SlideIntro.jsx';
import SlideThree from './js/SlideThree.jsx';
import SlideCustomRenderers from './js/SlideCustomRenderers.jsx';
import SlideBlessed from './js/SlideBlessed.jsx';
import SlideReact3 from './js/SlideReact3.jsx';
import SlideDemos from './js/SlideDemos.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="slide-0" component={Home} />
      <Route path="slide-1" component={SlideIntro} />
      <Route path="slide-2" component={SlideThree} />
      <Route path="slide-3" component={SlideCustomRenderers} />
      <Route path="slide-4" component={SlideBlessed} />
      <Route path="slide-5" component={SlideReact3} />
      <Route path="slide-6" component={SlideDemos} />
    </Route>
  </Router>
), document.getElementById('app'));
