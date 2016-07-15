import React from 'react';
import { Link } from 'react-router';

function SlideIntro() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="slide-1">Next</Link>
    </div>
  );
}

SlideIntro.propTypes = {

};

export default SlideIntro;
