// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

//pseudo code

// declare a constant variable  and an array parameter for the shuffle action
// first, declare a variable that removes the first item by using .shift method
// use conditionals and a for loop for the new array with first item removed
// declare a random array and use Math.floor and .random to generate random numbers in array
// declare new array and let it equal array index
// set array index to equal an array with new random array indexed
// set the new random array index to equal the newly declared array
// return the array

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('arrShuffle', () => {
    const expected = ["yellow", "blue", "pink", "green"];
    test('matches even if received contains additional elements', () => {
      expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected));
    });
    test('does not match if received does not contain expected elements', () => {
      expect(["purple", "blue", "green", "yellow"]).not.toEqual(expect.arrayContaining(expected));
    });
  });

  describe('arrShuffle', () => {
    const expected = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];
    test('matches even if received contains additional elements', () => {
      expect(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.arrayContaining(expected));
    });
    test('does not match if received does not contain expected elements', () => {
      expect(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine"]).not.toEqual(expect.arrayContaining(expected));
    });
  });

//test passed using the expect.arrayContaining(array)
//will continue to create the funtion and run the test again





var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.

const arrShuffle = (arr) => {
    let removeFirst = arr.shift();
    for (i=arr.length - 1; i > 0; i--) {
      let randomArr = Math.floor(Math.random() * (i + 1));
      let newArr = arr[i];
      arr[i] = arr[randomArr];
      arr[randomArr] = newArr;
    }
    return arr
  }



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

//pseudo code

// declare a constant variable
// use the array perameter in the function action
// set a minimum and maximum variable to be equal to the array index at [0]
// use conditionals and a for loop with iteration
// if array item iterated in the for loop is less than the minimum number indexed at [0] from the minimum variable then set minimum to equal the array number iterated.  The for loop should continue iteration until parameter is true 
// if array item iterated in the for loop is greater than the maximum number indexed at [0] from the maximum variable then set maximum to equal the array number iterated.  The for loop should continue iteration until parameter is true 
// return an array of only [minimum, maximum]


// a) Create a test with expect statements for each of the variables provided.

describe('minMaxArray', () => {
    test('iterates through an array and identifies the minimum and maximum numbers in the array and only returns those two numbers in order from least to greatest', () => {
        expect(minMaxArray([3, 56, 90, -8, 0, 23, 6])).toEqual([-8, 90]) 
        expect(minMaxArray([109, 5, 9, 67, 8, 24])).toEqual([5, 109]) 
    })
})

//test failed
    //ReferenceError: minMaxArray is not defined
//rewriting code to define MinMaxArray, then running second test

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.

const minMaxArray = (arr) => {
    min = arr[0];
    max = arr[0];
      for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
      } else if (arr[i] > max) {
          max = arr[i];
      }
    }
    return [min, max]
}



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//pseudo code

// declare a constant variable
// set two arrays for the perameter in the function action (array1, array2)
// declare an array variable and set concatenation for the two arrays
// declare a new merged array as an array,[]
// use for..of statement with an indexof and push method to iterate through the array, merge the two arrays, and only return each uniqued number to be added to the array.
// return the declared new merged array

// a) Create a test with an expect statement using the variables provided.

describe('arrMerge', () => {
    test('merges two arrays and loops through the concatenated array and returns a new array without duplicate values', () => {
        expect(arrMerge([3, 7, 10, 5, 4, 3, 3],[7, 8, 2, 3, 1, 5, 4])).toEqual([3, 7, 10, 5, 4, 8, 2, 1]) 
    })
})

//test failed
    //ReferenceError: arrMerge is not defined
//rewriting code to define arrMerge, then running second test

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.

const arrMerge = (arr1, arr2) => {
    let arr = arr1.concat(arr2);
    let mergeArr = [];

    for(let i of arr) {
        if(mergeArr.indexOf(i) === -1) {
            mergeArr.push(i);
        }
    }
    return mergeArr;
  }
