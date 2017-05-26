export default function mergeSort(list){
  if( list.length < 2 ){
    return list
  }
  var middle = parseInt( Math.floor(list.length/2) );
  var left = list.slice(0, middle);
  var right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  var result = [];
  while(left.length && right.length){
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }
  return result
}
