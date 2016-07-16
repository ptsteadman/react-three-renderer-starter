import React from 'react';

import React3 from 'react-three-renderer';
import THREE from 'three';

function SimpleBox() {
  return (
    <React3 width={300} height={300} clearColor={0xffffff} mainCamera="main">
      <scene>
        <perspectiveCamera name="main" position={new THREE.Vector3(0, 0, 5)}>
          <pointLight />
        </perspectiveCamera>
        <mesh rotation={new THREE.Euler(1, 1)}>
          <boxGeometry width={2} height={2} depth={2} />
          <meshLambertMaterial color={0xacccd5} />
        </mesh>
      </scene>
    </React3>
  );
}

SimpleBox.propTypes = {

};

export default SimpleBox;
