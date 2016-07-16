import React from 'react';
import Slide from './Slide.jsx';
// get example string
import threeExample from '../txt/three-example.txt';
import Highlight from 'react-highlight';
import '../css/default.css';

function SlideThree() {
  return (
    <Slide title="Some Imperative ThreeJS Code" index={2}>
      <Highlight className="JavaScript">
        {threeExample}
      </Highlight>
    </Slide>
  );
}

SlideThree.propTypes = {

};

export default SlideThree;
