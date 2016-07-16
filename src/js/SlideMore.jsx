import React from 'react';
import Slide from './Slide.jsx';

function SlideMore() {
  return (
    <Slide
      title="Getting Started"
      index={12}
    >
      <div>
        <a href="https://github.com/ptsteadman/react-three-renderer-starter">
          <h2>
            https://github.com/ptsteadman/react-three-renderer-starter
          </h2>
        </a>
        <p>
          Webpack boilerplate including react-three-renderer and its dependencies. <br />
          This presentation is built on it.
        </p>
        <br />
        <h2>Thanks!</h2>
        <h3>Patrick Steadman</h3>
        <a href="https://computerlab.io">
          <h4>Computer Lab</h4>
        </a>
        <div></div>
        <a href="https://twitter.com/ptsteadman">
          <h4>@ptsteadman</h4>
        </a>
      </div>
    </Slide>
  );
}

SlideMore.propTypes = {

};

export default SlideMore;
