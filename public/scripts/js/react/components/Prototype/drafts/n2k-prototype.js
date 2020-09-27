// n2k-prototype.js
// Using SVG-DOM JavaScript API
console.log( "Mounting n2k-prototype.js..." );

export function showColor() {

    alert( "Color of the Rectangle Bounding Box is: " +
          document.getElementById( "rect1" ).getAttributeNS( null, "stroke" ) );

}

export function showArea( event ) {

    var width = String(parseInt( event.target.getAttributeNS( null, "width" ) ));
    var height = String(parseInt( event.target.getAttributeNS( null, "height" ) ));
     
    alert( "Area of the rectangle is: " + width + "x" + height );

}

export function showRootChildrenCount() {

    alert( "Total Children: " + document.documentElement.childNodes.length );
}


// eof 