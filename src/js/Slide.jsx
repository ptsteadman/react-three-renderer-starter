import React from 'react';
import { Link } from 'react-router';

function Slide(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
      <br />
      <div style={{ float: 'right' }}>
        {props.index > 0 && <Link to={`slide-${props.index - 1}`}>Prev</Link>}
        <Link to={`slide-${props.index + 1}`}>Next</Link>
      </div>
    </div>
  );
}

Slide.propTypes = {
  title: React.PropTypes.string,
  index: React.PropTypes.number,
  children: React.PropTypes.object,
};

export default Slide;
