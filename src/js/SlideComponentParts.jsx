import React from 'react';
import Slide from './Slide.jsx';

function SlideComponent() {
  const scene = 'http://people.eecs.berkeley.edu/~sequin/CS184/IMGS/HierSceneComp.GIF';
  return (
    <Slide title="Scene Graph Maps Nicely to React Components" index={10}>
      <div>
        <img src={scene} alt="Scene graph." />
        <p>It's reminescent of 90's technololgy like VRML and X3D.</p>
      </div>
    </Slide>
  );
}

SlideComponent.propTypes = {

};

export default SlideComponent;

