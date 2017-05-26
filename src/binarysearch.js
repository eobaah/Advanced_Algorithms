export default function binarysearch(arr, target) {
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
