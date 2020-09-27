// LoadAsyncResources.js
console.log( "Mounting LoadAsyncResources.js..." );

import * as THREE from 'three';

var texture = "../assets/textures/debug.png";
var model = "../assets/models/monkey-anim.js";
//var model = "../assets/models/464-10965re.json";
var object = "../assets/models/464-10965re.obj";
var resource = "../assets/sounds/wagner-short.ogg";


function init() {

  // load with error
  console.log( 'Before async' );

  loadTexture( texture );
  loadModel( model );
  loadObject( object);
  loadOthers( resource );

}
function loadObject (object) {
  var loader = new THREE.ObjectLoader();
  loader.load(object, function (object) {
      scene.add(object);    
  });
   console.log("Object data after ObjectLoader call", object);
}

// To load a texture you can use the Three.js provided imageloader
function loadTexture( texture ) {

  var texture = new THREE.TextureLoader( texture, null, onLoadCallback, onErrorCallback );
  console.log( "Texture data after TextureLoader call", texture );

}

// To load a model you use one of the Three.js provided model loaders.
function loadModel( model ) {

  var jsonLoader = new THREE.JSONLoader();
  jsonLoader.load( model, onLoadCallback, onProgressCallback );
  console.log( "JSON data after JSONLoader call", jsonLoader );

}


// To load something else asynchronously,
function loadOthers( resource ) {

  var fileLoader = new THREE.FileLoader();
  fileLoader.load( resource, onLoadCallback, onProgressCallback, onErrorCallback );
  console.log( "Resource media after FileLoader call", fileLoader );

}

function onLoadCallback( loaded ) {

  // just output the length for arrays and binary blobs
  if ( loaded.length ) {

    console.log( "Loaded", loaded.length );

  } else {

    console.log( "Loaded", loaded );

  }

}

function onProgressCallback( progress ) {

  console.log( "Progress", progress );

}

function onErrorCallback( error ) {

  console.log( "Error", error );

}

// calls the init function when the window is done loading.
window.onload = init;

// eof
