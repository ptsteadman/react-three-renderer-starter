import React from 'react';
import Slide from './Slide.jsx';

function SlideIntro() {
  return (
    <Slide title="So You Want to Add 3D to a React App" index={1}>
      <ul>
        <li>and you want to use helpful WebGL libraries like <b>ThreeJS</b></li>
        <li>...but these libraries assume a very <b>non-React way</b> of doing things</li>
        <li>...direct DOM and state modification, explicit render loops, etc</li>
      </ul>
    </Slide>
  );
}

SlideIntro.propTypes = {

};

export default SlideIntro;
