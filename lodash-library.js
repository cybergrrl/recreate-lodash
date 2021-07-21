const _ = {
  clamp(num, lower, upper) {
    /*
      if (num < lower) { num = lower }
      else if (num > upper) { num = upper }
      return num
      */
    lowest = Math.max(num, lower);
    //highest = Math.min(num, upper)
    return Math.min(lowest, upper);
  },
  inRange(num, start, end) {
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    if (start > end) {
      temp = start;
      start = end;
      end = temp;
    }
    if (num < start || num >= end) {
      return false;
    } else {
      return true;
    }
  },
  words(myString) {
    return (myArray = myString.split(" "));
  },
  pad(myString, targetLength) {
    if (targetLength <= myString.length) {
      return myString;
    }
    let wholePadding = targetLength - myString.length;
    if (wholePadding % 2 === 0) {
      let paddedString =
        " ".repeat(wholePadding / 2) + myString + " ".repeat(wholePadding / 2);
      return paddedString;
    } else {
      let paddedString =
        " ".repeat(Math.floor(wholePadding / 2)) +
        myString +
        " ".repeat(1 + Math.floor(wholePadding / 2));
      return paddedString;
    }
  },
  has(myObject, myKey) {
    if (myObject[myKey]) {
      return true;
    } else {
      return false;
    }
  },
  invert(myObject) {
    let invertObject = {};
    for (let item in myObject) {
      let newVal = item;
      let newKey = myObject[item];
      invertObject[newKey] = newVal;
    }
    return invertObject;
  },
  findKey(myObject, predicate) {
    for (let key in myObject) {
      let value = myObject[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },

  drop(myArray, dropNum) {
    let newArray = [];
    if (dropNum === undefined) {
      dropNum = 1;
    }
    for (counter = dropNum; counter < myArray.length; counter++) {
      newArray.push(myArray[counter]);
    }
    return newArray;
  },
  dropWhile(myArray, predicate) {
    let dropNumber = myArray.findIndex(function (element, index, myArray) {
      return !predicate(element, index, myArray);
    });
    console.log(dropNumber);
    let droppedArray = this.drop(myArray, dropNumber);
    return droppedArray;
  },
  chunk(myArray, size) {
    //console.log(myArray)
    //let newArray = this.drop(myArray, 2);
    //console.log(newArray)
    if (size === undefined) {
      size = 1;
    }
    let chunkedArrays = [];
    while (myArray.length > size) {
      let oneChunk = [];
      for (let counter = 0; counter < size; counter++) {
        oneChunk.push(myArray[counter]);
      }
      chunkedArrays.push(oneChunk);
      myArray = this.drop(myArray, size);
    }
    chunkedArrays.push(myArray);
    return chunkedArrays;
  },
};

// Do not write or modify code below this line.
module.exports = _;
