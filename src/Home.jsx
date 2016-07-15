import React from 'react';
import Simple from './Simple.jsx';
import { Link } from 'react-router';

function Home() {
  return (
    <div>
      <h1>Interactive 3D Websites Using React-Three-Renderer</h1>
      <Link to="slide-1">Next</Link>
      <Simple />
    </div>
  );
}

Home.propTypes = {

};

export default Home;
