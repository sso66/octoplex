// mousemove.js

export const go = () => {
    const elm = document.getElementById('mousemove');

    elm.innerHTML = 'Move your mouse to see the demo';

    elm.addEventListener('mousemove', function(evt) {
    
        const { screenX, screenY } = evt;
    
        elm.innerHTML = '<div>Mouse is at: X: ' +
              screenX + ', Y: ' + screenY +
                    '</div>';
    })
}

export default go