import React from 'react';
import Slide from './Slide.jsx';
import Simple from './Simple.jsx';


function SlideComponent() {
  return (
    <Slide title="Turning the Scene into a Component" index={10}>
      <div>
        <Simple width={200} height={200} />
        <pre>{"<Box width={200} height={200} />"}</pre>
        <Simple width={200} height={200} color={0xff0000} />
        <pre>{"<Box width={200} height={200} color={0xff0000} />"}</pre>
      </div>
    </Slide>
  );
}

SlideComponent.propTypes = {

};

export default SlideComponent;

