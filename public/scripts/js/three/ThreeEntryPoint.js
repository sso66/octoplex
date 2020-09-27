// threeEntryPoint.js
console.log( "Mounting threeEntryPoint.js... <ThreeApp />" );

import SceneManager from './SceneManager';

export default containerElement => {
  const canvas = createCanvas(document, containerElement);
  const sceneManager = new SceneManager(canvas);
  init();


  function createCanvas(document, containerElement) {
    const canvas = document.createElement('canvas');
    containerElement.appendChild(canvas);
    return canvas;
  }
  
  function init() {
  
    bindEventListeners();
    render();
  
  }
  
  function bindEventListeners() {
  
    window.onresize = resizeCanvas;
    resizeCanvas();
  
  }
  
  function resizeCanvas() {
  
    canvas.style.width = '100%';
    canvas.style.height = '100%';
  
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  
    sceneManager.onWindowResize();
  
  }
  
  function render() {
  
    requestAnimationFrame( render );
    sceneManager.update();
  
  }
}
// eof
