import React from 'react';
import blessedImg from '../images/blessed.gif';
import Slide from './Slide.jsx';

function SlideBlessed() {
  return (
    <Slide title="Customer Renderer Example: React-Blessed" index={4}>
      <img src={blessedImg} alt="Blessed, terminal rendering for react." />
    </Slide>
  );
}

SlideBlessed.propTypes = {

};

export default SlideBlessed;
