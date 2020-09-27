/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// cube.coffee

let num;
const cube = num => Math.pow(num, 3);
const list = [1, 2, 3, 4, 5, 6];

const cubeList = ((() => {
  const result = [];
  //for (num of Array.from(list)) {     
  for (num of list) {
  	result.push(cube(num));
  }
  return result;
})());

for (let index in cubeList) { 
	num = cubeList[index]; console.log(index + ": " + num); 
}