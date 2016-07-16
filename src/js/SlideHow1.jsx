import React from 'react';
import Slide from './Slide.jsx';
import SimpleBox from './SimpleBox.jsx';


function SlideHow1() {
  return (
    <Slide title="Example Scene with a Box" index={7}>
      <center>
        <SimpleBox />
        <p>What does the code for this 3D box look like?</p>
      </center>
    </Slide>
  );
}

SlideHow1.propTypes = {

};

export default SlideHow1;
