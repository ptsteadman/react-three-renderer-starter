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
          Use react-three-renderer to create reusable, composable, interactive
          3D components that work just like the rest of your React application.
        </p>
        <br />
        <h2>Patrick Steadman</h2>
        <h4>Computer Lab</h4>
        <a href="https://twitter.com/ptsteadman">
          <h4>@ptsteadman</h4>
        </a>
      </div>
    </Slide>
  );
}

Home.propTypes = {

};

export default Home;
