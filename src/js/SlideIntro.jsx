import React from 'react';
import Slide from './Slide.jsx';

function SlideIntro() {
  return (
    <Slide title="So You Want a Website with 3D Components" index={1}>
      <ul>
        <li>and you're using React, or want to use it</li>
        <li>you want to use exciting new WebGL libraries like ThreeJS</li>
        <li>...but they assume a very non-React way of doing things</li>
      </ul>
    </Slide>
  );
}

SlideIntro.propTypes = {

};

export default SlideIntro;
