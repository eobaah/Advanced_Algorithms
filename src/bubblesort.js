export default function bubbleSort(arr) {
  if( arr === null ){
    return "cannot seach null"
  }

  if( arr.constructor !== Array){
    return "Please use an array"
  }

  let sorted;
  do {
    sorted = false;
    for( let index = 0; index < arr.length-1; index++ ){
      if( arr[index] > arr[index + 1]) {
        let storage = arr[index];
        arr[ index ] = arr[index + 1];
        arr[index + 1] = storage;
        sorted = true;
      }
    }
  } while(sorted)
  return arr
}
