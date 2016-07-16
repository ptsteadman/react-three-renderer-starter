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
import SlideHow1 from './js/SlideHow1.jsx';
import SlideHow2 from './js/SlideHow2.jsx';
import SlidePrimitives from './js/SlidePrimitives.jsx';
import SlideComponentParts from './js/SlideComponentParts.jsx';
import SlideComponent from './js/SlideComponent.jsx';
import SlideMore from './js/SlideMore.jsx';

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
      <Route path="slide-7" component={SlideHow1} />
      <Route path="slide-8" component={SlideHow2} />
      <Route path="slide-9" component={SlidePrimitives} />
      <Route path="slide-10" component={SlideComponentParts} />
      <Route path="slide-11" component={SlideComponent} />
      <Route path="slide-12" component={SlideMore} />
    </Route>
  </Router>
), document.getElementById('app'));
