// svg-interactivity.js
console.log( "Mounting svg-interactivity.js..." );

function showColor() {

    alert( "Color of the Rectangle is: " +
          document.getElementById( "rect1" ).getAttributeNS( null, "fill" ) );

}

function showArea( event ) {

    var width = parseFloat( event.target.getAttributeNS( null, "width" ) );
    var height = parseFloat( event.target.getAttributeNS( null, "height" ) );

    alert( "Area of the rectangle is: " + width + "x" + height );

}

function showRootChildrenCount() {

    alert( "Total Children: " + document.documentElement.childNodes.length );

}

// eof 