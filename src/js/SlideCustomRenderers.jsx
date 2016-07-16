import React from 'react';
import Slide from './Slide.jsx';

function SlideCustomRenderers() {
  return (
    <Slide title="Solution: Custom React Renderers" index={3}>
      <ul>
        <li>React is a <b>generalization of UI</b>, independent of platform</li>
        <li>example: React DOM renders HTML elements, React Native renders mobile components</li>
        <li>after React 0.14, we can create <b>custom renderers</b></li>
        <li>these renderers must implement a 'bridge', primitives, and ways of grouping them</li>
      </ul>
    </Slide>
  );
}

SlideCustomRenderers.propTypes = {

};

export default SlideCustomRenderers;
