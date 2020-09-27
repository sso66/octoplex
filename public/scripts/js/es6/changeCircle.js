//changeCircle.js
console.log( "Mounting changeCircle.js..." );

function setSize( evt, circleSize ) {

    const circle = evt.currentTarget;

    circle.setAttribute( "r", circleSize );

}

function setLocation( evt, newX, newY ) {

    const circle = evt.currentTarget;

    circle.setAttribute( "cx", newX );

    circle.setAttribute( "cy", newY );

}

function setStyle( evt, newStyle ) {

    const circle = evt.currentTarget;

    circle.setAttribute( "style", newStyle );

}

// eof
