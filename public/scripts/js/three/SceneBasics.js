// SceneBasics.js: Three.js Cookbok
console.log( "Mounting SceneBasics.js... <ThreeApp />" );
/*
 * This recipe (code) create a scene, a camera and a geometric cube, and it adds the cube to the scene.
 * It then creates a * WebGL renderer (recording and generating -- camera/projector mechnism) for the
 * scene and camera, and it adds that viewport to the document.body.element. Finally, it animates the
 * mesh object -- the scene subjects -- within the scene for the camera (projector lens).
 */
import React, { Component } from 'react';
import * as THREE from 'three';

var camera, scene, renderer;
var geometry, material, mesh;

var SceneBasics = () => {
    function init() {
    
      scene = new THREE.Scene();
    
      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.z = 1;
    
      geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
      material = new THREE.MeshNormalMaterial();
    
      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );
    
      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setSize( window.innerWidth, window.innerHeight );
    
      document.body.appendChild( renderer.domElement );
    
      render();
    
    }
    
    function render() {
    
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;
    
      renderer.render( scene, camera );
    
      requestAnimationFrame( render );
    
    }
    
    window.onload = init;

}

// eof
