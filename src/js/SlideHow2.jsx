import React from 'react';
import Slide from './Slide.jsx';
// get example string
import threeExample from '../txt/SimpleBox.txt';
import Highlight from 'react-highlight';
import '../css/default.css';


function SlideHow2() {
  return (
    <Slide title="Simple Box Example Code" index={8}>
      <Highlight className="jsx">
        {threeExample}
      </Highlight>
    </Slide>
  );
}

SlideHow2.propTypes = {

};

export default SlideHow2;

