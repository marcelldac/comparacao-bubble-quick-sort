var arr = [100, 76, 6, 52, 45, 8921, 24, 14, 54, 85, 143, 98, 65, 512, 96, 99, 4, 79];

function genRandomArray(size){
  const array = [];
  for (let i=0; i<size; i++){
    array.push(Math.floor(Math.random() * 1000));
  };
  return array;
}

function bubble_sort(arr){
  const ini = performance.now()
  console.log(ini)
  const end = performance.now()
  if (arr.length <= 1 || arr == undefined) {
    console.log("Error")
    return arr;
  }
  for (let j = 0; j < arr.length ; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i +1]) {
        let v1 = arr[i]
        let v2 = arr[i +1] 
        arr[i] = v2
        arr[i +1] = v1
      }
    }
  }
}
      
function quick_sort(arr){
  if (arr.length <= 1) {
    return arr;
  }      
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
        
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quick_sort(leftArr), pivot, ...quick_sort(rightArr)];
};

let array = genRandomArray(10);

console.log(bubble_sort(array));
console.log(quick_sort(array));