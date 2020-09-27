// gauge.js

window.onload=function(){
    var needleMove = document.getElementById('needleMove');
    var animateBtn = document.getElementById('animate');
    animateBtn.addEventListener('click', function() {
        needleMove.beginElement();
    });
};    
// eof