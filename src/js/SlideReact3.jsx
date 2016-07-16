import React from 'react';
import Slide from './Slide.jsx';

function SlideReact3() {
  const r3rLink = <a href="https://github.com/toxicFork/react-three-renderer">react-three-renderer</a>;
  const r3Link = <a href="https://github.com/Izzimach/react-three">react-three</a>;
  return (
    <Slide
      title="Hello react-three-renderer"
      index={5}
    >
      <ul>
        <li>toxicFork's {r3rLink} renders 3D objects to a canvas node using ThreeJS</li>
        <li>it's a custom React renderer, just like Blessed</li>
        <li>I prefer it over {r3Link}, another ThreeJS/React implementation</li>
        <li>stable enough for production, in my experience</li>
      </ul>
    </Slide>
  );
}

SlideReact3.propTypes = {

};

export default SlideReact3;
