import React from 'react';
import Slide from './Slide.jsx';

function Home() {
  return (
    <Slide
      title="Interactive 3D Websites Using React-Three-Renderer"
      index={0}
    >
      <div>
        <p>
          Live the dream of 1997 in 2017: use React to create reusable,
          interactive 3D components that work just like the rest of your
          webapp.
        </p>
        <h3>Patrick Steadman</h3>
        <a href="https://twitter.com/ptsteadman">
          <h5>@ptsteadman</h5>
        </a>
      </div>
    </Slide>
  );
}

Home.propTypes = {

};

export default Home;
