import React from 'react';
import { Link } from 'react-router';
import Simple from './Simple.jsx';

function App(props) {
  const size = 50;
  return (
    <div>
      <Link to="/">
        <Simple width={size} height={size} />
      </Link>
      <a style={{ float: 'right', lineHeight: `${size}px` }} href="http://computerlab.io">Computer Lab</a>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
