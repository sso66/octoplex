// ReactThreeRenderer.jsx
console.log("Mount ReactThreeRenderer.jsx...")

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import React3D from 'react-three-renderer';

class ReactThreeRenderer extends Component {
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
      // Reac will be sure that ther rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        ),
      });  
    };
  };
  render() {    
    const canvas = document.querySelector('canvas');
    const gl = canvas.getContext("webgl");
    
    if (gl === null) {
      alert("Unable to initialize WebGL. React may not be supporting!");
      return;
    }
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    return (
      <React3D
        mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera"
        width={width}
        height={height}
        
        onAnimate={this._onAnimate}
      >
        <scene>
          <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width/height}
          near={0.1}
          far={1000}
          
          position={this.cameraPosition}
          />
          <mesh
            rotation={this.state.cubeRotation}
          >
            <boxGeometry 
              width={1}
              height={1}
              depth={1}  
            />
            <meshBasicMaterial 
              color={0x00ff00}
            />
          </mesh>
        </scene>
      </React3D>
    );
  }
}
//------------------------------------------------------------
ReactDOM.render(<Simple/>, document.getElementById('canvas'));

//export default ReactThreeRenderer;

// eof