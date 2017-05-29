export default function binarysearch(arr, target) {
  if( arr == null ){
    return "cannot seach null"
  }

  if( arr.constructor !== Array || typeof target !== 'number'){
    return "Please use an array or enter a valid number"
  }
  
  var min = 0;
  var max = arr.length - 1;
  var guess;

  while(min <= max) {
    guess = Math.floor((max + min) / 2);

    if (arr[guess] === target) {
      return guess;
    }
    else if (arr[guess] < target) {
      min = guess + 1;
    }
    else {
      max = guess - 1;
    }

  }

  return -1;
}
