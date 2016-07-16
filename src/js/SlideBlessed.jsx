import React from 'react';
import Slide from './Slide.jsx';

function SlideBlessed() {
  const b = 'https://raw.githubusercontent.com/Yomguithereal/react-blessed/master/img/demo.gif';
  return (
    <Slide title="Customer Renderer Example: React-Blessed" index={4}>
      <img src={b} alt="Blessed, terminal rendering for react." />
    </Slide>
  );
}

SlideBlessed.propTypes = {

};

export default SlideBlessed;
