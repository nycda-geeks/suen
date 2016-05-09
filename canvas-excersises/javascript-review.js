// write a function that takes in three parameters and returns the sum of those three parameters

function returnSum( x, y, z ) {
	return x + y + z
}

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

var string = "Hello friends"
var lastLetter = string.charAt(string.length-1)
console.log(lastLetter) // prints s

// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

function makeCube ( rib ) {
	return rib * rib * rib
}

// define a function that takes in a string and reverses it. 
// you are not allowed to call the "reverse" function (or any other string functions)

var boss = "boss"

function reverse ( string ) {
	var store = ""
	for (var string.length = 0; i > 0; i--) {
		store += substring(i-1,1)
	}
	return store
}

reverse(boss)


// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }
// var store = {};
// var keys = ['one', 'two', 'three']
// var values = ['a', 'b', 'c']

// for (var i = 0; i < keys.length; i++)
//     hash[keys[i]] = values[i];

// console.log(hash['one'])
// console.log(hash.two);

var keys = ['bikes', 'cars', 'mobiles']
var values = [ 5, 10, 6] 

function arraysToObject( array1, array2 ) {
	var store = {}

	for (var i = 0; i < array1.length; i++) {
		
		store[array1[i]] = array2[i]
	}
	return store
}
console.log( arraysToObject( keys, values ))
