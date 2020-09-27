// circle.es6
console.log("Mounting circle.es6...");

const PI = 3.141592;

// SVG stroke-dasharray: "dash" and "gap" is nothing but circumference of the circle,
// SVG stroke-dashoffset is how much gap (segment) between each stroke,
// and it is used to show progress bar in the circle.

const circumference = radius => 2 * PI * radius; 

const C = 100;

export { PI, circumference };
// eof