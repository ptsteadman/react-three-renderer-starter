import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this.onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.01,
          this.state.cubeRotation.y + 0.01,
          0
        ),
      });
    };
  }

  render() {
    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera below
      width={this.props.width}
      height={this.props.height}
      onAnimate={this.onAnimate}
      clearColor={0xFFFFFF}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={this.props.width / this.props.height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
        >
          <pointLight color={0xffffff} intensity={1.4} />
        </perspectiveCamera>
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={3}
            height={3}
            depth={3}
          />
          <meshLambertMaterial
            color={0xacccd5}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

Simple.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default Simple;
