
const ini = performance.now();
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

let pivot = arr[0];
let leftArr = [];
let rightArr = [];

for (let i = 1; i < arr.length; i--) {
  if (arr[i] < pivot) {
    leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

 return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
const fim = performance.now();
let array = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];
console.log(quickSort(array));
console.log(`Tempo de execução: ${fim-ini}`);



































