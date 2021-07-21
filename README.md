# Lodash

- capstone project from the codecademy web development career path
- tests provided by codecademy
- abbreviated instructions below

In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.

## 1. Create Lodash Object

Before we get started implementing our new methods, we need to create an object to contain them. This object will represent our library containing all the functionality we add to it.

Create a new variable called \_ that is initialized to an empty object.

## 2. Implement .inRange()

Specify: The next number method we will implement is .inRange(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

## 3. Implement .words()

Specify: Let’s start implementing some string methods! The first string method we will implement is .words(). We will be writing a slightly modified version of this method to save you some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality you will implement.

Here is a summary of what your method should do:

- .words() takes one argument: a string
- .words() splits the string into an array of words
- A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next
- Note: You may have noticed in the documentation that this function has a pattern parameter. Your method does not need to accept the additional pattern parameter, we will only split our string into words based on spaces

## 4. Implement .pad()

Specify: The next string method we will implement is .pad(). We will be writing a slightly modified version of this method to save you some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality you will implement.

Here is a summary of what your method should do:

- .pad() takes two arguments: a string and a length
- .pad() adds spaces evenly to both sides of the string to make it reach the desired length
- Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length
- Your method does not need to accept the additional chars parameter; we will only add space characters to pad our string

## 5. Implement \_.has()

Specify: Let’s begin implementing some new object methods! The first object method we will implement is .has(). We will be writing a slightly modified version of this method to save you some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality you will implement.

Here is a summary of what your method should do:

- .has() takes two arguments: an object and a key
- .has() checks to see if the provided object contains a value at the specified key
- .has() will return true if the object contains a value at the key and will return false if not
- Your method does not need to accept the additional path parameter; we will only check for unnested values

## 6. Implement \_.invert()

Specify: The next object method we will implement is .invert(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

- .invert() takes one argument: an object
- .invert() iterates through each key / value pair in the provided object and swaps the key and value

## 7. Implement \_.findKey()

Specify: The final object method we will implement is .findKey(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

- .findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value
- .findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value
- .findKey() returns the first key that has a value that returns a truthy value from the predicate function
- .findKey() returns undefined if no values return truthy values from the predicate function

## 8. Implement \_.drop()

Specify: It’s time to start implementing methods for our final data type: arrays! The first array method we will implement is .drop(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

- .drop() takes two arguments: an array and a number representing the number of items to drop from the beginning of the array
- .drop() returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
- If the number of elements to drop is unspecified, your method should drop one element

## 9. Implement \_.dropWhile()

Specify: The next array method we will implement is .dropWhile(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

- .dropWhile() takes two arguments: an array and a predicate function
- The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
- .dropWhile() creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value

## 10. Implement \_.chunk()

Specify: The last array method we will implement is .chunk(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

- .chunk() takes two arguments: an array and a size
- .chunk() breaks up the supplied array into arrays of the specified size
- .chunk() returns an array containing all of the previously-created array chunks in the order of the original array
- If the array can’t be broken up evenly, the last chunk will be smaller than the specified size
- If no size is supplied to the method, the size is set to 1
