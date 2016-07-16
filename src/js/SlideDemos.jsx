import React from 'react';
import Slide from './Slide.jsx';

function SlideDemos() {
  const r3rEx = <a href="http://toxicfork.github.io/react-three-renderer-example/">cloth demo</a>;
  const r3rEx2 = <a href="http://toxicfork.github.io/react-three-renderer-example/">pick demo</a>;
  const pinpointsLink = <a href="http://pinpoints.io">pinpoints</a>;
  return (
    <Slide
      title="react-three-renderer Examples and Demos"
      index={6}
    >
      <ul>
        <li>non-interactive scene: {r3rEx}</li>
        <li>interactive scene with physics: {r3rEx2}</li>
        <li>as menu in landing page I built: {pinpointsLink}</li>
      </ul>
    </Slide>
  );
}

SlideDemos.propTypes = {

};

export default SlideDemos;
