// html5-canvas.js
console.log("Mounting html5-canvas.js...");

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
   
context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';

context.fillText("HTML5 Canvas", canvas.width/2 - 150, canvas.height/2  + 15);

context.strokeText("HTML5 Canvas", canvas.width/2 - 150, canvas.height/2 + 15);
