var myMap  = new Map();
var mapObj = {}

myMap.set("1","TEST")

mapObj.set("1","TEST") // mapObj.set is not a function

console.log(myMap.keys()) //[Map Iterator] { '1' }

console.log(mapObj.keys()) // mapObj.keys is not a function
