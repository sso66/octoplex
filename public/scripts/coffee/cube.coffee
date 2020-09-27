# cube.coffee

cube = (num) -> Math.pow num, 3
list = [1, 2, 3, 4, 5, 6]
cubeList = (cube num for num in list)

console.log index + ": " + num for index, num of cubeList