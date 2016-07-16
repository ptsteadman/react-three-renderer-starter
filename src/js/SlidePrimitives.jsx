import React from 'react';
import Slide from './Slide.jsx';


function SlidePrimitives() {
  return (
    <Slide title="Bridge and Primitives" index={9}>
      <ul>
        <li>
          <pre>{"<React3 />"}</pre>
          sets up the canvas element 'bridge' where the scene is rendered
        </li>
        <li>
          <pre>{"<scene />"}</pre>
          is the root of the scene graph/tree
        </li>
        <li>
          <pre>{"<mesh />, <perspectiveCamera />, <pointLight />"}</pre>
          are the different things in the scene graph
        </li>
      </ul>
    </Slide>
  );
}

SlidePrimitives.propTypes = {

};

export default SlidePrimitives;

